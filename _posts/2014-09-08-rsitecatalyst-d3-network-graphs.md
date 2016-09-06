---
id: 2978
title: Visualizing Website Structure With Network Graphs
date: 2014-09-08T06:40:38+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2978
permalink: /rsitecatalyst-d3-network-graphs/
tweetbackscheck:
  - 1472972143
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2978";s:7:"tinyurl";s:26:"http://tinyurl.com/kgmkmbr";s:4:"isgd";s:19:"http://is.gd/gxyj85";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
tags:
  - Adobe Analytics
  - Data Visualization
  - Omniture
  - R
  - RSiteCatalyst
---
Last week, <a title="RSiteCatalyst Version 1.4 Release Notes" href="http://randyzwitch.com/rsitecatalyst-version-1-4-release-notes/" target="_blank">version 1.4 of RSiteCatalyst</a> was released, and now it&#8217;s possible to get site pathing information directly within R. Now, it&#8217;s easy to create impressive looking network graphs from your Adobe Analytics data using <a title="RSiteCatalyst CRAN" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst</a> and <a title="d3Network CRAN" href="http://cran.r-project.org/web/packages/d3Network/index.html" target="_blank">d3Network</a>. In this blog post, I will cover simple and force-directed network graphs, which show the pairwise representation between pages. In a follow-up blog post, I will show how to visualize longer paths using <a title="Examples of Sankey Diagrams" href="http://www.sankey-diagrams.com/" target="_blank">Sankey diagrams</a>, also from the d3Network package.

<!--more-->

## Obtaining Pathing Data With QueuePathing

Although the _QueuePathing()_ function is new to RSiteCatalyst, its syntax should feel familar (even with all of the breaking changes we made!). In the case of creating our network graphs, we want to download all pairwise combinations of pages, which is easy to do using the **::anything::** operator:Because we are using a pathing pattern of (&#8220;::anything::&#8221;, &#8220;::anything::&#8221;), the data frame that is returned from this function will have three columns: _step.1_, _step.2_ and _count_, which is the number of occurrences of the path.



## Plotting Graph Using d3SimpleNetwork

Before jumping into the plotting, we need to do some quick data cleaning. Lines 1-5 below are optional; I don&#8217;t set the Adobe Analytics s.pageName on each of my blog pages (a worst practice if there ever was one!), so I use the _sub()_ function in Base R to strip the domain name from the beginning of the page. The other data frame modification is to remove the &#8216;Entered Site&#8217; and &#8216;Exited Site&#8217; from the pagename pairs. Although this is important information generally, these behaviors aren&#8217;t needed to show the pairwise relationship between pages.Running the above code results in the following graph: Hmmm&#8230;looks like a blob of spaghetti, a common occurrence when creating graphs. We can do better.

## Pruning Edges From The Graph

There are many <a title="Pruning Edges from Network" href="http://link.springer.com/chapter/10.1007%2F978-3-642-31830-6_13" target="_blank">complex algorithms for determining how to prune edges/nodes from a network</a>. For the sake of simplicity, I&#8217;m going to use a very simple algorithm: each path has to occur more than 5 times for it to be included in the network. This will prune roughly 80% of the pairwise page combinations while keeping ~75% of the occurrences. This is simple to do using the _subset()_ function in R:The result of pruning the number of edges is a much less cluttered graph:

Even with fewer edges in the graph, we still lose some of the information about the pages, since we don&#8217;t know what topics/groups the pages represent. We can fix that using a slightly more complex version of the d3Network graph code.

## Force-directed graphs

The graphs above outline the structure of randyzwitch.com, but they can be improved by adding color-coding to the nodes to represent the topic of the post, as well as making the edges thicker/thinner based on how frequently the path occurs. This can be done using the d3ForceNetwork() function as so:

Running the code results in the following force-directed graph:



## Interpretation

I&#8217;m not going to lie, all three of these diagrams are hard to interpret. Like wordclouds, network graphs can often be visually interesting, yet difficult to ascertain any concrete information. Network graphs also have the tendency to reinforce what you already know (you or someone you know designed your website, you should already have a feel for its structure!).

However, in the case of the force-directed graph above, I do see some interesting patterns. Specifically, there are a considerable number of nodes that aren&#8217;t attached to the main network structure. This may be occurring due to my method of pruning the network edges. More likely is that these disconnected nodes represent &#8220;dead-ends&#8221; in my blog, either because few pages link to them, there are technical errors, these are high bounce-rate pages or represent one-off topics that satiate the reader.

In terms of action I can take, I can certainly look up the bounce rate for these disconnected pages/nodes and re-write the content to make it more &#8216;sticky&#8217;. There&#8217;s also the case of the way my &#8220;Related Posts&#8221; plugin determines related pages. As far as I know, it&#8217;s quite naive, using the existing words on the page to determine relationships between posts. So one follow-up could be to create an actual recommender system to better suggest content to my readers. Perhaps that&#8217;s a topic for a different blog post.

Regardless of the actions I&#8217;ll end up taking from this information, hopefully this blog post has piqued some ideas of how to use RSiteCatalyst in a non-standard way, to extend the standard digital analytics information you are capturing with Adobe Analytics into creating interesting visualizations and potential new insights.

#### Example Data

_For those of you who aren&#8217;t Adobe Analytics customers (or are, but don&#8217;t have API access), here are the <a title="Example data" href="http://randyzwitch.com/wp-content/uploads/2014/09/queue_pathing_pages.csv" target="_blank">data from the queue_pathing_pages data frame</a> above. Just read this data into R, then you should be able to follow along with the d3Network code._
