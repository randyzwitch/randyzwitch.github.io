---
id: 3652
title: RSiteCatalyst Version 1.4.5 Release Notes
date: 2015-08-17T09:43:36+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3652
permalink: /rsitecatalyst-version-1-4-5-release-notes/
tweetbackscheck:
  - 1472638781
shorturls:
  - 'a:3:{s:9:"permalink";s:65:"http://randyzwitch.com/rsitecatalyst-version-1-4-5-release-notes/";s:7:"tinyurl";s:26:"http://tinyurl.com/ogsuwjs";s:4:"isgd";s:19:"http://is.gd/TdAOM3";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Digital Analytics
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
It&#8217;s only been a month since the <a href="http://randyzwitch.com/rsitecatalyst-version-1-4-4-release-notes/" target="_blank">last RSiteCatalyst update</a>, and this update is also a pretty minor update in terms of functionality.

## Set Your Own Endpoint

For the overseas users (or companies with weird setups), you can now use the _endpoint_ argument in the _SCAuth()_ function to specify your API endpoint. For the most part, this is not recommended, as RSiteCatalyst pings the Adobe Analytics API to evaluate the proper API endpoint to use, but if for some reason you are having issues, you can override what the Adobe API says.

## New Functions

For this release, I briefly looked through the API explorer to see if  there were any useful methods that had been missed. _GetFunctions_ (Get definitions of all formula/functions in Adobe Analytics), _QueueSummary_ (Get summary metrics for numerous report suites at once), _GetPrivacySettings_ (Privacy Settings at a report suite level),  and _GetTemplate_ (Get template that a current report suite was built from). With the exception of _QueueSummary()_ , none of these functions will likely get you much in the way of additional analytics capabilities, but they are there should you want to use them.

## Feature Requests/Bugs

As always, if you come across bugs or have feature requests, please continue to use the <a title="RSiteCatalyst GitHub" href="https://github.com/randyzwitch/RSiteCatalyst/issues" target="_blank">RSiteCatalyst GitHub Issues</a> page to submit issues. Don’t worry about cluttering up the page with tickets, please fill out a new issue for anything you encounter (with code you’ve already tried and is failing), unless you are SURE that it is the same problem someone else is facing.

Outside of patching really serious bugs, I will likely **not spend any more time improving this package in the future**; my interests have changed, and RSiteCatalyst is pretty much complete as far as I&#8217;m concerned. That said, contributors are also _very welcomed_. If there is a feature you&#8217;d like added, and especially if you can fix an outstanding issue reported at GitHub, we&#8217;d love to have your contributions. Willem and I are both parents of young children and have real jobs outside of open-source software creation, so we welcome any meaningful contributions to RSiteCatalyst that anyone would like to contribute.

&nbsp;