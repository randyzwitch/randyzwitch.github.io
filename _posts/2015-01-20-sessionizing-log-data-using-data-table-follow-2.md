---
id: 3418
title: 'Sessionizing Log Data Using data.table [Follow-up #2]'
date: 2015-01-20T09:01:19+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3418
permalink: /sessionizing-log-data-using-data-table-follow-2/
tweetbackscheck:
  - 1472692597
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3418";s:7:"tinyurl";s:26:"http://tinyurl.com/lt9jp5q";s:4:"isgd";s:19:"http://is.gd/yAQrHn";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - data.table
  - R
  - SQL
  - Window functions
---
Thanks to user <a title="dnlbrky comment" href="http://randyzwitch.com/sessionizing-log-data-dplyr-r-window-functions/#comment-16205" target="_blank">dnlbrky</a>, we now have a third way to accomplish sessionizing log data for any arbitrary time out period (see methods [1](http://randyzwitch.com/sessionizing-log-data-sql/ "Sessionizing Log Data Using SQL") and [2](http://randyzwitch.com/sessionizing-log-data-dplyr-r-window-functions/ "Sessionizing Log Data Using dplyr [Follow-up]")), this time using data.table from R along with magrittr for piping:



I agree with dnlbrky in that this feels a little better than the dplyr method for heavy SQL users like me, but ultimately, I still think the SQL method is the most elegant and obvious to understand. But that&#8217;s the great thing with open-source software; pick any tool you want, accomplish whatever you choose using any method you choose.