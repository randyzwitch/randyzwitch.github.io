---
title: 'Getting Started: Adobe Analytics Clickstream Data Feed'
date: 2015-08-04T09:00:35+00:00
author: Randy Zwitch
layout: post
permalink: /adobe-analytics-clickstream-raw-data-feed/
category: Analytics
tags:
  - Adobe Analytics
  - Big Data
  - Clickstream Data
  - Data Science
  - Omniture
  - R
  - SQL
---
> _"Well, first you need a TMS and a three-tiered data layer, then some jQuery with a node backend to inject customer data into the page asynchronously if you want to avoid cookie-based limitations with cross-domain tracking and be Internet Explorer 4 compatible..."_

Blah Blah Blah. There's a whole cottage industry around jargon-ing each other to death about digital data collection. But why? Why do we focus on _tools_, instead of _the data_? Because the tools are necessarily inflexible, so we work backwards from the pre-defined reports we have to the data needed to populate them correctly. Let's go the other way for once: clickstream data to analysis & reporting.

In this blog post, I will show the structure of the Adobe Analytics Clickstream Data Feed and how to work with a day worth of data within R. Clickstream data isn't as raw as pure server logs, but the only limit to what we can calculate from clickstream data is what we can accomplish with a bit of programming and imagination. In later posts, I'll show how to store a year worth of data in a relational database, storing the same data in Hadoop and doing analysis using modern tools such as Apache Spark.

