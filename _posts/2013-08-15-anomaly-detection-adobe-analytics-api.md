---
id: 2012
title: Anomaly Detection Using The Adobe Analytics API
date: 2013-08-15T10:57:56+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2012
permalink: /anomaly-detection-adobe-analytics-api/
tweetbackscheck:
  - 1472944101
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2012";s:7:"tinyurl";s:26:"http://tinyurl.com/k2gjy2c";s:4:"isgd";s:19:"http://is.gd/gZGoxL";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
  - Statistics
---
<p style="text-align: center;">
  <a href="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/08/anomaly-detection-adobe-analytics.jpg"><img class="size-full wp-image-2019 aligncenter" alt="anomaly-detection-adobe-analytics" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2013/08/anomaly-detection-adobe-analytics-e1376429163809.jpg?fit=550%2C188" data-recalc-dims="1" /></a>
</p>

As digital marketers & analysts, we&#8217;re often asked to quantify when a metric goes beyond just random variation and becomes an actual &#8220;unexpected&#8221; result. In cases such as _A/B..N_ testing, it&#8217;s easy to calculate a t-test to quantify the difference between two testing populations, but <a title="Why t-test not appropriate for time-series" href="http://www.indiana.edu/~statmath/stat/all/ttest/ttest1.html" target="_blank">for time-series metrics, using a t-test is likely not appropriate</a>.

To determine whether a time-series has become &#8220;out-of-control&#8221;, we can use Exponential Smoothing to forecast the Expected Value, as well as calculate Upper Control Limits (UCL) and Lower Control Limits (LCL). To the extent a data point exceeds the UCL or falls below the LCL, we can say that statistically a time-series is no longer within the expected range. There are numerous ways to <a title="R time-series" href="http://cran.r-project.org/web/views/TimeSeries.html" target="_blank">create time-series models using R</a>, but for the purposes of this blog post I&#8217;m going to focus on Exponential Smoothing, which is how the <a title="Anomaly Detection Adobe Analytics API" href="https://developer.omniture.com/en_US/documentation/sitecatalyst-reporting/c-anomaly#concept_E51D14B9899A4974BD946A77D7368BC5" target="_blank">anomaly detection</a> feature is implemented within the Adobe Analytics API.

<!--more-->

### Holt-Winters & Exponential Smoothing

There are three techniques that the Adobe Analytics API uses to build time-series models:

  * Holt-Winters Additive (Triple Exponential Smoothing)
  * Holt-Winters Multiplicative (Triple Exponential Smoothing)
  * Holt Trend Corrected (Double Exponential Smoothing)

The formulas behind each of the techniques are easily found elsewhere, but the main point behind the three techniques is that time-series data can have a <span style="text-decoration: underline;">long-term trend</span> (Double Exponential Smoothing) and/or a <span style="text-decoration: underline;">seasonal trend</span> (Triple Exponential Smoothing). To the extent that a time-series  has a seasonal component, the seasonal component can be _additive_ (a fixed amount of increase across the series, such as the number of degrees increase in temperature in Summer) or _multiplicative_ (a multiplier relative to the level of the series, such as a 10% increase in sales during holiday periods).

The Adobe Analytics API simplifies the choice of which technique to use by calculating a forecast using all three methods, then choosing the method that has the best fit as calculated by the model having the minimum (squared) error. It&#8217;s important to note that while this is probably an okay model selection method for detecting anomalies, this method does not guarantee that the model chosen is the actual &#8220;best&#8221; forecast model to fit the data.





### RSiteCatalyst API call

Using the _RSiteCatalyst_ R package version 1.1, it&#8217;s trivial to access the anomaly detection feature:Once the function call is run, you will receive a DataFrame of &#8216;Day&#8217; granularity with the actual metric and three additional columns for the forecasted value, UCL and LCL.  Graphing these data using ggplot2 (<a title="ggplot2 Anomaly Detection graph" href="https://gist.github.com/randyzwitch/6241051" target="_blank">Graph Code Here &#8211; GitHub Gist</a>), we can now see on which days an anomalous result occurred:

<p style="text-align: center;">
  <a href="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/08/anomaly-detection-adobe-analytics1.png"><img class="size-full wp-image-2050 aligncenter" alt="Huge spike in traffic July 23 - 24" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/08/anomaly-detection-adobe-analytics1.png?fit=550%2C401" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/08/anomaly-detection-adobe-analytics1.png?w=550 550w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/08/anomaly-detection-adobe-analytics1.png?resize=150%2C109 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/08/anomaly-detection-adobe-analytics1.png?resize=300%2C218 300w" sizes="(max-width: 550px) 100vw, 550px" data-recalc-dims="1" /></a>
</p>

The red dots in the graph above indicate days where page views either exceeded the UCL or fell below the LCL. On July 23 &#8211; 24 timeframe, traffic to this blog spiked dramatically due to a <a title="A Beginner’s Look at Julia" href="http://randyzwitch.com/julia-language-beginners/" target="_blank">blog post about the Julia programming language</a>, and continued to stay above the norm for about a week afterwards.

### Anomaly Detection Limitations

There two limitations to keep in mind when using the Anomaly Detection feature of the Adobe Analytics API:

  * Anomaly Detection is currently only available for &#8216;Day&#8217; granularity
  * Forecasts are built on 35 days of past history

In neither case do I view these limitations as dealbreakers. The first limitation is just an engineering decision, which I&#8217;m sure could be expanded if enough people used this functionality.

For the time period of 35 days to build the forecasts, this is an area where there is a balance between calculation time vs. capturing a long-term and/or seasonal trend in the data. Using 35 days as your time period, you get five weeks of day-of-week seasonality, as well as 35 points to calculate a &#8216;long-term&#8217; trend. If the time period is of concern in terms of what constitutes a &#8216;good forecast&#8217;, then there are plenty of other techniques that can be explored using R (or any other statistical software for that matter).

### Elevating the discussion

I have to give a hearty &#8216;Well Done!&#8217; to the Adobe Analytics folks for elevating the discussion in terms of digital analytics. By using statistical techniques like Exponential Smoothing, analysts can move away from qualitative statements like &#8220;Does it look like _something_ is wrong with our data?&#8221; to  actually quantifying _when_ KPIs are &#8220;too far&#8221; away from the norm and should be explored further.
