---
title: Using SQL Workbench with Apache Hive
date: 2014-04-25T14:05:57+00:00
author: Randy Zwitch
layout: post
permalink: /sql-workbench-apache-hadoop-hive/
category: Data Science
tags:
  - Hadoop
  - Hive
  - MapR
  - Open Source
  - SQL
---
If you've spent any non-trivial amount of time working with Hadoop and Hive at the command line, you've likely wished that you could interact with Hadoop like you would any other database. If you're lucky, your Hadoop administrator has already installed the <a title="Apache Hue" href="http://gethue.com/" target="_blank">Apache Hue</a> front-end to your cluster, which allows for <a title="Getting Started Using Hadoop, Part 3: Loading Data" href="http://randyzwitch.com/uploading-data-hadoop-amazon-ec2-cloudera-part-3/" target="_blank">interacting with Hadoop via an easy-to-use browser interface</a>. However, if you don't have Hue, Hive also supports access via JDBC; the downside is, setup is not as easy as including a single JDBC driver.

While there are paid database administration tools such as <a title="Aqua Data Studio" href="http://www.aquafold.com/dbspecific/apache_hive_client.html" target="_blank">Aqua Data Studio</a> that support Hive, I'm an open source kind of guy, so this tutorial will show you how to use <a title="SQL Workbench download" href="http://www.sql-workbench.net/" target="_blank">SQL Workbench</a> to access Hive via JDBC. This tutorial assumes that you are proficient enough to get SQL Workbench installed on whatever computing platform you are using (Windows, OSX, or Linux).



### Download Hadoop jars

The hardest part of using Hive via JDBC is getting all of the required jars. At work I am using a <a title="MapR Hadoop" href="http://www.mapr.com/" target="_blank">MapR distribution of Hadoop</a>, and each Hadoop vendor platform provides drivers for their version of Hadoop. For MapR, all of the required Java .jar files are located at /opt/mapr/hive/hive-0.1X/lib (where X represents the Hive version number you are using).

<div id="attachment_2627" style="width: 510px" class="wp-caption aligncenter">
  <a href="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/mapr-hive-jars.png"><img class="wp-image-2627 size-full" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/mapr-hive-jars.png?fit=500%2C354" alt="mapr-hive-jars" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/mapr-hive-jars.png?w=500 500w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/mapr-hive-jars.png?resize=150%2C106 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/mapr-hive-jars.png?resize=300%2C212 300w" sizes="(max-width: 500px) 100vw, 500px" data-recalc-dims="1" /></a>

  <p class="wp-caption-text">
    Download all the .jar files in one shot, just in case you need them in the future
  </p>
</div>

Since it's not always clear which .jar files are required (especially for other projects/setups you might be doing), I just downloaded the entire set of files and placed them in a directory called "hadoop_jars". If you're not using MapR, you'll need to find and download your vendor-specific version of the following .jar files:

  * hive-exec.jar
  * hive-jdbc.jar
  * hive-metastore.jar
  * hive-service.jar

Additionally, you will need the following general Hadoop jars (Note: for clarity/long-term applicability of this blog post, I have removed the version number from all of the jars):

  * hive-cli.jar
  * libfb303.jar
  * slf4j-api.jar
  * commons-logging.jar
  * hadoop-common.jar
  * httpcore.jar
  * httpclient.jar

Whew. Once you have the Hive JDBC driver and the 10 other .jar files, we can begin the installation process.

### Setting up Hive JDBC driver

Setting up the JDBC driver is simply a matter of providing SQL Workbench with the location of all 11 of the required .jar files. After clicking File -> Manage Drivers, you'll want to click on the white page icon to create a New Driver. Use the Folder icon to add the .jars:

[<img class="aligncenter size-full wp-image-2635" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-driver-setup.png?fit=500%2C317" alt="sqlworkbench-hive-driver-setup" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-driver-setup.png?w=500 500w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-driver-setup.png?resize=150%2C95 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-driver-setup.png?resize=300%2C190 300w" sizes="(max-width: 500px) 100vw, 500px" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-driver-setup.png)

For the Classname box, if you are using a relatively new version of Hive, you'll be using Hive2 server. In that case, the Classname for the Hive driver is org.apache.hive.jdbc.HiveDriver (this should pop up on-screen, you just need to select the value). You are not required to put any value for the Sample URL. Hit OK and the driver window will close.





### Connection Window

With the Hive driver defined, all that's left is to define the connection string. Assuming your Hadoop administrator didn't change the default port from 10000, your connection string should look as follows:

[<img class="aligncenter size-full wp-image-2639" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-connectionstring.png?fit=500%2C349" alt="sqlworkbench-hive-connectionstring" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-connectionstring.png?w=500 500w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-connectionstring.png?resize=150%2C104 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-connectionstring.png?resize=300%2C209 300w" sizes="(max-width: 500px) 100vw, 500px" data-recalc-dims="1" />](http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/04/sqlworkbench-hive-connectionstring.png)

As stated above, I'm assuming you are using Hive2 Server; if so, your connection string will be _jdbc:hive2://your-hadoop-cluster-location:10000_. After that, type in your Username and Password and you should be all set.

### Using Hive with SQL Workbench

Assuming you have achieved success with the instructions above, you're now ready to use Hive like any other database. You will be able to submit your Hive code via the Query Window, view your schemas/tables (via the 'Database Explorer' functionality which opens in a separate tab) and generally use Hive like any other relational database.

Of course, it's good to remember that Hive isn't actually a relational database! From my experience, using Hive via SQL Workbench works pretty well, but the underlying processing is still in Hadoop. So you're not going to get the clean cancelling of queries like you would with an RDBMS , there can be a significant lag to getting answers back (due to the Hive overhead), you can blow up your computer streaming back results larger than available RAM...but it beats working at the command line.
