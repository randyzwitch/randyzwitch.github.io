---
id: 2483
title: UAParser.jl
date: 2014-01-21T16:18:23+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?page_id=2483
tweetbackscheck:
  - 1472923284
shorturls:
  - 'a:3:{s:9:"permalink";s:36:"http://randyzwitch.com/?page_id=2483";s:7:"tinyurl";s:26:"http://tinyurl.com/k9zsxwy";s:4:"isgd";s:19:"http://is.gd/HXw8WH";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
---
### Background

If you&#8217;ve spent any time working with &#8220;machine-generated&#8221; data, you&#8217;ve no doubt come across the ubiquitous _user-agent_ header. While once a useful means of determining the device and capabilities of the browser, many front-end developers consider the <a title="User Agent string history" href="http://webaim.org/blog/user-agent-string-history/" target="_blank">user-agent to be a nearly useless</a> piece of information. Instead of playing with unreliable user-agent strings, front-end developers tend to prefer solutions such as <a title="Modernizer" href="http://modernizr.com/" target="_blank">Modernizer</a> to detect browser/device capabilities.

However, as a data scientist, I still see value in the user-agent string. While it&#8217;s true the users can spoof their user-agent and companies have littered their headers with confusing information, there is still consistent, useful information that can be gleaned from user-agent string with careful parsing. Luckily, there is an open-source project called <a title="Tobie ua-parser Github" href="https://github.com/tobie/ua-parser" target="_blank">ua-parser</a> that aims to do just that: provide a high-quality, consistently updated means of identifying devices using only the user-agent string.

<a title="UAParser.jl GitHub" href="https://github.com/randyzwitch/UAParser.jl" target="_blank">UAParser.jl</a> is a package for the <a title="Julia programming language" href="http://julialang.org/" target="_blank">Julia</a> programming language that ports the ua-parser logic into native Julia code.

### Installation

UAParser.jl is listed in the main Julia <a title="Julia Package Listing" href="https://github.com/JuliaLang/METADATA.jl" target="_blank">METADATA</a> repo; as such, installing UAParser is as simple as:

<p style="padding-left: 30px;">
  Pkg.add(&#8220;UAParser&#8221;)
</p>

Given the simplicity of the package, it&#8217;s likely the case that you&#8217;ll never need to use any of the more exotic package installation methods that Julia provides (such as Pkg.checkout).

### Usage

In-depth examples can be found in an IJulia Notebook listed <a title="UAParser examples" href="http://nbviewer.ipython.org/gist/randyzwitch/8548024" target="_blank">here</a>. The UAParser API is intended to mimic the Python version of the ua-parser module as close as possible, so that users coming from Python should feel familiar.

To use UAParser, all you need is String data, whether a single user-agent string or an array of user-agent strings:Each UAParser function returns a custom type (DeviceResult, OSResult, or UAResult). Each function is also vectorized, so that passing an array into a UAParser function will evaluate the function over the entire array. There are also DataFrame methods defined, in order to parse an array of UAParser types into a DataFrame. 

### Performance

Julia users tend to be a loud bunch when it comes to performance. Unfortunately, UAParser is not one of those high-performing packages (as of Jan &#8217;14). The graph below shows that compared to roughly the same syntax in Python/pandas, UAParser is 5-10x slower in parsing user-agent strings.

<div id="my_chart">
</div>



Because Julia is still under rapid development, and I&#8217;m still a relative novice in programming Julia, I&#8217;m hoping that over time that the gap will close and/or Julia will become the faster way to parse this type of data.
