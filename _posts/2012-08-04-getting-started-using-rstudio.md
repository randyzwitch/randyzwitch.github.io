---
id: 1262
title: 'Getting Started Using R, Part 1:  RStudio'
date: 2012-08-04T11:58:14+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1262
permalink: /getting-started-using-rstudio/
tweetbackscheck:
  - 1472985266
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1262";s:7:"tinyurl";s:26:"http://tinyurl.com/cfcxjad";s:4:"isgd";s:19:"http://is.gd/1eSVJo";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - R
  - rattle
  - Rcmdr
  - RStudio
  - SAS
---
Despite [my preference for SAS over R](http://randyzwitch.com/learning-r-sas/ "Learning R has really made me appreciate SAS"), there are some add-ons to &#8220;basic&#8221; R that I&#8217;ve found that have made my learning process way easier.  While I&#8217;m still in my infancy in learning R, I feel like once I found these additional tools, my ability to use R to get work done improved significantly.

In this first post of three, I&#8217;ll discuss <a title="R Studio main site" href="http://rstudio.org/" target="_blank"><em>RStudio</em></a>, a more friendly access point to the default installation of R.  My second post will discuss <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank"><em>Rcmdr</em></a>, a GUI developed for students taking a basic college-level course in Statistics.  The third post will cover <a title="rattle download CRAN" href="http://cran.r-project.org/web/packages/rattle/index.html" target="_blank"><em>rattle</em></a>, a GUI specifically designed for data mining (as opposed to more general statistics like <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank"><em>Rcmdr</em></a>).

## RStudio

<div id="attachment_1266" style="width: 510px" class="wp-caption aligncenter">
  <img class="size-full wp-image-1266" title="r-studio" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/r-studio.png?fit=500%2C313" alt="" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/r-studio.png?w=500 500w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/r-studio.png?resize=150%2C93 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/r-studio.png?resize=300%2C187 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/r-studio.png?resize=479%2C300 479w" sizes="(max-width: 500px) 100vw, 500px" data-recalc-dims="1" />
  
  <p class="wp-caption-text">
    R Studio is an IDE that dramatically improves the R experience
  </p>
</div>

<a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> is an open-source Integrated Development Environment (IDE) that provides a more consistent user experience to R.  There are many great features of <a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> over &#8220;basic&#8221; R, including:

  * Consistent windowing between sessions (customizable by the user)
  * Point-and-click exploration of data frames and other data objects
  * Importing data files through dialog box functionality
  * Customizable code syntax highlighting, auto-complete, and Help menu access from the code editor
  * Ability to see all installed packages, turn on packages using a checkbox, and download libraries (and their dependencies) without having to write any code
  * Version Control using GitHub

<!--more-->


  
While <a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> doesn&#8217;t provide a GUI that will help you run a regression model or build a graph, it provides a more &#8220;friendly&#8221; environment to work in as compared to the command-line interface of a default installation of R.  I find that by having elements like the currently active data objects and available/active packages with links to the Help files &#8220;exposed&#8221; at all times, [RStudio](http://rstudio.org/download/ "R Studio download") reminds me of where my analysis has been and gives me a quick way to think about &#8220;What Else?&#8221; to pursue if I hit a roadblock.

## Installation of RStudio

<a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> installs like any other program for Windows or Mac OSX.  As far as I can tell, there are no advantages to using <a title="R Studio download" href="http://rstudio.org/download/" target="_blank">RStudio</a> in either environment, both the Windows and OSX versions seem to work equally well.  The most important consideration is that RStudio is just an &#8220;add-on&#8221; so-to-speak, it does not include R itself.  So be sure to go to one of the <a title="CRAN downloads for R" href="http://cran.cs.wwu.edu/" target="_blank">Comprehensive R Archive Network (CRAN) sites</a> to download R first.