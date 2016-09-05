---
id: 3265
title: Introducing Twitter.jl
date: 2014-12-08T17:12:58+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3265
permalink: /twitter-api-julia/
tweetbackscheck:
  - 1472809955
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3265";s:7:"tinyurl";s:26:"http://tinyurl.com/otvxln6";s:4:"isgd";s:19:"http://is.gd/WEhZRW";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Julia
  - NLP
  - Twitter
---
This is possibly the latest &#8220;announcement&#8221; of a package ever, given that <a title="Twitter API Julia client" href="https://github.com/randyzwitch/Twitter.jl" target="_blank">Twitter.jl</a> has actually existed on [METADATA](https://github.com/JuliaLang/METADATA.jl "Julia METADATA") for nearly a year now, but that&#8217;s how things go sometimes. Here&#8217;s how to get started with Twitter.jl and some of the highlights.

## Hello, World!

If &#8216;Hello, World!&#8217; is the canonical example of getting started with a programming language, the Twitter API is becoming the first place to start for people wanting to learn about APIs. Authenticating with the Twitter API using Julia is similar to using the R or Python packages, except that rather than doing the OAuth &#8220;dance&#8221;, Twitter.jl takes all four authentication values in one function:All four of these values can be found after registering at the <a title="Twitter Dev" href="https://dev.twitter.com/" target="_blank">Twitter Developer page</a> and creating an application. Having all four values in your script is less secure than just providing the api key and api secret, but in the future, I&#8217;ll likely implement the full OAuth &#8220;handshake&#8221;. One thing to keep in mind with this function as it currently works is that no validation of your credentials is performed; the only thing this function does is define a global variable _twittercred_ for later use by the various functions that create the OAuth headers. To shout &#8220;Hello, World!&#8221; to all of your Twitter followers, you can use the following code:
  

  


## General Package/Function Structure

From the example above, you can see that the function naming follows the <a title="Twitter REST API documentation" href="https://dev.twitter.com/rest/public" target="_blank">Twitter REST API</a> naming convention, with the HTTP verb first and the endpoint as the remainder of the function name. As such, it&#8217;s a good idea at this early package state to have the Twitter documentation open while using this package, so that you can quickly find the methods you are looking for.

For each function/API endpoint, I&#8217;ve gone through and determined which parameters are required; these are required arguments in the Julia functions. For all other options, each function takes a second optional Dict{String, String} for any option shown in the Twitter documentation. While this Dict structure allows for ultimate flexibility (and quick definition of functions!), I do realize that it&#8217;s less than optimal that you don&#8217;t know what optional arguments each Twitter endpoint allows.

As an example, suppose you wanted to search for tweets containing the hashtag #julialang. The minimum function call is as follows:By default, the API will return the 15 most recent tweets containing the #julialang hashtag. To return the most recent 100 tweets (the maximum per API &#8216;page&#8217;), you can pass the &#8220;count&#8221; parameter via the Options Dict:

## Composite Types and DataFrames definitions

The Twitter API is structured into 4 return data types (<a title="Twitter API Places data type" href="https://dev.twitter.com/overview/api/places" target="_blank">Places</a>, <a title="Twitter API Users type" href="https://dev.twitter.com/overview/api/users" target="_blank">Users</a>, <a title="Twitter API Tweets type" href="https://dev.twitter.com/overview/api/tweets" target="_blank">Tweets</a>, and <a title="Twitter API Entities type" href="https://dev.twitter.com/overview/api/entities" target="_blank">Entities</a>), and I&#8217;ve mimicked these types using Julia <a title="Julia Composite Types" href="http://julia.readthedocs.org/en/latest/manual/types/#composite-types" target="_blank">Composite Types</a>. As such, most functions in Twitter.jl return an array of specific type, such as _Array{TWEETS,1}_ from the prior #julialang search example. The benefit to defining custom types for the returned Twitter data is that rudimentary DataFrame methods have also been defined:

I describe these DataFrames as &#8216;rudimentary&#8217; as they parse the top level of JSON into columns, which results in some DataFrame columns having complex data types such as Dict() (and within the Dict(), nested Dicts!). As a running theme in this post, this is something I hope to get around to improving in the future.

## Want to Get Started Developing Julia? Start Here!

One of the common questions I get asked is how to get started with Julia, both from a learning perspective and from a package development perspective. Hacking away on the core Julia codebase is great if you have the ability, but the code can certainly be intimidating (the people are quite friendly though). Creating a package isn&#8217;t necessarily hard, but you have to think about an idea you want to implement. The third alternative is&#8230;

&#8230;improve the Twitter package! If you go to the <a title="Twitter.jl GitHub Julia" href="https://github.com/randyzwitch/Twitter.jl" target="_blank">GitHub page for Twitter.jl</a>, you&#8217;ll see a long list of TODO items that need to be worked on. The hardest part (building the OAuth headers) has already been taken care of. What&#8217;s left is <a title="Code Refactoring Using Metaprogramming" href="http://randyzwitch.com/julia-metaprogramming-refactoring/" target="_blank">re-factoring the code for simplification</a>, factoring out the <a title="OAuth in Julia" href="https://github.com/randyzwitch/OAuth.jl" target="_blank">OAuth code in general into a new Julia library</a> (also partially started), then building the Streaming API functions, cleaning up the DataFrame methods to remove the Dict column types, paging through API results&#8230;and so-on.

So if any of you are on the sidelines wanting to get some practice on developing packages, without needing to worry about learning Astrophysics first, I&#8217;d love to collaborate. And if any Julia programming masters want to collaborate, well that&#8217;s great too. All help and pull requests are welcomed.

In the meantime, hopefully some of you will find this package useful for natural language processing, social networking analysis or even creating bots 😉

&nbsp;