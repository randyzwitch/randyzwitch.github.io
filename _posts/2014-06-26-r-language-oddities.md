---
id: 2834
title: 'Maybe I Don&#8217;t Really Know R After All'
date: 2014-06-26T11:18:36+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2834
permalink: /r-language-oddities/
tweetbackscheck:
  - 1472693673
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2834";s:7:"tinyurl";s:26:"http://tinyurl.com/lx76sf5";s:4:"isgd";s:19:"http://is.gd/4W1D32";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Digital Analytics
tags:
  - Hive
  - Python
  - R
  - SQL
---
Lately, I&#8217;ve been feeling that I&#8217;m spreading myself too thin in terms of programming languages. At work, I spend most of my time in <a title="Hive blog posts" href="http://randyzwitch.com/tag/hive/" target="_blank">Hive</a>/SQL, with the occasional Python for my smaller data. I really prefer <a title="Julia blog posts" href="http://randyzwitch.com/tag/julia/" target="_blank">Julia</a>, but I&#8217;m alone at work on that one. And since I maintain a package on CRAN (<a title="RSiteCatalyst" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst</a>), I frequently spend my evenings bug fix programming in R. Then, there&#8217;s the desire to learn a Java-based language like Scala (or, Java)&#8230;maybe Spark for my Hadoop work&#8230;

So last night, when I ran into this series of follies with R, it really makes me wonder if I really understand how R works.

<!--more-->

## jsonlite:fromJSON

As part of the overall concept of my RSiteCatalyst package, I&#8217;m trying to make it as easy as possible for digital analysts to get their data via the <a title="Adobe Analytics API" href="https://marketing.adobe.com/developer/en_US" target="_blank">Adobe Analytics API</a>.  As such, I abstract away the need to <a title="Building JSON in R: Three Methods" href="http://randyzwitch.com/r-json-jsonlite-sprintf-paste/" target="_blank">build JSON</a> to request reports and parse the API answer from JSON to a data frame. Sometimes it&#8217;s easy, but sometimes you get something like this:

[<img class="aligncenter size-full wp-image-2837" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/06/nested_r_dataframe.png?fit=780%2C162" alt="nested_r_dataframe" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/06/nested_r_dataframe.png?w=780 780w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/06/nested_r_dataframe.png?resize=150%2C31 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/06/nested_r_dataframe.png?resize=300%2C62 300w" sizes="(max-width: 780px) 100vw, 780px" data-recalc-dims="1" />](http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/06/nested_r_dataframe.png)

In case it&#8217;s not clear what&#8217;s going on here, _fromJSON()_ from <a title="jsonlite CRAN" href="http://cran.r-project.org/web/packages/jsonlite/index.html" target="_blank">jsonlite</a> returns a data frame as best as it can, but we have a list (of data frames!) nested inside of a column named &#8220;breakdown&#8221;. There are 12 rows here, but the proper data structure would be to take the data frame inside of &#8216;breakdown&#8217; and append all of the fields from the original 12 rows, repeating the values down the rows. So something like 72 rows (12 original rows, 6 row data frames inside of the &#8216;breakdown&#8217; column).

## Loop and Accumulate

Because this is such a small data frame, and because *apply functions are too frustrating in most cases, to parse this I went with the tried-and-true loop and accumulate. But instead of immediately getting what I wanted, I got this fantastic R error message:Row names from a short variable? Off to StackOverflow, the savior of all language hackers, which lets me know I just need to <a title="R row names short variable discarded" href="http://stackoverflow.com/questions/23534066/cbind-warnings-row-names-were-found-from-a-short-variable-and-have-been-discar" target="_blank">add an argument to my cbind() function</a>. Trying again:

So I successfully created an (84,10)-sized data frame, but _cbind()_ allowed me to name two columns in the data frame &#8220;name&#8221;! Running &#8216;parsed_df$name&#8217; at the REPL returns the first instance. So now, I have to use the unstable method of referring to the second &#8216;name&#8217; column by position number if I want to access it (or, rename it using names() of course). The way I realized this behavior was occurring was that I tried to use _plyr::rename_ and kept changing the name of two columns!


  


## Final Solution

In order to get past my duplicate name issue, I eventually renamed the &#8216;name&#8217; columns individually by each object, prior to _cbind()_:

In the end, I found an answer to my solution, but it seems like every time I use R the more oddities I&#8217;m able to encounter/generate. At this point, I&#8217;m starting to question whether I really understand the underpinnings of how R works. It might be time to stop trying to be a language polyglot so much and focus on really learning a few of these tools in-depth.