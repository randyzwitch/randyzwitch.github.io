---
id: 2680
title: Five Hard-Won Lessons Using Hive
date: 2014-06-12T13:01:18+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2680
permalink: /hive-five-hard-won-lessons/
tweetbackscheck:
  - 1472972120
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2680";s:7:"tinyurl";s:26:"http://tinyurl.com/kcxxsnv";s:4:"isgd";s:19:"http://is.gd/Us2e4V";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Big Data
  - Hadoop
  - Hive
  - Python
  - R
---
I&#8217;ve been spending a ton of time lately on the data _engineering_ side of &#8216;data science&#8217;, so I&#8217;ve been writing a lot of Hive queries. Hive is a great tool for querying large amounts of data, without having to know very much about the underpinnings of Hadoop. Unfortunately, there are a lot of things about Hive (version 0.12 and before) that aren&#8217;t quite the same as SQL and have caused me a bunch of frustration; here they are, in no particular order.

## 1. Set Hive Temp directory To Same As Final Output Directory

When doing a &#8220;Create Table As&#8221; (CTAS) statement in Hive, <a title="Hive scratch directory" href="http://doc.mapr.com/display/MapR/Hive#Hive-HiveScratchDirectory" target="_blank">Hive allocates temp space for the Map and Reduce portions of the job</a>. If you&#8217;re not lucky, the temp space for the job will be somewhere different than where your table actually ends up being saved, resulting in TWO I/O operations instead of just one. This can lead to a painful delay in when your Hive job says it is finished vs. when the table becomes available (one time, I saw a 30 hour delay writing 5TB of data).

If your Hive jobs seem to hang after the Job Tracker says they are complete, try this setting at the beginning of your session:

<pre>set hive.optimize.insert.dest.volume=true;</pre>

## 2. Column Aliasing In Group By/Order By

Not sure why this isn&#8217;t a default, but if you want to be able to reference your column names by position (i.e. group by 1,2) instead of by name (i.e. group by name, age), then run this at the beginning of your session:

<pre>set hive.groupby.orderby.position.alias=true;</pre>

## 3. Be Aware Of Predicate Push-Down Rules

In Hive, you can get great performance gains if you A) partition your table by commonly used columns/business concepts (i.e. Day, State, Market, etc.) and B) you use the partitions in a WHERE clause. These are known as <a title="Hive Partition-based queries" href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Select#LanguageManualSelect-PartitionBasedQueries" target="_blank">partition-based queries</a>. Otherwise, if you don&#8217;t use a partition in your WHERE clause, you will get a full table scan.

Unfortunately, when doing an OUTER JOIN, Hive will sometimes ignore the fact that your WHERE clause is on a partition and do a full table scan anyway. In order to get Hive to <a title="Hive Predicate Pushdown Rules" href="https://cwiki.apache.org/confluence/display/Hive/OuterJoinBehavior#OuterJoinBehavior-PredicatePushdownRules" target="_blank">push your predicate down</a> and avoid a full table scan, put your predicate on the JOIN instead of the WHERE clause:If you don&#8217;t want to think about the different rules, you can generally put your limiting clauses inside your JOIN clause instead of on your WHERE clause. It _should_ just be a matter of preference (until your query performance indicates it isn&#8217;t!)


  


## 4. Calculate And Append Percentiles Using CROSS JOIN

Suppose you want to calculate the top 10% of your customers by sales. If you try to do the following, Hive will complain about needing a GROUP BY, because percentile_approx() is a summary function:

To get around the the need for a GROUP BY, we can use a CROSS JOIN. A CROSS JOIN is another name for a Cartesian Join, meaning all of the rows from the first table will be joined to ALL of the rows of the second table. Because the subquery only returns one row, the CROSS JOIN provides the desired affect of joining the percentile values back to the original table while keeping the same number of rows from the original table.Generally, you don&#8217;t want to do a CROSS JOIN (because relational data generally is joined on a key), but this is a good use case.

## 5.  Calculating a Histogram

Creating a histogram using Hive should be as simple as calling the <a title="Hive Calculate Histogram" href="https://cwiki.apache.org/confluence/display/Hive/StatisticsAndDataMining#StatisticsAndDataMining-histogram_numeric():Estimatingfrequencydistributions" target="_blank">histogram_numeric()</a> function. However, the syntax and results of this function are just plain weird. To create a histogram, you can run the following:

The results of this query comes back as a list, which is very un-SQL like! To get the data as a table, we can use LATERAL VIEW and EXPLODE:

However, now that we have a table of data, it&#8217;s still not clear how to create a histogram, as the _center of variable-width bins_ is what is returned by Hive. The <a title="Histogram Hive" href="https://cwiki.apache.org/confluence/display/Hive/StatisticsAndDataMining#StatisticsAndDataMining-histogram_numeric():Estimatingfrequencydistributions" target="_blank">Hive documentation for histogram_numeric()</a> references Gnuplot, Excel, Mathematica and MATLAB, which I can only assume can deal with plotting the centers?  Eventually I&#8217;ll figure out how to deal with this using R or Python, but for now, I just use the table as a quick gauge of what the data looks like.

&nbsp;