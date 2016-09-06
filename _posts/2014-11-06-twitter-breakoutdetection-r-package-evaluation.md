---
id: 3086
title: Evaluating BreakoutDetection
date: 2014-11-06T21:24:00+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3086
permalink: /twitter-breakoutdetection-r-package-evaluation/
tweetbackscheck:
  - 1472957003
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3086";s:7:"tinyurl";s:26:"http://tinyurl.com/m9swzkp";s:4:"isgd";s:19:"http://is.gd/Qbqcmj";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Data Science
tags:
  - Adobe Analytics
  - Data Visualization
  - Omniture
  - R
  - RSiteCatalyst
---
A couple of weeks ago, Twitter open-sourced their <a title="Breakout Detection Twitter R" href="https://blog.twitter.com/2014/breakout-detection-in-the-wild" target="_blank">BreakoutDetection</a> package for R, a package designed to determine shifts in time-series data. The <a title="Twitter Breakout Detection" href="https://blog.twitter.com/2014/breakout-detection-in-the-wild" target="_blank">Twitter announcement</a> does a great job of explaining the main technique for detection (E-Divisive with Medians), so I won&#8217;t rehash that material here. Rather, I wanted to see how this package works relative to the <a title="RSiteCatalyst Anomaly Detection" href="http://randyzwitch.com/anomaly-detection-adobe-analytics-api/" target="_blank">anomaly detection</a> feature in the Adobe Analytics API, which I&#8217;ve <a title="Anomaly Detection Adobe API" href="http://randyzwitch.com/anomaly-detection-adobe-analytics-api/" target="_blank">written about previously</a>.

## Getting Time-Series Data Using RSiteCatalyst

To use a real-world dataset to evaluate this package, I&#8217;m going to use roughly ten months of daily pageviews generated from my blog. The hypothesis here is that if the BreakoutDetection package works well, it should be able to detect the boundaries around when I publish a blog post (of which the dates I know with certainty) and when articles of mine get shared on sites such as Reddit. From past experience, I get about a 3-day lift in pageviews post-publishing, as the article gets tweeted out, published on <a title="R Bloggers" href="http://www.r-bloggers.com/" target="_blank">R-Bloggers</a> or <a title="Julia Bloggers" href="http://www.juliabloggers.com/" target="_blank">JuliaBloggers</a> and shared accordingly.

Here&#8217;s the code to get daily pageviews using [RSiteCatalyst](http://cran.r-project.org/web/packages/RSiteCatalyst/index.html "RSiteCatalyst") (Adobe Analytics):One thing to notice here is that BreakoutDetection requires either a single R vector or a specifically formatted data frame. In this case, because I have a timestamp, I use lines 17-18 to get the data into the required format.



## BreakoutDetection &#8211; Default Example

In the Twitter announcement, they provide an example, so let&#8217;s evaluate those defaults first:[<img class="aligncenter size-full wp-image-3091" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png?fit=800%2C384" alt="breakoutdetection-defaults" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png?w=800 800w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png?resize=150%2C72 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png?resize=300%2C144 300w" sizes="(max-width: 800px) 100vw, 800px" data-recalc-dims="1" />](http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png) In order to validate my hypothesis, the package would need to detect 12 &#8216;breakouts&#8217; or so, as I&#8217;ve published 12 blog posts during the sample time period. Mentally drawing lines between the red boundaries, we can see three definitive upward mean shifts, but far fewer than the 12 I expected.

## BreakoutDetection &#8211; Modifying The Parameters

Given that the chart above doesn&#8217;t fit how I think my data are generated, we can modify two main parameters: beta and min.size. From the documentation:

  * beta: A real numbered constant used to further control the amount of penalization. This is the default form of penalization, if neither (or both) beta or (and) percent are supplied this argument will be used. The default value is beta=0.008.

&nbsp;

  * min.size:  The minimum number of observations between change points

&nbsp;

&nbsp;

