---
id: 3465
title: 'Vega.jl Rebooted &#8211; Now with 100% More Pie and Donut Charts!'
date: 2015-05-21T12:56:07+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3465
permalink: /vega-jl-julia/
tweetbackscheck:
  - 1472934567
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3465";s:7:"tinyurl";s:26:"http://tinyurl.com/l9pcqd4";s:4:"isgd";s:19:"http://is.gd/yHoCJO";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Chartjunk
  - d3.js
  - Data Visualization
  - Julia
  - Python
  - R
  - Vega
---
[<img class=" size-medium wp-image-3466 alignleft" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/05/pie-300x251.png?fit=300%2C251" alt="pie" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/05/pie.png?resize=300%2C251 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/05/pie.png?resize=150%2C125 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/05/pie.png?w=610 610w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/05/pie.png)[<img class=" size-full wp-image-3467 alignright" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/05/donut-e1432224478621.png?fit=294%2C251" alt="donut" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/05/donut-e1432224478621.png)

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

<p style="text-align: center;">
  Mmmmm, chartjunk!
</p>

## 

### Rebooting Vega.jl

Recently, I&#8217;ve found myself without a project to hack on, and I&#8217;ve always been interested in learning more about browser-based visualization. So I decided to revive the work that <a href="https://github.com/johnmyleswhite" target="_blank">John Myles White</a> had done in building [Vega.jl](https://github.com/johnmyleswhite/Vega.jl) nearly two years ago. And since I&#8217;ll be giving an analytics & visualization workshop at <a href="http://juliacon.org/" target="_blank">JuliaCon 2015</a>, I figure I better study the topic in a bit more depth.

### Back In Working Order!

The first thing I tackled here was to upgrade the syntax to target v0.4 of Julia. This is just my developer preference, to avoid using <a href="https://github.com/JuliaLang/Compat.jl" target="_blank">Compat.jl</a> when there are so many more visualizations I&#8217;d like to support. So if you&#8217;re using v0.4, you shouldn&#8217;t see any deprecation errors; if you&#8217;re using v0.3, well, eventually you&#8217;ll use v0.4!

Additionally, I modified the package to recognize the traction that Jupyter Notebook has gained in the community. Whereas the original version of Vega.jl only displayed output in a tab in a browser, I&#8217;ve overloaded the _writemime_ method to display _:VegaVisualization_ inline for any environment that can display HTML. If you use Vega.jl from the REPL, you&#8217;ll still get the same default browser-opening behavior as existed before.

### The First Visualization You Added Was A Pie Chart&#8230;

### &#8230;And Followed With a Donut Chart?

Yup. I&#8217;m a troll like that. Besides, being loudly against pie charts is blowhardy (even if studies have shown that people are too stupid to evaluate them).

Adding these two charts (besides trolling) was a proof-of-concept that I understood the codebase sufficiently in order to extend the package. Now that the syntax is working for Julia v0.4, I understand how the package works (important!), and have improved the workflow by supporting Jupyter Notebook, I plan to create all of the visualizations featured in the <a href="http://trifacta.github.io/vega/editor/" target="_blank">Trifacta Vega Editor</a> and other standard visualizations such as boxplots. If the community has requests for the order of implementation, I&#8217;ll try and accommodate them. Just add a feature request on <a href="https://github.com/johnmyleswhite/Vega.jl/issues" target="_blank">Vega.jl GitHub issues</a>.


  


### Why Not Gadfly? You&#8217;re Not Starting A Language War, Are You?

No, I&#8217;m not that big of a troll. Besides, I don&#8217;t think we&#8217;ve squeezed all the juice (blood?!) out of the <a href="http://blog.datacamp.com/r-or-python-for-data-analysis/" target="_blank">R vs. Python infographic</a> yet, we don&#8217;t need another pointless debate.

My sole reason for not improving <a href="http://dcjones.github.io/Gadfly.jl/" target="_blank">Gadfly</a> is just that I plain don&#8217;t understand how the codebase works! There are many amazing computer scientists & developers in the Julia community, and I&#8217;m not really one of them. I do, however, understand how to generate JSON strings and in that sense, Vega is the perfect platform for me to contribute.

### Collaborators Wanted!

If you&#8217;re interested in visualization, as well as learning Julia and/or contributing to a package, Vega.jl might be a good place to start. I&#8217;m always up for collaborating with people, and creating new visualizations isn&#8217;t that difficult (especially with the Trifacta examples). So hopefully some of you will be interested in enough to join me to adding one more great visualization library to the Julia community.