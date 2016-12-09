---
title: 'Sessionizing Log Data Using dplyr [Follow-up]'
date: 2015-01-13T16:24:52+00:00
author: Randy Zwitch
layout: post
permalink: /sessionizing-log-data-dplyr-r-window-functions/
category: DataScience
description: If you're not comfortable writing SQL, it is possible to use R to sessionize log data. But just because it's possible doesn't make it easier...
tags:
  - Postgres
  - R
  - SQL
  - Window functions
---
Last week, I wrote a blog post showing how to [sessionize log data using standard SQL](http://randyzwitch.com/sessionizing-log-data-sql). The main idea of that post is that if your analytics platform supports window functions (like Postgres and Hive do), you can make quick work out of sessionizing logs. Here's the winning query:

{% highlight sql linenos %}
select
uid,
sum(new_event_boundary) OVER (PARTITION BY uid ORDER BY event_timestamp) as session_id,
event_timestamp,
minutes_since_last_interval,
new_event_boundary
from
			--Query 1: Define boundary events
			(select
			uid,
			event_timestamp,
			(extract(epoch from event_timestamp) - lag(extract(epoch from event_timestamp)) OVER (PARTITION BY uid ORDER BY event_timestamp))/60 as minutes_since_last_interval,
			case when extract(epoch from event_timestamp) - lag(extract(epoch from event_timestamp)) OVER (PARTITION BY uid ORDER BY event_timestamp) > 30 * 60 then 1 ELSE 0 END as new_event_boundary
			from single_col_timestamp
			) a;
{% endhighlight %}

One nested sub-query and two window functions are all it takes to calculate the event boundaries and create a unique identifier for sessions for any arbitrary timeout chosen.

## It's Hadley's House, We're Just Leasing

Up until today, I hadn't really done anything using dplyr.  But having a bunch of free time this week and hearing people talk so much about how great dplyr is, I decided to see what it would take to replicate this same exercise using R. dplyr has support for Postgres as a back-end, and has verbs that translate R code into window functions, so I figured it had to be possible. Here's what I came up with:

{% highlight R linenos %}
###Sessionization using dplyr

library(dplyr)

#Open a localhost connection to Postgres
#Use table 'single_col_timestamp'
#group by uid and sort by timestamp for window function
#Do minutes calculation, working around missing support for extract(epoch from timestamp)
#Calculate event boundary and unique id via cumulative sum window function
sessions <-  
        src_postgres("logfiles") %>%
        tbl("single_col_timestamp") %>%
        group_by(uid) %>%
        arrange(event_timestamp) %>%
        mutate(minutes_since_last_event = (
                                           DATE_PART('day', event_timestamp - lag(event_timestamp)) * 24 +
                                           DATE_PART('hour', event_timestamp - lag(event_timestamp)) * 60 +
                                           DATE_PART('minute', event_timestamp - lag(event_timestamp)) * 60 +
                                           DATE_PART('second', event_timestamp - lag(event_timestamp))
                                           ) / 60
              ) %>%
        mutate(event_boundary = if(minutes_since_last_event > 30) 1 else 0,
               session_id = order_by(event_timestamp, cumsum(if(minutes_since_last_event > 30) 1 else 0)))

#Show query syntax
show_query(sessions)

#Actually run the query
answer <- collect(sessions)
{% endhighlight %}

Generally, I'm not a fan of the pipe operator, but I figured I'd give it a shot since everyone else seems to like it. This is one nasty bit of R code, but ultimately, it is possible to get the same result as writing SQL directly. I did need to take a few roundabout ways, specifically in calculating the minutes between timestamps and substituting the CASE expression into the window function rather than call it by name, but it's basically the same logic.

## Why Does This Work?

If you compare the SQL code above to the R code, you might be wondering why the dplyr code works. Certainly, working the dplyr way gives me cognitive dissonance, as you generally specify the verbs you are using in reverse order as you do in SQL. But calling `show_query(sessions)`, you actually see that dplyr is generating SQL under-the-hood (I formatted the code for easier viewing):

{% highlight sql linenos %}
SELECT
	"uid",
	"event_timestamp",
	"minutes_since_last_event",
	"event_boundary",
	"session_id"
FROM (
		SELECT
			"uid",
			"event_timestamp",
			"minutes_since_last_event",
			CASE WHEN "minutes_since_last_event" > 30.0 THEN 1.0 ELSE 0.0 END AS "event_boundary",
			sum(CASE WHEN "minutes_since_last_event" > 30.0 THEN 1.0 ELSE 0.0 END) OVER (PARTITION BY "uid" ORDER BY "event_timestamp" ROWS UNBOUNDED PRECEDING) AS "session_id"
		FROM
			(
				SELECT
					"uid",
					"event_timestamp",
					(DATE_PART('day', "event_timestamp" - LAG("event_timestamp", 1, NULL) OVER (PARTITION BY "uid" ORDER BY "event_timestamp")) * 24.0
						+ DATE_PART('hour', "event_timestamp" - LAG("event_timestamp", 1, NULL) OVER (PARTITION BY "uid" ORDER BY "event_timestamp")) * 60.0
						+ DATE_PART('minute', "event_timestamp" - LAG("event_timestamp", 1, NULL) OVER (PARTITION BY "uid" ORDER BY "event_timestamp")) * 60.0
						+ DATE_PART('second', "event_timestamp" - LAG("event_timestamp", 1, NULL) OVER (PARTITION BY "uid" ORDER BY "event_timestamp"))) / 60.0 AS "minutes_since_last_event"
				FROM "single_col_timestamp"
				ORDER BY "uid", "event_timestamp"
			) AS "_W1"
	) AS "_W2"
{% endhighlight %}

Like all SQL-generating tools, the code is a bit inelegant; however, I have to say that I'm truly impressed the dplyr code was able to handle this scenario at all, given that this example has to be at least an edge-, if not a corner-case of what dplyr is meant for in terms of data manipulation.

## So, dplyr Is Going To Become Part Of Your Toolbox?

While it was possible to re-create the same functionality, ultimately, I don't see myself using dplyr a whole lot. In the case of using databases, it seems more efficient and portable just to write the SQL directly; at the very least, it's what I'm already comfortable doing as part of my analytics workflow. For manipulating data frames, maybe I'd use it (I do use plyr extensively in my [RSiteCatalyst](http://cran.r-project.org/web/packages/RSiteCatalyst/index.html) package), but I'd probably be more inclined to use [sqldf](http://randyzwitch.com/sqldf-package-r/) instead.

But that's just me, not a reflection on the package quality. Happy manipulating, however you choose to do it! 🙂
