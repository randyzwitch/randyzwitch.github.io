---
title: RSiteCatalyst Version 1.4.1 Release Notes
date: 2014-11-10T10:01:36+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-1-release-notes/
category: Analytics
description: Version 1.4.1 of RSiteCatalyst fixed several bugs, as well as added numerous additional GET methods for obtaining information about your Report Suites.
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
## Changes

Version 1.4.1 of RSiteCatalyst is now available on CRAN. There were a handful of bug fixes and new features added, including:

  * Fixed bug in `QueueRanked` function where only 10 results were returned when requesting multiple element reports. Function now returns up to 50,000 per breakdown (API limit)
  * Created better error message to inform user to login with credentials instead of making function call without proper API credentials
  * Added support for using SAINT classifications in `QueueRanked/QueueTrended` functions
  * Added more error checking to make functions fail more elegantly
  * Added remaining GET methods from Reporting/Administration API

## Additional GET methods

This version of RSiteCatalyst has roughly 20 new GET methods, mostly providing additional report suite information for those who might desire to generate their documentation programmatically rather than manually. New API methods include (but are not limited to):

  * `GetMarketingChannelRules`: Get a list of all criteria used to build the Marketing Channels report
  * `GetReportDescription`: For a given bookmark_id, get the report definition
  * `GetListVariables`: Get a list of the List Variables defined for a report suite
  * `GetLogins`: Get all logins for a given Company

If you were the type of person who enjoyed this blog post showing how to [auto-generate Adobe Analytics documentation](http://randyzwitch.com/adobe-analytics-implementation-documentation/ "Adobe Analytics Report Suite documentation R"), I encourage you to take a look at these newly incorporated functions and use them to improve your documentation even further.

## Feature Requests/Bugs

If you come across any bugs, or have any feature requests, please continue to use the [RSiteCatalyst GitHub Issues](https://github.com/randyzwitch/RSiteCatalyst/issues) page to make tickets. While I've responded to many of you via the maintainer email provided in the R package itself, it's much more efficient (and you're much more likely to get a response) if you use the GitHub Issues page. Don't worry about cluttering up the page with tickets, please fill out a new issue for anything you encounter, unless you are SURE that it is the same problem someone else is facing.

And finally, like I end every blog post about RSiteCatalyst, please note that **I'm** **not an Adobe employee**. Please don't send me your API credentials, expect immediate replies or ask to set up phone calls to troubleshoot your problems. This is open-source software...Willem Paling and I did the hard part writing it, you're expected to support yourself as best as possible unless you believe you're encountering a bug. Then use GitHub 🙂
