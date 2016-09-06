---
title: 'Building JSON in R: Three Methods'
date: 2014-05-13T13:27:39+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1655
permalink: /r-json-jsonlite-sprintf-paste/
tweetbackscheck:
  - 1472923289
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1655";s:7:"tinyurl";s:26:"http://tinyurl.com/mxjh7hg";s:4:"isgd";s:19:"http://is.gd/AogGiJ";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
tags:
  - Adobe Analytics
  - JSON
  - Python
  - R
  - RSiteCatalyst
---
When I set out to build <a title="RSiteCatalyst CRAN" href="http://cran.r-project.org/web/packages/RSiteCatalyst/index.html" target="_blank">RSiteCatalyst</a>, I had a few major goals: learn R, build a <a title="CRAN" href="http://cran.r-project.org/" target="_blank">CRAN</a>-worthy package and learn the <a title="Adobe Analytics API documentation" href="https://marketing.adobe.com/developer/en_US/documentation" target="_blank">Adobe Analytics API</a>. As I reflect back on how the package has evolved over the past two years and what I've learned, I think my greatest learning was around how to deal with JSON (and strings in general).  JSON is ubiquitous as a data-transfer mechanism over the web, and R does a decent job providing the functionality to not only read JSON but also to create JSON. There are at least three methods I know of to build JSON strings, and this post will cover the pros and cons of each method.



### Method 1: Building JSON using paste

As a beginning R user, I didn't have the awareness of how many great user-contributed packages are out there. So throughout the RSiteCatalyst source code you can see <a title="R JSON paste example" href="https://github.com/randyzwitch/RSiteCatalyst/blob/master/R/QueueOvertime.R#L75-78" target="_blank">gems</a> like:

The code above loops over a character vector (using lapply instead of a for loop like a good R user!), appending curly braces, then flattening the list down to a string. While this code works, it's a quite brittle way to build JSON. You end up needing to worry about matching quotation marks, remembering if you need curly braces, brackets or singletons...overall, it's a maintenance nightmare to build strings this way.

Of course, if you have a _really simple_ JSON string you need to build, _paste()_ doesn't have to be off-limits, but for a majority of the cases I've seen, it's probably not a good idea.





### Method 2: Building JSON using sprintf

Somewhere in the middle of building version 1 of RSiteCatalyst, I started learning Python. For those of you who aren't familiar, Python has a <a href="https://docs.python.org/2/library/stdtypes.html#string-formatting" title="Python string interpolation" target="_blank">string interpolation operator '%'</a>, which allows you to do things like the following:

Thinking that this was the most useful thing I'd ever seen in programming, I naturally searched to see if R had the same functionality. Of course, I quickly learned that all C-based languages have _<a href="http://en.wikipedia.org/wiki/Printf_format_string" title="History of printf Wikipedia" target="_blank">printf/sprintf</a>_, and R is no exception. So I started <a href="https://github.com/randyzwitch/RSiteCatalyst/blob/master/R/QueueTrended.R#L115-119" title="R JSON sprintf example" target="_blank">building JSON using sprintf</a> in the following manner:

In this example, we're now passing R objects into the sprintf() function, with %s tokens everywhere we need to substitute text. This is certainly an improvement over _paste()_, especially given that Adobe provides example JSON via their <a href="https://marketing.adobe.com/developer/en_US/get-started/api-explorer" title="Adobe Analytics API Explorer" target="_blank">API explorer</a>. So I copied the example strings, replaced their examples with my tokens and voilà! Better JSON string building.

### Method 3: Building JSON using a package (jsonlite, rjson or RJSONIO)

While _sprintf()_ allowed for much easier JSON, there is still a frequent code smell in RSiteCatalyst, as evidenced by the <a href="https://github.com/randyzwitch/RSiteCatalyst/blob/master/R/GetTrafficVars.R#L31-39" title="R toJSON" target="_blank">following</a>:

At some point, I realized that using the _toJSON()_ function from <a href="http://cran.r-project.org/web/packages/rjson/index.html" title="rjson" target="_blank">rjson</a> would take care of the formatting R objects to strings, yet I didn't make the leap to understanding that I could build the _whole string_ using R objects translated by _toJSON()_! So I have more hard-to-maintain code where I'm checking the class/length of objects and formatting them. The efficient way to do this using rjson would be:

With the code above, we're building JSON in a very R-looking manner; just R objects and functions, and in return getting the output we want. While it's slightly less obvious what is being created by request.body, there's literally zero bracket-matching, quoting issues or anything else to worry about in building our JSON. That's not to say that there isn't a learning curve to using a JSON package, but I'd rather figure out whether I need a character vector or list than burn my eyes out looking for mismatched quotes and brackets!

### Collaborating Makes You A Better Programmer

Like any pursuit, you can get pretty far on your own through hard work and self-study. However, I wouldn't be nearly where I am without collaborating with others (especially learning about how to build JSON properly in R!). A majority of the RSiteCatalyst code for the upcoming version 1.4 was re-written by <a href="https://github.com/WillemPaling" title="Willem Paling GitHub" target="_blank">Willem Paling</a>, where he added consistency to keyword arguments, switched to <a href="http://cran.r-project.org/web/packages/jsonlite/index.html" title="jsonlite CRAN" target="_blank">jsonlite</a> for better JSON parsing to Data Frames, and most importantly for the topic of this post, cleaned up the method of building all the required JSON strings!

Edit 5/13: For a more thorough example of building complex JSON using jsonlite, check out <a href="https://github.com/randyzwitch/RSiteCatalyst/blob/version_1_4/R/QueueRanked.R#L67-114" title="Complex R jsonlite example" target="_blank">this example</a> from the v1.4 branch of RSiteCatalyst. The linked example R code populates the required arguments from this <a href="https://gist.github.com/randyzwitch/762343d5e8d8501af522" title="Example JSON call from Adobe API Explorer" target="_blank">JSON outline</a> provide by Adobe.
