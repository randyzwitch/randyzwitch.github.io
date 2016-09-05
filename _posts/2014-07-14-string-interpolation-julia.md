---
id: 2857
title: String Interpolation for Fun and Profit
date: 2014-07-14T12:01:10+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2857
permalink: /string-interpolation-julia/
tweetbackscheck:
  - 1472933084
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2857";s:7:"tinyurl";s:26:"http://tinyurl.com/m5g7uus";s:4:"isgd";s:19:"http://is.gd/lUnsDT";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Julia
---
In a previous post, I showed how I frequently use <a title="Using Julia As A ‘Glue’ Language" href="http://randyzwitch.com/julia-odbc-jl/" target="_blank">Julia as a &#8216;glue&#8217; language</a> to connect multiple systems in a complicated data pipeline. For this blog post, I will show two more examples where I use Julia for general programming, rather than for computationally-intense programs.

## String Building: Introduction

The <a title="Julia Documentation - Strings" href="http://docs.julialang.org/en/latest/manual/strings/" target="_blank">Strings section of the Julia Manual</a> provides a very in-depth treatment of the considerations when using strings within Julia. For the purposes of my examples, there are only three things to know:

  * Strings are immutable within Julia and 1-indexed
  * Strings are easily created through the a syntax familiar to most languages: 
    <pre>julia&gt; authorname = "randy zwitch"
"randy zwitch"</pre>

  * String interpolation is easiest done using dollar-sign notation. Additionally, parenthesis can be used to avoid symbol ambiguity: 
    <pre>julia&gt; interpolated = "the author of this blog post is $(authorname)"
"the author of this blog post is randy zwitch"</pre>

If you are using large volumes of textual data, you&#8217;ll want to pay attention to the difference between the various string types that Julia provides (_UTF8/16/32, ASCII, Unicode, etc_), but for the purposes of this blog post we&#8217;ll just be using the _ASCIIString_ type by not explicitly declaring the string type and only using ASCII characters.

## Example 1: Repetitive Queries

As part of my data engineering responsibilities at work, I often get requests to pull a sample of every table in a new database in our Hadoop cluster. This type of request is usually from the business owner, who wants to evaluate the data set has been imported correctly, but doesn&#8217;t actually want to write any sort of queries. So using the <a title="Julia ODBC" href="https://github.com/quinnj/ODBC.jl" target="_blank">ODBC.jl</a> package, I repeatedly do the same &#8216;select * from <tablename>&#8217; query and save to individual .tab files:While the query is simple, writing/running this hundreds of times would be a waste of effort. So with a simple loop over the array of tables, I can provide a sample of hundreds of tables in .tab files with five lines of code.
  


## Example 2: Generating Query Code

In another task, I was asked to join a handful of Hive tables, then transpose the table from &#8220;long&#8221; to &#8220;wide&#8221;, so that each id value only had one row instead of multiple. This is fairly trivial to do using CASE statements in SQL; the problem arises when you have thousands of potential row values to transpose into columns! Instead of getting carpal tunnel syndrome typing out thousands of CASE statements, I decided to use Julia to generate the SQL code itself:

The example here only repeats the CASE statements five times, which wouldn&#8217;t really be that much typing. However, for my actual application, the number of possible values was 2153, leading to a query result which was 8157 columns! Suffice to say, I&#8217;d still be writing that code if I decided to do it by hand.

## Summary

Like my &#8216;glue language&#8217; post, I hope this post has shown that Julia can be used for more than grunting about microbenchmark performance. Whereas I used to use Python for doing weird string operations like this, I&#8217;m finding that the dollar-sign syntax in Julia feels more comfortable for me than the Python string formatting mini-language (although that&#8217;s not particularly difficult either). So if you&#8217;ve been hesitant to jump into learning Julia because you think it&#8217;s only useful for doing <span style="color: #000000;">Mandelbrot calculations</span> or complex linear algebra, Julia is just as at-home doing quick general programming tasks as well.