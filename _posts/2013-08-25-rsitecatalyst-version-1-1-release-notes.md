---
id: 2104
title: RSiteCatalyst Version 1.1 Release Notes
date: 2013-08-25T13:54:32+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2104
permalink: /rsitecatalyst-version-1-1-release-notes/
tweetbackscheck:
  - 1472932107
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2104";s:7:"tinyurl";s:26:"http://tinyurl.com/l9r429w";s:4:"isgd";s:19:"http://is.gd/Z9KiOj";}'
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
---
<a title="RSiteCatalyst on CRAN" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst </a>version 1.1 is now available on CRAN. Changes from version 1 include:

  * Support for Correlations/Subrelations in the _QueueRanked_ function
  * Support for Current Data in all &#8216;_Queue_&#8216; functions
  * Support Anomaly Detection for _QueueOvertime_ and _QueueTrended_ functions (<a title="Anomaly Detection Adobe Analytics" href="http://randyzwitch.com/anomaly-detection-adobe-analytics-api/" target="_blank">example usage with ggplot2 graph</a>)
  * Decrease in wait time for API calls (from 5 seconds to 2 seconds) and extending total number of API tries before report failure (from 100 seconds to 10 minutes)

For those of you Adobe Analytics (Omniture) users who haven&#8217;t yet tried to use the Adobe Analytics API, I&#8217;ve created an <a title="RSiteCatalyst main page" href="http://randyzwitch.com/rsitecatalyst/" target="_blank">introduction video</a> to get started. There will also continue to be examples of using this package on this blog on the <a title="RSiteCatalyst usage examples" href="http://randyzwitch.com/tag/rsitecatalyst/" target="_blank">RSiteCatalyst</a> tag. Enjoy!
