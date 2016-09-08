---
title: Five Hard-Won Lessons Using Hive
date: 2014-06-12T13:01:18+00:00
author: Randy Zwitch
layout: post
permalink: /hive-five-hard-won-lessons/
category: DataScience
tags:
  - Big Data
  - Hadoop
  - Hive
  - Python
  - R
---

_EDIT, 9/8/2016: Hive has come a long way in the two years since I've written this. While some of the code snippets might still work, it's likely the case that this information is so out-of-date to be nothing more than a reflection of working with Hadoop in 2014._

I've been spending a ton of time lately on the data _engineering_ side of 'data science', so I've been writing a lot of Hive queries. Hive is a great tool for querying large amounts of data, without having to know very much about the underpinnings of Hadoop. Unfortunately, there are a lot of things about Hive (version 0.12 and before) that aren't quite the same as SQL and have caused me a bunch of frustration; here they are, in no particular order.

## 1. Set Hive Temp directory To Same As Final Output Directory

When doing a "Create Table As" (CTAS) statement in Hive, <a title="Hive scratch directory" href="http://doc.mapr.com/display/MapR/Hive#Hive-HiveScratchDirectory" target="_blank">Hive allocates temp space for the Map and Reduce portions of the job</a>. If you're not lucky, the temp space for the job will be somewhere different than where your table actually ends up being saved, resulting in TWO I/O operations instead of just one. This can lead to a painful delay in when your Hive job says it is finished vs. when the table becomes available (one time, I saw a 30 hour delay writing 5TB of data).

If your Hive jobs seem to hang after the Job Tracker says they are complete, try this setting at the beginning of your session:

{% highlight shell %}
set hive.optimize.insert.dest.volume=true;
{% endhighlight %}

## 2. Column Aliasing In Group By/Order By

Not sure why this isn't a default, but if you want to be able to reference your column names by position (i.e. `group by 1,2`) instead of by name (i.e. `group by name, age`), then run this at the beginning of your session:

{% highlight shell %}
set hive.groupby.orderby.position.alias=true;
{% endhighlight %}

## 3. Be Aware Of Predicate Push-Down Rules

In Hive, you can get great performance gains if you A) partition your table by commonly used columns/business concepts (i.e. Day, State, Market, etc.) and B) you use the partitions in a `WHERE` clause. These are known as [partition-based queries](https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Select#LanguageManualSelect-PartitionBasedQueries). Otherwise, if you don't use a partition in your `WHERE` clause, you will get a full table scan.

Unfortunately, when doing an OUTER JOIN, Hive will sometimes ignore the fact that your `WHERE` clause is on a partition and do a full table scan anyway. In order to get Hive to [push your predicate down](https://cwiki.apache.org/confluence/display/Hive/OuterJoinBehavior#OuterJoinBehavior-PredicatePushdownRules) and avoid a full table scan, put your predicate on the `JOIN` instead of the `WHERE` clause:

{% highlight sql linenos %}
--#### Assume sales Hive table partitioned by day_id ####--

--Full Table Scan
select
employees.id,
b.sales
from employees
left join sales on (employees.id = sales.employee_id)
where day_id between '2014-03-01' and '2014-05-31';

--Partitioned-based query
select
employees.id,
b.sales
from employees
left join sales on (employees.id = sales.employee_id and sales.day_id between '2014-03-01' and '2014-05-31');
{% endhighlight %}

If you don't want to think about the different rules, you can generally put your limiting clauses inside your `JOIN` clause instead of on your `WHERE` clause. It _should_ just be a matter of preference (until your query performance indicates it isn't!)

## 4. Calculate And Append Percentiles Using CROSS JOIN

Suppose you want to calculate the top 10% of your customers by sales. If you try to do the following, Hive will complain about needing a `GROUP BY`, because `percentile_approx()` is a summary function:

{% highlight sql linenos %}
--Hive expects that you want to calculate your percentiles by account_number and sales
--This code will generate an error about a missing GROUP BY statement
select
account_number,
sales,
CASE WHEN sales > percentile_approx(sales, .9) THEN 1 ELSE 0 END as top10pct_sales
{% endhighlight %}

To get around the the need for a `GROUP BY`, we can use a `CROSS JOIN`. A `CROSS JOIN` is another name for a Cartesian Join, meaning all of the rows from the first table will be joined to ALL of the rows of the second table. Because the subquery only returns one row, the `CROSS JOIN` provides the desired affect of joining the percentile values back to the original table while keeping the same number of rows from the original table. Generally, you don't want to do a `CROSS JOIN` (because relational data generally is joined on a key), but this is a good use case.

## 5.  Calculating a Histogram

Creating a histogram using Hive should be as simple as calling the [`histogram_numeric()`](https://cwiki.apache.org/confluence/display/Hive/StatisticsAndDataMining#StatisticsAndDataMining-histogram_numeric():Estimatingfrequencydistributions) function. However, the syntax and results of this function are just plain weird. To create a histogram, you can run the following:

{% highlight sql linenos %}
select
histogram_numeric(salary, 20) as salary_hist
from
sample_08;

--Results
[{"x":23507.68627450983,"y":255.0},{"x":31881.7647058824,"y":340.0},{"x":39824.11498257844,"y":287.0},{"x":47615.58011049725,"y":181.0},{"x":55667.01219512195,"y":164.0},{"x":59952.499999999985,"y":8.0},{"x":66034.67153284674,"y":137.0},{"x":75642.31707317074,"y":82.0},{"x":82496.13636363638,"y":44.0},{"x":91431.66666666667,"y":60.0},{"x":100665.71428571428,"y":21.0},{"x":107326.66666666667,"y":15.0},{"x":121248.74999999999,"y":16.0},{"x":142070.0,"y":2.0},{"x":153896.6666666667,"y":6.0},{"x":162310.0,"y":6.0},{"x":169810.0,"y":2.0},{"x":176740.0,"y":2.0},{"x":193925.0,"y":8.0},{"x":206770.0,"y":2.0}]
{% endhighlight %}

The results of this query comes back as a list, which is very un-SQL like! To get the data as a table, we can use `LATERAL VIEW` and `EXPLODE`:

{% highlight sql linenos %}
SELECT
   CAST(hist.x as int) as bin_center,
   CAST(hist.y as bigint) as bin_height
FROM (select
      histogram_numeric(salary, 20) as salary_hist
      from
      sample_08) a
LATERAL VIEW explode(salary_hist) exploded_table as hist;

--Results
	bin_center	bin_height
0	23507	255
1	31881	340
2	39824	287
3	47615	181
4	55667	164
5	59952	8
6	66034	137
7	75642	82
8	82496	44
9	91431	60
10	100665	21
11	107326	15
12	121248	16
13	142070	2
14	153896	6
15	162310	6
16	169810	2
17	176740	2
18	193925	8
19	206770	2
{% endhighlight %}

However, now that we have a table of data, it's still not clear how to create a histogram, as the _center of variable-width bins_ is what is returned by Hive. The [Hive documentation for `histogram_numeric()`](https://cwiki.apache.org/confluence/display/Hive/StatisticsAndDataMining#StatisticsAndDataMining-histogram_numeric():Estimatingfrequencydistributions) references Gnuplot, Excel, Mathematica and MATLAB, which I can only assume can deal with plotting the centers?  Eventually I'll figure out how to deal with this using R or Python, but for now, I just use the table as a quick gauge of what the data looks like.
