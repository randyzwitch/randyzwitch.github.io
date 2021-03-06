---
title: 'Parallelizing Distance Calculations Using A GPU With CUDAnative.jl'
date: '2017-08-14'
author: Randy Zwitch
layout: post
permalink: /cudanative-jl-julia/
description: Using CUDAnative.jl, you can access the power of GPU parallelization while still writing high-level Julia code. It's not unreasonable to get speedups of 20x or more through GPU parallelization.
category: DataScience
tags:
- Julia
- Data Visualization
- ECharts
- CUDA
- GPU
---
Hacker News discussion: [link](https://news.ycombinator.com/item?id=15021244)

[Code as Julia Jupyter Notebook](http://randyzwitch.com/notebooks/cudanative_haversine_julia_example.ipynb)

Julia has the reputation as a "fast" language in that it's possible to write high-performing code. However, what I appreciate most about Julia is not just that the code is fast, but rather that Julia makes high-performance concepts _accessible_ without having to have a deep computer science or compiled language background (neither of which I possess!)

For version 0.6 of Julia, another milestone has been reached in the "accessible" high-performance category: the ability to [run Julia code natively on NVIDIA GPUs](https://julialang.org/blog/2017/03/cudanative) through the [CUDAnative.jl](https://github.com/JuliaGPU/CUDAnative.jl) package. While CUDAnative.jl is still very much in its development stages, the package is already far-enough along that within a few hours, as a complete beginner to GPU programming, I was able to see in excess of 20x speedups for my toy example to calculate haversine distance.  

## Getting Started

The [CUDAnative.jl introduction blog post](https://julialang.org/blog/2017/03/cudanative) and [documentation](http://juliagpu.github.io/CUDAnative.jl/stable/#Installation-1) cover the installation process in-depth, so I won't repeat the details here. I'm already a regular compile-from-source Julia user and I found the installation process pretty easy on my [CUDA-enabled Ubuntu workstation](http://randyzwitch.com/building-data-science-workstation-2017/). If you can already do TensorFlow, Keras or other GPU tutorials on your computer, getting CUDAnative.jl to work shouldn't take more than 10-15 minutes.

## Julia CPU Implementation

To get a feel for what sort of speedup I could expect from using a GPU, I wrote a naive implementation of a distance matrix calculation in Julia:

{% highlight julia linenos %}
#https://github.com/quinnj/Rosetta-Julia/blob/master/src/Haversine.jl
haversine(lat1::Float32,lon1::Float32,lat2::Float32,lon2::Float32) = 2 * 6372.8 * asin(sqrt(sind((lat2-lat1)/2)^2 + cosd(lat1) * cosd(lat2) * sind((lon2 - lon1)/2)^2))

function pairwise_dist(lat::Vector{Float32}, lon::Vector{Float32})

    #Pre-allocate, since size is known
    n = length(lat)
    result = Array{Float32}(n, n)

    #Brute force fill in each cell, ignore that distance [i,j] = distance [j,i]
    for i in 1:n
        for j in 1:n
            @inbounds result[i, j] = haversine(lat[i], lon[i], lat[j], lon[j])
        end
    end

    return result

end

#Example benchmark call
lat10000 = rand(Float32, 10000) .* 45
lon10000 = rand(Float32, 10000) .* -120
@time native_julia_cellwise = pairwise_dist(lat10000, lon10000)
{% endhighlight %}

The above code takes a pair of lat/lon values, then calculates the [haversine distance](https://rosettacode.org/wiki/Haversine_formula) between the two points. This algorithm is naive in that a distance matrix is symmetric (i.e. the distance between A to B is the same from B to A), so I could've done half the work by setting `result[i,j]` and `result[j,i]` to the same value, but as a measure of work for a benchmark this toy example is fine. Also note that this implementation runs on a single core, no CPU-core-level parallelization has been implemented.

Or to put all that another way: if someone wanted to tackle this problem without thinking very hard, the implementation might look like this.

## CUDAnative.jl Implementation

There are two parts to the CUDAnative.jl implementation: the kernel (i.e. the actual calculation) and the boilerplate code for coordinating the writing to/from the CPU and GPU.

#### Kernel Code

The kernel code has similarities to the CPU implementation, with a few key differences:

* Method signature is one lat/lon point vs. the lat/lon vectors, rather than a pairwise distance calculation
* Boilerplate code for thread index on the GPU (0-indexed vs. normal Julia 1-indexing)
* The trigonometric functions need to be prepended with `CUDAnative.`, to differentiate that the GPU functions aren't the same as the functions from Base Julia
* Rather than return an array as part of the function return, we use the `out` keyword argument to write directly to the GPU memory

{% highlight julia linenos %}
using CUDAnative, CUDAdrv

#Calculate one point vs. all other points simultaneously
function kernel_haversine(latpoint::Float32, lonpoint::Float32, lat::AbstractVector{Float32}, lon::AbstractVector{Float32}, out::AbstractVector{Float32})

    #Thread index
    #Need to do the n-1 dance, since CUDA expects 0 and Julia does 1-indexing
    i = (blockIdx().x-1) * blockDim().x + threadIdx().x

    out[i] =  2 * 6372.8 * CUDAnative.asin(CUDAnative.sqrt(CUDAnative.sind((latpoint-lat[i])/2)^2 + CUDAnative.cosd(lat[i]) * CUDAnative.cosd(latpoint) * CUDAnative.sind((lonpoint - lon[i])/2)^2))

    #Return nothing, since we're writing directly to the out array allocated on GPU
    return nothing
end
{% endhighlight %}


#### Coordination Code

The coordination code is similar to what you might see in a `main()` function in C or Java, where the kernel is applied to the input data. I am using the `dev` keyword with the default value of `CuDevice(0)` to indicate that the code should be run on the first (in my case, only) GPU device.

The remainder of the code has comments on its purpose, primarily:

* Transfer Julia CPU arrays to GPU arrays (`CuArray`)
* Set number of threads/blocks
* Calculate distance between a point and all other points in the array, write back to CPU

{% highlight julia linenos %}
#validated kernel_haversine/distmat returns same answer as CPU haversine method (not shown)
function distmat(lat::Vector{Float32}, lon::Vector{Float32}; dev::CuDevice=CuDevice(0))

    #Create a context
    ctx = CuContext(dev)

    #Change to objects with CUDA context
    n = length(lat)
    d_lat = CuArray(lat)
    d_lon = CuArray(lon)
    d_out = CuArray(Vector{Float32}(n))

    #Calculate number of calculations, threads, blocks
    len = n
    threads = min(len, 1024)
    blocks = Int(ceil(len/threads))

    #Julia side accumulation of results to relieve GPU memory pressure
    accum = Array{Float32}(n, n)

    # run and time the test
    secs = CUDAdrv.@elapsed begin
        for i in 1:n
            @cuda (blocks, threads) kernel_haversine(lat[i], lon[i], d_lat, d_lon, d_out)
            accum[:, i] = Vector{Float32}(d_out)
        end
    end

    #Clean up context
    destroy!(ctx)

    #Return timing and bring results back to Julia
    return (secs, accum)

end

#Example benchmark call
timing, result = distmat(lat10000, lon10000)
result ≈ native_julia_cellwise #validate results equivalent CPU and GPU
{% endhighlight %}

The code is written to process one row of the distance matrix at a time to minimize GPU memory usage. By writing out the results to the CPU after each loop iteration, I have `n-1` extra CPU transfers, which is less performant than calculating all the distances first then transferring, but my consumer-grade GPU with 6GB of RAM would run out of GPU memory before completing the calculation otherwise.

## Performance

The performance characteristics of the CPU and GPU calculations are below for various sizes of distance matrices. Having not done any GPU calculations before, I was surprised to see how much of a penalty there is writing back and forth to the GPU. As you can see from the navy-blue line, the execution time is fixed for matrices of size 1 to 1000, representing the fixed cost of moving the data from the CPU to the GPU.

Of course, once we get above 1000x1000 matrices, the GPU really starts to shine. Due to the log scale, it's a bit hard to see the magnitude differences, but at 100000x100000 there is a **23x** reduction in execution time (565.008s CPU vs. 24.32s GPU).

<div id="linep" style="height:400px;width:800px;"></div>
<script type="text/javascript">
    // Initialize after dom ready
    var myChart = echarts.init(document.getElementById("linep"));

    // Load data into the ECharts instance
    myChart.setOption(
{"xAxis":[{"splitNumber":5,"axisLine":{"show":false,"onZero":true,"lineStyle":{"normal":{},"emphasis":{}}},"axisLabel":{"show":true,"interval":"auto","rotate":0,"inside":false,"formatter":"{value}","margin":8},"scale":true,"gridIndex":0,"name":"Matrix dimensions (square)","minInterval":0,"zlevel":0,"triggerEvent":false,"z":0,"splitLine":{"show":false,"interval":"auto","lineStyle":{"normal":{},"emphasis":{}}},"inverse":false,"nameLocation":"middle","nameGap":30,"silent":true,"type":"log"}],"ec_charttype":"xy plot","series":[{"name":"CPU","yAxisIndex":0,"xAxisIndex":0,"smooth":true,"data":[[1.0,6.0e-6],[10.0,1.7e-5],[100.0,0.001091],[1000.0,0.090409],[10000.0,5.620437],[100000.0,565.008425]],"markLine":{"data":[],"lineStyle":{"normal":{},"emphasis":{}}},"large":true,"type":"line","largeThreshold":2000},{"name":"GPU","yAxisIndex":0,"xAxisIndex":0,"smooth":true,"data":[[1.0,0.14232168],[10.0,0.15084915],[100.0,0.15897949],[1000.0,0.16998644],[10000.0,0.6376571],[100000.0,24.32015]],"markLine":{"data":[],"lineStyle":{"normal":{},"emphasis":{}}},"large":true,"type":"line","largeThreshold":2000}],"theme":{"geo":{"label":{"normal":{"textStyle":{"color":"#000000"}},"emphasis":{"textStyle":{"color":"rgb(100,0,0)"}}},"itemStyle":{"normal":{"borderColor":"#444444","borderWidth":0.5,"areaColor":"#eeeeee"},"emphasis":{"borderColor":"#444444","borderWidth":1,"areaColor":"rgba(255,215,0,0.8)"}}},"parallel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"markPoint":{"label":{"normal":{"textStyle":{"color":"#eeeeee"}},"emphasis":{"textStyle":{"color":"#eeeeee"}}}},"visualMap":{"color":["#e01f54","#e7dbc3"]},"funnel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"bar":{"itemStyle":{"normal":{"barBorderColor":"#ccc","barBorderWidth":0},"emphasis":{"barBorderColor":"#ccc","barBorderWidth":0}}},"map":{"label":{"normal":{"textStyle":{"color":"#000000"}},"emphasis":{"textStyle":{"color":"rgb(100,0,0)"}}},"itemStyle":{"normal":{"borderColor":"#444444","borderWidth":0.5,"areaColor":"#eeeeee"},"emphasis":{"borderColor":"#444444","borderWidth":1,"areaColor":"rgba(255,215,0,0.8)"}}},"scatter":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"pie":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"graph":{"label":{"normal":{"textStyle":{"color":"#eeeeee"}}},"symbolSize":4,"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"}},"smooth":false,"symbol":"emptyCircle","color":["#e01f54","#001852","#f5e8c8","#b8d2c7","#c6b38e","#a4d8c2","#f3d999","#d3758f","#dcc392","#2e4783","#82b6e9","#ff6347","#a092f1","#0a915d","#eaf889","#6699FF","#ff6666","#3cb371","#d5b158","#38b6b6"],"lineStyle":{"normal":{"color":"#aaaaaa","width":1}}},"backgroundColor":"rgba(0,0,0,0)","line":{"symbolSize":4,"itemStyle":{"normal":{"borderWidth":1}},"smooth":false,"symbol":"emptyCircle","lineStyle":{"normal":{"width":2}}},"candlestick":{"itemStyle":{"normal":{"borderColor0":"#b8d2c7","color":"#e01f54","borderColor":"#f5e8c8","borderWidth":1,"color0":"#001852"}}},"sankey":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"valueAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"toolbox":{"iconStyle":{"normal":{"borderColor":"#999999"},"emphasis":{"borderColor":"#666666"}}},"categoryAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":false,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"tooltip":{"axisPointer":{"crossStyle":{"color":"#cccccc","width":1},"lineStyle":{"color":"#cccccc","width":1}}},"timeline":{"label":{"normal":{"textStyle":{"color":"#293c55"}},"emphasis":{"textStyle":{"color":"#293c55"}}},"controlStyle":{"normal":{"color":"#293c55","borderColor":"#293c55","borderWidth":0.5},"emphasis":{"color":"#293c55","borderColor":"#293c55","borderWidth":0.5}},"checkpointStyle":{"color":"#e43c59","borderColor":"rgba(194,53,49,0.5)"},"itemStyle":{"normal":{"color":"#293c55","borderWidth":1},"emphasis":{"color":"#a9334c"}},"lineStyle":{"color":"#293c55","width":1}},"radar":{"symbolSize":4,"itemStyle":{"normal":{"borderWidth":1}},"smooth":false,"symbol":"emptyCircle","lineStyle":{"normal":{"width":2}}},"logAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"textStyle":{},"gauge":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"boxplot":{"itemStyle":{"normal":{"borderWidth":1},"emphasis":{"borderWidth":2}}},"color":["#e01f54","#001852","#f5e8c8","#b8d2c7","#c6b38e","#a4d8c2","#f3d999","#d3758f","#dcc392","#2e4783","#82b6e9","#ff6347","#a092f1","#0a915d","#eaf889","#6699FF","#ff6666","#3cb371","#d5b158","#38b6b6"],"title":{"textStyle":{"color":"#333333"},"subtextStyle":{"color":"#aaaaaa"}},"dataZoom":{"dataBackgroundColor":"rgba(47,69,84,0.3)","textStyle":{"color":"#333333"},"handleSize":"100%","handleColor":"#a7b7cc","fillerColor":"rgba(167,183,204,0.4)","backgroundColor":"rgba(47,69,84,0)"},"timeAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"legend":{"textStyle":{"color":"#333333"}}},"yAxis":[{"splitNumber":5,"axisLine":{"show":false,"onZero":true,"lineStyle":{"normal":{},"emphasis":{}}},"axisLabel":{"show":true,"interval":"auto","rotate":0,"inside":false,"formatter":"{value}","margin":8},"scale":true,"gridIndex":0,"name":"Time in seconds","minInterval":0,"zlevel":0,"triggerEvent":false,"z":0,"inverse":false,"nameLocation":"middle","nameGap":50,"silent":true,"type":"log"}],"toolbox":{"feature":{},"orient":"vertical","itemSize":15,"height":"auto","zlevel":0,"z":2,"itemGap":20,"right":"auto","top":"center","width":"auto","show":false,"showTitle":true},"ec_width":800,"ec_height":400,"grid":[{"height":"auto","show":false,"width":"auto","backgroundColor":"transparent"}],"title":[{"left":"center","borderColor":"transparent","bottom":"auto","padding":5,"zlevel":0,"borderWidth":1,"target":"blank","z":2,"itemGap":5,"shadowOffsetY":0,"shadowOffsetX":0,"right":"auto","top":"auto","subtarget":"blank","textStyle":{"fontFamily":"sans-serif","fontStyle":"normal","color":"#000","fontSize":14,"fontWeight":"normal"},"show":true,"text":"Haversine distance: CPU vs. GPU"}],"legend":{"itemWidth":25,"data":["CPU","GPU"],"borderColor":"transparent","orient":"horizontal","bottom":"auto","height":"auto","zlevel":0,"padding":5,"borderWidth":1,"inactiveColor":"#ccc","z":2,"align":"auto","itemGap":10,"itemHeight":14,"backgroundColor":"transparent","shadowOffsetY":0,"shadowOffsetX":0,"right":"right","top":"middle","width":"auto","selectedMode":true,"show":true}}
);
</script>

## What I Learned

There are myriad things I learned from this project, but most important is that GPGPU processing can be accessible for people like myself without a CS background. Julia isn't the first high-level language to provide CUDA functionality, but the fact that the code is so similar to native Julia makes GPU computing something I can include in my toolbox _today_.

Over time, I'm sure I'll get better results as I learn more about CUDA, as CUDAnative.jl continues to smooth out the rough edges, etc. But the fact that as a beginner that I could achieve such large speedups in just an hour or two of coding and sparse CUDAnative.jl documentation bodes well for the future of GPU computing in Julia.

[Code as Julia Jupyter Notebook](http://randyzwitch.com/notebooks/cudanative_haversine_julia_example.ipynb)
