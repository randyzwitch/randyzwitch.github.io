---
title: Sessionizing Log Data Using SQL
date: 2015-01-08T11:57:56+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3346
permalink: /sessionizing-log-data-sql/
tweetbackscheck:
  - 1472614968
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3346";s:7:"tinyurl";s:26:"http://tinyurl.com/o3hwnob";s:4:"isgd";s:19:"http://is.gd/3oNBHO";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Data Science
tags:
  - Hadoop
  - Hive
  - Postgres
  - SQL
  - Window functions
---
Over my career as a predictive modeler/data scientist, the most important step(s) in any data project without question have been data cleaning and feature engineering. By taking the data you have, correcting flaws and reformulating raw data into additional business-specific concepts, you ensure that you move beyond pure mathematical optimization and actually solve a _business problem_. While "big data" is often held up as the future of knowing everything, when it comes down to it, a Hadoop cluster is more often a "Ha-dump" cluster: the place data gets dumped without any proper ETL.

For this blog post, I'm going to highlight a common request for time-series data: combining discrete events into sessions. Whether you are dealing with sensor data, television viewing data, digital analytics data or any other stream of events, the problem of interest is usually how a human interacts with a machine over a given period of time, not each individual event.

While I usually use Hive (Hadoop) for daily work, I'm going to use Postgres (via OSX <a title="Postgres.app OSX" href="http://postgresapp.com" target="_blank">Postgres.app</a>) to make this as widely accessible as possible. In general, this process will work with any infrastructure/SQL-dialect that supports <a title="SQL window function explanation" href="http://www.postgresql.org/docs/9.1/static/tutorial-window.html" target="_blank">window functions</a>.





## Connecting to Database/Load Data

For lightweight tasks, I find using psql (command-line tool) is easy enough. Here are the commands to create a database to hold our data and to load our two .csv files (download <a href="http://randyzwitch.com/wp-content/uploads/2015/01/single_col_timestamp.csv.gz" target="_blank">here</a> and <a href="http://randyzwitch.com/wp-content/uploads/2015/01/two_col_timestamp.csv.gz" target="_blank">here</a>):

[<img class="aligncenter size-full wp-image-3351" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/psql-load-data.png?fit=846%2C262" alt="psql-load-data" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/psql-load-data.png?w=846 846w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/psql-load-data.png?resize=150%2C46 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/psql-load-data.png?resize=300%2C93 300w" sizes="(max-width: 846px) 100vw, 846px" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/psql-load-data.png)

These files contain timestamps generated for 1000 uid values.

## Query 1 ("Inner"): Determining Session Boundary Using A Window Function

In order to determine the boundary of each session, we can use a window function along with _lag()_, which will allow the current row being processed to compare vs. the prior row. Of course, for all of this to work correctly, we need to have our data sorted in time order by each of our users:For this query, we use the _lag()_ function on the 'event\_timestamp' column, and we use 'over partition by uid order by event\_timestamp' to define the window over which we want to do our calculation. To provide additional clarification about how this syntax works, I've added a column showing how many minutes have passed between intervals to validate that the 30-minute window is calculated correctly. The result is as follows: [<img class="aligncenter size-full wp-image-3357" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sql-session-boundary-definition.png?fit=947%2C341" alt="sql-session-boundary-definition" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sql-session-boundary-definition.png?w=947 947w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sql-session-boundary-definition.png?resize=150%2C54 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sql-session-boundary-definition.png?resize=300%2C108 300w" sizes="(max-width: 947px) 100vw, 947px" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sql-session-boundary-definition.png) For each row where the value of 'minutes\_since\_last\_interval' > 30, there is a value of 1 for 'new\_event_boundary'.

## Query 2 ("Outer"): Creating A Session ID

The query above defines the event boundaries (which is helpful), but if we want to calculate session-level metrics, we need to create a unique id for each set of rows that are part of one session. To do this, we're again going to use a window function:

This query defines the same 'over partition by uid order by event_timestamp' window, but rather than using _lag()_ this time, we're going to use _sum()_ for the outer query. The effect of using _sum()_ in our window function is to do a cumulative sum; every time '1' shows up, the 'session\_id' field gets incremented by 1. If there is a value of '0', the sum is still the same as the row above and thus has the same session\_id. This is easier to see visually:

[<img class="aligncenter size-full wp-image-3361" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sessionized-data.png?fit=1017%2C427" alt="sessionized-data" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sessionized-data.png?w=1017 1017w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sessionized-data.png?resize=150%2C63 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sessionized-data.png?resize=300%2C126 300w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2015/01/sessionized-data.png)

At this point, we have a session_id for a group of rows where there have been no 30 minute gaps in behavior.

## Final Query: Cleaned Up

Although the previous section is technically done, I usually concatenate the uid and session_id together.  I do this concatenation just to highlight that the value is usually a 'key' value, not a metric in itself (though it can be). Concatenating the keys together and removing the teaching columns results in the following query:

[<img class="aligncenter size-full wp-image-3364" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/01/final-sessionized-data.png?fit=1179%2C377" alt="final-sessionized-data" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/01/final-sessionized-data.png?w=1179 1179w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/01/final-sessionized-data.png?resize=150%2C48 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/01/final-sessionized-data.png?resize=300%2C96 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/01/final-sessionized-data.png?resize=1024%2C327 1024w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/01/final-sessionized-data.png)

## Window Functions, Will You Marry Me?

The first time I was asked to try and solve sessionization of time-series data using Hive, I was sure the answer would be that I'd have to get a peer to write some nasty custom Java code to be able generate unique ids; in retrospect, the solution is so obvious and simple that I wish I would've tried to do this years ago. This is a pretty easy problem to solve using imperative programming, but if you've got a gigantic amount of hardware in a RDBMS or Hadoop, SQL takes care of all of the calculation without needing think through looping (or more complicated logic/data structures).

Window functions fall into a weird space in the SQL language, given that they allow you to do sequential calculations when SQL should generally be thought of as "set-level" calculations (i.e. no implied order and table-wide calculations vs. row/state-specific). But now that I've got a hang of them, I can't imagine my analytical life without them.
