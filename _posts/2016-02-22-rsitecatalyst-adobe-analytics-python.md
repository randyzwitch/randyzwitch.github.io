---
title: Calling RSiteCatalyst From Python
date: 2016-02-22T10:34:44+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-adobe-analytics-python/
category: Analytics
description: Calling RSiteCatalyst from Python is absolutely possible and works quite well, using the rpy2 package
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

This will be a very short post, because the only "new" information I'm going to provide is the minimal example to answer the question. Yes, it is in fact possible to call RSiteCatalyst from Python and seems to work well. The most important things are 1) making sure you install [rpy2](http://rpy2.readthedocs.org/en/version_2.7.x/) and 2) loading [Pandas](http://pandas.pydata.org/) (since so much of RSiteCatalyst is API calls returning data frames). It doesn't hurt to already have experience using [RSiteCatalyst](http://randyzwitch.com/tags/#rsitecatalyst) in [R](/tags/#r), since all we're doing here is using Python to pass code to R.

## Setup Code: rpy2 and Pandas

To call an R package from Python, the rpy2 package works very well, both from the REPL and Jupyter Notebook. For RSiteCatalyst, here is the set up code:

{% highlight python linenos %}
import pandas as pd

import rpy2.robjects.packages as rpackages
from rpy2.robjects import pandas2ri

# Activate ability to translate R objects to pandas data frames
pandas2ri.activate()

# Load RSiteCatalyst into Python
rsc = rpackages.importr('RSiteCatalyst')
{% endhighlight %}

With this code run, now you can make calls to the RSiteCatalyst R package, just as if you were in R itself.

## Sample Call: GetReportSuites

Just to prove it works, here's a code snippet using `GetReportSuites()`:

{% highlight python linenos %}
# Call GetReportSuites to confim it works
grs = rsc.GetReportSuites()
pandas2ri.ri2py_dataframe(grs)
{% endhighlight %}

And in Jupyter Notebook, you would see something similar to:

![rsitecatalyst-rpy2](/wp-content/uploads/2016/02/rsitecatalyst-rpy2-1-1024x424.png)

## But, Why?

So that's about it...if you wanted to, you could call RSiteCatalyst from Python without much effort. There aren't a whole lot of reasons to do so, unless like Adam above, you'd rather just use Python. I suppose if you wanted to use some other Python packages, such as [Flask](http://flask.pocoo.org/docs/0.10/) to create a dashboard or [Seaborn](http://stanford.edu/~mwaskom/software/seaborn/) for visualization you might want to do this. Until I got this tweet, it never occurred to me to do this, so YMMV.

_Edit, 2/26/16: Adam Gitzes, who originally asked the question, also provides a different solution using Jupyter Notebook magics at his [blog post here](http://maassmedia.com/r-site-catalyst-python.php)_
