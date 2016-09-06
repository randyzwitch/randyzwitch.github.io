---
title: 'Review: Data Science at the Command Line'
date: 2014-12-15T10:22:46+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3298
permalink: /data-science-command-line-review-janssens/
tweetbackscheck:
  - 1472944378
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3298";s:7:"tinyurl";s:26:"http://tinyurl.com/mn8fqeq";s:4:"isgd";s:19:"http://is.gd/UNGm3i";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Data Science
tags:
  - Command Line
  - Data Science
  - Data Visualization
  - Python
  - R
  - Unix
---
Admission: I didn't _really know_ how computers worked until around 2012.

For the majority of my career, I've worked for large companies with centralized IT functions. Like many statisticians, I fell into a comfortable position of learning SAS in a Windows environment, had Ops people to fix any Unix problems I'd run into and DBAs to load data into a relational database environment.

Then I became a consultant at a boutique digital analytics firm. To say I was punching above my weight was an understatement. All of the sudden it was time to go into various companies, have a one-hour kickoff meeting, then start untangling the spaghetti mess that represented their various technology systems. I also needed to figure out the boutique firm's hacked together AWS and Rackspace infrastructure.

[<img class="alignright wp-image-3302 size-full" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/12/data-science-command-line.png?fit=309%2C403" alt="data-science-command-line" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/12/data-science-command-line.png?w=309 309w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/12/data-science-command-line.png?resize=115%2C150 115w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/12/data-science-command-line.png?resize=230%2C300 230w" sizes="(max-width: 309px) 100vw, 309px" data-recalc-dims="1" />](http://datascienceatthecommandline.com/)I'm starting off this review with this admission, because my story of learning to work from the command line parallels <a title="Data Science at the Command Line" href="http://datascienceatthecommandline.com/" target="_blank"><em>Data Science at the Command Line</em></a> author <a title="Jeroen Janssens Twitter" href="https://twitter.com/jeroenhjanssens" target="_blank">Jeroen Janssens</a>:

> Around five years ago, during my PhD program, I gradually switched from using Microsoft Windows to GNU/Linux...Out of necessity I quickly became comfortable using the command line. Eventually, as spare time got more precious, I settled down with a GNU/Linux distribution known as Ubuntu...
>
> &#8212; Preface, pg. xi

Because a solid majority of people have never learned anything beyond point-and-click interface (Windows or Mac), the title of the book _Data Science at the Command Line_ is somewhat unfortunate; this is a book for ANYONE looking to start manipulating files efficiently from the command line.





## Getting Started, Safely

One of the best parts of _Data Science at the Command Line_ is that it comes with a <a title="Data Science Toolbox" href="http://datasciencetoolbox.org/" target="_blank">pre-built virtual machine</a> with 80-100 or more command line tools installed. This is a very fast and safe way to get started with the command line, as the tools are pre-installed and no matter what command you run while you're learning, you won't destroy a computer you actually care about!

Chapters 2 and 3 move through the steps of installing the virtual machine, explaining the essential concepts of the command line, some basic commands showing simple (but powerful!) ways to chain command line tools together and how to obtain data. What I find so refreshing about these two chapters by Janssens is that the author assumes zero knowledge of the command line by the reader; these two chapters are the most accessible summary of how <span style="text-decoration: underline;">and</span> why to use the command line I've ever read (<a title="Learn the Command Line the Hard Way" href="http://cli.learncodethehardway.org/book/" target="_blank">Zed Shaw's CLI tutorial</a> is a close second, but is quite terse).

## The OSEMN model

The middle portion of book covers the <a title="OSEMN model of data science" href="http://www.dataists.com/2010/09/a-taxonomy-of-data-science/" target="_blank">OSEMN model</a> (Obtain-Scrub-Explore-Model-iNterpret) of data science; another way this book is refreshing is that rather than jump right into machine learning/predictive modeling, the author spends a considerable amount of time covering the gory details of real analysis projects: manipulating data from the format you _receive_ (XML, JSON, sloppy CSV files, etc.) and taking the (numerous) steps required to get the format you _want_.

By introducing tools such as <a title="CSVKit" href="https://csvkit.readthedocs.org/en/0.9.0/" target="_blank">csvkit</a> (csv manipulation), <a title="jq unix" href="http://stedolan.github.io/jq/" target="_blank">jq</a> (JSON processor), and classic tools such as <a title="Sed" href="https://www.gnu.org/software/sed/manual/sed.html" target="_blank">sed</a> (stream editor) and <a title="AWK" href="http://www.gnu.org/software/gawk/manual/gawk.html" target="_blank">awk</a>, the reader gets a full treatment of how to deal with malformed data files (which in my experience are the only type available in the wild!) . Chapter 6 ("Managing Your Data Workflow") is also a great introduction into <a title="Reproducible research definition" href="http://en.wikipedia.org/wiki/Reproducibility#Reproducible_research" target="_blank">reproducible research</a> using the <a title="Drake" href="http://blog.factual.com/introducing-drake-a-kind-of-make-for-data" target="_blank">Drake</a> tool (Make for Data Analysis). This is an area that I will personally be focusing my time on, as I tend to run a lot of one-off commands in HDFS and as of now, just copy them into a plain-text file. Reproducing = copy-paste in my case, which defeats the purpose of computers and scripting!

## An Idea Can Be Stretched Too Far

Chapters 8 and 9 cover Parallel Processing using <a title="GNU Parallel" href="http://www.gnu.org/software/parallel/" target="_blank">GNU Parallel</a> and Modeling Data respectively. While GNU Parallel is a tool I could see using sometime in the future, I do feel like building models and creating visualizations straight from the command line is getting pretty close to just being a parlor trick. Yes, it's obviously possible to do such things (and the author even wrote his own <a title="Rio Command Line R" href="https://github.com/jeroenjanssens/data-science-at-the-command-line/blob/master/tools/Rio" target="_blank">command line tool Rio</a> for using R from the command line), but with the amount of iteration, feature building and and fine-tuning that goes on, I'd rather use <a title="IPython Notebook" href="http://ipython.org/notebook.html" target="_blank">IPython Notebook</a> or <a title="RStudio" href="http://www.rstudio.com/" target="_blank">RStudio</a> to give me the flexibility I need to really iterate effectively.

## A Book For Everyone

As I mentioned above, I really feel that _Data Science at the Command Line_ is a book well suited for anyone who does data analysis. Jeroen Janssens has done a fantastic job of taking his original "<a title="Jeroens Janssens 7 command line tools for data science" href="http://jeroenjanssens.com/2013/09/19/seven-command-line-tools-for-data-science.html" target="_blank">7 command-line tools for data science</a>" blog post and extending the idea to a full-fledged book. This book has a prominent place in my work library next to <a title="Python for Data Analysis" href="http://shop.oreilly.com/product/0636920023784.do" target="_blank">Python for Data Analysis</a> and in the past two months I've referred to each book at roughly the same rate. For under $30 for paperback at Amazon, there's more than enough content to make you a better data scientist.

&nbsp;