The first parameter I&#8217;m going to experiment with is min.size, because it requires no in-depth knowledge of the EDM technique! The value used in the first example was 24 (days) between intervals, which seems extreme in my case. It&#8217;s reasonable that I might publish a blog post per week, so let&#8217;s back that number down to 5 and see how the result changes:[<img class="aligncenter size-full wp-image-3096" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png?fit=800%2C384" alt="breakout-5" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png?w=800 800w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png?resize=150%2C72 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png?resize=300%2C144 300w" sizes="(max-width: 800px) 100vw, 800px" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png)

With 17 predicted intervals, we&#8217;ve somewhat overshot the number of blog posts mark. Not that the package is wrong per se; the boundaries are surrounding many of the spikes in the data, but perhaps having this many breakpoints isn&#8217;t useful from a monitoring standpoint. So setting the min.size parameter somewhere between 5 and 24 points would give us more than 3 breakouts, but less than 17. There is also the beta parameter that can be played with, but I&#8217;ll leave that as an exercise for another day.

## Anomaly Detection &#8211; Adobe Analytics

From my prior post about <a title="Anomaly Detection Adobe API" href="http://randyzwitch.com/anomaly-detection-adobe-analytics-api/" target="_blank">Anomaly Detection with the Adobe Analytics API</a>, Adobe has chosen to use Holt-Winters/Exponential Smoothing as their technique. Here&#8217;s what that looks like for the same time-period (code as <a title="ggplot gist" href="https://gist.github.com/10ee7e43f1974015bf55.git" target="_blank">GitHub Gist</a>):[A couple of weeks ago, Twitter open-sourced their <a title="Breakout Detection Twitter R" href="https://blog.twitter.com/2014/breakout-detection-in-the-wild" target="_blank">BreakoutDetection</a> package for R, a package designed to determine shifts in time-series data. The <a title="Twitter Breakout Detection" href="https://blog.twitter.com/2014/breakout-detection-in-the-wild" target="_blank">Twitter announcement</a> does a great job of explaining the main technique for detection (E-Divisive with Medians), so I won&#8217;t rehash that material here. Rather, I wanted to see how this package works relative to the <a title="RSiteCatalyst Anomaly Detection" href="http://randyzwitch.com/anomaly-detection-adobe-analytics-api/" target="_blank">anomaly detection</a> feature in the Adobe Analytics API, which I&#8217;ve <a title="Anomaly Detection Adobe API" href="http://randyzwitch.com/anomaly-detection-adobe-analytics-api/" target="_blank">written about previously</a>.

## Getting Time-Series Data Using RSiteCatalyst

To use a real-world dataset to evaluate this package, I&#8217;m going to use roughly ten months of daily pageviews generated from my blog. The hypothesis here is that if the BreakoutDetection package works well, it should be able to detect the boundaries around when I publish a blog post (of which the dates I know with certainty) and when articles of mine get shared on sites such as Reddit. From past experience, I get about a 3-day lift in pageviews post-publishing, as the article gets tweeted out, published on <a title="R Bloggers" href="http://www.r-bloggers.com/" target="_blank">R-Bloggers</a> or <a title="Julia Bloggers" href="http://www.juliabloggers.com/" target="_blank">JuliaBloggers</a> and shared accordingly.

Here&#8217;s the code to get daily pageviews using [RSiteCatalyst](http://cran.r-project.org/web/packages/RSiteCatalyst/index.html "RSiteCatalyst") (Adobe Analytics):One thing to notice here is that BreakoutDetection requires either a single R vector or a specifically formatted data frame. In this case, because I have a timestamp, I use lines 17-18 to get the data into the required format.



## BreakoutDetection &#8211; Default Example

In the Twitter announcement, they provide an example, so let&#8217;s evaluate those defaults first:[<img class="aligncenter size-full wp-image-3091" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png?fit=800%2C384" alt="breakoutdetection-defaults" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png?w=800 800w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png?resize=150%2C72 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png?resize=300%2C144 300w" sizes="(max-width: 800px) 100vw, 800px" data-recalc-dims="1" />](http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakoutdetection-defaults.png) In order to validate my hypothesis, the package would need to detect 12 &#8216;breakouts&#8217; or so, as I&#8217;ve published 12 blog posts during the sample time period. Mentally drawing lines between the red boundaries, we can see three definitive upward mean shifts, but far fewer than the 12 I expected.

