---
id: 1246
title: Learning R Has Really Made Me Appreciate SAS
date: 2012-07-25T11:34:03+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1246
permalink: /learning-r-sas/
tweetbackscheck:
  - 1473001281
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1246";s:7:"tinyurl";s:26:"http://tinyurl.com/bsbvgs4";s:4:"isgd";s:19:"http://is.gd/MOfdtV";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Data Science
tags:
  - Data Visualization
  - Hadoop
  - Open Source
  - R
  - SAS
---
For the past 18 months, it seems like all I&#8217;ve heard about in the digital marketing industry is &#8220;big data&#8221;, and with that, mentions of using Hadoop and R to solve these sorts of problems.  Why are these tools the most often mentioned?  Because they are open source, i.e. free of charge!

But as I&#8217;ve tried to learn R, I keep asking myself&#8230;are all of my colleagues out of their minds?  Or, am I just beyond learning something new?  As of right now, R is just one big hack on top of a hack to me, and the software is only &#8220;free&#8221; if you don&#8217;t consider lost productivity.

<!--more-->

## Need new functionality, just download another R package!

One of the biggest &#8220;pros&#8221; I see thrown around for R relative to a tool like SAS is that when new statistical techniques are invented, someone will code it in R immediately.  A company like SAS make take 5 years to implement the feature, or it may not get implemented at all.  That&#8217;s all fine and good, but the problem I&#8217;ve found is that there are 10 ways to do something in R, and I spend more time downloading packages (along with other packages that are dependencies) than I do learning A SINGLE WAY to do something correctly.

For example, take trying to get summary statistics by group.  In SAS, you use a Proc Summary statement, with either a BY group statement or a CLASS statement.  It&#8217;s fairly simple and it works.

> proc summary data= hs0; var \_numeric\_; class prgtype; output out=results mean= /autolabel autoname inherit; run;

In R, I ran the following code, which should be roughly equivalent:

> by(hs0, hs0$prgtype, mean)

Very simple, fewer lines&#8230;and technically wrong, throwing a 6 unhelpful errors for a single line of code.  Because it was decided that &#8220;mean&#8221; as a function would be deprecated in R.  WHY???  It&#8217;s so simple, why modify the language like that?

According to the error message, I&#8217;m supposed to use colMeans instead&#8230;but once you get to how, you&#8217;re on your own, the Help documentation is garbage.  Some combination of &#8220;by&#8221; and &#8220;colMeans&#8221; might work, but I don&#8217;t have an example to follow.

Google sent me to the <a title="Quick-R website" href="http://www.statmethods.net/" target="_blank">Quick-R</a> website, and I found a &#8220;<a title="Descriptive Statistics in R" href="http://www.statmethods.net/stats/descriptives.html" target="_blank">descriptive statistics</a>&#8221; article with by group processing&#8230;with the recommendation of using the &#8220;psych&#8221; package or the &#8220;doBy&#8221; package.  But <a title="Comprehensive R Archive Network" href="http://cran.cs.wwu.edu/" target="_blank">CRAN</a> won&#8217;t let me download all of the dependencies, so again, stuck trying to do the simplest thing in statistics.





## Let&#8217;s be fast and run everything in RAM!

My next favorite hassle in R is that you are expected to continuously monitor how many data elements you have active in a workspace.  R runs completely in RAM (as opposed to SAS which runs a combination of RAM for processing and hard disks for storage), so if you want to do something really &#8220;big&#8221;, you will quickly choke your computer.  I tried to work with a _single day_ of Omniture data from the raw data feed, and my MacBook Pro with 6GB of memory was shot.  I believe the file was 700,000 rows by 300 columns, but I could be mis-remembering.  That&#8217;s not even enough data to think about performance-tuning a program in SAS, any slop code will run quickly.

How does one solve these memory errors in R?  Port to Amazon cloud seems to be the most commonly given suggestion.  But that&#8217;s more setup time, getting an R instance over to Amazon, your data over to Amazon..and now you are renting hardware.

## R is great for data visualization!

From what I&#8217;ve seen from the demo(graphics) tutorial, R does have some pretty impressive visualization capabilities.  Contour maps, histograms, boxplots&#8230;there seems to be a lot of capability here beyond the realm of a tool like Excel (which, besides not being free, isn&#8217;t really for visualization).  SAS has some graphics capabilities, but they are a bit hard to master.

But for all of the hassle to get your data formatted properly, downloading endless packages, avoiding memory errors, you could just pay for Tableau and get working.  Then, once you have your visualizations done in Tableau, if you are using Tableau server you can share interactive dashboards with others.  As far as I know, R graphics are static image exports, so you&#8217;re stuck with &#8220;flat&#8221; presentations.

## Maybe, it&#8217;s just me

For R diehards, the above verbiage probably just sounds like whining from someone who is too new to appreciate the greatness of R or too stuck in the &#8220;old SAS way&#8221;.  That&#8217;s certainly possible.  But from my first several weeks of trying to use R, the level of frustration is way beyond anything I experienced when I was learning SAS.

Luckily, I don&#8217;t currently have any consulting projects that require R or SAS at the moment, so I can continue to try and learn why everyone thinks R is so great.  But from where I sit right now, the licensing fee from SAS doesn&#8217;t seem so bad when it allows me to get to doing productive work instead of building my own statistics software piece-by-piece.
