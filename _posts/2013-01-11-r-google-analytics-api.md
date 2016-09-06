---
title: '(not provided): Using R and the Google Analytics API'
date: 2013-01-11T16:27:33+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1428
permalink: /r-google-analytics-api/
tweetbackscheck:
  - 1473001278
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1428";s:7:"tinyurl";s:26:"http://tinyurl.com/cadaujl";s:4:"isgd";s:19:"http://is.gd/JN1THR";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
tags:
  - Google Analytics
  - R
  - SEO
---
<div id="attachment_1432" style="width: 610px" class="wp-caption aligncenter">
  <img class="size-full wp-image-1432" alt="(not provided) terms from Google average 35%-60% of all organic search terms" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/01/google-not-provided.png?fit=600%2C331" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/01/google-not-provided.png?w=600 600w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/01/google-not-provided.png?resize=150%2C82 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/01/google-not-provided.png?resize=300%2C165 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/01/google-not-provided.png?resize=500%2C275 500w" sizes="(max-width: 600px) 100vw, 600px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    (not provided) terms from Google average 35%-60% of all Google organic search terms
  </p>
</div>

For power users of Google Analytics, there is a heavy dose of spreadsheet work that accompanies any decent analysis.  But even with Excel in tow, it's often difficult to get the data _just right_ without resorting to formula hacks and manual table formatting.  This is where the Google Analytics API and R can come very much in handy.



## Connecting to the Google Analytics API using R

I'm not going to say that connecting to the Google Analytics API is easy _per se_, but with the [rga package](http://skardhamar.github.com/rga/ "R Google Analytics API package") written by "skardhamar" on GitHub, it's easier than if you had to develop the connection code yourself!  However, before you can get started making calls to the Google Analytics API, you need to register within the [Google Analytics API console](https://code.google.com/apis/console/ "Google Analytics API console").  There you can define a new project and then you'll be able to make your API calls via R.

After you have your API access straightened out, the [GitHub page for the rga package](http://skardhamar.github.com/rga/ "RGA package instructions") has all the details in how to authenticate using the _rga.open_ function.  I chose to use the "where" argument so that I can continuously hit the API across many sessions without having to do browser authentication each time.

<p style="padding-left: 30px;">
  <code>rga.open(instance = "ga", where = "~/Documents/R/ga-api")</code>
</p>





## Analyzing (not provided) as a Google Analytics organic search term

Once connected to the Google Analytics API, now it's time to submit our API calls.  I used two API calls to create the graph at the top of the post, which shows the percentage of all Google organic search terms that are listed as "(not provided)" for the entire history of this blog.  The two API calls were to download the number of total organic search term visits by date from Google and the number of "(not provided)" visits by date, also from Google.  Here's the API call for the "(not provided)" data (replace XXXXXXXX with your profile ID):

<p style="padding-left: 30px;">
  <code>visits_notprovided.df &lt;- ga$getData(XXXXXXXX,&lt;br />
start.date = "2011-01-01",&lt;br />
end.date = "2013-01-10",&lt;br />
metrics = "ga:visits",&lt;br />
filters = "ga:keyword==(not provided);ga:source==google;ga:medium==organic",&lt;br />
dimensions = "ga:date",&lt;br />
max = 1500,&lt;br />
sort = "ga:date")&lt;br />
</code>
</p>

The result of this API call provides an R data frame containing two columns: date and number of visits where the search term was "(not provided)".

## Munging the data using R

After pulling the data into R, all that's left is to merge the data frames, do a few calculations, then make the boxplot.  Because the default object returned by the rga package is a data frame, it's trivial to use the _merge_ function in R to join the data frames, then use a few calculated columns to create the percentage of visits that are "(not provided)"

## What was that Google, only 10% of searches are supposed to be (not provided)?

By now, it's beating a dead horse that the percentage of "(not provided)" search results from Google FAR exceeds what they said it would.  This blog gets about 5,000 visits a month, and due to the technical nature of the blog many of the users are using Chrome (which does secure search automatically) or from iOS (which also does secure search).  But at minimum, this graph illustrates the power of using the Google Analytics API via R; I can update this graph at my leisure by running my script, and I can create a graphic that's not possible within Excel.

Full code:
