---
id: 3855
title: 'Adobe Analytics Clickstream Data Feed: Loading To Relational Database'
date: 2016-03-18T14:42:23+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3855
permalink: /adobe-analytics-clickstream-data-feed-relational-database/
tweetbackscheck:
  - 1472921883
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3855";s:7:"tinyurl";s:26:"http://tinyurl.com/zs8ak4l";s:4:"isgd";s:19:"http://is.gd/v34Cm6";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
tags:
  - Adobe Analytics
  - Omniture
  - R
  - SQL
---
In my <a href="http://randyzwitch.com/adobe-analytics-clickstream-raw-data-feed/" target="_blank">previous post about the Adobe Analytics Clickstream Data Feed</a>, I showed how it was possible to take a single day worth of data and build a dataframe in R. However, most likely your analysis will require using multiple days/weeks/months of data, and given the size and complexity of the feed, loading the files into a relational database makes a lot of sense. Although there may be database-specific &#8220;fast-load&#8221; tools more appropriate for this application, this blog post will show how to handle this process using only R and <a href="http://www.postgresql.org/download/" target="_blank">PostgresSQL</a>.

## File Organization

Before getting into the loading of the data into PostgreSQL, I like to sort my files by type into separate directories (remember from the [previous post](http://randyzwitch.com/adobe-analytics-clickstream-raw-data-feed/), you&#8217;ll receive three files per day). R makes OS-level operations simple enough:

Were there more file types, I could&#8217;ve abstracted this into a function instead of copying the code three times, but the idea is the same: Check to see if the directory exists, if it doesn&#8217;t then create it and move the files into the directory.

## Connecting and Loading Data to PostgreSQL from R

Once we have our files organized, we can begin the process of loading the files into PostgreSQL using the <a href="https://cran.r-project.org/web/packages/RPostgreSQL/index.html" target="_blank">RPostgreSQL</a> R package.  RPostgreSQL is <a href="https://github.com/rstats-db/DBI" target="_blank">DBI</a>-compliant, so the connection string is the same for any other type of database engine; the biggest caveat of loading your _servercall_ data into a database is the first load is almost guaranteed to require loading as text (using colClasses = &#8220;character&#8221; argument in R). The reason that you&#8217;ll need to load the data as text is that Adobe Analytics implementations necessarily change over time; text is the only column format that allows for no loss of data (we can fix the schema later within Postgres either by using ALTER TABLE or by writing a view).

With this small amount of code, we&#8217;ve generated the table definition structure (<a href="https://gist.github.com/randyzwitch/e26b97d26689b6b31044" target="_blank">see here for the underlying Postgres code</a>), loaded the data, and told Postgres to analyze the table to gather statistics for efficient queries. Sweet, two years of data loaded with minimal effort!

## Loading Lookup Tables Into PostgreSQL

With the server call data loaded into our database, we now need to load our lookup tables. Lucky for us, these do maintain a constant format, so we don&#8217;t need to worry about setting all the fields to text, RPostgreSQL should get the column types correct.

**SHORTCUT**: The dimension tables that are common to all report suites don&#8217;t really change over time, although that isn&#8217;t _guaranteed_.  In the 758 days of files I loaded (<a href="https://gist.github.com/randyzwitch/5ed2f4fc8574b91efd29" target="_blank">code</a>), the only files having more than one value for a given key were: _browser_, _browser_type_, _operating_system_, _search_engines_, _event_ (report suite specific for every company) and _column_headers_ (report suite specific for every company). So if you&#8217;re doing a bulk load of data, it&#8217;s generally sufficient to use the newest lookup table and save yourself some time. If you are processing the data every day, you can use an [upsert process](https://wiki.postgresql.org/wiki/UPSERT) and generally there will be few if any updates.





## Let&#8217;s Do Analytics!!!!???!!!

_<moan>Why is there always so much ETL work, I want to data science the hell out of some data</moan>_

At this point, if you were uploading the same amount of data for the traffic my blog does (not much), you&#8217;d be about 1-2 hours into loading data, still having done no analysis. In fact, in order to do analysis, you&#8217;d still need to modify the column names and types in your _servercalls_ table, update the lookup tables to have the proper column names, and maybe you&#8217;d even want to pre-summarize the tables into views/materialized views for Page View/Visit/Visitor level. Whew, that&#8217;s a lot of work just to calculate daily page views.

Yes it is. But taking on a project like this isn&#8217;t for page views; just use the Adobe Analytics UI!

In a future blog post or two, I&#8217;ll demonstrate how to use this relational database layout to perform analyses not possible within the Adobe Analytics interface, and also show how we can skip this ETL process altogether using a <a href="http://blog.cask.co/2015/03/schema-on-read-in-action/" target="_blank">schema-on-read process</a> with Spark.
