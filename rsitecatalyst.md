---
id: 1884
title: RSiteCatalyst
date: 2013-06-15T14:03:44+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?page_id=1884
tweetbackscheck:
  - 1472922055
shorturls:
  - 'a:3:{s:9:"permalink";s:36:"http://randyzwitch.com/?page_id=1884";s:7:"tinyurl";s:26:"http://tinyurl.com/n49y2af";s:4:"isgd";s:19:"http://is.gd/pOOO02";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
livefyre_version:
  - 3
---
### Introduction video:



### Background

The idea for creating an R package for the <a title="Adobe Developer Connection" href="https://developer.omniture.com/en_US" target="_blank">Adobe SiteCatalyst REST API</a> was born from my experience as a digital analytics consultant. Now that companies are getting further along the digital analytics maturity model, the need for better analysis tools was becoming pretty apparent.

I've seen clients using Report Builder within Excel with HUNDREDS of requests, only to then use complicated formulas to join data and multiple conditional formatting statements to achieve their goals. By stretching the limits of Report Builder and Excel in this manner, so much time was wasted formatting instead of doing actual analysis. And even then, these were just reports that were generated, not actual insights!

Of course, the alternative to this was either 1) use SiteCatalyst reports straight from the tool interface or 2) take a raw data feed from Adobe then use a BI tool like <a title="Tableau" href="http://www.tableausoftware.com/" target="_blank">Tableau</a>, <a title="GoodData" href="http://www.gooddata.com/" target="_blank">GoodData</a>, or purchase a platform such as <a title="iJento" href="http://www.ijento.com/" target="_blank">iJento</a> to hold the data and perform analysis. The former is what Report Builder functionality was meant to supplement, and the latter quickly gets into Enterprise Data Warehousing and is a pretty big hammer to wield.

### SiteCatalyst API

Somewhere in the middle of the prior two options sits the SiteCatalyst API. The biggest problem to date (for me) with the API was that the examples on the <a title="Adobe Developer Connection" href="https://developer.omniture.com/en_US" target="_blank">Adobe Developer Connection</a> were written in C# and PHP, two languages I didn&#8217;t know! So that left R&#8230;

So along with my colleague <a title="Jowanza Joseph Twitter" href="https://twitter.com/jowanza" target="_blank">Jowanza Joseph</a>, we set out to write a package in R that would allow for an analyst to efficiently get digital analytics data from SiteCatalyst for later data processing. While we could&#8217;ve just built the connector to the API and left the parsing of the JSON strings to the user, we felt it was important to take the next step and parse the JSON into R dataframes to lower the barrier to using the SiteCatalyst API as much as possible.

Of course, using RSiteCatalyst still requires some basic facility with the R language. There are many <a title="Coursera R class" href="https://www.coursera.org/course/compdata" target="_blank">tutorials</a> and <a title="R bloggers" href="http://www.r-bloggers.com/" target="_blank">resources</a> out there for learning R, and in our opinion, learning to program is one of the most important skills an analyst can do to further their career.

### Video & Examples

The video above is about 15 minutes long and covers the most common functions that will be used from the RSiteCatalyst package. While it&#8217;s highly likely that this package will add new features over time, the video and examples should continue to work into the future. The package is also well documented within R, with each function having an explanation and <a title="Example code snippets from RSiteCatalyst video" href="http://randyzwitch.com/wp-content/uploads/2013/06/rsitecatalyst-doc-code.zip" target="_blank">example code snippets</a>.
