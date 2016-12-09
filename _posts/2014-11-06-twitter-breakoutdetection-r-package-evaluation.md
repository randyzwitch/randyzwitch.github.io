---
title: Evaluating BreakoutDetection
date: 2014-11-06T21:24:00+00:00
author: Randy Zwitch
layout: post
permalink: /twitter-breakoutdetection-r-package-evaluation/
category: DataScience
description: Twitter open-sourced an R package to detect shifts in time-series data. Here's an evaluation of the package, using blog posts/traffic as the time-series.
tags:
  - Adobe Analytics
  - Data Visualization
  - Omniture
  - R
  - RSiteCatalyst
---
A couple of weeks ago, Twitter open-sourced their [BreakoutDetection](https://blog.twitter.com/2014/breakout-detection-in-the-wild) package for R, a package designed to determine shifts in time-series data. The [Twitter announcement](https://blog.twitter.com/2014/breakout-detection-in-the-wild) does a great job of explaining the main technique for detection (E-Divisive with Medians), so I won't rehash that material here. Rather, I wanted to see how this package works relative to the [anomaly detection](http://randyzwitch.com/anomaly-detection-adobe-analytics-api/) feature in the Adobe Analytics API, which I've [written about previously](http://randyzwitch.com/anomaly-detection-adobe-analytics-api/).

## Getting Time-Series Data Using RSiteCatalyst

To use a real-world dataset to evaluate this package, I'm going to use roughly ten months of daily pageviews generated from my blog. The hypothesis here is that if the BreakoutDetection package works well, it should be able to detect the boundaries around when I publish a blog post (of which the dates I know with certainty) and when articles of mine get shared on sites such as Reddit. From past experience, I get about a 3-day lift in pageviews post-publishing, as the article gets tweeted out, published on [R-Bloggers](http://www.r-bloggers.com/) or [JuliaBloggers](http://www.juliabloggers.com/) and shared accordingly.

Here's the code to get daily pageviews using [RSiteCatalyst](http://cran.r-project.org/web/packages/RSiteCatalyst/index.html "RSiteCatalyst") (Adobe Analytics):

{% highlight R linenos %}
#Installing BreakoutDetection package
install.packages("devtools")
devtools::install_github("twitter/BreakoutDetection")
library(BreakoutDetection)

library("RSiteCatalyst")
SCAuth("company", "secret")

#Get pageviews for each day in 2014
pageviews_2014 <- QueueOvertime('report-suite',
                               date.from = '2014-02-24',
                               date.to = '2014-11-05',
                               metric = 'pageviews',
                               date.granularity = 'day')

#v1.0.1 of package requires specific column names and dataframe format
formatted_df <- pageviews_2014[,c("datetime","pageviews")]
names(formatted_df) <- c("timestamp", "count")
{% endhighlight %}

One thing to notice here is that BreakoutDetection requires either a single R vector or a specifically formatted data frame. In this case, because I have a timestamp, I use lines 17-18 to get the data into the required format.

## BreakoutDetection - Default Example

In the Twitter announcement, they provide an example, so let's evaluate those defaults first:

![breakoutdetection-defaults](/wp-content/uploads/2014/11/breakoutdetection-defaults.png)

In order to validate my hypothesis, the package would need to detect 12 'breakouts' or so, as I've published 12 blog posts during the sample time period. Mentally drawing lines between the red boundaries, we can see three definitive upward mean shifts, but far fewer than the 12 I expected.

## BreakoutDetection - Modifying The Parameters

Given that the chart above doesn't fit how I think my data are generated, we can modify two main parameters: beta and min.size. From the documentation:

 > beta: A real numbered constant used to further control the amount of penalization. This is the default form of penalization, if neither (or both) beta or (and) percent are supplied this argument will be used. The default value is beta=0.008.
 >
 > min.size:  The minimum number of observations between change points

The first parameter I'm going to experiment with is min.size, because it requires no in-depth knowledge of the EDM technique! The value used in the first example was 24 (days) between intervals, which seems extreme in my case. It's reasonable that I might publish a blog post per week, so let's back that number down to 5 and see how the result changes:

![breakout-5](/wp-content/uploads/2014/11/breakout-5.png)

With 17 predicted intervals, we've somewhat overshot the number of blog posts mark. Not that the package is wrong per se; the boundaries are surrounding many of the spikes in the data, but perhaps having this many breakpoints isn't useful from a monitoring standpoint. So setting the min.size parameter somewhere between 5 and 24 points would give us more than 3 breakouts, but less than 17. There is also the `beta` parameter that can be played with, but I'll leave that as an exercise for another day.

## Anomaly Detection - Adobe Analytics

From my prior post about [Anomaly Detection with the Adobe Analytics API](http://randyzwitch.com/anomaly-detection-adobe-analytics-api/), Adobe has chosen to use Holt-Winters/Exponential Smoothing as their technique. Here's what that looks like for the same time-period (code as [GitHub Gist](http://randyzwitch.com/wp-content/uploads/2014/11/adobe_anomaly.png)):

![adobe_analytics](/wp-content/uploads/2014/11/adobe_analytics.png)

Even though the idea of both techniques are similar, it's clear that the two methods don't quite represent the same thing. In the case of the Adobe Analytics Anomaly Detection, it's looking datapoint-by-datapoint, with a smoothing model built from the prior 35 points. If a point exceeds the `upper-` or `lower-control` limits, then it's an anomaly, but not necessarily indicative of a true level shift like the BreakoutDetection package is measuring.

## Conclusion

The [BreakoutDetection package](https://github.com/twitter/BreakoutDetection) is definitely cool, but it is a bit raw, especially the default graphics. But the package definitely does work, as evidenced by how well it put boundaries around the traffic spikes when I set the `min.size` parameter equal to five.

Additionally, I tried to read more about the underlying methodology, but the only references that come up in Google seem to be references to the R package itself! I wish I had a better feeling for how the beta parameter influences the graph, but I guess that will come over time as I use the package more. But I'm definitely glad that Twitter open-sourced this package, as I've often wondered about how to detect level shifts in a more operational setting, and now I have a method to do so.
