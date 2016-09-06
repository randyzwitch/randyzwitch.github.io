---
title: Bulk Downloading Adobe Analytics Data
date: 2016-07-21T08:25:02+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3974
permalink: /rsitecatalyst-bulk-download-version-1-4-9-release-notes/
tweetbackscheck:
  - 1472922805
shorturls:
  - 'a:2:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3974";s:7:"tinyurl";s:26:"http://tinyurl.com/hpmptl8";}'
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
_This blog post also serves as release notes for RSiteCatalyst v1.4.9, as only one feature was added (batch report request and download). But it's a feature big enough for its own post!_

Recently, I was asked how I would approach replicating the [market basket analysis](http://33sticks.com/rsitecatalyst-market-basket-analysis-adobe-analytics/) blog post I wrote for [33 Sticks](http://33sticks.com/), but using a lot more data. Like, months and months of order-level data. While you _might_ be able to submit multiple months worth of data in a single RSiteCatalyst call, it's a lot more elegant to request data from the Adobe Analytics API in several calls. With the new batch-submit and batch-receive functionality in RSiteCatalyst, this process can be a LOT faster.





## Non-Batched Method

Prior to version 1.4.9 of RSiteCatalyst, API calls could only be made in a serial fashion:

The underlying assumption from a package development standpoint was that the user would be working in an interactive fashion; submit a report request, wait to get the answer back. There's nothing inherently wrong with this code from an R standpoint that made this a slow process, you just had to wait until one report was calculated by the Adobe Analytics API until the next one was submitted.

## Batch Method

Of course, most APIs can process multiple calls simultaneously, and the Adobe Analytics API is no exception. Thanks to user [shashispace](https://github.com/shashispace), it's now possible to submit all of your report calls at once, then retrieve the results:

This code is nearly identical to the serial snippet above, except for 1) the addition of the _<span class="pl-v">enqueueOnly</span> <span class="pl-k">=</span>_ <span class="pl-c1"><em>TRUE</em> keyword argument and 2) lowering the <em>interval.seconds</em> keyword argument to 1 second instead of 60. When you use the enqueueOnly keyword, instead of returning the report results back, a Queue* function will return the report.id; by accumulating these report.id values in a list, we can next retrieve the reports and bind them together using dplyr.</span>

## Performance gain: 4x speed-up

Although the code snippets are nearly identical, it is way faster to submit the reports all at once then retrieve the results. By submitting the requests all at once, the API will process numerous calls at once, and while you are retrieving the results of one call the others will continue to process in the background.

I wouldn't have thought this would make such a difference, but retrieving one month of daily order-level data went from taking 2420 seconds to 560 seconds! If you were to retrieve the same amount of daily data, but for an entire year, that would mean saving 6 hours in processing time.

## Keep The Pull Requests Coming!

The last several RSiteCatalyst releases have been driven by contributions from the community and I couldn't be happier! Given that I don't spend much time in my professional life now using Adobe Analytics, having improvements driven by a community of users using the library daily is just so rewarding.

So please, if you have a comment for improvement (and especially if you find a bug), please submit an [issue on GitHub](https://github.com/randyzwitch/RSiteCatalyst/issues). Submitting questions and issues to GitHub is the easiest way for me to provide support, while also giving other users the possibility to answer your question before I might. It will also provide a means for others to determine if they are experiencing a new or previously-known problem.
