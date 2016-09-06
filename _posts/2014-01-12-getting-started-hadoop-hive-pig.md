---
title: 'Getting Started With Hadoop, Final: Analysis Using Hive &#038; Pig'
date: 2014-01-12T20:25:32+00:00
author: Randy Zwitch
layout: post
permalink: /getting-started-hadoop-hive-pig/
category: Data Science
tags:
  - Hadoop
  - Hive
  - Pig
---
We've finally made it to the final post in this tutorial! In my prior posts about getting started with <a title="Hadoop posts" href="http://randyzwitch.com/tag/hadoop/" target="_blank">Hadoop</a>, we've covered the entire lifecycle from how to set up a small cluster using Amazon EC2 and Cloudera through how to load data using Hue. With our data loaded in HDFS, we can finally move on to the actual analysis portion of the <a title="Airline dataset" href="http://stat-computing.org/dataexpo/2009/the-data.html" target="_blank">airline dataset</a> using Hive and Pig.



## Basic Descriptive Statistics Using Hive

In <a title="Getting Started with Hadoop Part 4" href="http://randyzwitch.com/hadoop-creating-tables-hive/" target="_blank">part 4</a> of this tutorial, we used a Hive script to create a view named "vw_airline" to hold all of our airline data. Running a simple query is as easy as running the following in the Hive window in Hue. Note that this is ANSI-standard SQL code, even though we are submitting it using Hive:

[<img class="wp-image-2302 alignnone" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/simple-hive-query.png?resize=550%2C304" alt="simple-hive-query" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/simple-hive-query.png)

A simple query like this is a great way to get a feel for the table, including determining whether or not the files were loaded correctly. Once the results are displayed, you can create simple visualizations like bar charts, line plots, scatterplots and pie charts. The results of the following query are shown below. Knowing this dataset, I can tell that the files were loaded incorrectly; the dips at Years 1994 and 2004 are too few records and will need to be reloaded.

<div id="attachment_2312" style="width: 560px" class="wp-caption alignleft">
  <a href="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/hive-visualization-results.png"><img class=" wp-image-2312" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/hive-visualization-results.png?resize=550%2C318" alt="hive-visualization-results" data-recalc-dims="1" /></a>

  <p class="wp-caption-text">
    1994 and 2004 have too few rows, which was validated using `wc -l 1994.csv` at the command line (outside of Hadoop)
  </p>
</div>

Besides just simple counts, Hive supports nearly all standard SQL syntax relative to functions such as SUM, COUNT, MIN, MAX, etc., table joins, user-defined functions (UDF), window functions...pretty much everything that you are used to from other SQL tools.  AFAIK, the only thing that Hive doesn't support is nested sub-queries, but that's on the <a title="Hortonworks Stinger Initiative" href="http://hortonworks.com/labs/stinger/" target="_blank">Stinger initiative for improving Hive</a>. However, depending on the nested subquery being performed, you might be able to accomplish the same thing using a <a title="Hive LEFT SEMI JOIN" href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Joins#LanguageManualJoins-Examples" target="_blank">LEFT SEMI JOIN</a>.

## Using Pig for Analytics

It's important to realize that Hadoop isn't just another RDBMS where you run SQL. Using Pig, you can <a title="Pig syntax basics" href="http://pig.apache.org/docs/r0.12.0/start.html#data-work-with" target="_blank">write scripts for calculation</a> in a similar manner to using other high-level languages such as Python or R.

For example, suppose we wanted to calculate the average distance for each route. A Pig script to calculate this might look like the following:While it is possible to calculate average distance using Hive and a GROUP BY statement, one of the benefits to using Pig is having control over every step of the data flow. So while Hive queries tend to answer a single question at a time, Pig allows an analyst to chain together any number of steps in a data flow. In the example above, we could pass the average distance for each route to another transformation, join it back to the original dataset or do anything else our analyst minds can imagine!



## Summary

Over these five blog posts, I've outlined how to get started with Hadoop and 'Big Data' using Amazon and Cloudera/Hortonworks. Hopefully I've been able to demystify the <a title="Hadoop concepts" href="http://randyzwitch.com/big-data-hadoop-amazon-ec2-cloudera-part-1/" target="_blank">concepts and terminology behind Hadoop</a>, shown that <a title="Hadoop on Amazon EC2 using Cloudera" href="http://randyzwitch.com/big-data-hadoop-amazon-ec2-cloudera-part-2/" target="_blank">setting up a Hadoop using Cloudera on Amazon EC2</a> isn't unsurmountable, and <a title="Loading data into Hadoop HDFS" href="http://randyzwitch.com/uploading-data-hadoop-amazon-ec2-cloudera-part-3/" target="_blank">loading data</a> and analyzing it using Hive and Pig isn't dramatically different than using SQL on other database systems you may have encountered in the past.

While there's a lot of hype around 'Big Data', data sizes aren't going to be getting any smaller in the future. So spend the $20 in AWS charges and build a Hadoop cluster! There's no better way to learn than by doing...
