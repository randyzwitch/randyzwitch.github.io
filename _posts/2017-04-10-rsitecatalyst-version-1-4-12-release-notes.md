---
title: RSiteCatalyst Version 1.4.12 (and 1.4.11) Release Notes
date: '2017-04-10'
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-12-release-notes/
description: Version 1.4.11 and 1.4.12 of RSiteCatalyst were primarily bug fix releases, with only minor functionality added
category: Analytics
tags:
- Adobe Analytics
- Omniture
- R
- RSiteCatalyst
---

I released version 1.4.12 of RSiteCatalyst before I wrote the release notes for version 1.4.11, so this blog post will treat both releases as one. Users should upgrade directly to version 1.4.12 as the releases are cumulative in nature.

## Get* method additions

Two `Get*` methods were added in this release: `GetClickMapReporting` and `GetPreviousServerCalls`, mostly for completeness. Analytics users will likely not need to use these methods, but they are useful for [generating documentation](http://randyzwitch.com/adobe-analytics-implementation-documentation/).

## Bug fixes

* Fixed `GetLogin` function, adding `selected_ims_group_list` parameter to response (caused test suite failure)
* Fixed issue with `ViewProcessingRules` where nested rules threw errors (#214)
* Fixed issue with `GetMarketingChannelRules` where nested rules threw errors, `matches` column duplicated values across rows (#180)
* Added ability to use a segment in `QueueDataWarehouse` function, which was previously implemented incorrectly (#216)
* Fixed issue with `QueueDataWarehouse` not returning the proper number of results when `enqueueOnly = FALSE`
* Fixed encoding for `QueueDataWarehouse` to correctly use UTF-8-BOM (#198)
* Fixed parser for `GetFeeds`, to unnest 'activity' data frame into discrete columns
* Fixed issue where message `Error in if (!is.null(elements[i, ]$classification) && nchar(elements[i, : missing value where TRUE/FALSE needed` displayed when using multiple elements in a `Queue*` function (#207)

## Community Contributions (An Adobe Summit bounce?!)

In the past month, the number of GitHub issues submitted has increased dramatically, a good problem to have!

I encourage all users of the software to continue reporting bugs via GitHub issues, and especially if you can provide a working code example. Even better, a fix via pull request will ensure that your bug will be addressed in a timely manner and for the benefit to others in the community.
