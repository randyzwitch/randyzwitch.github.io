---
title: 'Video: Overlay Histogram in R (Normal, Density, Another Series)'
date: 2012-11-09T13:40:01+00:00
author: Randy Zwitch
layout: post
permalink: /overlay-histogram-in-r/
category: DataScience
description: Here's a video explaining how to overlay histograms in R. Three examples: histogram with normal curve, density curve, and second series on right side axis
tags:
  - Data Visualization
  - R
  - Video
---
This video explains how to overlay histogram plots in R for 3 common cases: overlaying a histogram with a normal curve, overlaying a histogram with a density curve, and overlaying a histogram with a second data series plotted on a secondary axis.

Note: Towards the end of the video (maybe minute 14 or so), I make a language error when talking about the `padj` parameter in the mtext function...the setting doesn't "left truncated" the label, I meant "right align", "left align", etc.

<iframe width="640" height="480" src="http://www.youtube.com/embed/C67KNai92Mo" frameborder="0" allowfullscreen></iframe>

{% highlight r linenos %}
#Step 0:  load/prepare data

#Read in data
sample_data <- read.csv("~/Desktop/test_data.csv")

# "Explode" counts by age back to unsummarized "raw" data
age.exploded <- rep.int(sample_data$age, sample_data$count)


#1. Histogram with normal distributon overlaid or density curve


#1A.  Create histogram
hist(age.exploded, xlim= c(0,20), ylim= c(0,.2), breaks=seq(min(age.exploded),
  max(age.exploded), length=22), xlab = "Age", ylab= "Percentage of Accounts",
  main = "Age Distribution of Accounts\n (where 0 <= age <= 20)",
  prob= TRUE, col= "lightgray")

#1B.  Do one of the following, either put the normal distribution on the histogram
#     or put the smoothed density function

#Calculate normal distribution having mean/sd equal to data plotted in the
#histogram above
points(seq(min(age.exploded), max(age.exploded), length.out=500),
       dnorm(seq(min(age.exploded), max(age.exploded), length.out=500),
             mean(age.exploded), sd(age.exploded)), type="l", col="red")

#Add smoothed density function to histogram, smoothness toggled using
#"adjust" parameter
lines(density(age.exploded, adjust = 2), col = "blue")

#2 Histogram with line plot overlaid

#2A.  Create histogram with extra border space on right-hand side

#Extra border space "2" on right  (bottom, left, top, right)
par(oma=c(0,0,0,2))

hist(age.exploded, xlim= c(0,20), ylim= c(0,.2),
     breaks=seq(min(age.exploded), max(age.exploded), length=22), xlab = "Age",
     ylab= "Percentage of Accounts", main = "Age Distribution of Accounts vs. Subscription Rate \n (where reported age <= 20)",
     prob= TRUE, col= "lightgray")

#2B.  Add overlaid line plot, create a right-side numeric axis
par(new=T)
plot(sample_data$subscribe_pct, xlab= "", ylab="", type = "b", col = "red", axes=FALSE)  
axis(4)

#2C.  Add right-side axis label

mtext(text="Subscription Rate",side=4, outer=TRUE, padj=1)
{% endhighlight %}

File Download:

<a title="Histogram overlay in R" href="http://randyzwitch.com/wp-content/uploads/2012/11/histogram-overlay-r.zip" target="_blank">Histogram overlay in R code and sample data file</a>
