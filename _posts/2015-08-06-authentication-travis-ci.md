---
title: Authenticated API Testing Using Travis CI
date: 2015-08-06T20:21:50+00:00
author: Randy Zwitch
layout: post
permalink: /authentication-travis-ci/
description: With open-source software, you owe it to your users to have unit tests. Here's how to test using Travis CI when you need to authenticate to run your tests.
category: Programming
tags:
  - Adobe Analytics
  - Omniture
  - Package Development
  - R
---
As I've become more serious about contributing in the open-source community, having quality tests for my packages has been something I've spent much more time on than when I was just writing quick-and-dirty code for my own purposes. My most used open-sourced package is [RSiteCatalyst](http://randyzwitch.com/tag/rsitecatalyst/), which accesses the Adobe Analytics (authenticated) API, which poses a problem: how do you maintain a project on GitHub with a full test suite, while at the same time not hard-coding your credentials in plain sight for everyone to see?

The answer ends up being using [encrypted environment variables](http://docs.travis-ci.com/user/environment-variables/#Encrypted-Variables) within [Travis CI](https://travis-ci.org/).

### Testthat!

In terms of a testing framework, Hadley Wickham provides a great testing framework in [testthat](https://github.com/hadley/testthat); while I wouldn't go as far as he does to say that the package makes testing _fun_, it certainly makes testing _easy_. Let's take a look at some of the tests in RSiteCatalyst from the `QueueOvertime` function:

{% highlight R linenos %}
test_that("Validate QueueOvertime using legacy credentials", {

  skip_on_cran()

  #Correct [masked] credentials
  SCAuth(Sys.getenv("USER", ""), Sys.getenv("SECRET", ""))

  #Single Metric, No granularity (summary report)
  aa <- QueueOvertime("zwitchdev",
                      "2014-01-01",
                      "2014-12-31",
                      "visits",
                      "")

  #Validate returned value is a data.frame
  expect_is(aa, "data.frame")

  #Single Metric, Daily Granularity
  bb <- QueueOvertime("zwitchdev",
                      "2014-01-01",
                      "2014-12-31",
                      "visits",
                      "day")

  #Validate returned value is a data.frame
  expect_is(bb, "data.frame")

  #Single Metric, Week Granularity
  cc <- QueueOvertime("zwitchdev",
                      "2014-01-01",
                      "2014-12-31",
                      "visits",
                      "week")

  #Validate returned value is a data.frame
  expect_is(cc, "data.frame")

  #Two Metrics, Week Granularity
  dd <- QueueOvertime("zwitchdev",
                      "2014-01-01",
                      "2014-12-31",
                      c("visits", "pageviews"),
                      "week")

  #Validate returned value is a data.frame
  expect_is(dd, "data.frame")

  #Two Metrics, Month Granularity, Social Visitors
  ee <- QueueOvertime("zwitchdev",
                      "2014-01-01",
                      "2014-12-31",
                      c("visits", "pageviews"),
                      "month",
                      "5433e4e6e4b02df70be4ac63")

  #Validate returned value is a data.frame
  expect_is(ee, "data.frame")

  #Two Metrics, Day Granularity, Social Visitors, Anomaly Detection
  ff <- QueueOvertime("zwitchdev",
                      "2014-01-01",
                      "2014-12-31",
                      c("visits", "pageviews"),
                      "day",
                      "5433e4e6e4b02df70be4ac63",
                      anomaly.detection = "1")

  #Validate returned value is a data.frame
  expect_is(ff, "data.frame")



})
{% endhighlight %}

From the code above, you can see the tests are fairly simplistic; for a given number of permutations of arguments of the function, I test to see if a data frame was returned. This is because, for the most part, RSiteCatalyst is just a means of generating JSON calls, submitting them to the Adobe Analytics API, then parsing the results into an R data frame.

Since there is very little additional logic in the package, I don't spend a bunch of time testing what data is actually returned (i.e. what is returned depends on the Adobe Analytics API, not R). What is interesting is line 6; I reference `Sys.getenv()` twice in order to pass in my username and key for the Adobe Analytics API, which feels very "interactive R", but the goal is automated testing. Filling in those two environment variables is where Travis CI comes in.

### Travis CI Configuration

In order to have any automation using Travis CI, you need to create a `.travis.yml` configuration file. While you can read the [Travis docs to create the .travis.yml file for R](http://docs.travis-ci.com/user/languages/r/), you're probably better off just using the `use_travis` function from [devtools](https://github.com/hadley/devtools) (also from Hadley, little surprise!) to create the file for you. In terms of [creating encrypted keys to use with Travis](http://docs.travis-ci.com/user/encryption-keys/), you'll need to use the [Travis CLI tool](https://github.com/travis-ci/travis.rb), which is distributed as a Ruby gem (i.e. package).  If you view the [RSiteCatalyst .travis.yml file](https://github.com/randyzwitch/RSiteCatalyst/blob/master/.travis.yml), you can see that I define two global "secure" variables, the value of which are the output from running a command similar to the following in the Travis CLI tool:

{% highlight shell %}
$ travis encrypt RANDY=ZWITCH
Please add the following to your .travis.yml file:

  secure: "b6S4dBc7arvox8UpuFqkz+VP2UmAW/S/B/vgaAdZiZQqUp78YDR6VYdAYN3WisCK1VLGjOVVPQvGxLik0pQokF8FU3sjX0ekH6vSJeqg4utrEZmVtNvdDLEVAmagFy8Fyduow3U4CPW7rzXqvAE4cIVqGR5Lv2KLf8ANUGn+y3E="

Pro Tip: You can add it automatically by running with --add.
{% endhighlight %}

Note that if this seems insecure, every time you run the `encrypt` command with the same arguments, you get a different value; Travis CI is creating new public and private RSA keys each time.

### Setting Up Authenticated Testing Locally

If you get as far as setting up encrypted Travis CI keys and tests using `testthat`, the final step is really for convenience. With the `.travis.yml` file, Travis CI sets the R environment variables on THEIR system; on your local machine, the environment variables aren't set. Even if the environment variables were set, they would be set to the Travis CI hashed values, which is not what I want to pass to my authentication function in my R package.

To set the authentication variables locally, so that each time you hit 'check' to build and check against CRAN errors, you just need to modify the `.Renviron` file for R:

{% highlight R %}
USER="myusername"
SECRET="mysecret"
{% endhighlight %}

With that minor change, in addition to the `.travis.yml` file, you'll have a seamless environment for developing and testing R packages.

### Testing Is Like Flossing...

As easy as the `testthat` and `devtools` packages make testing, and as inexpensively as Travis CI is as a service (free for open source projects!), there's really no excuse to provide packaged-up code and not include tests. Hopefully this blog post has demonstrated that it's possible to include tests even when authentication is necessary without compromising your credentials.

So let's all be sure to include tests, not just pay lip service to the idea that testing is useful. Code testing only works if you actually do it 🙂
