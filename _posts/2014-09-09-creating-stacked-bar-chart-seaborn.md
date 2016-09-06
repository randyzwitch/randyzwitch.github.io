---
id: 3027
title: Creating A Stacked Bar Chart in Seaborn
date: 2014-09-09T08:01:39+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3027
permalink: /creating-stacked-bar-chart-seaborn/
tweetbackscheck:
  - 1472924182
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3027";s:7:"tinyurl";s:26:"http://tinyurl.com/ku5ro8o";s:4:"isgd";s:19:"http://is.gd/gmLRbk";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Data Science
tags:
  - Data Visualization
  - Python
---
The other day I was having a heck of a time trying to figure out how to make a stacked bar chart in Seaborn. But in true open-source/community fashion, I ended up getting a response from the creator of Seaborn via Twitter:

<blockquote class="twitter-tweet" lang="en" data-conversation="none">
  <p>
    <a href="https://twitter.com/randyzwitch">@randyzwitch</a> I don&#8217;t really like stacked bar charts, I&#8217;d suggest maybe using pointplot / factorplot with kind=point
  </p>

  <p>
    — Michael Waskom (@michaelwaskom) <a href="https://twitter.com/michaelwaskom/status/507608729840152578">September 4, 2014</a>
  </p>
</blockquote>

So there you go. I don&#8217;t want to put words in Michael&#8217;s mouth, but if he&#8217;s not a fan, then it sounded like it was up to me to find my own solution if I wanted a stacked bar chart. I hacked around on the <a title="pandas visualization" href="http://pandas.pydata.org/pandas-docs/stable/visualization.html" target="_blank">pandas plotting functionality</a> a while, went to the <a title="matplotlib stacked bar chart" href="http://matplotlib.org/1.3.1/examples/pylab_examples/bar_stacked.html" target="_blank">matplotlib documentation/example for a stacked bar chart</a>, tried Seaborn some more and then it hit me&#8230;I&#8217;ve gotten so used to these amazing open-source packages that my brain has atrophied! Creating a stacked bar chart is SIMPLE, even in Seaborn (and even if Michael doesn&#8217;t like them 🙂 )



## Stacked Bar Chart = Sum of Two Series

In trying so hard to create a stacked bar chart, I neglected the most obvious part. Given two series of data, Series 1 (&#8220;bottom&#8221;) and Series 2 (&#8220;top&#8221;), to create a stacked bar chart you just need to create:

<pre style="padding-left: 30px;">Series 3 = Series 1 + Series 2</pre>

Once you have Series 3 (&#8220;total&#8221;), then you can use the overlay feature of matplotlib and Seaborn in order to create your stacked bar chart. Plot &#8220;total&#8221; first, which will become the base layer of the chart. Because the total by definition will be greater-than-or-equal-to the &#8220;bottom&#8221; series, once you overlay the &#8220;bottom&#8221; series on top of the &#8220;total&#8221; series, the &#8220;top&#8221; series will now be stacked on top:

#### Background: &#8220;Total&#8221; Series

[<img class="aligncenter size-full wp-image-3034" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/09/background_total.png?fit=1385%2C607" alt="background_total" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/09/background_total.png?w=1385 1385w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/09/background_total.png?resize=150%2C65 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/09/background_total.png?resize=300%2C131 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/09/background_total.png?resize=1024%2C448 1024w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/09/background_total.png)

#### Overlay: &#8220;Bottom&#8221; Series

[<img class="aligncenter size-full wp-image-3039" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/09/bottom_plot1.png?fit=1380%2C607" alt="bottom_plot" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/09/bottom_plot1.png?w=1380 1380w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/09/bottom_plot1.png?resize=150%2C65 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/09/bottom_plot1.png?resize=300%2C131 300w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/09/bottom_plot1.png?resize=1024%2C450 1024w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />](http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/09/bottom_plot1.png)

## End Result: Stacked Bar Chart

Running the code in the same IPython Notebook cell results in the following chart (<a title="chart-data" href="http://randyzwitch.com/wp-content/uploads/2014/09/stacked_bar.csv" target="_blank">download chart data</a>): [<img class="aligncenter size-full wp-image-3041" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/09/stacked-bar-seaborn.png?fit=1395%2C621" alt="stacked-bar-seaborn" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/09/stacked-bar-seaborn.png?w=1395 1395w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/09/stacked-bar-seaborn.png?resize=150%2C66 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/09/stacked-bar-seaborn.png?resize=300%2C133 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/09/stacked-bar-seaborn.png?resize=1024%2C455 1024w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/09/stacked-bar-seaborn.png)

## Don&#8217;t Overthink Things!

In the end, creating a stacked bar chart in Seaborn took me 4 hours to mess around trying everything under the sun, then 15 minutes once I remembered what a stacked bar chart actually represents. Hopefully this will save someone else from my same misery.
