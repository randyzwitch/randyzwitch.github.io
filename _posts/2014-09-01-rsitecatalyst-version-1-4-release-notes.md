---
title: RSiteCatalyst Version 1.4 Release Notes
date: 2014-09-01T20:30:14+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2968
permalink: /rsitecatalyst-version-1-4-release-notes/
tweetbackscheck:
  - 1472798743
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2968";s:7:"tinyurl";s:26:"http://tinyurl.com/muxm9ad";s:4:"isgd";s:19:"http://is.gd/d7Ocso";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
tags:
  - Adobe Analytics
  - R
  - RSiteCatalyst
---
It felt like it would never happen, but <a title="RSiteCatalyst CRAN" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst v1.4</a> is now available on CRAN! There are numerous changes in this version of the package, so unlike previous posts, there won't be any code examples.

## THIS VERSION IS ONE BIG BREAKING CHANGE

While not the most important _improvement_, it can't be stressed enough that migrating to v1.4 of RSiteCatalyst is likely going to require re-writing some of your prior code. There are numerous reasons for the breaking changes, including:

  1. Adobe made breaking changes to the API between v1.3 and v1.4, so we had to as well
  2. I partnered with <a title="Willem Paling GitHub" href="https://github.com/WillemPaling" target="_blank">Willem Paling</a>, who merged his <a title="RAA - Original Source for RSiteCatalyst 1.4" href="https://github.com/WillemPaling/RAA" target="_blank">RAA</a> codebase into RSiteCatalyst to contribute most of the code in this version
  3. Better consistency in R functions around keywords and options

Of the changes listed above, I think #2 and #3 are the biggest benefit to end-users of RSiteCatalyst. The codebase is now much cleaner and more consistent in terms of the keyword arguments, has better error handling, and having a second person helping maintain the project has led to a better overall package.

Where you'll see the most difference is that all keyword arguments are now all lowercase and multi-word keyword arguments are now separated by a period instead of underscores or weird caMelCAse. We tried to maintain the same keyword order where possible, to minimize code re-writes where possible.





## Pathing and Fallout Reports

Probably the most useful improvement to RSiteCatalyst comes from those breaking changes by Adobe, which is the inclusion of Pathing and Fallout reports! I can't say with absolute certainty, but I think with these two additional reports, the API is pretty much at parity to the Adobe Analytics interface itself. So now you can create your funnels using <a title="ggplot2 documentation" href="http://ggplot2.org/" target="_blank">ggplot2</a>, make force-directed graphs or Sankey charts using <a title="d3Network documentation" href="http://christophergandrud.github.io/d3Network/" target="_blank">d3Network</a> or just simple reporting of top 'Next Pages' and the like.

## Support for OAuth Authentication

As part of Adobe's commitment to consolidating systems under the single Adobe Marketing Cloud, authentication with the API using OAuth is now possible. How to set up OAuth authentication is beyond the scope of this blog post, but you can get more information at this link: <a title="Adobe Marketing Cloud OAuth" href="https://marketing.adobe.com/resources/help/en_US/mcloud/link_accounts.html" target="_blank">Adobe Marketing Cloud OAuth</a>.

For those of you who don't have OAuth credentials setup yet, the "legacy" version of authentication is still available in RSiteCatalyst.

## GetClassifications, Inline Segmentation and More

Finally, there is now additional functionality on the descriptive side, as you can now download which Classifications are defined for a report suite, segments can be defined inline (i.e. from R) for the 'Queue' reports using the _BuildClassificationValueSegment() _function and functions that existed in previous versions of RSiteCatalyst tend to have more options defined than in previous versions.

## Summary/We Want To Hear From You

While this new version of RSiteCatalyst has some annoying breaking changes, overall the package is much more robust than prior versions. I think the increase in functionality is well worth the minor annoyance of re-writing some code. Additionally, eventually Adobe will deprecate v1.3 of their API, so it's better to move over sooner rather than later.

But for all of the improvements that have been made, there's always room for improvement, whether it's fixing unforeseen bugs, adding new features, improving the documentation or anything else. For all suggestions, bug fixes and the like, please submit them to the <a title="RSiteCatalyst GitHub" href="https://github.com/randyzwitch/RSiteCatalyst" target="_blank">GitHub repository</a> so that myself and Willem can evaluate and incorporate them. We're also VERY open to any of you in the R community who are able to patch the code or add new features. As a friend in the data science community says, a Pull Request is always better than a Feature Request 🙂

Happy API'ing everyone!

&nbsp;
