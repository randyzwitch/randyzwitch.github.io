---
title: RSiteCatalyst Version 1.4.3 Release Notes
date: 2015-01-06T13:00:40+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-3-release-notes/
category: Analytics
description: RSiteCatalyst v1.4.3 is primarily a bug-fix release, with two additional functions added for Data Feed functionality.
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
It's a new year, so...new version of RSiteCatalyst on CRAN! For the most part, this release fixes a handful of bugs that weren't noticed with the prior release 1.4.2 (oops!), but there are pieces of additional functionality.

## New functionality: Data Feed monitoring

For those of you having hourly or daily data feeds delivered via FTP, you can now find out the details of a data feed and all of a company's feeds & the processing status of each using `GetFeed()` and `GetFeeds()` respectively.

For example, calling `GetFeed()` with a specific feed number will return the following information as a data frame:

![rsitecatalyst-getfeed](/wp-content/uploads/2015/01/rsitecatalyst-getfeed.png)

Similarly, if you call `GetFeeds("report-suite")`, you'll get the following information as a data frame:

![rsitecatalyst-getfeeds](/wp-content/uploads/2015/01/rsitecatalyst-getfeeds.png)

I only have one feed set up for testing, but if there were more feeds delivered each day, they would show up as additional rows in the data frame. The interpretation here is that the daily feed for 1/5/15 was delivered (the 05:00:00 is GMT).

## Bug Fixes

RSiteCatalyst v1.4.2 attempted to fix an issue where `QueueRanked` would error if two SAINT classifications were used. Unfortunately, by fixing that issue, `QueueRanked` ONLY worked with SAINT Classifications. This was only out in the wild for a month, so hopefully it didn't really affect anyone.

Additionally, the `segment.id` and `segment.name` weren't printing out to the data frame in the `Queue*` functions. This has also been fixed.

## Test Suite Using Travis CI

To avoid future errors like the ones mentioned above, a full test suite using [testthat](https://github.com/hadley/testthat) has been added to RSiteCatalyst and monitored via [Travis CI](https://travis-ci.org/randyzwitch/RSiteCatalyst). While there is coverage for every public function within the package, there are likely additional tests that can be added for functionality I didn't cover. If anyone out there has particularly weird cases they use and aren't incorporated in the [test suite](https://github.com/randyzwitch/RSiteCatalyst/tree/master/tests/testthat), please feel free to file an issue or submit a pull request and I'll figure out how to incorporate it into the test suite.

## <del>DataWarehouse API</del>

<del>Finally, the last bit of changes to RSiteCatalyst in v1.4.3 are internal preparations for a new package I plan to release in the coming months: <a title="AdobeDW DataWarehouse" href="https://github.com/randyzwitch/AdobeDW" target="_blank">AdobeDW</a>. Several folks have asked for the ability to control Data Warehouse reports via R; for various reasons, I thought it made sense to break this out from RSiteCatalyst into its own package. If there are any R-and-Adobe-Analytics enthusiasts out there that would like to help development, please let me know! </del>

## Feature Requests/Bugs

As always, if you come across bugs or have feature requests, please continue to use the [RSiteCatalyst GitHub Issues](https://github.com/randyzwitch/RSiteCatalyst/issues) page to submit issues. Don’t worry about cluttering up the page with tickets, please fill out a new issue for anything you encounter (with code you’ve already tried and is failing), unless you are SURE that it is the same problem someone else is facing.

And finally, like I end every blog post about RSiteCatalyst, please note that **I’m** **not an Adobe employee**. This hasn't been an issue for a few months, so maybe next time I won't end the post with this boilerplate :)
