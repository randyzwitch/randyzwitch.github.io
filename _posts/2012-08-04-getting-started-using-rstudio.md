---
title: 'Getting Started Using R, Part 1:  RStudio'
date: 2012-08-04T11:58:14+00:00
author: Randy Zwitch
layout: post
permalink: /getting-started-using-rstudio/
category: DataScience
tags:
  - R
  - rattle
  - Rcmdr
  - RStudio
  - SAS
---
<del>Despite [my preference for SAS over R](http://randyzwitch.com/learning-r-sas/ "Learning R has really made me appreciate SAS"),</del> there are some add-ons to "basic" R that I've found that have made my learning process way easier. While I'm still in my infancy in learning R, I feel like once I found these additional tools, my ability to use R to get work done improved significantly.

In this first post of three, I'll discuss <a title="R Studio main site" href="http://rstudio.org/" target="_blank">RStudio</a>, a more friendly access point to the default installation of R.  My second post will discuss <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank">Rcmdr</a>, a GUI developed for students taking a basic college-level course in Statistics.  The third post will cover <a title="rattle download CRAN" href="http://cran.r-project.org/web/packages/rattle/index.html" target="_blank">rattle</a>, a GUI specifically designed for data mining (as opposed to more general statistics like <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank">Rcmdr</a>).

## RStudio

![r-studio](/wp-content/uploads/2012/08/r-studio.png)

<p class="wp-caption-text">
R Studio is an IDE that dramatically improves the R experience
</p>

<a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> is an open-source Integrated Development Environment (IDE) that provides a more consistent user experience to R.  There are many great features of <a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> over "basic" R, including:

  * Consistent windowing between sessions (customizable by the user)
  * Point-and-click exploration of data frames and other data objects
  * Importing data files through dialog box functionality
  * Customizable code syntax highlighting, auto-complete, and Help menu access from the code editor
  * Ability to see all installed packages, turn on packages using a checkbox, and download libraries (and their dependencies) without having to write any code
  * Version Control using GitHub

While <a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> doesn't provide a GUI that will help you run a regression model or build a graph, it provides a more "friendly" environment to work in as compared to the command-line interface of a default installation of R.  I find that by having elements like the currently active data objects and available/active packages with links to the Help files "exposed" at all times, [RStudio](http://rstudio.org/download/ "R Studio download") reminds me of where my analysis has been and gives me a quick way to think about "What Else?" to pursue if I hit a roadblock.

## Installation of RStudio

<a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> installs like any other program for Windows or Mac OSX.  As far as I can tell, there are no advantages to using <a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> in either environment, both the Windows and OSX versions seem to work equally well.  The most important consideration is that RStudio is just an "add-on" so-to-speak, it does not include R itself.  So be sure to go to one of the <a title="CRAN downloads for R" href="http://cran.cs.wwu.edu/" target="_blank">Comprehensive R Archive Network (CRAN) sites</a> to download R first.
