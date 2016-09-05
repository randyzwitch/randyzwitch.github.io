---
id: 2113
title: 'Fun With Just-In-Time Compiling: Julia, Python, R and pqR'
date: 2013-09-02T19:57:45+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2113
permalink: /python-pypy-julia-r-pqr-jit-just-in-time-compiler/
tweetbackscheck:
  - 1472941039
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2113";s:7:"tinyurl";s:26:"http://tinyurl.com/q4kercy";s:4:"isgd";s:19:"http://is.gd/U9RR23";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Julia
  - pqR
  - PyPy
  - Python
  - R
---
Recently I&#8217;ve been spending a lot of time trying to learn <a title="Julia language" href="http://julialang.org/" target="_blank">Julia</a> by doing the problems at <a title="Project Euler" href="http://projecteuler.net/" target="_blank">Project Euler</a>. What&#8217;s great about these problems is that it gets me out of my normal design patterns, since I don&#8217;t generally think about prime numbers, factorials and other number theory problems during my normal workday. These problems have also given me the opportunity to really think about how computers work, since Julia allows the programmer to pass type declarations to the just-in-time compiler (JIT).

As I&#8217;ve been working on optimizing my Julia code, I decided to figure out how fast this problem can be solved using any of the languages/techniques I know. So I decided to benchmark one of the Project Euler problems using <a title="Julia language" href="http://julialang.org/" target="_blank">Julia</a>, <a title="Python language" href="http://python.org/" target="_blank">Python</a>, <a title="Numba" href="http://numba.pydata.org/" target="_blank">Python with Numba</a>, <a title="Pypy" href="http://pypy.org/" target="_blank">PyPy</a>, <a title="R" href="http://cran.us.r-project.org/" target="_blank">R</a>, R using the <a title="R compiler" href="http://stat.ethz.ch/R-manual/R-devel/library/compiler/html/compile.html" target="_blank">compiler</a> package, <a title="pqR" href="http://radfordneal.wordpress.com/2013/06/22/announcing-pqr-a-faster-version-of-r/" target="_blank">pqR</a> and pqR using the compiler package. Here&#8217;s what I found&#8230;

<!--more-->

## Problem

The problem I&#8217;m using for the benchmark is calculating the smallest number that is divisible by all of the numbers in a factorial. For example, for the numbers in 5!, 60 is the smallest number that is divisible by 2, 3, 4 and 5. Here&#8217;s the Julia code:

All code versions follow this same pattern: the outside loop will run from 1 up to n!, since by definition the last value in the loop will be divisible by all of the numbers in the factorial. The inner loops go through and do a modulo calculation, checking to see if there is a remainder after division. If there is a remainder, break out of the loop and move to the next number. Once the state occurs where there is no remainder on the modulo calculation and the inner loop value of j equals the last number in the factorial (i.e. it is divisible by all of the factorial numbers), we have found the minimum number.


  


## Benchmarking &#8211; Overall

Here are the results of the eight permutations of languages/techniques (see <a title="GitHub Gist for JIT test" href="https://gist.github.com/randyzwitch/6341926" target="_blank">this</a> GitHub Gist for the actual code used, <a title="compiler results" href="http://randyzwitch.com/wp-content/uploads/2013/09/jit.csv" target="_blank">this link</a> for results file, and <a title="ggplot2 code" href="https://gist.github.com/randyzwitch/6414244" target="_blank">this</a> GitHub Gist for the ggplot2 code):

<p style="text-align: center;">
  <a href="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/08/jit-comparison.png"><img class="aligncenter size-full wp-image-2128" alt="jit-comparison" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2013/08/jit-comparison-e1377942789214.png?fit=500%2C277" data-recalc-dims="1" /></a>
</p>

Across the range of tests from 5! to 20!, Julia is the fastest to find the minimum number. Python with Numba is second and PyPy is third. pqR fares better than R in general, but using the compiler package can narrow the gap.

To make more useful comparisons, in the next section I&#8217;ll compare each language to its &#8220;compiled&#8221; function state.

## Benchmarking &#8211; Individual

### Python

[<img class="aligncenter size-full wp-image-2138" alt="JITpython" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2013/09/JITpython-e1378131849775.png?fit=500%2C320" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/09/JITpython.png)

Amongst the native Python code options, I saw a 16x speedup by using PyPy instead of Python 2.7.6 (10.62s vs. 172.06s at 20!). Using Numba with Python instead of PyPy nets an _incremental_ ~40% speedup using the <a title="autojit example" href="http://numba.pydata.org/" target="_blank">@autojit</a> decorator (7.63s vs. 10.63 at 20!).

So in the case of Python, using two lines of code with the Numba JIT compiler you can get substantial improvements in performance without needing to do any code re-writes. This is a great benefit given that you can stay in native Python, since PyPy doesn&#8217;t support all existing packages within the Python ecosystem.

### R/pqR

[<img class="aligncenter size-full wp-image-2143" alt="JITr" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2013/09/JITr-e1378132951124.png?fit=500%2C320" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/09/JITr.png)

It&#8217;s understood in the R community that <a title="Why are R loops slow?" href="http://stackoverflow.com/questions/7142767/why-are-loops-slow-in-r" target="_blank">loops are not a strong point</a> of the language. In the case of this problem, I decided to use loops because 1) it keeps the code pattern similar across languages and 2) I hoped I&#8217;d see the max benefit from the compiler package by not trying any funky R optimizations up front.

As expected, pqR is generally faster than R and using the compiler package is faster than not using the compiler. I saw ~30% improvement using pqR relative to R and ~20% _incremental_ improvement using the compiler package with pqR. Using the compiler package within R showed ~35% improvement.

So unlike the case with Python, where you could just use Python with Numba and stay within the same language/environment, if you can use pqR _and_ the compiler package, you can get a performance benefit from using both.

## Summary

For a comparison like I&#8217;ve done above, it&#8217;s easy to get carried away and extrapolate the results from one simple test to all programming problems ever. &#8220;_Julia is the best language for all cases ever!!!11111eleventy!_&#8221; would be easy to proclaim, but all problems aren&#8217;t looping problems using simple division. Once you get into writing longer programs, other tasks such string manipulation and accessing APIs, using a technique from a package only available in one ecosystem but not another, etc., which tool is &#8220;best&#8221; for solving a problem becomes a much more difficult decision. The only way to know how much improvement you can see from different techniques & tools is to profile your program(s) and experiment.

The main thing that I took away from this exercise is that no matter which tool you are comfortable with to do analysis, there are potentially large performance improvements that can be made _just_ by using a JIT without needing to dramatically re-write your code. For those of us who don&#8217;t know C (and/or are too lazy to re-write our code several times to wring out a little extra performance), that&#8217;s a great thing.