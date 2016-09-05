---
id: 3184
title: Code Refactoring Using Metaprogramming
date: 2014-11-18T09:11:06+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3184
permalink: /julia-metaprogramming-refactoring/
tweetbackscheck:
  - 1472899021
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3184";s:7:"tinyurl";s:26:"http://tinyurl.com/m3qbq4u";s:4:"isgd";s:19:"http://is.gd/0Gpa5C";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Code Refactoring
  - Julia
  - Twitter
---
It&#8217;s been nearly a year since I wrote <a title="Twitter Julia API" href="https://github.com/randyzwitch/Twitter.jl/" target="_blank">Twitter.jl</a>, back when I seemingly had MUCH more free time. In these past 10 months, I&#8217;ve used Julia quite a bit to develop other packages, and I try to use it at work when I know I&#8217;m not going to be collaborating with others (since my colleagues don&#8217;t know Julia, not because it&#8217;s bad for collaboration!).

One of the things that&#8217;s obvious from my earlier Julia code is that I didn&#8217;t understand how powerful metaprogramming can be, so here&#8217;s a simple example where I can replace 50 lines of Julia code with 10.

## CTRL-A, CTRL-C, CTRL-P. Repeat.

Admittedly, when I started on the Twitter package, I fully meant to go back and clean up the codebase, but moved onto something more fun instead. The Twitter package started out as a means of learning how to use the <a title="Requests.jl" href="https://github.com/JuliaWeb/Requests.jl" target="_blank">Requests.jl</a> library to make API calls, figured out the OAuth syntax I needed (which itself should be factored out of Twitter.jl), then copied-and-pasted the same basic function structure over and over. While fast, what I was left with was this (currently, the help.jl file in the Twitter package):It&#8217;s pretty clear that this is the same exact code pattern, right down to the spacing! The way to interpret this code is that for these five Twitter API methods, there are no required inputs. Optionally, there is the &#8216;options&#8217; keyword that allows for specifying a Dict() of options. For these five functions, there are no options you can pass to the Twitter API, so even this keyword is redundant. These are simple functions so I don&#8217;t gain a lot by way of maintainability by using metaprogramming, but at the same time, one of the core tenets of programming is &#8216;Dont Repeat Yourself&#8217;, so let&#8217;s clean this up.
  


## For :symbol in symbolslist&#8230;

In order to clean this up, we need to take out the unique parts of the function, then pass them as arguments to the @eval macro as follows:What&#8217;s happening in this code is that I define two tuples: one of function names (as symbols, denoted by &#8216;:&#8217; ) and one of the API endpoints. We can then iterate over the two tuples, substituting the function names and endpoints into the code. When the package is loaded, this code evaluates, defining the five functions for use in the Twitter package. 

## Wha?

Yeah, so metaprogramming can be simple, but it can also be mind-bending. It&#8217;s one thing to not repeat yourself, it&#8217;s another to write something so complex that even YOU can&#8217;t remember how the code works. But somewhere in between lies a sweet spot where you can re-factor whole swaths of code and streamline your codebase. Metaprogramming is used throughout the Julia codebase, so if you&#8217;re interested in seeing more examples of metaprogramming, check out the Julia source code, the [Requests.jl](https://github.com/JuliaWeb/Requests.jl/blob/master/src/Requests.jl "Requests.jl code") package (where I first saw this) or really anyone who actually knows what they are doing. I&#8217;m just a metaprogramming pretender at this point 🙂   To read additional discussion around this specific example, see the Julia-Users discussion at: <https://groups.google.com/forum/#!topic/julia-users/zvJmqB2N0GQ> Edit, 11/22/2014: <a title="Julia macro example" href="http://www.reddit.com/r/Julia/comments/2mvtnr/code_refactoring_using_metaprogramming_in_julia/cma5g25" target="_blank">DarthToaster on Reddit</a> provided another fantastic way to approach refactoring, using macros: