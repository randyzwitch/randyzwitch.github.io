---
id: 2184
title: Clustering Search Keywords Using K-Means Clustering
date: 2013-09-17T14:41:01+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2184
permalink: /rsitecatalyst-k-means-clustering/
tweetbackscheck:
  - 1472960929
  - 1472960929
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2184";s:7:"tinyurl";s:26:"http://tinyurl.com/kvfwjdm";s:4:"isgd";s:19:"http://is.gd/bIcLC2";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Digital Analytics
tags:
  - Adobe Analytics
  - Omniture
  - R
  - RSiteCatalyst
---
One of the key tenets to doing impactful digital analysis is understanding what your visitors are trying to accomplish. One of the easiest methods to do this is by analyzing the words your visitors use to arrive on site (search keywords) and what words they are using while on the site (on-site search). Although Google has made it much more difficult to analyze search keywords over the past several years (due to their passing of <a title="(not provided): Using R and the Google Analytics API" href="http://randyzwitch.com/r-google-analytics-api/" target="_blank">&#8220;(not provided)&#8221;</a> instead of the actual keywords), we can create customer intent segments based on the keywords that are still being passed using unsupervised clustering methods such as k-means clustering.
  
<!--more-->

## Concept: K-Means Clustering/Unsupervised Learning

<a title="k-means clustering" href="http://en.wikipedia.org/wiki/K-means_clustering" target="_blank">K-means clustering</a> is one of many techniques within <a title="Unsupervised learning Wikipedia" href="http://en.wikipedia.org/wiki/Unsupervised_learning" target="_blank">unsupervised learning</a> that can be used for text analysis. _Unsupervised_ refers to the fact that we&#8217;re trying to understand the structure of our underlying data, rather than trying to optimize for a specific, pre-labeled criterion (such as creating a predictive model for conversion). Unsupervised learning is a great technique for exploratory analysis in that the analyst enforces few assumptions on the data, so previously unexamined relationships can be determined _then_ analyzed; contrast that with pre-defined relationships specified by the analyst (such as _visitors from mobile_ or _visitors from social_), then evaluating how various metrics differ across these pre-defined groups.

Without getting too technical, k-means clustering is a method of partitioning data into &#8216;k&#8217; subsets, where each data element is assigned to the closest cluster based on the distance of the data element from the center of the cluster. In order to use k-means clustering with text data, we need to do some text-to-numeric transformation of our text data. Luckily, R provides several packages to simplify the process.


  


## Converting Text to Numeric Data: Document-Term Matrix

Since I use Adobe Analytics on this blog, I&#8217;m going to use the <a title="RSiteCatalyst" href="http://randyzwitch.com/rsitecatalyst/" target="_blank">RSiteCatalyst package</a> to get my natural search keywords into a dataframe. Once the keywords are in a dataframe, we can use the <a title="RTextTools" href="http://www.rtexttools.com/" target="_blank">RTextTools</a> package to create a document-term matrix, where each row is our search term and each column is a 1/0 representation of whether a single word is contained within natural search term. Within the _create_matrix_ function, I&#8217;m using four keyword arguments to process the data: 1) _stemWords_ reduces a word down to its root, which is a standardization method to avoid having multiple versions of words referring to the same concept (e.g. argue, arguing, argued reduces to  &#8216;argu&#8217;) 2) _removeStopwords_ eliminates common English words such as &#8220;they&#8221;, &#8220;he&#8221; , &#8220;always&#8221; 3) _minWordLength_ sets the minimum number of characters that constitutes a &#8216;word&#8217;, which I set to 1 because of the high likelihood of &#8216;r&#8217; being a keyword and 4) _removePunctuation_ removes periods, commas, etc. 

## Popular Words

If you are unfamiliar with the terms that might be contained in your dataset, you can use the _findFreqTerms_ to see which terms occur with a minimum frequency. Here are the terms that occur at least 20 times on this blog:

## Guessing at &#8216;k&#8217;: A First Run at Clustering

Once we have our data set up, we can very quickly run the k-means algorithm within R. The one downside to using k-means clustering as a technique is that the user must choose &#8216;k&#8217;, the number of clusters expected from the dataset. In absence of any heuristics about what &#8216;k&#8217; to use, I can guess that there are five topics on this blog: 1) Data Science 2) Digital Analytics  3) R 4) Julia 5) WordPress. Running the following code, we can see if the algorithm agrees:

Opening the dataframes to observe the results, it seems that the algorithm disagrees:

  * Cluster 1: &#8220;Free-for-All&#8221; cluster: not well separated (41.1% of terms)
  * Cluster 2: &#8220;wordpress&#8221; and &#8220;remove&#8221; (4.9% of terms)
  * Cluster 3: &#8220;powered by wordpress&#8221; (4.3% of terms)
  * Cluster 4: &#8220;twenty eleven&#8221; (13.5% of terms)
  * Cluster 5: &#8220;macbook&#8221; (36.2% of terms)

 Of the clusters, the strongest cluster in terms of performance is cluster 5, which is pretty homogenous in terms of being about &#8216;macbook&#8217; terms. Clusters 2-4 are all about WordPress, albeit different topics surrounding blogging. And cluster 1 is a large hodge-podge of terms that seem unrelated. Clearly, five clusters isn&#8217;t the proper value for &#8216;k&#8217;.   

## Selecting &#8216;k&#8217; Using &#8216;Elbow Method&#8217;

Instead of randomly choosing values of &#8216;k&#8217;, then looking at each cluster result until we find one we like, we can take a more automated approach to picking &#8216;k&#8217;. For every kmeans object returned by R, there is a metric _tot.withinss _that provides the total of the squared distance metric for each cluster.

The cost_df dataframe accumulates the results for each run, which can then be plotted using ggplot2 (<a title="ggplot2 k-means elbow method gist" href="https://gist.github.com/randyzwitch/6597905" target="_blank">ggplot2 Gist here</a>):

<p style="text-align: center;">
  <a href="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/09/elbow-plot.png"><img class="aligncenter size-full wp-image-2226" alt="elbow-plot" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2013/09/elbow-plot-e1379439719810.png?fit=500%2C354" data-recalc-dims="1" /></a>
</p>

The plot above is a technique known informally as the &#8216;elbow method&#8217;, where we are looking for breakpoints in our cost plot to understand where we should stop adding clusters. We can see that the slope of the cost function gets flatter at 10 clusters, then flatter again around 20 clusters. This means that as we add clusters above 10 (or 20), each additional cluster becomes less effective at reducing the distance from the each data center (i.e. reduces the variance less). So while we haven&#8217;t determined an absolute, single &#8216;best&#8217; value of &#8216;k&#8217;, we have narrowed down a range of values for &#8216;k&#8217; to evaluate.

Ultimately, the best value of &#8216;k&#8217; will be determined as a combination of a heuristic method like the &#8216;Elbow Method&#8217;, along with analyst judgement after looking at the results. Once you&#8217;ve determined your optimal cluster definitions, it&#8217;s trivial to calculate metrics such as Bounce Rate, Pageviews per Visit, Conversion Rate or Average Order Value to see how well the clusters actually describe different behaviors on-site.

## Summary

K-means clustering is one of many unsupervised learning techniques that can be used to understand the underlying structure of a dataset. When used with text data, k-means clustering can provide a great way to organize the thousands-to-millions of words being used by your customers to describe their visits. Once you understand what your customers are trying to do, you can tailor your on-site experiences to match these needs, as well as adjusting your reporting/dashboards to monitor the various customer groups.

_EDIT: For those who want to play around with the code but don&#8217;t use Adobe Analytics, here is the <a title="search keyword file" href="http://randyzwitch.com/wp-content/uploads/2013/09/searchkeywords_0913.csv" target="_blank">file of search keywords</a> I used. Once you read in the .csv file into a dataframe and name it searchkeywords, you should be able to replicate everything in this blog post._