---
title: RSiteCatalyst Version 1.4.8 Release Notes
date: 2016-04-04T10:05:15+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-8-release-notes/
category: Analytics
description: RSiteCatalyst version 1.4.8 is now available on CRAN. This release adds segment stacking functionality and has minor bug fixes.
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
For being in RSiteCatalyst retirement, I'm ending up working on more functionality lately ¯\_(ツ)_/¯. Here are the changes for RSiteCatalyst 1.4.8, which should be [available on CRAN](https://cran.r-project.org/web/packages/RSiteCatalyst/index.html) shortly:

## Segment Stacking

RSiteCatalyst now has the ability to take multiple values in the `segment.id` keyword for the `Queue*` functions. This functionality was graciously provided by [Adam Gitzes](https://twitter.com/FootballActuary), closing an [issue](https://github.com/randyzwitch/RSiteCatalyst/issues/129) that was nearly a year old. At times it felt like I was hazing him with change requests, but for Adam's first open-source contribution, this is a huge addition in functionality.

So now you are able to pass multiple segments into a function call and get an 'AND' behavior like so:

{% highlight R linenos %}
stacked_seg <- QueueRanked("zwitchdev",
                          "2016-03-08",
                          "2016-03-09",
                          "pageviews",
                          "page",
                          segment.id = c("5433e4e6e4b02df70be4ac63", "54adfe3de4b02df70be5ea08")
                          )
{% endhighlight %}

The result (Visits from Social AND Visits from Apple Browsers):

![rsitecatalyst-segment-stacking](/wp-content/uploads/2016/04/rsitecatalyst-segment-stacking-1024x58.png)

## QueueSummary: Now with `date.to` and `date.from` keywords

In response to [GitHub issue #158](https://github.com/randyzwitch/RSiteCatalyst/issues/158), `date.to` and `date.from` parameters were added; this was a minor, but long-term oversight (it's always been possible to do this in the Adobe Analytics API). So now rather than just specifying the `date` keyword and getting a full-year summary or a full-month, you can specify any arbitrary start/end dates.

## Trivial Fixes: Silenced `httr` message, clarified documentation

Starting with the newest version of httr, you get a message for any API call where the encoding wasn't set. So for long running `Queue*` requests, you may have received dozens of warnings to stdout about `"No encoding supplied: defaulting to UTF-8."` This has been remedied, and the warning should no longer occur.

Also, the [documentation for the `Queue*` functions](https://github.com/randyzwitch/RSiteCatalyst/blob/master/man/QueueRanked.Rd#L86-#L93) was clarified to show an example of using SAINT classifications as the report breakdown; hopefully this didn't cause too much confusion to anyone else.

## Volunteers Wanted!

As I referenced in the first paragraph, while I'm fully committed to maintaining RSiteCatalyst, I don't currently have the time/desire to continue to develop the package to improve functionality. Given that I don't use this package for my daily work, it's hard for me to dedicate time to the project.

Thanks again to Adam Gitzes who stepped up and provided significant effort to close an outstanding feature request. I would love if others in the digital analytics community would follow Adam's lead; don't worry about whether you are 'good enough', get a working solution together and we'll figure out how to harden the code and get it merged. Be the code change you want to see the world 🙂
