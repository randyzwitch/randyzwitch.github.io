---
title: 'Getting Started Using Hadoop, Part 4: Creating Tables With Hive'
date: 2013-08-22T18:03:19+00:00
author: Randy Zwitch
layout: post
permalink: /hadoop-creating-tables-hive/
category: Data Science
tags:
  - Amazon EC2
  - Cloudera
  - Coursera
  - Hadoop
  - Hive
  - Hue
---
In the previous three tutorials (<a title="Hadoop for beginners" href="http://randyzwitch.com/big-data-hadoop-amazon-ec2-cloudera-part-1/" target="_blank">1</a>, <a title="Building Hadoop cluster on Amazon EC2" href="http://randyzwitch.com/big-data-hadoop-amazon-ec2-cloudera-part-2/" target="_blank">2</a>, <a title="Loading data Hadoop Hue" href="http://randyzwitch.com/uploading-data-hadoop-amazon-ec2-cloudera-part-3/" target="_blank">3</a>), we've covered the background of Hadoop, how to build a proof-of-concept Hadoop cluster using Amazon EC2 and how to upload a .zip file to the cluster using Hue. In Part 4, we'll use the data uploaded from the .zip file to create a master table of all files, as well as creating a view.



## Creating Tables Using Hive

Like SQL for 'regular' relational databases, Hive is the tool we can use within Hadoop to create tables from data loaded into HDFS. Because Hadoop was built with large, messy data in mind, there are some amazingly convenient features for creating and loading data, such as being able to load all files in a directory (assuming they have the same format).  Here's the Hive statement we can use to load the <a title="airline dataset" href="http://stat-computing.org/dataexpo/2009/the-data.html" target="_blank">airline dataset</a>:The above statement starts by outlining the structure of the table, which is mostly integers with a few string columns. The next four lines of code specifies what type of data we have, which are delimited files where the fields are terminated (separated) by commas and where the delimiter is escaped using a backslash. Finally, we type the location of our files, which is the location of the directory where we uploaded the .zip file in <a title="Part 3" href="http://randyzwitch.com/uploading-data-hadoop-amazon-ec2-cloudera-part-3/" target="_blank">part 3 of this tutorial</a>. Note that we specify an "external table", which means that if we drop the 'airline' table, we will still retain our raw data. Had we not specified the "external" keyword, Hive would've moved our raw data files into Hive, and had we decided to drop the 'airline' table, all our data would be deleted. Specifying "external" also lets us built multiple tables on the same underlying dataset if we so choose.



## Creating a View Using Hive

One thing that's slightly awkward above Hive is that you can't specify that there is a header row in your files. As such, once the above code loads, we have 22 rows in our 'airline' table where the data is invalid. Another thing that's awkward about Hive is that there is no row-level operations, so you can't delete data! However, we can very easily fix our problem using a view:

Now that we have our view defined, we no longer have to explicitly exclude the rows in every future query we run. Just like in SQL, views are "free" from a performance standpoint, as they don't require any additional data storage space (they just represent stored code references).

## Time for Analysis?!

If you've made it this far, you've waited a long time to do some actual analysis! The next and final part of this tutorial will do some interesting things using Hive and/or Pig to analyze the data. The origin of this dataset was a data mining contest to predict why a flight would arrive late to its destination and we'll do examples towards that end.
