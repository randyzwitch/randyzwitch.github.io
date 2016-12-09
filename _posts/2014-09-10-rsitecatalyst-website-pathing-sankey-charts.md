---
title: Visualizing Website Pathing With Sankey Charts
date: 2014-09-10T21:27:10+00:00
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-website-pathing-sankey-charts/
category: Analytics
description: In order to effectively visualize how visitors path through your website, you can use a Sankey diagram. Here's how to do it using RSiteCatalyst and d3Network.
tags:
  - Adobe Analytics
  - Data Visualization
  - Omniture
  - R
  - RSiteCatalyst
---
In my prior post on [visualizing website structure using network graphs](http://randyzwitch.com/rsitecatalyst-d3-network-graphs/ "Visualizing Website Structure With Network Graphs"), I referenced that network graphs showed the pairwise relationships between two pages (in a bi-directional manner). However, if you want to analyze how your visitors are pathing through your site, you can visualize your data using a Sankey chart.

## Visualizing Single Page-to-Next Page Pathing

Most digital analytics tools allow you to visualize the path between pages. In the case of Adobe Analytics, the Next Page Flow diagram is limited to 10 second-level branches in the visualization. However, the Adobe Analytics API has no such limitation, and as such we can use RSiteCatalyst to create the following visualization ([GitHub Gist containing R code](https://gist.github.com/randyzwitch/008be202b94bde7c4359)):

<iframe src="http://randyzwitch.com/wp-content/uploads/2014/09/sankey.html" width="750" height="650" frameborder="0" scrolling="no"></iframe>

The data processing for this visualization is near identical to the network diagrams. We can use `QueuePathing()` from RSiteCatalyst to download our pathing data, except in this case, I specified an exact page name as the first level of the pathing pattern instead of using the `::anything::` operator. In all Sankey charts created by `d3Network`, you can hover over the right-hand side nodes to see the values (you can also drag around the nodes on either side if you desire!). It's pretty clear from this diagram that I need to do a better job retaining my visitors, as the most common path from this page is to leave. 🙁

## Many-to-Many Page Pathing

The example above picks a single page related to Hadoop, then shows how my visitors continue through my site; sometimes, they go to other Hadoop pages, some view <a title="Data Science content" href="http://randyzwitch.com/category/data-science/" target="_blank">Data Science related content</a> or any number of other paths. If we want, however, we can visualize how all visitors path through all pages. Like the force-directed graph, we can get this information by using the `("::anything::", "::anything::")` path pattern with `QueuePathing()`:

{% highlight R linenos %}
#Multi-page pathing
library("d3Network")
library("RSiteCatalyst")

#### Authentication
SCAuth("name", "secret")

#### Get All Possible Paths with ("::anything::", "::anything::")
pathpattern <- c("::anything::", "::anything::")
next_page <- QueuePathing("zwitchdev",
                          "2014-01-01",
                          "2014-08-31",
                          metric="pageviews",
                          element="page",
                          pathpattern,
                          top = 50000)

#Optional step: Cleaning my pagename URLs to remove to domain for clarity
next_page$step.1 <- sub("http://randyzwitch.com/","",
                        next_page$step.1, ignore.case = TRUE)
next_page$step.2 <- sub("http://randyzwitch.com/","",
                        next_page$step.2, ignore.case = TRUE)

#Filter out Entered Site and duplicate rows, >120 for chart legibility
links <- subset(next_page, count >= 120 & step.1 != "Entered Site")

#Get unique values of page name to create nodes df
#Create an index value, starting at 0
nodes <- as.data.frame(unique(c(links$step.1, links$step.2)))
names(nodes) <- "name"
nodes$nodevalue <- as.numeric(row.names(nodes)) - 1

#Convert string to numeric nodeid
links <- merge(links, nodes, by.x="step.1", by.y="name")
names(links) <- c("step.1", "step.2", "value", "segment.id", "segment.name", "source")

links <- merge(links, nodes, by.x="step.2", by.y="name")
names(links) <- c("step.2", "step.1", "value", "segment.id", "segment.name","source", "target")

#Create next page Sankey chart
d3output = "~/Desktop/sankey_all.html"
d3Sankey(Links = links, Nodes = nodes, Source = "source",
         Target = "target", Value = "value", NodeID = "name",
         fontsize = 12, nodeWidth = 50, file = d3output, width = 750, height = 700)
{% endhighlight %}

Running the code above provides the following visualization:

<iframe src="http://randyzwitch.com/wp-content/uploads/2014/09/sankey_all1.html" width="750" height="700" frameborder="0" scrolling="no"></iframe>

For legibility purposes, I'm only plotting paths that occur more than 120 times. But given a large enough display, it would be possible to visualize all valid combinations of paths.

One thing to keep in mind is that with the `d3.js` library, there is a weird hiccup where if your dataset contains "duplicate" paths such that both `Source -> Target & Target -> Source` exists, `d3.js` will go into an infinite loop/not show any visualization. My R code doesn't provide a solution to this issue, but it should be trivial to remove these "duplicates" should they arise in your dataset.

## Interpretation

Unlike the network graphs, Sankey Charts are fairly easy to understand. The "worst" path on my site in terms of keeping visitors on site is where I praised Apple for [fixing my MacBook Pro screen](http://randyzwitch.com/broken-macbook-pro-hinge-fixed-free/) out-of-warranty. The easy explanation for this poor performance is that this article attracts people who aren't really my target audience in data science, but looking for information about getting THEIR screens fixed. If I wanted to engage these readers more, I guess I would need to write more Apple-related content.

To the extent there are multi-stage paths, these tend to be [Hadoop](http://randyzwitch.com/tag/hadoop/) and [Julia](http://randyzwitch.com/tag/julia/)-related content. This makes sense as both technologies are fairly new, I have a lot more content in these areas, and especially in the case of Julia, I'm one of the few people writing practical content. So I'm glad to see I'm achieving some level of success in these areas.

Hopefully this blog post and my previous post on [visualizing your website visitors using network graphs](http://randyzwitch.com/rsitecatalyst-d3-network-graphs/) have given a feel for the [new functionality available in RSiteCatalyst v1.4](http://randyzwitch.com/rsitecatalyst-version-1-4-release-notes/), as well providing a new way of thinking about data visualization beyond just the default graphs provided by the Adobe Analytics interface.
