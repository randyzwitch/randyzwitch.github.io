---
title: RSiteCatalyst Version 1.2 Release Notes
date: 2013-11-05T08:29:16+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-version-1-2-release-notes/
category: Analytics
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
Version 1.2 of the <a title="RSiteCatalyst CRAN" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst</a> package to access the Adobe Analytics API is now available on CRAN! Changes include:

  * Removed RCurl package dependency
  * Changed argument order for GetAdminConsoleLog to avoid error when date not passed
  * Return proper numeric type for metric columns
  * Fixed bug in GetEVars function
  * Added validate:true flag to API to improve error reporting
  * Removed remaining references to Omniture

For the most part, the only noticeable change for most users will be that you no longer need to call _as.numeric()_ on a DataFrame after getting the results of an API call, as all functions now return the proper numeric type.

### Changes from Development Version

For any of you out there that may have installed the 1.2 development version directly from GitHub, the only difference between the 1.2 development version and the stable, CRAN version of the package is that support for the Adobe Analytics Real Time API has been removed. This functionality will continue to be developed on the <a title="RSiteCatalyst version 1.3" href="https://github.com/randyzwitch/RSiteCatalyst/tree/version_1_3" target="_blank">1.3 development branch</a> on GitHub.





### Testing

For this release, I've made a more concerted effort to test RSiteCatalyst on various platforms outside of OSX (where I do my development). RSiteCatalyst works in the following environments:

  * OSX Lion and prior
  * Ubuntu 12.04 LTS
  * Windows 7 64-bit SP1
  * Windows 8.1 64-bit
  * R 2.15.2 and newer
  * R and RStudio

If your environment is not listed above, it is still likely the case that RSiteCatalyst will work in your environment, as there is no operating-system-specific code in the package. If you are finding issues, validate that you have all package dependencies installed, your Adobe account has Web Service Access privileges (set in Admin panel), you have permission access to the report suites you are trying to access (also an Admin panel setting) and that your company doesn't have any firewall settings that would prevent API access.

### Support

If you run into any problems with RSiteCatalyst, please <a title="RSiteCatalyst GitHub issues" href="https://github.com/randyzwitch/RSiteCatalyst/issues" target="_blank">file an issue on GitHub</a> so it can be tracked properly. Note that I'm not an Adobe employee, so I can only provide so much support, as in most cases I can't validate your settings to ensure you are set up correctly (nor do I have any inside information about how the system works 🙂 )

&nbsp;
