---
title: Calling RSiteCatalyst From Python
date: 2016-02-22T10:34:44+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-adobe-analytics-python/
category: Analytics
tags:
  - Adobe Analytics
  - Jupyter Notebook
  - Omniture
  - Python
  - R
---
<blockquote class="twitter-tweet" data-lang="en">
  <p dir="ltr" lang="en">
    <a href="https://twitter.com/randyzwitch">@randyzwitch</a> Do you know if anyone has gotten RSiteCat running in a Jupyter Notebook that ran RPY2? Tired of using 2 different environments
  </p>

  <p>
    — Adam Gitzes (@FootballActuary) <a href="https://twitter.com/FootballActuary/status/700350988842995712">February 18, 2016</a>
  </p>
</blockquote>



This will be a very short post, because the only "new" information I'm going to provide is the minimal example to answer the question. Yes, it is in fact possible to call RSiteCatalyst from Python and seems to work well. The most important things are 1) making sure you install <a href="http://rpy2.readthedocs.org/en/version_2.7.x/" target="_blank">rpy2</a> and 2) loading <a href="http://pandas.pydata.org/" target="_blank">Pandas</a> (since so much of RSiteCatalyst are API calls returning data frames). It doesn't hurt to already have experience using <a href="http://randyzwitch.com/tag/rsitecatalyst/" target="_blank">RSiteCatalyst</a> in <a href="http://randyzwitch.com/tag/r/" target="_blank">R</a>, since all we're doing here is using Python to pass code to R.





## Setup Code: rpy2 and Pandas

To call an R package from Python, the rpy2 package works very well, both from the REPL and Jupyter Notebook. For RSiteCatalyst, here is the set up code:

With this code run, now you can make calls to the RSiteCatalyst R package, just as if you were in R itself.

## Sample Call: GetReportSuites

Just to prove it works, here's a code snippet using _GetReportSuites()_:

And in Jupyter Notebook, you would see something similar to:

<img class="aligncenter size-large wp-image-3831" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2016/02/rsitecatalyst-rpy2-1-1024x424.png?fit=1024%2C424" alt="rsitecatalyst-rpy2" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2016/02/rsitecatalyst-rpy2-1.png?resize=1024%2C424 1024w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2016/02/rsitecatalyst-rpy2-1.png?resize=150%2C62 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2016/02/rsitecatalyst-rpy2-1.png?resize=300%2C124 300w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2016/02/rsitecatalyst-rpy2-1.png?resize=768%2C318 768w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2016/02/rsitecatalyst-rpy2-1.png?w=2000 2000w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />

## But, Why?

So that's about it...if you wanted to, you could call RSiteCatalyst from Python without much effort. There aren't a whole lot of reasons to do so, unless like Adam above, you'd rather just use Python. I suppose if you wanted to use some other Python packages, such as <a href="http://flask.pocoo.org/docs/0.10/" target="_blank">Flask</a> to create a dashboard or <a href="http://stanford.edu/~mwaskom/software/seaborn/" target="_blank">Seaborn</a> for visualization you might want to do this. Until I got this tweet, it never occurred to me to do this, so YMMV.

_Edit, 2/26/16: Adam Gitzes, who originally asked the question, also provides a different solution using Jupyter Notebook magics at his [blog post here](http://maassmedia.com/r-site-catalyst-python.php)_
