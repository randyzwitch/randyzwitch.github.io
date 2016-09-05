---
id: 2075
title: 'Getting Started Using Hadoop, Part 4: Creating Tables With Hive'
date: 2013-08-22T18:03:19+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2075
permalink: /hadoop-creating-tables-hive/
tweetbackscheck:
  - 1472948944
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2075";s:7:"tinyurl";s:26:"http://tinyurl.com/lvflol3";s:4:"isgd";s:19:"http://is.gd/teOVPG";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Amazon EC2
  - Cloudera
  - Coursera
  - Hadoop
  - Hive
  - Hue
---
In the previous three tutorials (<a title="Hadoop for beginners" href="http://randyzwitch.com/big-data-hadoop-amazon-ec2-cloudera-part-1/" target="_blank">1</a>, <a title="Building Hadoop cluster on Amazon EC2" href="http://randyzwitch.com/big-data-hadoop-amazon-ec2-cloudera-part-2/" target="_blank">2</a>, <a title="Loading data Hadoop Hue" href="http://randyzwitch.com/uploading-data-hadoop-amazon-ec2-cloudera-part-3/" target="_blank">3</a>), we&#8217;ve covered the background of Hadoop, how to build a proof-of-concept Hadoop cluster using Amazon EC2 and how to upload a .zip file to the cluster using Hue. In Part 4, we&#8217;ll use the data uploaded from the .zip file to create a master table of all files, as well as creating a view.

<!--more-->

## Creating Tables Using Hive

Like SQL for &#8216;regular&#8217; relational databases, Hive is the tool we can use within Hadoop to create tables from data loaded into HDFS. Because Hadoop was built with large, messy data in mind, there are some amazingly convenient features for creating and loading data, such as being able to load all files in a directory (assuming they have the same format).  Here&#8217;s the Hive statement we can use to load the <a title="airline dataset" href="http://stat-computing.org/dataexpo/2009/the-data.html" target="_blank">airline dataset</a>:The above statement starts by outlining the structure of the table, which is mostly integers with a few string columns. The next four lines of code specifies what type of data we have, which are delimited files where the fields are terminated (separated) by commas and where the delimiter is escaped using a backslash. Finally, we type the location of our files, which is the location of the directory where we uploaded the .zip file in <a title="Part 3" href="http://randyzwitch.com/uploading-data-hadoop-amazon-ec2-cloudera-part-3/" target="_blank">part 3 of this tutorial</a>. Note that we specify an &#8220;external table&#8221;, which means that if we drop the &#8216;airline&#8217; table, we will still retain our raw data. Had we not specified the &#8220;external&#8221; keyword, Hive would&#8217;ve moved our raw data files into Hive, and had we decided to drop the &#8216;airline&#8217; table, all our data would be deleted. Specifying &#8220;external&#8221; also lets us built multiple tables on the same underlying dataset if we so choose.
  


## Creating a View Using Hive

One thing that&#8217;s slightly awkward above Hive is that you can&#8217;t specify that there is a header row in your files. As such, once the above code loads, we have 22 rows in our &#8216;airline&#8217; table where the data is invalid. Another thing that&#8217;s awkward about Hive is that there is no row-level operations, so you can&#8217;t delete data! However, we can very easily fix our problem using a view:

Now that we have our view defined, we no longer have to explicitly exclude the rows in every future query we run. Just like in SQL, views are &#8220;free&#8221; from a performance standpoint, as they don&#8217;t require any additional data storage space (they just represent stored code references).

## Time for Analysis?!

If you&#8217;ve made it this far, you&#8217;ve waited a long time to do some actual analysis! The next and final part of this tutorial will do some interesting things using Hive and/or Pig to analyze the data. The origin of this dataset was a data mining contest to predict why a flight would arrive late to its destination and we&#8217;ll do examples towards that end.