---
title: A Beginner's Look at BenchmarkTools.jl
date: '2019-12-16'
author: Randy Zwitch
layout: post
permalink: /benchmarktools-julia-benchmarking/
description: Before you jump into benchmarking your Julia code, take a minute to read the manual and think about what is important to you to measure.
category: Programming
tags:
- OmniSci
- Julia

---

For the number of years I've been programming using Julia, I've never really been concerned with performance. Which is to say, I've appreciated that _other people_ are interested in performance and have proven that Julia can be as fast as any other performance language out there. But I've never been one to pour over the [Performance Tips](https://docs.julialang.org/en/v1/manual/performance-tips/) section of the Julia manual trying to squeeze every last bit of performance.

But now that I've released [OmniSci.jl](https://www.omnisci.com/blog/announcing-omnisci.jl-a-julia-client-for-omnisci), and as a company one of our major selling points is [accelerated analytics](https://www.omnisci.com/platform), I figured it was time to stop assuming I wrote decent-ish code and really pay attention to performance. This post highlights my experience as a beginner, and hopefully will show how others can get started in learning to optimize their Julia code.

## Read The Manuals!

As I mentioned above, I've written Julia for many years now, and in that time I've grown up with many of the tips in the performance tips section of the documentation. Things like ["write type stable functions"](https://docs.julialang.org/en/v1/manual/performance-tips/#Write-%22type-stable%22-functions-1) and ["avoid global variables"](https://docs.julialang.org/en/v1/manual/performance-tips/#Avoid-global-variables-1) are things that I've internalized as good programming practices, as opposed to doing them just because they are performant. But with this long familiarity with the language comes laziness, and by not reading the BenchmarkTools.jl documentation, I started off benchmarking incorrectly. Consider this example:

```julia
julia> using Random, OmniSci, BenchmarkTools, Base.Threads

julia> #change defaults, since examples long-running
       BenchmarkTools.DEFAULT_PARAMETERS.seconds = 1000
1000

julia> BenchmarkTools.DEFAULT_PARAMETERS.samples = 5
5

julia> #generate test data
       gendata(x, T) = [rand(typemin(T):typemax(T)) for y in 1:x]
gendata (generic function with 1 method)

julia> int64_10x6 = gendata(10^6, Int64);

julia> #Test whether broadcasting more/less efficient than pre-allocating results array
       function preallocate(x)

           v = Vector{OmniSci.TStringValue}(undef, length(x))

           for idx in 1:length(x)
               v[idx] = OmniSci.TStringValue(x[idx])
           end

           return v
       end
preallocate (generic function with 1 method)

julia> @benchmark v61 = OmniSci.TStringValue.(int64_10x6)
BenchmarkTools.Trial:
  memory estimate:  297.55 MiB
  allocs estimate:  6000005
  --------------
  minimum time:     750.146 ms (0.00% GC)
  median time:      1.014 s (29.38% GC)
  mean time:        1.151 s (28.38% GC)
  maximum time:     1.794 s (43.06% GC)
  --------------
  samples:          5
  evals/sample:     1

julia> @benchmark v62 = preallocate(int64_10x6)
BenchmarkTools.Trial:
  memory estimate:  297.55 MiB
  allocs estimate:  6000002
  --------------
  minimum time:     753.877 ms (0.00% GC)
  median time:      1.021 s (28.30% GC)
  mean time:        1.158 s (28.10% GC)
  maximum time:     1.806 s (43.17% GC)
  --------------
  samples:          5
  evals/sample:     1
```

The benchmark above tests whether it's worth [pre-allocating the results array](https://docs.julialang.org/en/v1/manual/performance-tips/#Pre-allocating-outputs-1) vs. using the more convenient [dot broadcasting syntax](https://docs.julialang.org/en/v1/manual/functions/#man-vectorized-1). The idea here is that growing an array over and over can be inefficient when you know the result size at the outset. Yet, comparing the times above, for all statistics pre-allocating the array is _slightly worse_, even though we're passing the compiler more knowledge up front. This didn't sit well with me, so I consulted the BenchmarkTools.jl manual and found the following about [variable interpolation](https://github.com/JuliaCI/BenchmarkTools.jl/blob/master/doc/manual.md#interpolating-values-into-benchmark-expressions):

> A good rule of thumb is that **external variables should be explicitly interpolated into the benchmark expression**

Interpolating the `int64_10x6` input array into the function takes it from being a global variable to a local, and sure enough, we see roughly a **6% improvement** in the minimum time when we pre-allocate the array:

```julia
julia> @benchmark v61i = OmniSci.TStringValue.($int64_10x6)
BenchmarkTools.Trial:
  memory estimate:  297.55 MiB
  allocs estimate:  6000002
  --------------
  minimum time:     763.817 ms (0.00% GC)
  median time:      960.446 ms (24.02% GC)
  mean time:        1.178 s (28.68% GC)
  maximum time:     1.886 s (45.11% GC)
  --------------
  samples:          5
  evals/sample:     1

julia> @benchmark v62i = preallocate($int64_10x6)
BenchmarkTools.Trial:
  memory estimate:  297.55 MiB
  allocs estimate:  6000002
  --------------
  minimum time:     721.597 ms (0.00% GC)
  median time:      1.072 s (30.45% GC)
  mean time:        1.234 s (32.92% GC)
  maximum time:     1.769 s (44.51% GC)
  --------------
  samples:          5
  evals/sample:     1
```

Whether that 6% improvement will hold up over time or not, at least conceptually we're no longer worse off for pre-allocating, which fits my mental model of how things should work.

## Evaluate Your Benchmark Over the Range of Inputs You Care About

In the comparison above, I evaluate the benchmark over `10^6` observations. How did I choose 1 million as the "right" number of events to test, instead of just testing 1 or 10 events? My general goal for benchmarking this code is to speed up the methods of loading data into an OmniSciDB database. `TStringValue` is one of the internal methods as part of doing a row-wise table load, converting whatever data is present in an array or DataFrame from `::Type{T}` into `String` (think iterating over a text file by line). Since users trying to accelerate their database operations are probably going to be using millions to billions of data points, I'm interested in understanding how the functions are performing at these volumes of data.

The other conscious decision I made was the environment to test on. I could test this on massive CPU- and GPU-enabled servers, but I'm testing this on my Dell XPS 15 laptop. Why?  Because I'm actually interested in how things are performing under more real-world conditions for a realistic user. Testing the performance characteristics of a high-end server with tons of memory and cores would be fun, but I want to make sure any performance improvements are broadly applicable, instead of just because I am throwing more hardware at the problem.

Less important to me to control for was garbage collection, using a fresh session before each measurement or other "best case scenario" optimizations. I would expect my users to be more analytics and data science focused, so re-using the same session is going to be common. If the performance improvements aren't completely obvious, I'm not going to incorporate them into the codebase.

## Case Study: Speeding Up `TStringValue`

For my test, I evaluate the following as the methods to benchmark:

- broadcasting: current library default
- pre-allocating result array
- pre-allocated result array with `@inbounds` macro
- pre-allocated result array with threads
- pre-allocated result array with threads and `@inbounds`

### 10x6 observations

<div id="ts_106" style="height:400px;width:950px;"></div>
<script type="text/javascript">

    // Initialize after dom ready
    var myChart = echarts.init(document.getElementById("ts_106"));

    // Load data into the ECharts instance
    myChart.setOption(
{"xAxis":[{"splitNumber":5,"axisLabel":{"show":true,"interval":"auto","rotate":0,"inside":false,"formatter":"{value}","margin":8},"data":["broadcast","pre-allocate","pre-allocate/inbounds","threads","threads/inbounds"],"scale":false,"gridIndex":0,"minInterval":0,"zlevel":0,"triggerEvent":false,"z":0,"inverse":false,"nameLocation":"middle","nameGap":30,"silent":true,"type":"category"}],"ec_charttype":"xy plot","series":[{"name":"Min","yAxisIndex":0,"xAxisIndex":0,"smooth":false,"data":[752.568,748.719,738.013,249.117,241.585],"markLine":{"data":[],"lineStyle":{}},"type":"bar"},{"name":"Median","yAxisIndex":0,"xAxisIndex":0,"smooth":false,"data":[990.071,988.012,967.184,253.161,246.792],"markLine":{"data":[],"lineStyle":{}},"type":"bar"}],"theme":{"geo":{"label":{"normal":{"textStyle":{"color":"#000000"}},"emphasis":{"textStyle":{"color":"rgb(100,0,0)"}}},"itemStyle":{"normal":{"borderColor":"#444444","borderWidth":0.5,"areaColor":"#eeeeee"},"emphasis":{"borderColor":"#444444","borderWidth":1,"areaColor":"rgba(255,215,0,0.8)"}}},"parallel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"markPoint":{"label":{"normal":{"textStyle":{"color":"#eeeeee"}},"emphasis":{"textStyle":{"color":"#eeeeee"}}}},"visualMap":{"color":["#e01f54","#e7dbc3"]},"funnel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"bar":{"itemStyle":{"normal":{"barBorderColor":"#ccc","barBorderWidth":0},"emphasis":{"barBorderColor":"#ccc","barBorderWidth":0}}},"map":{"label":{"normal":{"textStyle":{"color":"#000000"}},"emphasis":{"textStyle":{"color":"rgb(100,0,0)"}}},"itemStyle":{"normal":{"borderColor":"#444444","borderWidth":0.5,"areaColor":"#eeeeee"},"emphasis":{"borderColor":"#444444","borderWidth":1,"areaColor":"rgba(255,215,0,0.8)"}}},"scatter":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"pie":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"graph":{"label":{"normal":{"textStyle":{"color":"#eeeeee"}}},"symbolSize":4,"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"}},"smooth":false,"symbol":"emptyCircle","color":["#e01f54","#001852","#f5e8c8","#b8d2c7","#c6b38e","#a4d8c2","#f3d999","#d3758f","#dcc392","#2e4783","#82b6e9","#ff6347","#a092f1","#0a915d","#eaf889","#6699FF","#ff6666","#3cb371","#d5b158","#38b6b6"],"lineStyle":{"normal":{"color":"#aaaaaa","width":1}}},"backgroundColor":"rgba(0,0,0,0)","line":{"symbolSize":4,"itemStyle":{"normal":{"borderWidth":1}},"smooth":false,"symbol":"emptyCircle","lineStyle":{"normal":{"width":2}}},"candlestick":{"itemStyle":{"normal":{"borderColor0":"#b8d2c7","color":"#e01f54","borderColor":"#f5e8c8","borderWidth":1,"color0":"#001852"}}},"sankey":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"valueAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"toolbox":{"iconStyle":{"normal":{"borderColor":"#999999"},"emphasis":{"borderColor":"#666666"}}},"categoryAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":false,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"tooltip":{"axisPointer":{"crossStyle":{"color":"#cccccc","width":1},"lineStyle":{"color":"#cccccc","width":1}}},"timeline":{"label":{"normal":{"textStyle":{"color":"#293c55"}},"emphasis":{"textStyle":{"color":"#293c55"}}},"controlStyle":{"normal":{"color":"#293c55","borderColor":"#293c55","borderWidth":0.5},"emphasis":{"color":"#293c55","borderColor":"#293c55","borderWidth":0.5}},"checkpointStyle":{"color":"#e43c59","borderColor":"rgba(194,53,49,0.5)"},"itemStyle":{"normal":{"color":"#293c55","borderWidth":1},"emphasis":{"color":"#a9334c"}},"lineStyle":{"color":"#293c55","width":1}},"radar":{"symbolSize":4,"itemStyle":{"normal":{"borderWidth":1}},"smooth":false,"symbol":"emptyCircle","lineStyle":{"normal":{"width":2}}},"logAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"textStyle":{},"gauge":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"boxplot":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"color":["#e01f54","#001852","#f5e8c8","#b8d2c7","#c6b38e","#a4d8c2","#f3d999","#d3758f","#dcc392","#2e4783","#82b6e9","#ff6347","#a092f1","#0a915d","#eaf889","#6699FF","#ff6666","#3cb371","#d5b158","#38b6b6"],"title":{"textStyle":{"color":"#333333"},"subtextStyle":{"color":"#aaaaaa"}},"dataZoom":{"dataBackgroundColor":"rgba(47,69,84,0.3)","textStyle":{"color":"#333333"},"handleSize":"100%","handleColor":"#a7b7cc","fillerColor":"rgba(167,183,204,0.4)","backgroundColor":"rgba(47,69,84,0)"},"timeAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"legend":{"textStyle":{"color":"#333333"}}},"yAxis":[{"splitNumber":5,"axisLabel":{"show":true,"interval":"auto","rotate":0,"inside":false,"formatter":"{value}","margin":8},"scale":false,"gridIndex":0,"minInterval":0,"zlevel":0,"triggerEvent":false,"z":0,"inverse":false,"nameLocation":"middle","nameGap":50,"silent":true,"type":"value"}],"toolbox":{"feature":{},"orient":"vertical","itemSize":15,"height":"auto","zlevel":0,"z":2,"itemGap":20,"right":"auto","top":"center","width":"auto","show":false,"showTitle":true},"ec_width":1000,"ec_height":500,"tooltip":{"triggerOn":"mousemove","enterable":true,"borderColor":"#333","transitionDuration":0.4,"hideDelay":100,"padding":5,"showDelay":0,"borderWidth":0,"showContent":true,"backgroundColor":"rgba(50,50,50,0.7)","trigger":"item","alwaysShowContent":false,"confine":false,"show":true},"grid":[{"height":"auto","show":false,"width":"auto","backgroundColor":"transparent"}],"aria":{"show":true},"title":[{"left":"left","borderColor":"transparent","bottom":"auto","padding":5,"zlevel":0,"borderWidth":1,"target":"blank","z":2,"itemGap":5,"shadowOffsetY":0,"shadowOffsetX":0,"right":"auto","top":"auto","subtarget":"blank","show":true}],"ec_renderer":"canvas","legend":{"itemWidth":25,"data":["Min","Median"],"borderColor":"transparent","orient":"horizontal","bottom":"auto","height":"auto","zlevel":0,"padding":5,"borderWidth":1,"inactiveColor":"#ccc","z":2,"align":"auto","itemGap":10,"itemHeight":14,"backgroundColor":"transparent","shadowOffsetY":0,"shadowOffsetX":0,"right":"auto","top":"auto","width":"auto","selectedMode":true,"show":true}} );
</script>

For the first three on the left, these are comparisons of the single-threaded methods. You can see that pre-allocating the output array is marginally faster than broadcasting, and using the `@inbounds` macro is incrementally faster still, but neither method provides enough speedup to be worth implementing. The difference between the red and the blue bars represents a garbage collection occurring, but again, the three methods aren't different enough to notice anything interesting.

For the multi-threaded tests, I'm using 6 threads (one per physical core), and we're seeing roughly a **3x speedup**. Like the single-threaded tests above, using `@inbounds` is only marginally faster, but not enough to widely implement for the cost of increased code complexity. Interestingly, doing these multi-threaded benchmarks didn't trigger garbage collect _at all_ across my five iterations; not sure if this is specific due to threading or not, but something to explore outside of this blog post.

### 10x7 observations

To see how these calculation methods might change at a larger scale, I bumped up the observations by an order of 10 and saw the following results:

<div id="ts_108" style="height:400px;width:950px;"></div>
<script type="text/javascript">

    // Initialize after dom ready
    var myChart = echarts.init(document.getElementById("ts_108"));

    // Load data into the ECharts instance
    myChart.setOption(
{"xAxis":[{"splitNumber":5,"axisLabel":{"show":true,"interval":"auto","rotate":0,"inside":false,"formatter":"{value}","margin":8},"data":["broadcast","pre-allocate","pre-allocate/inbounds","threads","threads/inbounds"],"scale":false,"gridIndex":0,"minInterval":0,"zlevel":0,"triggerEvent":false,"z":0,"inverse":false,"nameLocation":"middle","nameGap":30,"silent":true,"type":"category"}],"ec_charttype":"xy plot","series":[{"name":"Min","yAxisIndex":0,"xAxisIndex":0,"smooth":false,"data":[26.316,27.064,26.219,2.717,2.641],"markLine":{"data":[],"lineStyle":{}},"type":"bar"},{"name":"Median","yAxisIndex":0,"xAxisIndex":0,"smooth":false,"data":[39.332,38.925,39.387,17.659,16.659],"markLine":{"data":[],"lineStyle":{}},"type":"bar"}],"theme":{"geo":{"label":{"normal":{"textStyle":{"color":"#000000"}},"emphasis":{"textStyle":{"color":"rgb(100,0,0)"}}},"itemStyle":{"normal":{"borderColor":"#444444","borderWidth":0.5,"areaColor":"#eeeeee"},"emphasis":{"borderColor":"#444444","borderWidth":1,"areaColor":"rgba(255,215,0,0.8)"}}},"parallel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"markPoint":{"label":{"normal":{"textStyle":{"color":"#eeeeee"}},"emphasis":{"textStyle":{"color":"#eeeeee"}}}},"visualMap":{"color":["#e01f54","#e7dbc3"]},"funnel":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"bar":{"itemStyle":{"normal":{"barBorderColor":"#ccc","barBorderWidth":0},"emphasis":{"barBorderColor":"#ccc","barBorderWidth":0}}},"map":{"label":{"normal":{"textStyle":{"color":"#000000"}},"emphasis":{"textStyle":{"color":"rgb(100,0,0)"}}},"itemStyle":{"normal":{"borderColor":"#444444","borderWidth":0.5,"areaColor":"#eeeeee"},"emphasis":{"borderColor":"#444444","borderWidth":1,"areaColor":"rgba(255,215,0,0.8)"}}},"scatter":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"pie":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"graph":{"label":{"normal":{"textStyle":{"color":"#eeeeee"}}},"symbolSize":4,"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"}},"smooth":false,"symbol":"emptyCircle","color":["#e01f54","#001852","#f5e8c8","#b8d2c7","#c6b38e","#a4d8c2","#f3d999","#d3758f","#dcc392","#2e4783","#82b6e9","#ff6347","#a092f1","#0a915d","#eaf889","#6699FF","#ff6666","#3cb371","#d5b158","#38b6b6"],"lineStyle":{"normal":{"color":"#aaaaaa","width":1}}},"backgroundColor":"rgba(0,0,0,0)","line":{"symbolSize":4,"itemStyle":{"normal":{"borderWidth":1}},"smooth":false,"symbol":"emptyCircle","lineStyle":{"normal":{"width":2}}},"candlestick":{"itemStyle":{"normal":{"borderColor0":"#b8d2c7","color":"#e01f54","borderColor":"#f5e8c8","borderWidth":1,"color0":"#001852"}}},"sankey":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"valueAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"toolbox":{"iconStyle":{"normal":{"borderColor":"#999999"},"emphasis":{"borderColor":"#666666"}}},"categoryAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":false,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"tooltip":{"axisPointer":{"crossStyle":{"color":"#cccccc","width":1},"lineStyle":{"color":"#cccccc","width":1}}},"timeline":{"label":{"normal":{"textStyle":{"color":"#293c55"}},"emphasis":{"textStyle":{"color":"#293c55"}}},"controlStyle":{"normal":{"color":"#293c55","borderColor":"#293c55","borderWidth":0.5},"emphasis":{"color":"#293c55","borderColor":"#293c55","borderWidth":0.5}},"checkpointStyle":{"color":"#e43c59","borderColor":"rgba(194,53,49,0.5)"},"itemStyle":{"normal":{"color":"#293c55","borderWidth":1},"emphasis":{"color":"#a9334c"}},"lineStyle":{"color":"#293c55","width":1}},"radar":{"symbolSize":4,"itemStyle":{"normal":{"borderWidth":1}},"smooth":false,"symbol":"emptyCircle","lineStyle":{"normal":{"width":2}}},"logAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"textStyle":{},"gauge":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"boxplot":{"itemStyle":{"normal":{"borderWidth":0,"borderColor":"#ccc"},"emphasis":{"borderWidth":0,"borderColor":"#ccc"}}},"color":["#e01f54","#001852","#f5e8c8","#b8d2c7","#c6b38e","#a4d8c2","#f3d999","#d3758f","#dcc392","#2e4783","#82b6e9","#ff6347","#a092f1","#0a915d","#eaf889","#6699FF","#ff6666","#3cb371","#d5b158","#38b6b6"],"title":{"textStyle":{"color":"#333333"},"subtextStyle":{"color":"#aaaaaa"}},"dataZoom":{"dataBackgroundColor":"rgba(47,69,84,0.3)","textStyle":{"color":"#333333"},"handleSize":"100%","handleColor":"#a7b7cc","fillerColor":"rgba(167,183,204,0.4)","backgroundColor":"rgba(47,69,84,0)"},"timeAxis":{"axisLine":{"show":true,"lineStyle":{"color":"#333"}},"axisLabel":{"textStyle":{"color":"#333"},"show":true},"splitLine":{"show":true,"lineStyle":{"color":["#ccc"]}},"splitArea":{"areaStyle":{"color":["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},"show":false},"axisTick":{"show":true,"lineStyle":{"color":"#333"}}},"legend":{"textStyle":{"color":"#333333"}}},"yAxis":[{"splitNumber":5,"axisLabel":{"show":true,"interval":"auto","rotate":0,"inside":false,"formatter":"{value}","margin":8},"scale":false,"gridIndex":0,"minInterval":0,"zlevel":0,"triggerEvent":false,"z":0,"inverse":false,"nameLocation":"middle","nameGap":50,"silent":true,"type":"value"}],"toolbox":{"feature":{},"orient":"vertical","itemSize":15,"height":"auto","zlevel":0,"z":2,"itemGap":20,"right":"auto","top":"center","width":"auto","show":false,"showTitle":true},"ec_width":1000,"ec_height":500,"tooltip":{"triggerOn":"mousemove","enterable":true,"borderColor":"#333","transitionDuration":0.4,"hideDelay":100,"padding":5,"showDelay":0,"borderWidth":0,"showContent":true,"backgroundColor":"rgba(50,50,50,0.7)","trigger":"item","alwaysShowContent":false,"confine":false,"show":true},"grid":[{"height":"auto","show":false,"width":"auto","backgroundColor":"transparent"}],"aria":{"show":true},"color":["#10222B","#95AB63","#BDD684","#E2F0D6","#F6FFE0"],"title":[{"left":"left","borderColor":"transparent","bottom":"auto","padding":5,"zlevel":0,"borderWidth":1,"target":"blank","z":2,"itemGap":5,"shadowOffsetY":0,"shadowOffsetX":0,"right":"auto","top":"auto","subtarget":"blank","show":true}],"ec_renderer":"canvas","legend":{"itemWidth":25,"data":["Min","Median"],"borderColor":"transparent","orient":"horizontal","bottom":"auto","height":"auto","zlevel":0,"padding":5,"borderWidth":1,"inactiveColor":"#ccc","z":2,"align":"auto","itemGap":10,"itemHeight":14,"backgroundColor":"transparent","shadowOffsetY":0,"shadowOffsetX":0,"right":"auto","top":"auto","width":"auto","selectedMode":true,"show":true}});
</script>

Like at the 1 million data range, there isn't much difference between the three single-threaded methods. All three of them are within a few percentage in either direction (all three methods triggered garbage collection in each of their five runs).

For the multi-threaded tests, an interesting performance scenario emerged. Like the 1 million point tests, it's possible to get a run where garbage collection isn't triggered, which leads to a large min/median difference in the multi-threaded tests. If you can avoid garbage collection, using six threads here gives nearly a **10x speedup**, and at the median where both single-threaded and multi-threaded trigger garbage collection you still get a **2x speedup**.

## Parallelism > Compiler Hinting

In the case study above, I've demonstrated that for this problem, threading is the first way to pursue speeding up the OmniSci.jl load table methods. While pre-allocating the size of the output array and using the `@inbounds` did show some slight speedups, using threads to perform the calculations are where the largest improvements occurred. Incorporating the pre-allocation step naturally comes out from the way I wrote the threading methods, so I'll incorporate that too. Disabling bounds-checking on arrays using `@inbounds` seems more dangerous than it is worth, even though none of these methods should ever get outside of their bounds.

Overall, I hope this post has demonstrated that you don't have to fancy yourself a high-frequency trader or a bit-twiddler to find ways to improve your Julia code. The first step is reading the manuals for benchmarking, and then like any other pursuit, the only way to get a feeling for what works is to try things.

<br>

_All of the code for this blog post can be found in this [GitHub gist](https://gist.github.com/randyzwitch/dbe9ce13aa819a1306d62610bb58b173)_
