---
title: RSiteCatalyst Version 1.4.7 (and 1.4.6.) Release Notes
date: 2016-02-01T09:24:04+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-7-release-notes/
category: Analytics
description: Version 1.4.7 of RSiteCatalyst fixed bugs due to Unicode issues as well as added a Top argument for Queue* functions
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
It seems as though I missed release notes for version RSiteCatalyst 1.4.6, so we'll do those and RSiteCatalyst 1.4.7 (now on CRAN) and the same time...

## RSiteCatalyst 1.4.6

This release was mostly tweaking some settings, specifically:

  * Adding a second `top` argument within the `Queue*` functions for more control on results returned. It used to be the case that a breakdown report with the `top` argument would return, say, the top 10 values of the first variable and up to 50,000 values for the breakdown. Now you can control the second level breakdown as well, such as the top 10 pages and top 5 browsers for those pages.
  * Disable checking of the API call before submitting. I never ran into this, but a user was seeing that the API would return errors in validation under high volume. So if you have any weird issues, disable validation using the `validate = FALSE` keyword argument.
  * The package now handles situation where API returns an unexpected type for the `reportID` and automatically converts it to the proper type (low-level issue, not a user-facing issue)

Those changes carry forward into version RSiteCatalyst 1.4.7, so there is no reason for a user to stick with this release.

## RSiteCatalyst 1.4.7 - No more Unicode Errors!

I was surprised it took so long for someone to report this error, but [#151](https://github.com/randyzwitch/RSiteCatalyst/issues/151) finally reported a case from a user in Germany where search keywords were being mangled due to the presence of an umlaut. UTF-8 encoding is now the default for both calling the API and processing the results, so this issue will hopefully not arise again.

Additionally, a `locale` argument has been added, to set the proper locale for your report suite. This is specified through the `SCAuth()` function, with the list of possible <a href="https://marketing.adobe.com/developer/documentation/analytics-reporting-1-4/r-reportdescriptionlocale" target="_blank">locales provided by the Adobe documentation</a>. So if the even after using 1.4.7 with UTF-8 encoding by default, you are still seeing errors, try setting the locale to the country you are in/country setting of the report suite.

## Feature Requests/Bugs

As always, if you come across bugs or have feature requests, please continue to use [RSiteCatalyst GitHub Issues](https://github.com/randyzwitch/RSiteCatalyst/issues) page to submit issues. Don’t worry about cluttering up the page with tickets, please fill out a new issue for anything you encounter (with code you’ve already tried and is failing), unless you are SURE that it is the same problem someone else is facing.

However, outside of patching really serious bugs, I will likely **not spend any more time improving this package in the future**; my interests have changed, and RSiteCatalyst is pretty much complete as far as I’m concerned. That said, contributors are also _very welcomed_. If there is a feature you’d like added, and especially if you can fix an outstanding issue reported at GitHub, we’d love to have your contributions. Willem and I are both parents of young children and have real jobs outside of open-source software creation, so we welcome any meaningful contributions to RSiteCatalyst that anyone would like to contribute.
