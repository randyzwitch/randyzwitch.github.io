---
title: 'WordPress to Jekyll: A 30x Speedup'
date: '2016-10-10'
author: Randy Zwitch
layout: post
permalink: /wordpress-jekyll-30x-speedup/
description: I've always known that my WordPress blog on cheap web hosting was slow. I didn't realize I would see a 30x speedup by moving to Jekyll and GitHub Pages!
category: Analytics
tags:
- Julia
- Data Visualization
- ECharts
---

About a month ago, I switched this blog from WordPress hosted on Bluehost to Jekyll on GitHub Pages. I suspected moving to a static website would be faster than generated HTML via PHP, and it is certainly cheaper (GitHub Pages is "free"). But it wasn't until I needed a dataset for doing some dataset visualization development that I realize how much of an improvement it has been!

## Packages, Packages, Packages

With the release of v0.5 of Julia, I've been working (less) on updating my packages and making new packages (more), because making new stuff is more fun than maintaining old stuff! One of the packages I've been building is for the [ECharts visualization library](http://echarts.baidu.com/) (v3) from Baidu. While Julia doesn't necessarily need another visualization library, visualization is something I'm interested in and learning is easier when you're solving problems you like. And since the world doesn't need another Iris example, I decided to share some real world website performance data :)

## Line Chart

One of the first features I developed for [ECharts.jl](https://github.com/randyzwitch/ECharts.jl) was X-Y charts, which I posit is the most common chart type in business. One thing that is great about the underlying ECharts JavaScript library is that interactivity is really easy to achieve:

<div id="linep" style="height:400px;width:800px;"></div>
<script type="text/javascript">
    // Initialize after dom ready
    var myChart = echarts.init(document.getElementById("linep"));

    // Load data into the ECharts instance
    myChart.setOption({"xAxis":[{"scale":false,"gridIndex":0,"splitNumber":5,"minInterval":0,"silent":true,"data":["2016-06-20","2016-06-21","2016-06-22","2016-06-23","2016-06-24","2016-06-25","2016-06-26","2016-06-27","2016-06-28","2016-06-29","2016-06-30","2016-07-01","2016-07-02","2016-07-03","2016-07-04","2016-07-05","2016-07-06","2016-07-07","2016-07-08","2016-07-09","2016-07-10","2016-07-11","2016-07-12","2016-07-13","2016-07-14","2016-07-15","2016-07-16","2016-07-17","2016-07-18","2016-07-19","2016-07-20","2016-07-21","2016-07-22","2016-07-23","2016-07-24","2016-07-25","2016-07-26","2016-07-27","2016-07-28","2016-07-29","2016-07-30","2016-07-31","2016-08-01","2016-08-02","2016-08-03","2016-08-04","2016-08-05","2016-08-06","2016-08-07","2016-08-08","2016-08-09","2016-08-10","2016-08-11","2016-08-12","2016-08-13","2016-08-14","2016-08-15","2016-08-16","2016-08-17","2016-08-18","2016-08-19","2016-08-20","2016-08-21","2016-08-22","2016-08-23","2016-08-24","2016-08-25","2016-08-26","2016-08-27","2016-08-28","2016-08-29","2016-08-30","2016-08-31","2016-09-01","2016-09-02","2016-09-03","2016-09-04","2016-09-05","2016-09-06","2016-09-07","2016-09-08","2016-09-09","2016-09-10","2016-09-11","2016-09-12","2016-09-13","2016-09-14","2016-09-15","2016-09-16","2016-09-17","2016-09-18","2016-09-19","2016-09-20","2016-09-21","2016-09-22","2016-09-23","2016-09-24","2016-09-25","2016-09-26","2016-09-27","2016-09-28","2016-09-29","2016-09-30","2016-10-01","2016-10-02","2016-10-03","2016-10-04","2016-10-05","2016-10-06","2016-10-07"],"inverse":false,"type":"category","nameLocation":"middle","nameGap":30}],"yAxis":[{"scale":false,"gridIndex":0,"name":"Load time in ms","splitNumber":5,"minInterval":0,"silent":true,"inverse":false,"type":"value","nameLocation":"middle","nameGap":50}],"toolbox":{"feature":{"dataView":{"show":true,"title":"Data View","lang":["Data View","Cancel","Refresh"]},"restore":{"show":true,"title":"Restore"},"saveAsImage":{"show":true,"title":"Save As PNG"},"magicType":{"show":true,"title":{"line":"Line","bar":"Bar","tiled":"Tiled","chord":"Chord","stack":"Stack","pie":"Pie","force":"Force","funnel":"Funnel"},"type":["bar","line"]}},"itemSize":15,"orient":"vertical","height":"auto","zlevel":0,"z":2,"itemGap":20,"right":"auto","top":"center","width":"auto","show":true,"showTitle":true},"ec_width":800,"ec_height":400,"ec_charttype":"xy plot","color":["#2C3E50","#E74C3C","#ECF0F1","#3498DB","#2980B9"],"title":[{"left":"left","borderColor":"transparent","bottom":"auto","padding":5,"zlevel":0,"borderWidth":1,"target":"blank","z":2,"itemGap":5,"shadowOffsetY":0,"shadowOffsetX":0,"right":"auto","subtext":"Switching from WordPress on Bluehost to Jekyll on GitHub (2016/09/06)","top":"auto","subtarget":"blank","show":true,"text":"randyzwitch.com"}],"dataZoom":[{"show":true}],"series":[{"name":"loadtime_ms","data":[1282,1728,1047,1111,1027,643,757,1049,1201,1265,1617,1145,614,673,1023,1323,1117,1048,904,647,830,761,759,607,1141,1022,864,743,866,1328,1147,973,1178,1093,927,998,1195,1167,1023,1329,1051,929,1037,897,1197,1179,1402,1018,605,2261,2059,2383,2402,1385,2068,2290,2627,1862,2494,2753,1556,898,926,1158,1253,1403,655,497,544,526,503,575,545,628,467,518,568,513,386,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],"smooth":false,"minSize":"0%","type":"line","maxSize":"100%"},{"name":"post","data":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,386,629,533,453,279,193,83,45,40,46,44,29,34,46,36,29,32,40,35,32,47,43,36,38,36,26,35,35,35,32,40,33],"smooth":false,"minSize":"0%","type":"line","maxSize":"100%"}]});
</script>

{% highlight julia linenos %}
using ECharts, DataFrames

#Read in data
df = readtable("/assets/data/website_time_data.csv")

#Make data two different series that overlap, so endpoint touches
df[:pre] = [(x[1] <= "2016-09-06" ? x[2] : nothing) for x in zip(df[:date], df[:loadtime_ms])]
df[:post] = [(x[1] >= "2016-09-06" ? x[2] : nothing) for x in zip(df[:date], df[:loadtime_ms])]

#Graph code
l = line(df[:date], hcat(df[:pre], df[:post]))
l.ec_width = 800
seriesnames!(l, ["loadtime_ms", "post"])
colorscheme!(l, palette = ("acw", "FlatUI"))
yAxis!(l, name = "Load time in ms")
title!(l, text = "randyzwitch.com",
          subtext = "Switching from WordPress on Bluehost to Jekyll on GitHub (2016/09/06)")
toolbox!(l, chartTypes = ["bar", "line"])
slider!(l)
{% endhighlight %}

Even though I switched to Jekyll on WordPress on 9/6/2016, it appears that the page cache for Google Webmaster Tools didn't really expire until 9/12/2016 or so. At the average case, the load time went from 1128ms to 38ms! Of course, this isn't really a _fair_ comparison, as presumably GitHub Pages runs on much better hardware than the cheap Bluehost hosting I have, and I didn't reimplement most of the garbage I had on the WordPress version of the blog. But from a user-experience standpoint, good lord what an improvement!

## Box Plots

Want to test out further functionality, here are some box plots of the load time variation:

<div id="boxp" style="height:400px;width:800px;"></div>
<script type="text/javascript">
    // Initialize after dom ready
    var myChartp = echarts.init(document.getElementById("boxp"));

    // Load data into the ECharts instance
    myChartp.setOption({"xAxis":[{"splitNumber":5,"boundaryGap":true,"data":["WordPress","Jekyll"],"scale":false,"gridIndex":0,"minInterval":0,"inverse":false,"nameLocation":"middle","nameGap":30,"silent":true,"type":"category"}],"yAxis":[{"splitNumber":5,"scale":false,"gridIndex":0,"name":"Load time in ms","minInterval":0,"min":0,"inverse":false,"nameLocation":"middle","nameGap":50,"silent":true,"type":"value"}],"toolbox":{"feature":{"dataView":{"show":true,"title":"Data View","lang":["Data View","Cancel","Refresh"]},"restore":{"show":true,"title":"Restore"},"saveAsImage":{"show":true,"title":"Save As PNG"}},"itemSize":15,"orient":"vertical","height":"auto","zlevel":0,"z":2,"itemGap":20,"right":"auto","top":"center","width":"auto","show":true,"showTitle":true},"ec_width":800,"ec_height":400,"ec_charttype":"box","color":["#004358","#1F8A70","#BEDB39","#FFE11A","#FD7400"],"title":[{"left":"left","borderColor":"transparent","bottom":"auto","padding":5,"zlevel":0,"borderWidth":1,"target":"blank","z":2,"itemGap":5,"shadowOffsetY":0,"shadowOffsetX":0,"right":"auto","subtext":"Switching from WordPress on Bluehost to Jekyll on GitHub (2016/09/06)","top":"auto","subtarget":"blank","show":true,"text":"randyzwitch.com"}],"series":[{"name":"boxplot","data":[[-35.25,750.0,1037.0,1273.5,2058.75],[19.75,33.25,36.0,42.25,55.75]],"smooth":false,"minSize":"0%","type":"boxplot","maxSize":"100%"},{"name":"outliers","data":[["WordPress",2261.0],["WordPress",2059.0],["WordPress",2383.0],["WordPress",2402.0],["WordPress",2068.0],["WordPress",2290.0],["WordPress",2627.0],["WordPress",2494.0],["WordPress",2753.0],["Jekyll",83.0]],"smooth":false,"minSize":"0%","type":"scatter","maxSize":"100%"}]}
);
</script>

{% highlight julia linenos %}
using ECharts, DataFrames

#Read in data
df = readtable("/Users/randyzwitch/Desktop/website_load_time.csv")
df[:pre] = [(x[1] <= "2016-09-06" ? x[2] : nothing) for x in zip(df[:date], df[:loadtime_ms])]
df[:post] = [(x[1] >= "2016-09-12" ? x[2] : nothing) for x in zip(df[:date], df[:loadtime_ms])]

#Remove nulls
pre = [x for x in df[:pre] if x != nothing]
post = [x for x in df[:post] if x != nothing]

#Graph code
b = box([pre, post], names = ["WordPress", "Jekyll"])
b.ec_width = 800
colorscheme!(b, palette = ("acw", "VitaminC"))
yAxis!(b, name = "Load time in ms", nameGap = 50, min = 0)
title!(b, text = "randyzwitch.com",
           subtext = "Switching from WordPress on Bluehost to Jekyll on GitHub (2016/09/06)")
toolbox!(b)
{% endhighlight %}

Usually, a box plot comparison that is as smushed as the Jekyll plot vs the WordPress one would be a poor visualization, but in this case I think it actually works. The load time for the Jekyll version of this blog is so quick and so consistent that it barely registers as an outlier if it were WordPress! It's crazy to think that the `-1.5 * IQR` time for WordPress is the mean/median/min load time of Jekyll.

## Where To Go Next?
This blog post is really just an interesting finding from my experience moving to Jekyll on GitHub. As it stands now, ECharts.jl is stil in pre-METADATA mode. Right now, I assume that this would be a useful enough package to submit to METADATA some day, but I guess that depends on how much further I get smoothing the rough edges. If there are people who are interested in cleaning up this package further, I'd absolutely love to collaborate.
