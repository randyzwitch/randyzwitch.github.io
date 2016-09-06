---
id: 3584
title: Authenticated API Testing Using Travis CI
date: 2015-08-06T20:21:50+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3584
permalink: /authentication-travis-ci/
tweetbackscheck:
  - 1472935819
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3584";s:7:"tinyurl";s:26:"http://tinyurl.com/o3twqla";s:4:"isgd";s:19:"http://is.gd/gr78tN";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - General Programming
tags:
  - Adobe Analytics
  - Omniture
  - Package Development
  - R
---
As I&#8217;ve become more serious about contributing in the open-source community, having quality tests for my packages has been something I&#8217;ve spent much more time on than when I was just writing quick-and-dirty code for my own purposes. My most used open-sourced package is [RSiteCatalyst](http://randyzwitch.com/tag/rsitecatalyst/), which accesses the Adobe Analytics (authenticated) API, which poses a problem: how do you maintain a project on GitHub with a full test suite, while at the same time not hard-coding your credentials in plain sight for everyone to see?

The answer ends up being using <a href="http://docs.travis-ci.com/user/environment-variables/#Encrypted-Variables" target="_blank">encrypted environment variables</a> within [Travis CI](https://travis-ci.org/).

### Testthat!

In terms of a testing framework, Hadley Wickham provides a great testing framework in [testthat](https://github.com/hadley/testthat); while I wouldn&#8217;t go as far as he does to say that the package makes testing _fun_, it certainly makes testing _easy_. Let&#8217;s take a look at some of the tests in RSiteCatalyst from the _QueueOvertime_ function:From the gist above, you can see the tests are fairly simplistic; for a given number of permutations of arguments of the function, I test to see if a data frame was returned. This is because, for the most part, RSiteCatalyst is just a means of generating JSON calls, submitting them to the Adobe Analytics API, then parsing the results into an R data frame. Since there is very little additional logic in the package, I don&#8217;t spend a bunch of time testing what data is actually returned (i.e. what is returned depends on the Adobe Analytics API, not R). What is interesting is line 6 of the gist; I reference _Sys.getenv()_ twice in order to pass in my username and key for the Adobe Analytics API, which feels very &#8220;interactive R&#8221;, but the goal is automated testing. Filling in those two environment variables is where Travis CI comes in.

### Travis CI Configuration

In order to have any automation using Travis CI, you need to create a _.travis.yml_ configuration file. While you can read the [Travis docs to create the .travis.yml file for R](http://docs.travis-ci.com/user/languages/r/), you&#8217;re probably better off just using the _use_travis_ function from [devtools](https://github.com/hadley/devtools) (also from Hadley, little surprise!) to create the file for you. In terms of [creating encrypted keys to use with Travis](http://docs.travis-ci.com/user/encryption-keys/), you&#8217;ll need to use the [Travis CLI tool](https://github.com/travis-ci/travis.rb), which is distributed as a Ruby gem (i.e. package).  If you view the [RSiteCatalyst .travis.yml file](https://github.com/randyzwitch/RSiteCatalyst/blob/master/.travis.yml), you can see that I define two global &#8220;secure&#8221; variables, the value of which are the output from running a command similar to the following in the Travis CLI tool:

Note that if this seems insecure, every time you run the _encrypt_ command with the same arguments, you get a different value; Travis CI is creating new public and private RSA keys each time.





### Setting Up Authenticated Testing Locally

If you get as far as setting up encrypted Travis CI keys and tests using testthat, the final step is really for convenience. With the _.travis.yml_ file, Travis CI sets the R environment variables on THEIR system; on your local machine, the environment variables aren&#8217;t set. Even if the environment variables were set, they would be set to the Travis CI hashed values, which is not what I want to pass to my authentication function in my R package.

To set the authentication variables locally, so that each time you hit &#8216;check&#8217; to build and check against CRAN errors, you just need to modify the .Renviron file for R:

With that minor change, in addition to the _.travis.yml_ file, you&#8217;ll have a seamless environment for developing and testing R packages.

### Testing Is Like Flossing&#8230;

As easy as the _testthat_ and _devtools_ packages make testing, and as inexpensively as Travis CI is as a service (free for open source projects!), there&#8217;s really no excuse to provide packaged-up code and not include tests. Hopefully this blog post has demonstrated that it&#8217;s possible to include tests even when authentication is necessary without compromising your credentials.

So let&#8217;s all be sure to include tests, not just pay lip service to the idea that testing is useful. Code testing only works if you actually do it 🙂
