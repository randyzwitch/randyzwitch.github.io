---
title: RSiteCatalyst Version 1.4.4 Release Notes
date: 2015-07-13T09:40:20+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-4-release-notes/
category: Analytics
description: RSiteCatalyst Version 1.4.4 is only a minor update, fixing a bug with multiple reports having null values.
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
It's been about six months since the last [RSiteCatalyst update](http://randyzwitch.com/rsitecatalyst-version-1-4-3-release-notes/), and this update is really just a single bug fix, but a big bug fix at that!

### Sparse Data = Opaque Error Messages

Numerous people have reported receiving an error message from RSiteCatalyst similar to the following:

> 'names' attribute [1] must be the same length as the vector [0]

This is about the least helpful message that could've been returned, but it was an R message indicating an internal function trying to overwrite the column names vector (which had non-zero length) with a vector of length zero (which is an error in the context of a data frame). Thankfully, Willem Paling was able to squash this bug (hopefully) once-and-for-all; the error occurs when a user tries to do a `Queue*`` report with multiple breakdowns, where NULL data is returned by the Adobe API for one of the breakdowns.

So hopefully, if you've run into this error before (which I have to imagine was quite frustrating), you shouldn't see this again with v1.4.4 of RSiteCatalyst. Additionally, tests will be added to the test suite to attempt to trigger this warning, so that this horrible monster of a bug doesn't appear again.

### Authentication Messaging

The only other change of substance was to modify the message returned after calling `SCAuth()`; some users were having issues with API calls not working, after RSiteCatalyst having returned `'Authentication Succeeded'` to the console. RSiteCatalyst never actually validates that your credentials are correct, just that they are stored within the session. The console message has been updated to reflect this.

### Proper Punctuation Prevents Poor Documentation!

![](/wp-content/uploads/2015/07/title-case.png)

The Eagle-Eyed among you might have noticed that my DESCRIPTION file was out of CRAN spec for many months. This has now been fixed, so that the meaning is as clear as possible.

## Feature Requests/Bugs

As always, if you come across bugs or have feature requests, please continue to use the [RSiteCatalyst GitHub Issues](https://github.com/randyzwitch/RSiteCatalyst/issues) page to submit issues. Don’t worry about cluttering up the page with tickets, please fill out a new issue for anything you encounter (with code you’ve already tried and is failing), unless you are SURE that it is the same problem someone else is facing.

Contributors are also _very welcomed_. If there is a feature you'd like added, and especially if you can fix an outstanding issue reported at GitHub, we'd love to have your contributions. Willem and I are both parents of young children and have real jobs outside of open-source software creation, so we welcome any meaningful contributions to RSiteCatalyst that anyone would like to contribute.
