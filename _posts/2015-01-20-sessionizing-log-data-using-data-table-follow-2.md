---
title: 'Sessionizing Log Data Using data.table [Follow-up #2]'
date: 2015-01-20T09:01:19+00:00
author: Randy Zwitch
layout: post
permalink: /sessionizing-log-data-using-data-table-follow-2/
category: DataScience
description: Sessionizing log data can be accomplished three (or more!) ways. Here's how to use R along with data.table to sessionize click-level data into sessions.
tags:
  - data.table
  - R
  - SQL
  - Window functions
---
Thanks to user <a title="dnlbrky comment" href="http://randyzwitch.com/sessionizing-log-data-dplyr-r-window-functions/#comment-16205" target="_blank">dnlbrky</a>, we now have a third way to accomplish sessionizing log data for any arbitrary time out period (see methods [1](/sessionizing-log-data-sql/ "Sessionizing Log Data Using SQL") and [2](/sessionizing-log-data-dplyr-r-window-functions/ "Sessionizing Log Data Using dplyr [Follow-up]")), this time using data.table from R along with magrittr for piping:

{% highlight R linenos %}
library(magrittr)
library(data.table)

## Download, unzip, and load data (first 10,000 lines):
single_col_timestamp <- url("http://randyzwitch.com/wp-content/uploads/2015/01/single_col_timestamp.csv.gz") %>%
  gzcon %>%
  readLines(n=10000L) %>%
  textConnection %>%
  read.csv %>%
  setDT

## Convert to timestamp:
single_col_timestamp[, event_timestamp:=as.POSIXct(event_timestamp)]

## Order by uid and event_timestamp:
setkey(single_col_timestamp, uid, event_timestamp)

## Sessionize the data (more than 30 minutes between events is a new session):
single_col_timestamp[, session_id:=paste(uid, cumsum((c(0, diff(event_timestamp))/60 > 30)*1), sep="_"), by=uid]

## Examine the results:
#single_col_timestamp[uid %like% "a55bb9"]
single_col_timestamp[session_id %like% "fc895c3babd"]
{% endhighlight %}

I agree with dnlbrky in that this feels a little better than the dplyr method for heavy SQL users like me, but ultimately, I still think the SQL method is the most elegant and obvious to understand. But that's the great thing with open-source software; pick any tool you want, accomplish whatever you choose using any method you choose.
