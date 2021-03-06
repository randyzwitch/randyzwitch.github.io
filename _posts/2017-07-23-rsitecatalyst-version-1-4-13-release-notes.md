---
title: RSiteCatalyst Version 1.4.13 Release Notes
date: '2017-07-23'
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-4-13-release-notes/
description: Version 1.4.13 of RSiteCatalyst fixed a single, but super important, bug with the OAUTH2 authentication process which prevented users from authenticating
category: Analytics
tags:
- Adobe Analytics
- Omniture
- R
- RSiteCatalyst
---

This blog post will be fairly short, given the minor nature of the update.

Several users complained about OAUTH2 authentication not working, which I didn't know because I usually use the legacy authentication method! Luckily, GitHub user [leocwlau](https://github.com/leocwlau) reported the [issue](https://github.com/randyzwitch/RSiteCatalyst/issues/223) AND provided the [solution](https://github.com/randyzwitch/RSiteCatalyst/pull/224). No other bug fixes were made, nor was any additional functionality added.

So if you ran into an issue where your login no longer worked, version 1.4.13 of RSiteCatalyst should remedy the issue. Even if you hadn't run into this authentication issue, users should still upgrade, as all updates are cumulative in nature.

## Community Contributions
As I've mentioned in many a blog post before this one, I encourage all users of the software to continue reporting bugs via [GitHub issues](https://github.com/randyzwitch/RSiteCatalyst/issues), and especially if you can provide a working code example. Even better, a fix via pull request will ensure that your bug will be addressed in a timely manner and for the benefit to others in the community.

_Note: Please don't email directly via the email in the RSiteCatalyst package, it will not be returned. Having a valid email contact in the package is a requirement to have a package listed on CRAN so they can contact the package author, it is not meant to imply I can/will provide endless, personalized support for free._
