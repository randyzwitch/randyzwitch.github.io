---
id: 3938
title: 'Adobe Analytics Clickstream Data Feed: Calculations and Outlier Analysis'
date: 2016-05-24T11:11:20+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3938
permalink: /adobe-analytics-clickstream-data-feed-calculations/
tweetbackscheck:
  - 1472925109
shorturls:
  - 'a:2:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3938";s:7:"tinyurl";s:26:"http://tinyurl.com/za2duxq";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
tags:
  - Adobe Analytics
  - Data Visualization
  - Omniture
  - R
  - SQL
---
In a previous post, I outlined how to load [daily Adobe Analytics Clickstream data feeds](http://randyzwitch.com/adobe-analytics-clickstream-data-feed-relational-database/) into a PostgreSQL database. While this isn&#8217;t a long-term scalable solution for large e-commerce companies doing millions of page views per day, for exploratory analysis a relational database structure can work well until a more robust solution is put into place (such as Hadoop/Spark).





## Data Validation <groan>

Before digging too deeply into the data, we should validate that data from the data feed in our database ([custom database view code](https://gist.github.com/randyzwitch/7a9c48e7132e6ed9dfb0d02ec906961c)) matches what we observe from other sources (mainly, the Adobe Analytics interface and/or [RSiteCatalyst](http://randyzwitch.com/tag/rsitecatalyst/)). Given the Adobe Analytics data feed represents an export of the underlying data, and Adobe provides the formulas in the [data feed documentation](https://marketing.adobe.com/resources/help/en_US/sc/clickstream/datafeeds_calculate.html), _in theory_ you should be able to replicate the numbers exactly:

The code snippet above shows the validation, and sure enough, the &#8220;two different sources&#8221; show the same exact values (i.e. differences are 0), so everything has been loaded properly into the PostgreSQL database.

## Finding Anomalies For Creating Bot Rules

With the data validated, we can now start digging deeper into the data. As an example, although I have [bot filtering](https://marketing.adobe.com/resources/help/en_US/reference/bot_rules.html) enabled, this only handles bots on the [IAB bot list](http://www.iab.com/guidelines/iab-abc-international-spiders-bots-list/) but not necessarily people trying to scrape my site (or worse).

To create a <a href="https://marketing.adobe.com/resources/help/en_US/reference/t_create_bot_rules.html" target="_blank">custom bot rule in Adobe Analytics</a>, you can use IP address(es) and/or User-Agent string. However, as part of data exploration we are not limited to just these features (assuming, of course, that you can map your feature set back to an IP/User-Agent combo). To identify outlier behavior, I&#8217;m going to use a technique called &#8216;[local outlier factors](http://www.dbs.ifi.lmu.de/Publikationen/Papers/LOF.pdf)&#8216; using the [Rlof](https://cran.r-project.org/web/packages/Rlof/index.html) package in R with the following data features:

  * Distinct Days Visited
  * Total Pageviews
  * Total Visits
  * Distinct Pages Viewed
  * Pageviews Per Visit
  * Average Views Per Page

These aren&#8217;t the only features I could&#8217;ve used, but it should be pretty easy to view bot/scraper traffic using these metrics. Here&#8217;s the code:

A local outlier factor greater than 1 is classified as a potential outlier. Here&#8217;s a visual of the lof scores for the top 500 _worst_ scoring IP addresses (<a href="https://gist.github.com/randyzwitch/178d72e01e30943f6af82c48a47c4478" target="_blank">vegalite R graph code</a>):

<div id="vis">
</div>



We can see from the graph that there are at least 500 IP addresses that are potential outliers (since the line doesn&#8217;t go below a lof value of 1). These points are now a good starting place to go back to our overall table and inspect the entire datafeed records by IP address.

## But what about business value?

The example above just scratches the surface on what&#8217;s possible when you have access to the raw data from Adobe Analytics. It&#8217;s possible to do these calculations on my laptop using R because I only have a few hundred-thousand records and IP addresses. But this kind of ops work is pretty low-value, since unless you are trying to detect system hacking, trying to find hidden scrapers/spiders in your data to filter out just modifies the denominator of your KPIs it doesn&#8217;t lead to real money per se.

In the last post of this series, I&#8217;ll cover how to work with the datafeed using Spark, and provide an example of using <a href="http://spark.apache.org/docs/latest/mllib-guide.html" target="_blank">Spark MLLib</a> to increase site engagement.
