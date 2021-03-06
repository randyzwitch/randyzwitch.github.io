---
title: String Interpolation for Fun and Profit
date: 2014-07-14T12:01:10+00:00
author: Randy Zwitch
layout: post
permalink: /string-interpolation-julia/
category: DataScience
description: Building strings with Julia is simple using the dollar-sign interpolation method. Here are two examples where generating strings saves time and coding.
tags:
  - Julia
---
In a previous post, I showed how I frequently use [Julia as a 'glue' language](http://randyzwitch.com/julia-odbc-jl/) to connect multiple systems in a complicated data pipeline. For this blog post, I will show two more examples where I use Julia for general programming, rather than for computationally-intense programs.

## String Building: Introduction

The [Strings section of the Julia Manual](http://docs.julialang.org/en/latest/manual/strings/) provides a very in-depth treatment of the considerations when using strings within Julia. For the purposes of my examples, there are only three things to know:

  * Strings are immutable within Julia and 1-indexed
  * Strings are easily created through the a syntax familiar to most languages:

{% highlight julia %}
julia> authorname = "randy zwitch"
"randy zwitch"

julia> typeof(authorname)
String
{% endhighlight %}

  * String interpolation is easiest done using dollar-sign notation. Additionally, parenthesis can be used to avoid symbol ambiguity:

{% highlight julia %}
julia> interpolated = "the author of this blog post is $(authorname)"
"the author of this blog post is randy zwitch"
{% endhighlight %}

~~If you are using large volumes of textual data, you'll want to pay attention to the difference between the various string types that Julia provides (_UTF8/16/32, ASCII, Unicode, etc_), but for the purposes of this blog post we'll just be using the _ASCIIString_ type by not explicitly declaring the string type and only using ASCII characters.~~

EDIT, 9/8/2016: Starting with version 0.5, Julia defaults to the `String` type, which is an UTF-8 character encoding.

## Example 1: Repetitive Queries

As part of my data engineering responsibilities at work, I often get requests to pull a sample of every table in a new database in our Hadoop cluster. This type of request is usually from the business owner, who wants to evaluate the data set has been imported correctly, but doesn't actually want to write any sort of queries. So using the [ODBC.jl](https://github.com/quinnj/ODBC.jl) package, I repeatedly do the same `select * from <tablename>` query and save to individual .tab files:

{% highlight julia linenos %}
_
_       _ _(_)_     |  A fresh approach to technical computing
(_)     | (_) (_)    |  Documentation: http://docs.julialang.org
_ _   _| |_  __ _   |  Type "help()" to list help topics
| | | | | | |/ _` |  |
| | |_| | | | (_| |  |  Version 0.3.0-prerelease+4028 (2014-07-02 23:42 UTC)
_/ |\__'_|_|_|\__'_|  |  Commit 2185bd1 (11 days old master)
|__/                   |  x86_64-w64-mingw32
julia> using ODBC
julia> ODBC.connect("Production hiveserver2", usr="", pwd="")
ODBC Connection Object
----------------------
Connection Data Source: Production hiveserver2
Production hiveserver2 Connection Number: 1
Contains resultset? No
julia> tables = query("show tables in db;");
elapsed time: 0.167028049 seconds
julia> for tbl in tables[:tab_name]
query("select * from db.$(tbl) limit 1000;"; output="C:\\data_dump\\$(tbl).tab", delim='\t')
end

julia>
{% endhighlight %}

While the query is simple, writing/running this hundreds of times would be a waste of effort. So with a simple loop over the array of tables, I can provide a sample of hundreds of tables in .tab files with five lines of code.

## Example 2: Generating Query Code

In another task, I was asked to join a handful of Hive tables, then transpose the table from "long" to "wide", so that each id value only had one row instead of multiple. This is fairly trivial to do using `CASE` statements in SQL; the problem arises when you have thousands of potential row values to transpose into columns! Instead of getting carpal tunnel syndrome typing out thousands of `CASE` statements, I decided to use Julia to generate the SQL code itself:

{% highlight julia linenos %}
#Starting portion of query, the groupby columns
julia> groupbycols ="select
interact.interactionid,
interact.agentname,
interact.agentid,
interact.agentgroup,
interact.agentsupervisor,
interact.sitename,
interact.dnis,
interact.agentextension,
interact.interactiondirection,
interact.interactiontype,
interact.customerid,
interact.customercity,
interact.customerstate,
interact.interactiondatetime,
interact.durationinms,"

#Generate CASE statements based on the number of possible values of queryid
julia> function casestatements(repetitions::Int64)
	for queryid in 1:repetitions
		println("MAX(CASE WHEN q.queryid = $queryid then q.score END) as q$(queryid)score,")
	end
	for queryid in 1:repetitions
		println("MIN(CASE WHEN q.queryid = $queryid then q.startoffsetinms END) as q$(queryid)startoffset,")
	end
	for queryid in 1:repetitions
		println("MAX(CASE WHEN q.queryid = $queryid then q.endoffsetinms END) as q$(queryid)endoffset,")
	end
	#Last clause, so repeat it up to number of repetitions minus 1, then do simple print to get line without comma at end
	for queryid in 1:repetitions-1
		println("SUM(CASE WHEN q.queryid = $queryid and q.score > q.mediumthreshold THEN 1 END) as q$(queryid)hits,")
	end
	println("SUM(CASE WHEN q.queryid = $repetitions and q.score > q.mediumthreshold THEN 1 END) as q$(repetitions)hits")
end

#Ending table statement
julia> tablestatements = "from db.table1 as interact
left join db.table2 as q on (interact.interactionid = q.interactionid)
left join db.table3 as t on (interact.interactionid = t.interactionid)
group by 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15;"

#Submitting all of the statements on one line is usually frowned upon, but this will generate my SQL code
julia> println(groupbycols);casestatements(5);println(tablestatements)
select
interact.interactionid,
interact.agentname,
interact.agentid,
interact.agentgroup,
interact.agentsupervisor,
interact.sitename,
interact.dnis,
interact.agentextension,
interact.interactiondirection,
interact.interactiontype,
interact.customerid,
interact.customercity,
interact.customerstate,
interact.interactiondatetime,
interact.durationinms,
MAX(CASE WHEN q.queryid = 1 then q.score END) as q1score,
MAX(CASE WHEN q.queryid = 2 then q.score END) as q2score,
MAX(CASE WHEN q.queryid = 3 then q.score END) as q3score,
MAX(CASE WHEN q.queryid = 4 then q.score END) as q4score,
MAX(CASE WHEN q.queryid = 5 then q.score END) as q5score,
MIN(CASE WHEN q.queryid = 1 then q.startoffsetinms END) as q1startoffset,
MIN(CASE WHEN q.queryid = 2 then q.startoffsetinms END) as q2startoffset,
MIN(CASE WHEN q.queryid = 3 then q.startoffsetinms END) as q3startoffset,
MIN(CASE WHEN q.queryid = 4 then q.startoffsetinms END) as q4startoffset,
MIN(CASE WHEN q.queryid = 5 then q.startoffsetinms END) as q5startoffset,
MAX(CASE WHEN q.queryid = 1 then q.endoffsetinms END) as q1endoffset,
MAX(CASE WHEN q.queryid = 2 then q.endoffsetinms END) as q2endoffset,
MAX(CASE WHEN q.queryid = 3 then q.endoffsetinms END) as q3endoffset,
MAX(CASE WHEN q.queryid = 4 then q.endoffsetinms END) as q4endoffset,
MAX(CASE WHEN q.queryid = 5 then q.endoffsetinms END) as q5endoffset,
SUM(CASE WHEN q.queryid = 1 and q.score > q.mediumthreshold THEN 1 END) as q1hits,
SUM(CASE WHEN q.queryid = 2 and q.score > q.mediumthreshold THEN 1 END) as q2hits,
SUM(CASE WHEN q.queryid = 3 and q.score > q.mediumthreshold THEN 1 END) as q3hits,
SUM(CASE WHEN q.queryid = 4 and q.score > q.mediumthreshold THEN 1 END) as q4hits,
SUM(CASE WHEN q.queryid = 5 and q.score > q.mediumthreshold THEN 1 END) as q5hits
from db.table1 as interact
left join db.table2 as q on (interact.interactionid = q.interactionid)
left join db.table3 as t on (interact.interactionid = t.interactionid)
group by 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15;

julia>
{% endhighlight %}

The example here only repeats the `CASE` statements five times, which wouldn't really be that much typing. However, for my actual application, the number of possible values was 2153, leading to a query result which was 8157 columns! Suffice to say, I'd still be writing that code if I decided to do it by hand.

## Summary

Like my 'glue language' post, I hope this post has shown that Julia can be used for more than grunting about microbenchmark performance. Whereas I used to use Python for doing weird string operations like this, I'm finding that the dollar-sign syntax in Julia feels more comfortable for me than the Python string formatting mini-language (although that's not particularly difficult either). So if you've been hesitant to jump into learning Julia because you think it's only useful for doing Mandelbrot calculations or complex linear algebra, Julia is just as at-home doing quick general programming tasks as well.
