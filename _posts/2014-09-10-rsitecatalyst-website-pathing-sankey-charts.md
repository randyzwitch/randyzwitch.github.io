---
title: Visualizing Website Pathing With Sankey Charts
date: 2014-09-10T21:27:10+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3047
permalink: /rsitecatalyst-website-pathing-sankey-charts/
tweetbackscheck:
  - 1472942406
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3047";s:7:"tinyurl";s:26:"http://tinyurl.com/ou45zj6";s:4:"isgd";s:19:"http://is.gd/M9OjS0";}'
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
In my prior post on [visualizing website structure using network graphs](http://randyzwitch.com/rsitecatalyst-d3-network-graphs/ "Visualizing Website Structure With Network Graphs"), I referenced that network graphs showed the pairwise relationships between two pages (in a bi-directional manner). However, if you want to analyze how your visitors are pathing through your site, you can visualize your data using a Sankey chart.

## Visualizing Single Page-to-Next Page Pathing

Most digital analytics tools allow you to visualize the path between pages. In the case of Adobe Analytics, the Next Page Flow diagram is limited to 10 second-level branches in the visualization. However, the Adobe Analytics API has no such limitation, and as such we can use RSiteCatalyst to create the following visualization (<a title="RSiteCatalyst Sankey Chart" href="https://gist.github.com/randyzwitch/008be202b94bde7c4359" target="_blank">GitHub Gist containing R code</a>):



The data processing for this visualization is near identical to the network diagrams. We can use _QueuePathing()_ from RSiteCatalyst to download our pathing data, except in this case, I specified an exact page name as the first level of the pathing pattern instead of using the **::anything::** operator. In all Sankey charts created by d3Network, you can hover over the right-hand side nodes to see the values (you can also drag around the nodes on either side if you desire!). It's pretty clear from this diagram that I need to do a better job retaining my visitors, as the most common path from this page is to leave. 🙁







## Many-to-Many Page Pathing

The example above picks a single page related to Hadoop, then shows how my visitors continue through my site; sometimes, they go to other Hadoop pages, some view <a title="Data Science content" href="http://randyzwitch.com/category/data-science/" target="_blank">Data Science related content</a> or any number of other paths. If we want, however, we can visualize how all visitors path through all pages. Like the force-directed graph, we can get this information by using the **("::anything::", "::anything::")** path pattern with _QueuePathing()_:

Running the code above provides the following visualization:



For legibility purposes, I'm only plotting paths that occur more than 120 times. But given a large enough display, it would be possible to visualize all valid combinations of paths.

One thing to keep in mind is that with the d3.js library, there is a weird hiccup where if your dataset contains "duplicate" paths such that both Source -> Target & Target -> Source exists, d3.js will go into an infinite loop/not show any visualization. My R code doesn't provide a solution to this issue, but it should be trivial to remove these "duplicates" should they arise in your dataset.

## Interpretation

Unlike the network graphs, Sankey Charts are fairly easy to understand. The "worst" path on my site in terms of keeping visitors on site is where I praised Apple for <a title="Apple Has Earned a Customer for Life" href="http://randyzwitch.com/broken-macbook-pro-hinge-fixed-free/" target="_blank">fixing my MacBook Pro screen</a> out-of-warranty. The easy explanation for this poor performance is that this article attracts people who aren't really my target audience in data science, but looking for information about getting THEIR screens fixed. If I wanted to engage these readers more, I guess I would need to write more Apple-related content.

To the extent there are multi-stage paths, these tend to be <a title="Hadoop articles" href="http://randyzwitch.com/tag/hadoop/" target="_blank">Hadoop</a> and <a title="Julia programming language articles" href="http://randyzwitch.com/tag/julia/" target="_blank">Julia</a>-related content. This makes sense as both technologies are fairly new, I have a lot more content in these areas, and especially in the case of Julia, I'm one of the few people writing practical content. So I'm glad to see I'm achieving some level of success in these areas.

Hopefully this blog post and my previous post on <a title="Visualizing Website Structure With Network Graphs" href="http://randyzwitch.com/rsitecatalyst-d3-network-graphs/" target="_blank">visualizing your website visitors using network graphs</a> have given a feel for the <a title="RSiteCatalyst Version 1.4 Release Notes" href="http://randyzwitch.com/rsitecatalyst-version-1-4-release-notes/" target="_blank">new functionality available in RSiteCatalyst v1.4</a>, as well providing a new way of thinking about data visualization beyond just the default graphs provided by the Adobe Analytics interface.
