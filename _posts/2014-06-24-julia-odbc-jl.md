---
id: 2697
title: 'Using Julia As A &#8216;Glue&#8217; Language'
date: 2014-06-24T08:57:31+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2697
permalink: /julia-odbc-jl/
tweetbackscheck:
  - 1472943221
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2697";s:7:"tinyurl";s:26:"http://tinyurl.com/lop2gm4";s:4:"isgd";s:19:"http://is.gd/F5Uabf";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Data Visualization
  - Hadoop
  - Julia
  - Python
  - R
  - Teradata Aster
---
While much of the focus in the Julia community has been on the performance aspects of Julia relative to other scientific computing languages, Julia is also perfectly suited to &#8216;glue&#8217; together multiple data sources/languages. In this blog post, I will cover how to create an interactive plot using <a title="Gadfly.jl documentation" href="http://dcjones.github.io/Gadfly.jl/" target="_blank">Gadfly.jl</a>, by first preparing the data using Hadoop and <a title="Teradata Aster" href="http://www.asterdata.com/" target="_blank">Teradata Aster</a> via <a title="Julia ODBC" href="https://github.com/quinnj/ODBC.jl" target="_blank">ODBC.jl</a>.

The example problem I am going to solve is calculating and visualizing the number of airplanes by hour in the air at any given time in the U.S. for the year 1987. Because of the structure and storage of the underlying data, I will need to write some custom Hive code, upload the data to Teradata Aster via a command-line utility, re-calculate the number of flights per hour using a built-in Aster function, then using Julia to visualize the data.

<!--more-->

## Step 1: Getting Data From Hadoop

In a prior set of <a title="Getting Started Using Hadoop, Part 3: Loading Data" href="http://randyzwitch.com/uploading-data-hadoop-amazon-ec2-cloudera-part-3/" target="_blank">blog posts</a>, I talked about loading the <a title="Airline dataset" href="http://stat-computing.org/dataexpo/2009/" target="_blank">airline dataset</a> into Hadoop, then <a title="Getting Started With Hadoop, Final: Analysis Using Hive & Pig" href="http://randyzwitch.com/getting-started-hadoop-hive-pig/" target="_blank">analyzing the dataset using Hive or Pig</a>. Using ODBC.jl, we can use Hive via Julia to submit our queries. The hardest part of setting up this process is making sure that you have the appropriate Hive drivers for your Hadoop cluster and credentials (which isn&#8217;t covered here). Once you have your DSN set up, running Hive queries is as easy as the following:In this code, I&#8217;ve written my query as a Julia string, to keep my code easily modifiable. Then, I pass the Julia string object to the query() function, along with my ODBC connection object. This query runs on Hadoop through Hive, then streams the result directly to my local hard drive, making this a very RAM efficient (though I/O inefficient!) operation. 

## Step 2: Shelling Out To Load Data To Aster

Once I created the file with my Hadoop results in it, I now have a decision point: I can either A) do the rest of the analysis in Julia or B) use a different tool for my calculations. Because this is a toy example, I&#8217;m going to use Teradata Aster to do my calculations, which provides a convenient function called &#8216;burst()&#8217; to regularize timestamps into fixed intervals. But before I can use Aster to &#8216;burst&#8217; my data, I first need to upload it to the database. While I could loop over the data within Julia and insert each record one at a time, Teradata provides a command-line utility to upload data in parallel. Running command-line scripts from within Julia is as easy as using the run() command, with each command surrounded in backticks:While I could&#8217;ve run this at the command-line, having all of this within an IJulia Notebook keeps all my work together, should I need to re-run this in the future.

## Step 3: Using Aster For Calculations

With my data now loaded in Aster, I can normalize the timestamps to UTC, then &#8216;burst&#8217; the data into regular time intervals. Again, all of this can be done via ODBC from within Julia:Since it might not be clear what I&#8217;m doing here, the &#8216;burst()&#8217; function in Aster takes a row of data with a start and end timestamp, and potentially returns multiple rows which normalize the time between the timestamps. If you&#8217;re familiar with pandas in Python, it&#8217;s a similar functionality to &#8216;resample&#8217; on a series of timestamps.
  


## Step 4: Download Smaller Data Into Julia, Visualize

Now that the data has been processed from Hadoop to Aster through a series of queries, we now have a much smaller dataset that can be loaded into RAM and processed by Julia:The Gadfly code above produces the following plot (using a d3.js backend for interactivity): 

<div id="my_chart">
</div>



Since this chart is in UTC, it might not be obvious what the interpretation is of the trend. Because the airline dataset represents flights either leaving or returning to the United States, there are many fewer planes in the air overnight and the early morning hours (UTC 7-10, 2-5am Eastern). During the hours when the airports are open, there appears to be a limit of roughly 2500 planes per hour in the sky.

## Why Not Do All Of This In Julia?

At this point, you might be tempted to wonder why go through all of this effort? Couldn&#8217;t this all be done in Julia?

Yes, you probably could do all of this work in Julia with a sufficiently large amount of RAM. As a proof-of-concept, I hope I&#8217;ve shown that there is much more to Julia than micro-benchmarking Julia&#8217;s speed relative to other scientific programming languages. You&#8217;ll notice that in none of my code have I used any type annotations, as none would really make sense (nor would they improve performance).  And although this is a toy example purposely using multiple systems, I much more frequently use Julia in this manner at work than doing linear algebra or machine learning.

So next time you&#8217;re tempted to use Python or R or shell scripting or whatever, consider Julia as well. Julia is just as at-home as a scripting language as a scientific computing language.

&nbsp;