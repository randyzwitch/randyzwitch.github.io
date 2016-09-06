---
title: RSiteCatalyst Version 1.4.2 Release Notes
date: 2014-12-03T23:01:05+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-2-release-notes/
category: Analytics
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
RSiteCatalyst version 1.4.2 is now available on CRAN. This update was primarily bug fixes with one additional feature added.

  1. Fixed QueueRanked function to allow multiple SAINT classifications to be specified. This allows for breaking down a SAINT classification with another SAINT classification, such as breaking down tracking codes by marketing channel and by campaign
  2. Fixed bug in internal function, to allow for using the same element multiple times in a QueueRanked function call. This was a necessary fix for allowing multiple SAINT classifications in #1
  3. Exported previous internal function _SubmitJsonQueueReport_ to allow for submitting JSON requests directly to the Adobe Analytics API without all of the R function scaffolding. This approximates the same functionality as the <a title="Adobe Analytics API Explorer" href="https://marketing.adobe.com/developer/get-started/api-explorer" target="_blank">Adobe API Explorer</a>.

For the most part, this isn't a release that most people will notice any differences from version 1.4.1. That said, special thanks go out to Jason Morgan (<a title="Jason Morgan GitHub" href="https://github.com/framingeinstein" target="_blank">@framingeinstein</a>) for identifying the two bugs that were fixed AND submitting fixes.





## Feature Requests/Bugs

As always, if you come across bugs or have feature requests, please continue to use the <a title="RSiteCatalyst GitHub" href="https://github.com/randyzwitch/RSiteCatalyst/issues" target="_blank">RSiteCatalyst GitHub Issues</a> page to submit issues. Don’t worry about cluttering up the page with tickets, please fill out a new issue for anything you encounter (with code you've already tried and is failing), unless you are SURE that it is the same problem someone else is facing.

And finally, like I end every blog post about RSiteCatalyst, please note that **I’m** **not an Adobe employee**. Please don’t send me your API credentials, expect immediate replies (especially for you e-commerce folks sweating the holiday season!) or ask to set up phone calls to troubleshoot your problems. This is open-source software…Willem Paling and I did the hard part writing it, you’re expected to support yourself as best as possible unless you believe you’re encountering a bug. Then use GitHub <img class="wp-smiley" src="http://i1.wp.com/randyzwitch.com/wp-includes/images/smilies/icon_smile.gif" alt=":)" data-recalc-dims="1" />

&nbsp;
