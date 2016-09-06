---
title: RSiteCatalyst Version 1.4.8 Release Notes
date: 2016-04-04T10:05:15+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3881
permalink: /rsitecatalyst-version-1-4-8-release-notes/
tweetbackscheck:
  - 1472925111
shorturls:
  - 'a:3:{s:9:"permalink";s:65:"http://randyzwitch.com/rsitecatalyst-version-1-4-8-release-notes/";s:7:"tinyurl";s:26:"http://tinyurl.com/gstyvxk";s:4:"isgd";s:19:"http://is.gd/42p9qY";}'
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
For being in RSiteCatalyst retirement, I'm ending up working on more functionality lately ¯\_(ツ)_/¯. Here are the changes for RSiteCatalyst 1.4.8, which should be <a href="https://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">available on CRAN</a> shortly:

## Segment Stacking

RSiteCatalyst now has the ability to take multiple values in the _segment.id _keyword for the Queue* functions. This functionality was graciously provided by <a href="https://twitter.com/FootballActuary" target="_blank">Adam Gitzes</a>, closing an <a href="https://github.com/randyzwitch/RSiteCatalyst/issues/129" target="_blank">issue that was nearly a year old</a>. At times it felt like I was hazing him with change requests, but for Adam's first open-source contribution, this is a huge addition in functionality.

So now you are able to pass multiple segments into a function call and get an 'AND' behavior like so:

The result (Visits from Social AND Visits from Apple Browsers):

<img class="aligncenter size-large wp-image-3883" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2016/04/rsitecatalyst-segment-stacking-1024x58.png?fit=1024%2C58" alt="rsitecatalyst-segment-stacking" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2016/04/rsitecatalyst-segment-stacking.png?resize=1024%2C58 1024w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2016/04/rsitecatalyst-segment-stacking.png?resize=150%2C8 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2016/04/rsitecatalyst-segment-stacking.png?resize=300%2C17 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2016/04/rsitecatalyst-segment-stacking.png?resize=768%2C43 768w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2016/04/rsitecatalyst-segment-stacking.png?w=2000 2000w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />





## QueueSummary: Now with date.to and date.from keywords

In response to <a href="https://github.com/randyzwitch/RSiteCatalyst/issues/158" target="_blank">GitHub issue #158</a>, _date.to_ and _date.from_ parameters were added; this was a minor, but long-term oversight (it's always been possible to do this in the Adobe Analytics API). So now rather than just specifying the _date_ keyword and getting a full-year summary or a full-month, you can specify any arbitrary start/end dates.

## Trivial Fixes: Silenced httr message, clarified documentation

Starting with the newest version of httr, you get a message for any API call where the encoding wasn't set. So for long running Queue* requests, you may have received dozens of warnings to stdout about "<span class="pl-smi">No</span> <span class="pl-smi">encoding</span> <span class="pl-smi">supplied</span><span class="pl-k">:</span> <span class="pl-smi">defaulting</span> <span class="pl-smi">to</span> <span class="pl-smi">UTF</span><span class="pl-k">-</span><span class="pl-c1">8</span>." This has been remedied, and the warning should no longer occur.

Also, the <a href="https://github.com/randyzwitch/RSiteCatalyst/blob/master/man/QueueRanked.Rd#L86-#L93" target="_blank">documentation for the Queue* functions was clarified</a> to show an example of using SAINT classifications as the report breakdown; hopefully this didn't cause too much confusion to anyone else.

## Volunteers Wanted!

As I referenced in the first paragraph, while I'm fully committed to maintaining RSiteCatalyst, I don't currently have the time/desire to continue to develop the package to improve functionality. Given that I don't use this package for my daily work, it's hard for me to dedicate time to the project.

Thanks again to Adam Gitzes who stepped up and provided significant effort to close an outstanding feature request. I would love if others in the digital analytics community would follow Adam's lead; don't worry about whether you are 'good enough', get a working solution together and we'll figure out how to harden the code and get it merged. Be the code change you want to see the world 🙂
