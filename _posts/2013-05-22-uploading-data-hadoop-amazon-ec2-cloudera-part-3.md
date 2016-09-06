---
id: 1757
title: 'Getting Started Using Hadoop, Part 3: Loading Data'
date: 2013-05-22T11:39:19+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1757
permalink: /uploading-data-hadoop-amazon-ec2-cloudera-part-3/
tweetbackscheck:
  - 1472951782
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1757";s:7:"tinyurl";s:26:"http://tinyurl.com/bnv3ftf";s:4:"isgd";s:19:"http://is.gd/aKMge6";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
livefyre_version:
  - 3
category:
  - Data Science
tags:
  - Amazon EC2
  - Cloudera
  - Hadoop
  - Hortonworks
---
In part 2 of the &#8220;Getting Started Using Hadoop&#8221; series, I discussed how to <a title="Build a Hadoop cluster Amazon EC2" href="http://randyzwitch.com/big-data-hadoop-amazon-ec2-cloudera-part-2/" target="_blank">build a Hadoop cluster on Amazon EC2</a> using Cloudera CDH. This post will cover how to get your data into the Hadoop Distributed File System (HDFS) using the publicly available &#8220;<a title="Airline dataset" href="http://stat-computing.org/dataexpo/2009/the-data.html" target="_blank">Airline Dataset</a>&#8220;. While there are multiple ways to upload data into HDFS, this post will only cover the easiest method, which is to use the Hue &#8216;File Browser&#8217; interface.

<!--more-->

## Loading data into HDFS using Hue

<div id="attachment_1762" style="width: 560px" class="wp-caption aligncenter">
  <img class="size-full wp-image-1762 " src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/05/hadoop-hue-file-browser-e1367455309802.png?fit=550%2C162" alt="hadoop-hue-file-browser" data-recalc-dims="1" />

  <p class="wp-caption-text">
    &#8216;File Browser&#8217; in Hue (Cloudera)
  </p>
</div>

Loading data into Hadoop using Hue is by far the easiest way to get started. Hue provides a GUI that provides a &#8220;File Browser&#8221; like you normally see in Windows or OSX.  The workflow here would be to download each year of Airline data to your local machine, then upload each file using the &#8220;Upload &#8211;> Files&#8221; menu drop-down.

While downloading files from one site on the Internet, then uploading files to somewhere else on the Internet is somewhat wasteful of time and bandwidth, as a tutorial to _get started_ with Hadoop this isn&#8217;t the worst thing in the world. For those of you who are OSX users and comfortable using Bash from the command line, here&#8217;s some code so you don&#8217;t have to babysit the download process:

Because you are going to be uploading a bunch of text files to your Hadoop cluster, I&#8217;d recommend zipping the files prior to upload. It doesn&#8217;t matter if you use .zip or .gz files with one key distinction: if you use **.zip** files, you will upload using the <span style="text-decoration: underline;">&#8220;Zip Files&#8221;</span> button in the File Browser; if you choose **.gz**, then you must use the <span style="text-decoration: underline;">&#8220;Files&#8221;</span> line in the File Browser. Not only will zipping the files make the upload faster, but it will also make sure you only need to do the process once (as opposed to hitting the upload button on each file). Using the .zip file upload process, you should something like the following&#8230;a new folder with all of the files extracted automatically:

<div id="attachment_1846" style="width: 680px" class="wp-caption aligncenter">
  <a href="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/05/hue-file-browser-unzipped.png"><img class=" wp-image-1846 " src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/05/hue-file-browser-unzipped.png?resize=670%2C202" alt="hue-file-browser-unzipped" data-recalc-dims="1" /></a>

  <p class="wp-caption-text">
    .zip file automatically extracted into folder with files (Hortonworks)
  </p>
</div>





### Next Steps

With the airline .csv files loaded for each year, we can use Pig or Hive to load the tables into a master dataset & schema. That will be the topic of the next tutorial.
