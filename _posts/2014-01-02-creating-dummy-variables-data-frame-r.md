---
id: 2432
title: Quickly Create Dummy Variables in a Data Frame
date: 2014-01-02T13:58:51+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2432
permalink: /creating-dummy-variables-data-frame-r/
tweetbackscheck:
  - 1472959886
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2432";s:7:"tinyurl";s:26:"http://tinyurl.com/mtwplul";s:4:"isgd";s:19:"http://is.gd/tW0fbl";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Machine Learning
  - R
---
On Quora, a question was asked about how to fix the error of the <a title="Error in Random Forest 32 levels categorical variable" href="https://www.quora.com/Random-Forests/How-can-I-fix-the-error-in-the-package-randomForest" target="_blank">randomForest package in R not being able to handle more than 32 levels in a categorical variable</a>. Seeing as how I&#8217;ve seen this question asked on Kaggle forums, StackOverflow and elsewhere, here&#8217;s the answer: code your own _dummy variables_ instead of relying on Factors!

## Code snippet

As the code above shows, it&#8217;s trivial to generate your own 1/0 columns of data instead of relying on Factors. There are two things to keep in mind when creating your own dummy variables:

  1. The problem you are trying to solve

&nbsp;

  * How much RAM you have available

&nbsp;

&nbsp;

While it may make sense to generate dummy variables for Customer State (~50 for the United States), if you were to use the code above on City Name, you&#8217;d likely either run out of RAM or find out that there are too many levels to be useful. Of course, with any qualitative statement such as &#8220;too many levels to be useful&#8221;, oftentimes the only way to definitively know is to try it! Just make sure you save your work before running this code, just in case you run out of RAM. Or, use someone else&#8217;s computer for testing 😉 Edit 1/2/14: John Myles White brought up a good point via Twitter about RAM usage:

<blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" data-partner="tweetdeck">
  <p>
    <a href="https://twitter.com/randyzwitch">@randyzwitch</a> If you&#8217;re running out of RAM with dummy variables, you probably want to use a sparse matrix instead of a data.frame.
  </p>
  
  <p>
    — John Myles White (@johnmyleswhite) <a href="https://twitter.com/johnmyleswhite/statuses/418821463563829248">January 2, 2014</a>
  </p>
</blockquote>