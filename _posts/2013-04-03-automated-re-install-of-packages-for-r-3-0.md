---
title: Automated Re-Install of Packages for R 3.0
date: 2013-04-03T10:10:09+00:00
author: Randy Zwitch
layout: post
permalink: /automated-re-install-of-packages-for-r-3-0/
category: Programming
tags:
  - R
---
With the big release of <a title="R 3.0 introduction" href="http://www.r-bloggers.com/r-3-0-0-is-released-whats-new-and-how-to-upgrade/" target="_blank">R 3.0</a> today comes an unfortunate side effect of needing to re-install all of your packages. Luckily, R provides a pretty easy method of getting all of your packages into a list for automated re-install.  Here's how to do it for OSX users with a default install to the Library:

For Windows users, the same general process should work, assuming you change the file reference in the _installed.packages_ function to the proper Windows location. The one downside to this method is that only packages that are <a title="CRAN" href="http://cran.r-project.org/" target="_blank">listed on CRAN</a> will be reinstalled, so if you installed anything using devtools, you'll need to re-install those packages again. But at the very least, the code snippet above is a quick way to re-install most of your packages. EDIT, 4/4/13: Per Noam below, you can also use a more direct method: `update.packages(ask=FALSE, checkBuilt = TRUE)`
