---
title: 'Travis CI: "You Have Too Many Tests LOLZ!"'
date: 2016-04-05T11:41:53+00:00
author: Randy Zwitch
layout: post
permalink: /travisci-10minute-timeout-build-error/
category: Programming
tags:
  - Open Source
  - R
---
> <pre><span id="1-2082">No output has been received in the last 10m0s, this potentially indicates a
stalled build or something wrong with the build itself.</span></pre>

As part of getting <a href="http://randyzwitch.com/rsitecatalyst-version-1-4-8-release-notes/" target="_blank">RSiteCatalyst 1.4.8 ready for CRAN</a>, I've managed to accumulate hundreds of <a href="https://github.com/hadley/testthat" target="_blank">testthat</a> tests across 63 test files. Each of these tests runs on <a href="http://randyzwitch.com/authentication-travis-ci/" target="_blank">Travis CI against an authenticated API</a>, and the API frequently queues long-running reports. Long-story-short, my builds started failing, creating the error log message quoted above.





## Stalled Build?

The most frustrating about this error is that all my tests run (albeit, a looooong time) successfully through RStudio, so I wasn't quite sure what the problem was with the <a href="https://travis-ci.org/" target="_blank">Travis CI</a> build. Travis CI does provide a comment about this in their <a href="https://docs.travis-ci.com/user/common-build-problems/#My-builds-are-timing-out" target="_blank">documentation</a>, but even then it didn't solve my problem:

> When a long running command or compile step regularly takes longer than 10 minutes without producing any output, you can adjust your build configuration to take that into consideration.
>
> The shell environment in our build system provides a function that helps to work around that, at least for longer than 10 minutes.
>
> If you have a command that doesn’t produce output for more than 10 minutes, you can prefix it with `travis_wait`, a function that’s exported by our build environment.

The _travis_wait_ command would work if I were installing packages, but my errors were during tests, so this parameter isn't the answer. Luckily, _testthat_ provides a test filtering mechanism, providing a solution by allowing the tests to be broken up into smaller chunks.

## Regex To The Rescue...

For many applications, the default _testthat_ configuration example will work just well:

<pre style="padding-left: 30px;">R CMD check
Create tests/testthat.R that contains:
library(testthat)
library(yourpackage)
test_check("yourpackage")</pre>

However, hidden within the _test_check()_ arguments is 'filter', which will take a regular expression to filter which files in the _test _folder will get run when the command is triggered by R CMD check. Why is this important? Because each time a new _test_check()_ function gets called, output gets written to stdout, and thus avoids 10 minutes passing without producing any output. Here's an example of what my successful build logs now look like (<a href="https://github.com/randyzwitch/RSiteCatalyst/tree/master/tests" target="_blank">GitHub code for the testthat code structure</a>):

<pre style="padding-left: 30px;">* checking tests ...
 Running ‘testthat-build.R’
 Running ‘testthat-get.R’ [5s/267s]
 Running ‘testthat-queuefallout.R’ [1s/59s]
 Running ‘testthat-queueovertime.R’ [3s/210s]
 Running ‘testthat-queuepathing.R’ [2s/55s]
 Running ‘testthat-queueranked.R’ [2s/183s]
 Running ‘testthat-queuesummary.R’ [2s/136s]
 Running ‘testthat-queuetrended.R’ [17s/346s]
 Running ‘testthat-save.R’ [1s/46s]
 OK</pre>

You can now see that instead of getting a single output message of "_Running testthat.R_", I have nine separate test files running, none of which take 10 minutes to complete. For my package, each of my test files is labeled based on the function name, and I can end up using really simple regex literals such as the following:

<pre style="padding-left: 30px;">library(testthat)
test_check("RSiteCatalyst", filter = "get")
</pre>

So each file with the word "get" in the filename will be run by this function; I'm not worried about writing complex regexes here, since at worst I my matching is too broad and I run the same test multiple times.

## ...But Be Careful Of Case-Sensitivity!

The one caveat to simple regex filtering above is that if you're not careful, you'll get no match from your _test_check()_ function, which will fail the build on Travis CI. I spent hours trying to figure out why my tests ran fine on OSX, but failed on Travis. Eventually, I even <a href="https://github.com/hadley/testthat/issues/434" target="_blank">filed an issue</a> against hadley's repo, feeling silly as soon as I found out that my error was due to case-sensitivity in Linux by not OSX (or Windows for that matter).

So, pay attention, and if all else fails, go with **filter = "summary|Summary"** or similar to match the case of your filenames!

## You Can Never Really Have Too Many Tests

Obviously, the title of this blog post is in jest; Travis CI doesn't care what you're running or comments on how many tests you run. But hopefully this blog post provides the answer to the next person down the line running into this issue. Don't delete your tests, run multiple _test_check()_ functions and the printing every few minutes of the file name to the console should resolve the problem.