This blog post will not cover the mechanics of getting the feed delivered via FTP. The [Adobe Clickstream Feed documentation](https://marketing.adobe.com/resources/help/en_US/whitepapers/clickstream/datafeeds_configure.html) is sufficiently clear in how to get started.

### FTP/File Structure

Once your Adobe Clickstream Feed starts being delivered via FTP, you'll have a file listing that looks similar to the following:

[<img class="aligncenter size-full wp-image-3539" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/07/adobe-clickstream-data-ftp.png?fit=1566%2C484" alt="adobe-clickstream-data-ftp" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/07/adobe-clickstream-data-ftp.png?w=1566 1566w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/07/adobe-clickstream-data-ftp.png?resize=150%2C46 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/07/adobe-clickstream-data-ftp.png?resize=300%2C93 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/07/adobe-clickstream-data-ftp.png?resize=1024%2C316 1024w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2015/07/adobe-clickstream-data-ftp.png)

What you'll notice is that with daily delivery, three files are provided, each having a consistent file naming format:

  1. <pre>\d+-\S+_\d+-\d+-\d+.tsv.gz</pre>

    This is the main file containing the server call level data</li>

      * <pre>\S+_\d+-\d+-\d+-lookup_data.tar.gz</pre>

        These are the lookup tables, header files, etc.</li>

          * <pre>\S+_\d+-\d+-\d+.txt</pre>

            Manifest file, delivered last so that any automated processes know that Adobe is finished transferring</li> </ol>

            The regular expressions will be unnecessary for working with our single day of data, but it's good to realize that there is a consistent naming structure.

            ### Checking md5 hashes

            As part of the manifest file, Adobe provides <a href="https://en.wikipedia.org/wiki/MD5" target="_blank">md5 hashes</a> of the files. There are at least two purposes to this, including 1) making sure that the files truly were delivered in full and 2) that the files haven't been manipulated/tampered with. In order to check that your md5 hashes match the values provided by Adobe, we can do the following in R:As we can see, both calculated hashes are contained within the manifest, so we can be confident that the files we downloaded haven't been modified.



            ### Unzipping and Loading Raw Files to Data Frames

            Now that our file hashes are validated, it's time to load the files into R. For the example files, I would be able to fit the entire day into RAM because my blog does very little traffic. However, I'm going to still limit the rows brought in, as if we were working with a large e-commerce website with millions of visits per day:If we were to be loading this data into a database, we'd be done with our processing; we have all of our data read into R and it would be a trivial exercise to load the data into a database (we'll do this in a separate blog post). But since we're going to be analyze this single day of clickstream data, we need to join these 14 data frames together.

            ### SQL: The Most Important Language for Analytics

            _As a slight tangent, if you don't know SQL, then you're going to have a really hard time doing any sort of advanced analytics. There are literally millions of tutorials on the Internet (including <a href="http://randyzwitch.com/sqldf-package-r/" target="_blank">this one</a>), and understanding how to join and retrieve data from databases is the key to being more than just a report monkey._

            The reason why the prior code creates 14 data frames is because the data is delivered in a <a href="http://www.studytonight.com/dbms/database-normalization.php" target="_blank">normalized</a> structure from Adobe. Now we are going to <a href="http://searchdatamanagement.techtarget.com/definition/denormalization" target="_blank">de-normalize</a> the data, which is just a fancy way of saying "join the files together in order to make a gigantic table." There are probably a dozen different ways to join data frames using just R code, but I'm going to do it using the <a href="https://cran.r-project.org/web/packages/sqldf/index.html" target="_blank">sqldf</a> package so that I can use SQL. This will allow for a single, declarative statement that shows the relationship between the lookup and fact tables:There are three lookup tables that weren't used: _color_depth_, _plugins_ and _event_. The first two don't have a lookup column in my data feed (click link for a full listing of <a href="https://marketing.adobe.com/resources/help/en_US/sc/clickstream/datafeeds_reference.html" target="_blank">Adobe Clickstream data feed columns available</a>). These columns aren't really useful for my purposes anyway, so not a huge loss. The third table, the event list, requires a separate processing step.

            ### Processing Event Data

            As normalized as the Adobe Clickstream Data Feed is, there is one oddity: the events per server call come in a comma-delimited string in a single column with a lookup table. This implies that a separate level of processing is necessary, outside of SQL, since the column "key" is actually multiple keys and the lookup table specifies one event type per row. So if you were to try and join the data together, you wouldn't get any matches.

            To deal with this in R, we are going to do an EXTREMELY wasteful operation: we are going to create a data frame with a column for each possible event, then evaluate each row to see if that event occurred. This will use a massive amount of RAM, but of course, this is a feature/limitation of R which wouldn't be an issue if the data were stored in a database.

            With the final _cbind_ command, we've created a 500 row x 1562 column dataset representing a sample of rows from one day of the Adobe Clickstream Data Feed. Having the data denormalized in this fashion takes 6.13 MB of RAM...extrapolating to 1 million rows, you would need 12.26GB of RAM (per day of data you want to analyze, if stored solely in memory).

            ### Next Step: Analytics?!

            A thousand words in and 91 lines of R code and we still haven't done any actual analytics. But we've completed the first step in any analytics project: data prep!

            In future blog posts in this series, I'll demonstrate how to actually use this data in analytics, from re-creating reports available in the Adobe Analytics UI (to prove the data is the same) to more advanced analysis such as using association rules, which can be one method for creating a "You may also like..." functionality such as the one at the bottom of this blog.

            <pre>Files:
<a href="http://randyzwitch.com/wp-content/uploads/2015/08/zwitchdev_2015-07-13.txt" target="_blank">http://randyzwitch.com/wp-content/uploads/2015/08/zwitchdev_2015-07-13.txt</a>
<a href="http://randyzwitch.com/wp-content/uploads/2015/08/zwitchdev_2015-07-13-lookup_data.tar.gz" target="_blank">http://randyzwitch.com/wp-content/uploads/2015/08/zwitchdev_2015-07-13-lookup_data.tar.gz</a>
<a href="http://randyzwitch.com/wp-content/uploads/2015/08/01-zwitchdev_2015-07-13.tsv.gz" target="_blank">http://randyzwitch.com/wp-content/uploads/2015/08/01-zwitchdev_2015-07-13.tsv.gz</a></pre>
