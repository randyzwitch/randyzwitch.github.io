---
title: 'The Fun of Error Trapping: R Package Edition'
date: 2013-02-25T17:15:46+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1637
permalink: /r-error-message-fun/
tweetbackscheck:
  - 1472624932
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1637";s:7:"tinyurl";s:26:"http://tinyurl.com/b2htwjd";s:4:"isgd";s:19:"http://is.gd/U3Zi2m";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - General Programming
tags:
  - Package Development
  - R
---
For the last month or so I've been working on an R package to make accessing the <a title="Omniture Reporting API" href="https://developer.omniture.com/" target="_blank">Adobe (Omniture) Digital Marketing Suite Reporting API</a> easier.  As part of this development effort, I'm at the point where I'm intentionally introducing errors into my function inputs, trying to guess some of the ways useRs might incorrectly input arguments into each function.  Imagine my surprise when I saw this:

> <span style="color: #0000ff;">> result <- content(json)</span>

> <span style="color: #ff0000;">Loading required package: XML</span>

> <span style="color: #ff0000;">Error in parser(content, ...) : could not find function "htmlTreeParse"</span>

> <span style="color: #ff0000;">In addition: Warning message:</span>

> <span style="color: #ff0000;">In library(package, lib.loc = lib.loc, character.only = TRUE, logical.return = TRUE,  :</span>

> <span style="color: #ff0000;">there is no package called ‘XML’</span>

The main idea behind the functions I've written is making REST calls to the Omniture API, which done correctly return valid <a title="JSON documentation" href="http://www.json.org/" target="_blank">JSON</a>. From there, each JSON string is converted from binary or whatever formatting they come back as using the _<a title="httr R package" href="http://cran.r-project.org/web/packages/httr/index.html" target="_blank">content</a>_ function from the _<a title="httr R package" href="http://cran.r-project.org/web/packages/httr/index.html" target="_blank">httr</a>_ package. Without specifying any arguments to the _content_ function, the function tries to guess at the proper translation method.

The guessing is all fine and good until you don't pass a valid JSON string!  In this case, the error message is guessing that it might be XML (the returned error is actually HTML), tries to load the XML package...then says it can't load the XML package. A two-for-one error!





Maybe it's just me, but I'm finding this hilarious after a long day of programming. Maybe it's because I'm not longer intimidated by an error like this, and as such, I've gotten over the steep learning curve of R.

_Note:  Hadley, if you read this, I'm not saying your httr package has any sort of bug or anything. Just that I found this particular error amusing._
