---
title: RSiteCatalyst Version 1.4.5 Release Notes
date: 2015-08-17T09:43:36+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-5-release-notes/
category: Analytics
description: It's only been a month since the last RSiteCatalyst update, and this update is also a pretty minor update in terms of functionality.
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
It's only been a month since the [last RSiteCatalyst update](http://randyzwitch.com/rsitecatalyst-version-1-4-4-release-notes/), and this update is also a pretty minor update in terms of functionality.

## Set Your Own Endpoint

For the overseas users (or companies with weird setups), you can now use the `endpoint` argument in the `SCAuth()` function to specify your API endpoint. For the most part, this is not recommended, as RSiteCatalyst pings the Adobe Analytics API to evaluate the proper API endpoint to use, but if for some reason you are having issues, you can override what the Adobe API says.

## New Functions

For this release, I briefly looked through the API explorer to see if  there were any useful methods that had been missed. `GetFunctions` (Get definitions of all formula/functions in Adobe Analytics), `QueueSummary` (Get summary metrics for numerous report suites at once), `GetPrivacySettings` (Privacy Settings at a report suite level), and `GetTemplate` (Get template that a current report suite was built from). With the exception of `QueueSummary()`, none of these functions will likely get you much in the way of additional analytics capabilities, but they are there should you want to use them.

## Feature Requests/Bugs

As always, if you come across bugs or have feature requests, please continue to use the [RSiteCatalyst GitHub Issues](https://github.com/randyzwitch/RSiteCatalyst/issues) page to submit issues. Don’t worry about cluttering up the page with tickets, please fill out a new issue for anything you encounter (with code you’ve already tried and is failing), unless you are SURE that it is the same problem someone else is facing.

Outside of patching really serious bugs, I will likely **not spend any more time improving this package in the future**; my interests have changed, and RSiteCatalyst is pretty much complete as far as I'm concerned. That said, contributors are also _very welcomed_. If there is a feature you'd like added, and especially if you can fix an outstanding issue reported at GitHub, we'd love to have your contributions. Willem and I are both parents of young children and have real jobs outside of open-source software creation, so we welcome any meaningful contributions to RSiteCatalyst that anyone would like to contribute.
