---
title: Quickly Create Dummy Variables in a Data Frame
date: 2014-01-02T13:58:51+00:00
author: Randy Zwitch
layout: post
permalink: /creating-dummy-variables-data-frame-r/
category: DataScience
tags:
  - Machine Learning
  - R
---
On Quora, a question was asked about how to fix the error of the <a title="Error in Random Forest 32 levels categorical variable" href="https://www.quora.com/Random-Forests/How-can-I-fix-the-error-in-the-package-randomForest" target="_blank">randomForest package in R not being able to handle more than 32 levels in a categorical variable</a>. Seeing as how I've seen this question asked on Kaggle forums, StackOverflow and elsewhere, here's the answer: code your own _dummy variables_ instead of relying on Factors!

## Code snippet

{% highlight R linenos %}
#Generate example dataframe with character column
example <- as.data.frame(c("A", "A", "B", "F", "C", "G", "C", "D", "E", "F"))
names(example) <- "strcol"

#For every unique value in the string column, create a new 1/0 column
#This is what Factors do "under-the-hood" automatically when passed to function requiring numeric data
for(level in unique(example$strcol)){
  example[paste("dummy", level, sep = "_")] <- ifelse(example$strcol == level, 1, 0)
}
view raw
{% endhighlight %}

As the code above shows, it's trivial to generate your own 1/0 columns of data instead of relying on Factors. There are two things to keep in mind when creating your own dummy variables:

  1. The problem you are trying to solve
  2. How much RAM you have available

While it may make sense to generate dummy variables for Customer State (~50 for the United States), if you were to use the code above on City Name, you'd likely either run out of RAM or find out that there are too many levels to be useful. Of course, with any qualitative statement such as "too many levels to be useful", oftentimes the only way to definitively know is to try it! Just make sure you save your work before running this code, just in case you run out of RAM. Or, use someone else's computer for testing 😉

Edit 1/2/14: John Myles White brought up a good point via Twitter about RAM usage:

<blockquote class="twitter-tweet" data-conversation="none" data-cards="hidden" data-partner="tweetdeck">
  <p>
    <a href="https://twitter.com/randyzwitch">@randyzwitch</a> If you're running out of RAM with dummy variables, you probably want to use a sparse matrix instead of a data.frame.
  </p>

  <p>
    — John Myles White (@johnmyleswhite) <a href="https://twitter.com/johnmyleswhite/statuses/418821463563829248">January 2, 2014</a>
  </p>
</blockquote>
