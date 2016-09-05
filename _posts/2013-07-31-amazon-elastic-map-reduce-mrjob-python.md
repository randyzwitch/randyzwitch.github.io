---
id: 1970
title: Hadoop Streaming with Amazon Elastic MapReduce, Python and mrjob
date: 2013-07-31T12:34:58+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1970
permalink: /amazon-elastic-map-reduce-mrjob-python/
tweetbackscheck:
  - 1472645648
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1970";s:7:"tinyurl";s:26:"http://tinyurl.com/mtp872b";s:4:"isgd";s:19:"http://is.gd/l83fvh";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - EMR
  - Hadoop
  - MapReduce
  - Python
---
In a previous rant about <a title="Data Science & Innovation" href="http://randyzwitch.com/data-science-innovation/" target="_blank">data science & innovation</a>, I made reference to a problem I&#8217;m having at work where I wanted to classify roughly a quarter-billion URLs by predicted website content (without having to actually visit the website). A few colleagues have asked how you go about even starting to solve a problem like that, and the answer is _massively parallel processing_.

<!--more-->

## Attacking the problem using a local machine

In order to classify the URLs, the first thing that&#8217;s needed is a customized dictionary of words relative to our company&#8217;s subject matter. When you have a corpus of words that are already defined (such as a digitized book), finding the population of words is relatively simple: split the text based on spaces & punctuation and you&#8217;re more or less done. However, with a URL, you have one continuous string with no word boundaries. One way to try and find the boundaries would be the following in Python:The problem with approaching the word searching problem in this manner is you are limited to the power of your local machine. In my case with a relatively new MacBook Pro, I can process 1,000 lines in 19 seconds as a single-threaded process. At 250,000,000 URLs, that&#8217;s 4.75 million seconds&#8230;197,916 minutes&#8230;3,298 hours&#8230;137 days&#8230;**4.58 months! ** Of course, 4.58 months is for the data I have <span style="text-decoration: underline;">now</span>, which is accumulating every second of every day. Clearly, to find just the custom dictionary of words, I&#8217;ll need to employ MANY more computers/tasks. 


  


## Amazon ElasticMapreduce = Lots of Horsepower

One thing you might notice about the Python code above is that the two loops have no real reason to be run serially; each comparison of URL and dictionary word can be run independently of each other (often referred to as &#8220;<a title="Embarassingly parallel" href="http://english.stackexchange.com/questions/83677/what-is-embarrassing-about-an-embarrassingly-parallel-problem" target="_blank">embarrassingly parallel</a>&#8220;). This type of programming pattern is one that is well suited to running on a Hadoop cluster. With Amazon ElasticMapReduce (EMR), we can provision tens, hundreds, even thousands of computer instances to process this URL-dictionary word comparison, and thus getting our answer much faster. The one downside of using Amazon EMR to access Hadoop is that EMR expects to get a Java .jar file containing your MapReduce code. Luckily, there is a Python package called <a title="MRjob Python package" href="http://pythonhosted.org/mrjob/" target="_blank">MRJob</a> that does the Python-to-Java translation automatically, so that users don&#8217;t have to switch languages to get massively parallel processing. 

## Writing MapReduce code

The Python code above, keeping a tally of words & number of occurrences IS a version of the MapReduce coding paradigm. Going through the looping process to do the comparison is the &#8220;Map&#8221; portion of the code and the sum of the word values is the &#8220;Reduce&#8221; step. However, in order to use EMR, we need to modify the above code to remove the outer URL loop:

The reason why we remove the outer loop that loops over the lines of the URL file is because that is implicit to the EMR/Hadoop style of processing. We will specify a file that we want to process in our Python script, then EMR will distribute the URLs file across all the Hadoop nodes. Essentially, our 250,000,000 million lines of URLs will become 1,000 tasks of length 250,000 urls (assuming 125 nodes of 8 tasks each).

### Calling EMR from the Python command line

Once we have our Python MRJob code written, we can submit our code to EMR from the command line. Here&#8217;s what an example code looks like:

There are many more options that are possible for the MRJob package, so I highly suggest that you read the <a title="MRJobs EMR options" href="http://pythonhosted.org/mrjob/guides/emr-quickstart.html" target="_blank">documentation for EMR options</a>. One thing to also note is that MRJob uses a configuration file to host various options for EMR called &#8220;runners&#8221;.  Yelp (the maker of the MRJob package) has posted an <a title="MRJob .conf file" href="https://github.com/Yelp/mrjob/blob/master/mrjob.conf.example" target="_blank">example of the mrjob.conf file</a> with the most common options to use. In this file, you can specify your Amazon API keys, the type of instances you want to use (I use c1.xlarge spot instances for the most part), where your SSH keys are located and so on.

## Results

In terms of performance, I have 8 files of 5GB&#8217;s each of URLs (~17.5 million lines per file) that I&#8217;m running through the MRJob code above. The first file was run with 19 c1.xlarge instances, creating on average 133 mappers and 65 reducers and taking 917 minutes (_3.14 seconds/1000 lines_).  The second file was run with 80 c1.xlarge instances, creating 560 mappers and 160 reducers and taking 218 minutes (_0.75 seconds/1000 lines_). So using four times as many instances leads to one-fourth of the run-time.

For the most part, you can expect linear performance in terms of adding nodes to your EMR cluster. I know at some point, Hadoop will decide that it no longer needs to add any more mappers/reducers, but I haven&#8217;t had the desire to find out exactly how many I&#8217;d need to add to get to that point! 🙂

&nbsp;

&nbsp;