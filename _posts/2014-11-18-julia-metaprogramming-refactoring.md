---
title: Code Refactoring Using Metaprogramming
date: 2014-11-18T09:11:06+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3184
permalink: /julia-metaprogramming-refactoring/
category: Data Science
tags:
  - Code Refactoring
  - Julia
  - Twitter
---
It's been nearly a year since I wrote <a title="Twitter Julia API" href="https://github.com/randyzwitch/Twitter.jl/" target="_blank">Twitter.jl</a>, back when I seemingly had MUCH more free time. In these past 10 months, I've used Julia quite a bit to develop other packages, and I try to use it at work when I know I'm not going to be collaborating with others (since my colleagues don't know Julia, not because it's bad for collaboration!).

One of the things that's obvious from my earlier Julia code is that I didn't understand how powerful metaprogramming can be, so here's a simple example where I can replace 50 lines of Julia code with 10.

## CTRL-A, CTRL-C, CTRL-P. Repeat.

Admittedly, when I started on the Twitter package, I fully meant to go back and clean up the codebase, but moved onto something more fun instead. The Twitter package started out as a means of learning how to use the <a title="Requests.jl" href="https://github.com/JuliaWeb/Requests.jl" target="_blank">Requests.jl</a> library to make API calls, figured out the OAuth syntax I needed (which itself should be factored out of Twitter.jl), then copied-and-pasted the same basic function structure over and over. While fast, what I was left with was this (currently, the help.jl file in the Twitter package):It's pretty clear that this is the same exact code pattern, right down to the spacing! The way to interpret this code is that for these five Twitter API methods, there are no required inputs. Optionally, there is the 'options' keyword that allows for specifying a Dict() of options. For these five functions, there are no options you can pass to the Twitter API, so even this keyword is redundant. These are simple functions so I don't gain a lot by way of maintainability by using metaprogramming, but at the same time, one of the core tenets of programming is 'Dont Repeat Yourself', so let's clean this up.



## For :symbol in symbolslist...

In order to clean this up, we need to take out the unique parts of the function, then pass them as arguments to the @eval macro as follows:What's happening in this code is that I define two tuples: one of function names (as symbols, denoted by ':' ) and one of the API endpoints. We can then iterate over the two tuples, substituting the function names and endpoints into the code. When the package is loaded, this code evaluates, defining the five functions for use in the Twitter package.

## Wha?

Yeah, so metaprogramming can be simple, but it can also be mind-bending. It's one thing to not repeat yourself, it's another to write something so complex that even YOU can't remember how the code works. But somewhere in between lies a sweet spot where you can re-factor whole swaths of code and streamline your codebase. Metaprogramming is used throughout the Julia codebase, so if you're interested in seeing more examples of metaprogramming, check out the Julia source code, the [Requests.jl](https://github.com/JuliaWeb/Requests.jl/blob/master/src/Requests.jl "Requests.jl code") package (where I first saw this) or really anyone who actually knows what they are doing. I'm just a metaprogramming pretender at this point 🙂   To read additional discussion around this specific example, see the Julia-Users discussion at: <https://groups.google.com/forum/#!topic/julia-users/zvJmqB2N0GQ> Edit, 11/22/2014: <a title="Julia macro example" href="http://www.reddit.com/r/Julia/comments/2mvtnr/code_refactoring_using_metaprogramming_in_julia/cma5g25" target="_blank">DarthToaster on Reddit</a> provided another fantastic way to approach refactoring, using macros:
