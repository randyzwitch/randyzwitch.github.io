---
title: RSiteCatalyst Version 1.1 Release Notes
date: 2013-08-25T13:54:32+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-1-release-notes/
category: Analytics
description: RSiteCatalyst version 1.1 release notes
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
<a title="RSiteCatalyst on CRAN" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst </a>version 1.1 is now available on CRAN. Changes from version 1 include:

  * Support for Correlations/Subrelations in the `QueueRanked` function
  * Support for Current Data in all `Queue*` functions
  * Support Anomaly Detection for `QueueOvertime` and `QueueTrended` functions (<a title="Anomaly Detection Adobe Analytics" href="http://randyzwitch.com/anomaly-detection-adobe-analytics-api/" target="_blank">example usage with ggplot2 graph</a>)
  * Decrease in wait time for API calls (from 5 seconds to 2 seconds) and extending total number of API tries before report failure (from 100 seconds to 10 minutes)

For those of you Adobe Analytics (Omniture) users who haven't yet tried to use the Adobe Analytics API, I've created an <a title="RSiteCatalyst main page" href="http://randyzwitch.com/rsitecatalyst/" target="_blank">introduction video</a> to get started. There will also continue to be examples of using this package on this blog on the <a title="RSiteCatalyst usage examples" href="http://randyzwitch.com/tag/rsitecatalyst/" target="_blank">RSiteCatalyst</a> tag. Enjoy!
