---
id: 3371
title: 'Sessionizing Log Data Using dplyr [Follow-up]'
date: 2015-01-13T16:24:52+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3371
permalink: /sessionizing-log-data-dplyr-r-window-functions/
tweetbackscheck:
  - 1472927753
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3371";s:7:"tinyurl";s:26:"http://tinyurl.com/qcbn6qu";s:4:"isgd";s:19:"http://is.gd/wj40eS";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Data Science
tags:
  - Postgres
  - R
  - SQL
  - Window functions
---
Last week, I wrote a blog post showing how to <a title="Sessionizing Log Data Using SQL" href="http://randyzwitch.com/sessionizing-log-data-sql/" target="_blank">sessionize log data using standard SQL</a>. The main idea of that post is that if your analytics platform supports window functions (like Postgres and Hive do), you can make quick work out of sessionizing logs. Here&#8217;s the winning query:One nested sub-query and two window functions are all it takes to calculate the event boundaries and create a unique identifier for sessions for any arbitrary timeout chosen.

## It&#8217;s Hadley&#8217;s House, We&#8217;re Just Leasing

Up until today, I hadn&#8217;t really done anything using dplyr.  But having a bunch of free time this week and hearing people talk so much about how great dplyr is, I decided to see what it would take to replicate this same exercise using R. dplyr has support for Postgres as a back-end, and has verbs that translate R code into window functions, so I figured it had to be possible. Here&#8217;s what I came up with:

Generally, I&#8217;m not a fan of the pipe operator, but I figured I&#8217;d give it a shot since everyone else seems to like it. This is one nasty bit of R code, but ultimately, it is possible to get the same result as writing SQL directly. I did need to take a few roundabout ways, specifically in calculating the minutes between timestamps and substituting the CASE expression into the window function rather than call it by name, but it&#8217;s basically the same logic.





## Why Does This Work?

If you compare the SQL code above to the R code, you might be wondering why the dplyr code works. Certainly, working the dplyr way gives me cognitive dissonance, as you generally specify the verbs you are using in reverse order as you do in SQL. But calling _show_query(sessions), _you actually see that dplyr is generating SQL under-the-hood (I formatted the code for easier viewing):

Like all SQL-generating tools, the code is a bit inelegant; however, I have to say that I&#8217;m truly impressed the dplyr code was able to handle this scenario at all, given that this example has to be at least an edge-, if not a corner-case of what dplyr is meant for in terms of data manipulation.

## So, dplyr Is Going To Become Part Of Your Toolbox?

While it was possible to re-create the same functionality, ultimately, I don&#8217;t see myself using dplyr a whole lot. In the case of using databases, it seems more efficient and portable just to write the SQL directly; at the very least, it&#8217;s what I&#8217;m already comfortable doing as part of my analytics workflow. For manipulating data frames, maybe I&#8217;d use it (I do use plyr extensively in my  <a title="RSiteCatalyst CRAN" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst</a> package), but I&#8217;d probably be more inclined to use <a title="Video: SQL Queries in R using sqldf" href="http://randyzwitch.com/sqldf-package-r/" target="_blank">sqldf</a> instead.

But that&#8217;s just me, not a reflection on the package quality. Happy manipulating, however you choose to do it! 🙂
