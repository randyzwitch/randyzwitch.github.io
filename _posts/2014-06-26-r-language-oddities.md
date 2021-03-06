---
title: "Maybe I Don't Really Know R After All"
date: 2014-06-26T11:18:36+00:00
author: Randy Zwitch
layout: post
permalink: /r-language-oddities/
category: Analytics
description: It seems lately, the more I use R the more edge-cases I find. Maybe I don't really know how to program in R after all.
tags:
  - Hive
  - Python
  - R
  - SQL
---
Lately, I've been feeling that I'm spreading myself too thin in terms of programming languages. At work, I spend most of my time in <a title="Hive blog posts" href="http://randyzwitch.com/tags/#hive" target="_blank">Hive</a>/SQL, with the occasional Python for my smaller data. I really prefer [Julia](http://randyzwitch.com/tags/#julia), but I'm alone at work on that one. And since I maintain a package on CRAN (<a title="RSiteCatalyst" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst</a>), I frequently spend my evenings bug fix programming in R. Then, there's the desire to learn a Java-based language like Scala (or, Java)...maybe Spark for my Hadoop work...

So last night, when I ran into this series of follies with R, it really makes me wonder if I really understand how R works.

## jsonlite:fromJSON

As part of the overall concept of my RSiteCatalyst package, I'm trying to make it as easy as possible for digital analysts to get their data via the <a title="Adobe Analytics API" href="https://marketing.adobe.com/developer/en_US" target="_blank">Adobe Analytics API</a>.  As such, I abstract away the need to <a title="Building JSON in R: Three Methods" href="http://randyzwitch.com/r-json-jsonlite-sprintf-paste/" target="_blank">build JSON</a> to request reports and parse the API answer from JSON to a data frame. Sometimes it's easy, but sometimes you get something like this:

![nested_r_dataframe](/wp-content/uploads/2014/06/nested_r_dataframe.png)

In case it's not clear what's going on here, `fromJSON()` from <a title="jsonlite CRAN" href="http://cran.r-project.org/web/packages/jsonlite/index.html" target="_blank">jsonlite</a> returns a data frame as best as it can, but we have a list (of data frames!) nested inside of a column named "breakdown". There are 12 rows here, but the proper data structure would be to take the data frame inside of 'breakdown' and append all of the fields from the original 12 rows, repeating the values down the rows. So something like 72 rows (12 original rows, 6 row data frames inside of the 'breakdown' column).

## Loop and Accumulate

Because this is such a small data frame, and because `*apply` functions are too frustrating in most cases, to parse this I went with the tried-and-true loop and accumulate. But instead of immediately getting what I wanted, I got this fantastic R error message:

{% highlight R linenos %}
#Loop over df and accumulate results
parsed_df <- data.frame()
for(i in 1:nrow(df)){
  temp <- cbind(df[i,],breakdown_list[[i]])
  parsed_df <- rbind(parsed_df, temp)
}

There were 12 warnings (use warnings() to see them)
>warnings()
Warning messages:
  1: In data.frame(..., check.names = FALSE) :
  row names were found from a short variable and have been discarded
{% endhighlight %}

Row names from a short variable? Off to StackOverflow, the savior of all language hackers, which lets me know I just need to <a title="R row names short variable discarded" href="http://stackoverflow.com/questions/23534066/cbind-warnings-row-names-were-found-from-a-short-variable-and-have-been-discar" target="_blank">add an argument to my `cbind()` function</a>. Trying again:

{% highlight R linenos %}
#Loop over df and accumulate results
#Adding row.names = NULL fixes error message
parsed_df <- data.frame()
for(i in 1:nrow(df)){
  temp <- cbind(df[i,],breakdown_list[[i]], row.names = NULL)
  parsed_df <- rbind(parsed_df, temp)
}

names(parsed_df)

> names(parsed_df)
 [1] "name"           "year"           "month"          "day"            "hour"           "minute"         "breakdownTotal"
 [8] "name"           "trend"          "counts"  
{% endhighlight %}

So I successfully created an (84,10)-sized data frame, but `cbind()` allowed me to name two columns in the data frame "name"! Running 'parsed_df$name' at the REPL returns the first instance. So now, I have to use the unstable method of referring to the second 'name' column by position number if I want to access it (or, rename it using `names()` of course). The way I realized this behavior was occurring was that I tried to use `plyr::rename` and kept changing the name of two columns!

## Final Solution

In order to get past my duplicate name issue, I eventually renamed the 'name' columns individually by each object, prior to `cbind()`:

{% highlight R linenos %}
#Separate breakdown list and original data frame into different objects
df <- ex_df$report$data
breakdown_list <- df$breakdown
df$breakdown <- NULL

#Loop over df and accumulate results
parsed_df <- data.frame()
for(i in 1:nrow(df)){
  right_df <-  breakdown_list[[i]]
  right_df <- rename(right_df, replace=c("name" = report_raw$report$elements$id[2]))
  temp <- cbind(df[i,],right_df, row.names = NULL)
  parsed_df <- rbind(parsed_df, temp)
}
parsed_df <- rename(parsed_df, replace=c("counts" = report_raw$report$metrics$id))
{% endhighlight %}

In the end, I found an answer to my solution, but it seems like every time I use R the more oddities I'm able to encounter/generate. At this point, I'm starting to question whether I really understand the underpinnings of how R works. It might be time to stop trying to be a language polyglot so much and focus on really learning a few of these tools in-depth.
