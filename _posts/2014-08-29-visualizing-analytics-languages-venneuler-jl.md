---
title: Visualizing Analytics Languages With VennEuler.jl
date: 2014-08-29T15:16:24+00:00
author: Randy Zwitch
layout: post
permalink: /visualizing-analytics-languages-venneuler-jl/
category: DataScience
tags:
  - Data Visualization
  - Julia
---
It often doesn't take much to get me off track, and on a holiday weekend...well, I was just begging for a fun way to shirk. Enter Harlan Harris:

<blockquote class="twitter-tweet" data-cards="hidden" data-partner="tweetdeck">
  <p>
    someone redo this area-prop'l Venn w/ my Julia pkg! <a href="http://t.co/Mh8rXZbRgY">http://t.co/Mh8rXZbRgY</a> <a href="http://t.co/RDWNQHTw3S">http://t.co/RDWNQHTw3S</a> <a href="http://t.co/ljujd9DG0T">http://t.co/ljujd9DG0T</a> via <a href="https://twitter.com/revodavid">@revodavid</a>
  </p>

  <p>
    — Harlan Harris (@HarlanH) <a href="https://twitter.com/HarlanH/statuses/505365468363100160">August 29, 2014</a>
  </p>
</blockquote>

Hey, I'm someone looking for something to do! And I like writing Julia code! So let's have a look at recreating this diagram in Julia using VennEuler.jl (<a title="VennEuler.jl example" href="http://nbviewer.ipython.org/gist/randyzwitch/860e1d9ae5a12cb61b1b" target="_blank">IJulia Notebook link</a>):

<div style="width: 490px" class="wp-caption alignnone">
  <img src="http://revolution-computing.typepad.com/.a/6a010534b1db25970b01a73e0af9c7970d-800wi" alt="" width="480" height="427" />

  <p class="wp-caption-text">
    Source: Revolution R/KDNuggets
  </p>
</div>

<a href="http://blog.revolutionanalytics.com/2014/08/r-tops-kdnuggets-data-analysis-software-poll-for-4th-consecutive-year.html" target="_blank">http://blog.revolutionanalytics.com/2014/08/r-tops-kdnuggets-data-analysis-software-poll-for-4th-consecutive-year.html</a>

## Installing VennEuler.jl

Because VennEuler.jl is not in METADATA as of the time of writing, instead of using Pkg.add() you'll need to run:

{% highlight julia linenos %}
Pkg.clone("https://github.com/HarlanH/VennEuler.jl.git")
{% endhighlight %}

Note that VennEuler uses some of the more exotic packages (at least to me) like NLopt and Cairo, so you might need to have a few additional dependencies installed with the package.

## Data

The data was a bit confusing to me at first, since the percentages add up to more than 100% (people could vote multiple times). In order to create a dataset to use, I took the percentages, multiplied by 1000, then re-created the voting pattern. The data for the graph can be downloaded from <a title="Dataset" href="http://randyzwitch.com/wp-content/uploads/2014/08/kdnuggets_language_survey_2014.csv" target="_blank">this link</a>.

## Code - Circles

With a few modifications, I basically re-purposed Harlan's code from the [package test files](https://github.com/HarlanH/VennEuler.jl/blob/master/test/DC2.jl). The circle result is as follows:

{% highlight julia linenos %}
using VennEuler

data, labels = readcsv("/home/rzwitch/Desktop/kdnuggets_language_survey_2014.csv", header=true)
data = bool(data)
labels = vec(labels)

#Circles
eo = make_euler_object(labels, data, EulerSpec()) # circles, for now

(minf,minx,ret) = optimize(eo, random_state(eo), ftol=-1, xtol=0.0025, maxtime=120, pop=1000)
println("got $minf at $minx (returned $ret)")

render("/home/rzwitch/Desktop/kd.svg", eo, minx)
{% endhighlight %}

![venneulercircles](/wp-content/uploads/2014/08/venneulercircles.png)

Since the percentage of R, SAS, and Python users isn't too dramatically different (`49.81%`, `33.42%`, `40.97%` respectively) and the visualizations are circles, it's a bit hard to tell that R is about 16% points higher than SAS and 9% points higher than Python.

## Code - Rectangles

Alternatively, we can use rectangles to represent the areas:

{% highlight julia linenos %}
using VennEuler

data, labels = readcsv("/home/rzwitch/Desktop/kdnuggets_language_survey_2014.csv", header=true)
data = bool(data)
labels = vec(labels)

# Rectangles
eo = make_euler_object(labels, data, [EulerSpec(:rectangle), EulerSpec(:rectangle, [.5, .5, .4], [0, 0, 0]),
    EulerSpec(:rectangle)],
    sizesum=.3)


(minf,minx,ret) = optimize_iteratively(eo, random_state(eo), ftol=-1, xtol=0.0025, maxtime=5, pop=100)
println("phase 1: got $minf at $minx (returned $ret)")
(minf,minx,ret) = optimize(eo, minx, ftol=-1, xtol=0.001, maxtime=30, pop=100)
println("phase 2: got $minf at $minx (returned $ret)")

render("/home/rzwitch/Desktop/kd-rects.svg", eo, minx)
{% endhighlight %}

![venneulerrectangles](/wp-content/uploads/2014/08/venneulerrectangles.png)

Here, it's a slight bit easier to see that SAS and Python are about the same area-wise and that R is larger, although the different dimensions do obscure this fact a bit.

## Summary

If I spent more time with this package, I'm sure I could make something even more aesthetically pleasing. And for that matter, it's still a pre-production package that will no doubt get better in the future. But at the very least, there is a way to create an area-proportional representation of relationships using VennEuler.jl in Julia.
