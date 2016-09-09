---
title: 'Getting Started Using Hadoop, Part 3: Loading Data'
date: 2013-05-22T11:39:19+00:00
author: Randy Zwitch
layout: post
permalink: /uploading-data-hadoop-amazon-ec2-cloudera-part-3/
category: DataScience
tags:
  - Amazon EC2
  - Cloudera
  - Hadoop
  - Hortonworks
---
In part 2 of the "Getting Started Using Hadoop" series, I discussed how to <a title="Build a Hadoop cluster Amazon EC2" href="http://randyzwitch.com/big-data-hadoop-amazon-ec2-cloudera-part-2/" target="_blank">build a Hadoop cluster on Amazon EC2</a> using Cloudera CDH. This post will cover how to get your data into the Hadoop Distributed File System (HDFS) using the publicly available "<a title="Airline dataset" href="http://stat-computing.org/dataexpo/2009/the-data.html" target="_blank">Airline Dataset</a>". While there are multiple ways to upload data into HDFS, this post will only cover the easiest method, which is to use the Hue 'File Browser' interface.

## Loading data into HDFS using Hue

![hadoop-hue-file-browser](/wp-content/uploads/2013/05/hadoop-hue-file-browser-e1367455309802.png)
<p class="wp-caption-text">
'File Browser' in Hue (Cloudera)
</p>

Loading data into Hadoop using Hue is by far the easiest way to get started. Hue provides a GUI that provides a "File Browser" like you normally see in Windows or OSX. The workflow here would be to download each year of Airline data to your local machine, then upload each file using the `Upload -> Files` menu drop-down.

While downloading files from one site on the Internet, then uploading files to somewhere else on the Internet is somewhat wasteful of time and bandwidth, as a tutorial to _get started_ with Hadoop this isn't the worst thing in the world. For those of you who are OSX users and comfortable using Bash from the command line, here's some code so you don't have to babysit the download process:

{% highlight shell linenos %}
$ for i in {1987..2008}
> do
> curl http://stat-computing.org/dataexpo/2009/$i.csv.bz2 > $i.csv.bz2
> bunzip2 $i.csv.bz2
> done
{% endhighlight %}

Because you are going to be uploading a bunch of text files to your Hadoop cluster, I'd recommend zipping the files prior to upload. It doesn't matter if you use .zip or .gz files with one key distinction: if you use **.zip** files, you will upload using the <span style="text-decoration: underline;">"Zip Files"</span> button in the File Browser; if you choose **.gz**, then you must use the <span style="text-decoration: underline;">"Files"</span> line in the File Browser. Not only will zipping the files make the upload faster, but it will also make sure you only need to do the process once (as opposed to hitting the upload button on each file). Using the .zip file upload process, you should something like the following...a new folder with all of the files extracted automatically:

![hue-file-browser-unzipped](/wp-content/uploads/2013/05/hue-file-browser-unzipped.png)
<p class="wp-caption-text">
.zip file automatically extracted into folder with files (Hortonworks)
</p>

### Next Steps

With the airline .csv files loaded for each year, we can use Pig or Hive to load the tables into a master dataset & schema. That will be the topic of the next tutorial.
