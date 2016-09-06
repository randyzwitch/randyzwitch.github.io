---
title: 'Getting Started Using R, Part 2: Rcmdr'
date: 2012-08-06T10:54:18+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1285
permalink: /getting-started-using-r-rcmdr/
tweetbackscheck:
  - 1472931834
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1285";s:7:"tinyurl";s:26:"http://tinyurl.com/d6vevg2";s:4:"isgd";s:19:"http://is.gd/ThFT5z";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Data Science
tags:
  - rattle
  - Rcmdr
  - RStudio
  - SAS
---
In my first post in this series, I discussed _<a title="Getting Started Using R, Part 1:  RStudio" href="http://randyzwitch.com/getting-started-using-rstudio/" target="_blank">RStudio</a>_, an IDE that adds significant functionality and consistency to a basic installation of R.  In this post, I will discuss <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank"><em>Rcmdr</em></a>, a GUI that provides the ability to do basic business statistics without having to code in R.

## Rcmdr ("R Commander")

<div id="attachment_1288" style="width: 510px" class="wp-caption aligncenter">
  <img class="size-full wp-image-1288" title="rcmdr" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr1.png?fit=500%2C253" alt="Rcmdr" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr1.png?w=500 500w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr1.png?resize=150%2C75 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr1.png?resize=300%2C151 300w" sizes="(max-width: 500px) 100vw, 500px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Example Rcmdr window with the "Statistics" menu expanded
  </p>
</div>

<a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank"><em>Rcmdr</em></a> is a package for R that was <a title="Rcmdr main site" href="http://socserv.mcmaster.ca/jfox/Misc/Rcmdr/" target="_blank">created by John Fox</a> at McMaster University in Canada as a means of providing the basic statistics functionality for classroom use.  In this way, <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank"><em>Rcmdr</em></a> is somewhat similar to _[SAS Enterprise Guide](http://www.sas.com/technologies/bi/query_reporting/guide/ "SAS Enterprise Guide")_, a GUI that allows quick access to the power of SAS without the requirement of writing code.

While using <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank"><em>Rcmdr</em></a> won't allow you to tap into every single advanced feature that R provides, it does provide a lot of great "general" functionality that can be used in everyday business such as summary statistics, t-tests, ANOVA, linear regression modeling, graphing and data re-coding.



## Using Rcmdr

For the most part, the <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank"><em>Rcmdr</em></a> dialog boxes all look very similar.  Only the most useful options are provided, such as the variable(s) you are looking to interrogate, variable(s) you'd like to break down your analysis by, what statistics you want the output to display (mean, median, mode, etc.) and so on.  The dialog boxes vary depending on whether you are estimating a model or plotting a graph, but in my preliminary usage I haven't found any dialog boxes that were so confusing that I needed to check the "Help" files.

For example, suppose I wanted to make a boxplot of my data, income by job type .  To do so, I would go to the "Graphs" menu and select "Boxplot", which provides me with the following dialog box:

<div id="attachment_1295" style="width: 539px" class="wp-caption aligncenter">
  <img class="size-full wp-image-1295" title="rcmdr-boxplot-dialog-box" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot-dialog-box.png?fit=529%2C203" alt="Rcmdr dialog box" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot-dialog-box.png?w=529 529w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot-dialog-box.png?resize=150%2C57 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot-dialog-box.png?resize=300%2C115 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot-dialog-box.png?resize=500%2C191 500w" sizes="(max-width: 529px) 100vw, 529px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Rcmdr options for creating a Boxplot
  </p>
</div>

<div id="attachment_1297" style="width: 360px" class="wp-caption alignright">
  <img class="size-full wp-image-1297 " title="rcmdr-boxplot" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot.png?fit=350%2C286" alt="Rcmdr boxplot" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot.png?w=350 350w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot.png?resize=150%2C122 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/08/rcmdr-boxplot.png?resize=300%2C245 300w" sizes="(max-width: 350px) 100vw, 350px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Boxplot output created by Rcmdr
  </p>
</div>

Within this dialog box, there are only 3 choices:  variable to plot (income), variable to break down the graph by (type), and "Identify outliers with mouse", which allows for the user to point at the resulting graph to designate outliers to be labeled on the graph.  When I click "OK" in the dialog box, the result is the boxplot shown to the right. We can see that the "bc" (blue-collar) group has a lower mid-point to the  income range than "prof" (professors) and "wc" (white-collar).

One of the best features of <a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank"><em>Rcmdr</em></a> is that not only do we get the output we requested, but the code window also shows the code that was necessary to create the boxplot.  In this example, the underlying R code is relatively simple:

<pre>boxplot(income~type, ylab="income", xlab="type", data=Duncan)</pre>

By providing the underlying code, [_Rcmdr_](http://cran.r-project.org/web/packages/Rcmdr/index.html "Rcmdr download at CRAN") serves as a teaching tool to move the beginning user towards coding in R directly, or at least, modifying the tool-generated code to include titles or whatever options the user wants to add to the original analysis/output.

## Installation of Rcmdr

Sadly, [_Rcmdr_](http://cran.r-project.org/web/packages/Rcmdr/index.html "Rcmdr download at CRAN") is one of those add-ins that seems to work better on Windows than Mac OSX, at least for the installation portion.  I've been able to successfully install Rcmdr on my relatively old MacBook Pro, but it did take a bit of time to figure out.  Luckily, the instructions to install _<a title="Rcmdr download at CRAN" href="http://cran.r-project.org/web/packages/Rcmdr/index.html" target="_blank">Rcmdr</a>_ on a Mac are fairly well laid out in [this article](http://wiki.math.yorku.ca/index.php/R:Installing_R_and_Rcmdr_on_a_MAC "Rcmdr on Mac OSX").

However, once you get over the hurdle of downloading tcltk and XQuartz (X11 emulator), the program seems to work the same on both platforms.