## BreakoutDetection &#8211; Modifying The Parameters

Given that the chart above doesn&#8217;t fit how I think my data are generated, we can modify two main parameters: beta and min.size. From the documentation:

  * beta: A real numbered constant used to further control the amount of penalization. This is the default form of penalization, if neither (or both) beta or (and) percent are supplied this argument will be used. The default value is beta=0.008.

&nbsp;

  * min.size:  The minimum number of observations between change points

&nbsp;

&nbsp;

The first parameter I&#8217;m going to experiment with is min.size, because it requires no in-depth knowledge of the EDM technique! The value used in the first example was 24 (days) between intervals, which seems extreme in my case. It&#8217;s reasonable that I might publish a blog post per week, so let&#8217;s back that number down to 5 and see how the result changes:[<img class="aligncenter size-full wp-image-3096" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png?fit=800%2C384" alt="breakout-5" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png?w=800 800w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png?resize=150%2C72 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png?resize=300%2C144 300w" sizes="(max-width: 800px) 100vw, 800px" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/breakout-5.png)

With 17 predicted intervals, we&#8217;ve somewhat overshot the number of blog posts mark. Not that the package is wrong per se; the boundaries are surrounding many of the spikes in the data, but perhaps having this many breakpoints isn&#8217;t useful from a monitoring standpoint. So setting the min.size parameter somewhere between 5 and 24 points would give us more than 3 breakouts, but less than 17. There is also the beta parameter that can be played with, but I&#8217;ll leave that as an exercise for another day.

## Anomaly Detection &#8211; Adobe Analytics

From my prior post about <a title="Anomaly Detection Adobe API" href="http://randyzwitch.com/anomaly-detection-adobe-analytics-api/" target="_blank">Anomaly Detection with the Adobe Analytics API</a>, Adobe has chosen to use Holt-Winters/Exponential Smoothing as their technique. Here&#8217;s what that looks like for the same time-period (code as <a title="ggplot gist" href="https://gist.github.com/10ee7e43f1974015bf55.git" target="_blank">GitHub Gist</a>):](http://randyzwitch.com/wp-content/uploads/2014/11/adobe_anomaly.png)

[<img class="aligncenter size-full wp-image-3103" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/adobe_analytics.png?fit=800%2C502" alt="adobe_analytics" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/adobe_analytics.png?w=800 800w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/adobe_analytics.png?resize=150%2C94 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/adobe_analytics.png?resize=300%2C188 300w" sizes="(max-width: 800px) 100vw, 800px" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/adobe_analytics.png)

Even though the idea of both techniques are similar, it&#8217;s clear that the two methods don&#8217;t quite represent the same thing. In the case of the Adobe Analytics Anomaly Detection, it&#8217;s looking datapoint-by-datapoint, with a smoothing model built from the prior 35 points. If a point exceeds the upper- or lower-control limits, then it&#8217;s an anomaly, but not necessarily indicative of a true level shift like the BreakoutDetection package is measuring.

## Conclusion

The <a title="Breakout Detection GitHub" href="https://github.com/twitter/BreakoutDetection" target="_blank">BreakoutDetection package</a> is definitely cool, but it is a bit raw, especially the default graphics. But the package definitely does work, as evidenced by how well it put boundaries around the traffic spikes when I set the min.size parameter equal to five.

Additionally, I tried to read more about the underlying methodology, but the only references that come up in Google seem to be references to the R package itself! I wish I had a better feeling for how the beta parameter influences the graph, but I guess that will come over time as I use the package more.  But I&#8217;m definitely glad that Twitter open-sourced this package, as I&#8217;ve often wondered about how to detect level shifts in a more operational setting, and now I have a method to do so.
