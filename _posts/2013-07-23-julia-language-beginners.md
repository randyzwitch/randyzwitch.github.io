---
id: 1899
title: 'A Beginner&#8217;s Look at Julia'
date: 2013-07-23T12:16:34+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1899
permalink: /julia-language-beginners/
tweetbackscheck:
  - 1472933681
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1899";s:7:"tinyurl";s:26:"http://tinyurl.com/kkx9ca9";s:4:"isgd";s:19:"http://is.gd/fznBI2";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Data Science
tags:
  - Julia
  - Python
  - R
---
Over the past month or so, I&#8217;ve been playing with a new scientific programming language called &#8216;<a title="Julia language" href="http://julialang.org/" target="_blank">Julia</a>&#8216;, which aims to be a high-level language with performance approaching that of C. With that goal in mind, Julia could be a replacement for the &#8216;multi-language&#8217; problem of needing to move between R, Python, MATLAB, C, Fortran, Scala, etc. within a single scientific programming project.  Here are some observations that might be helpful for others looking to get started with Julia.

<!--more-->

### Get used to &#8216;Git&#8217; and &#8216;make&#8217;

While there are <a title="Julia language downloads" href="http://julialang.org/downloads/" target="_blank">pre-built binaries</a> for Julia, due to the rapid pace of development, it&#8217;s best to build Julia from source. To be able to keep up with the literally dozen code changes per day, you can clone the <a title="Julia GitHub repo" href="https://github.com/JuliaLang/julia" target="_blank">Julia GitHub repository</a> to your local machine. If you use one of the <a title="GitHub GUI downloads" href="http://git-scm.com/downloads/guis" target="_blank">GitHub GUI&#8217;s</a>, this is as easy as hitting the &#8216;Sync Branch&#8217; button to receive all of the newest code updates.

To install Julia, you need to compile the code. The instructions for each supported operating system are listed on the <a title="Julia GitHub repo" href="https://github.com/JuliaLang/julia" target="_blank">Julia GitHub page</a>. For Mac users, use Terminal to navigate to the directory where you cloned Julia, then run the following command, where &#8216;n&#8217; refers to the number of concurrent processes you want the compiler to use:

<pre style="padding-left: 30px;">make -j n</pre>

I use 8 concurrent processes on a 2013 MacBook Pro and it works pretty well. Certainly much faster than a single process. Note that the first time you run the &#8216;make&#8217; command, the build process will take much longer than successive builds, as Julia downloads all the required libraries needed. After the first build, you can just run the &#8216;make&#8217; command with a single process, as the code updates don&#8217;t take very long to build.

Package management is also done via GitHub. To add <a title="Julia packages" href="http://docs.julialang.org/en/latest/packages/packagelist/" target="_blank">Julia packages</a> to your install, you use the Pkg.add() function, with the package name in double-quotes.

### Julia code feels very familiar

#### Text file import

Although the <a title="Julia documentation" href="http://docs.julialang.org/en/latest/manual/introduction/" target="_blank">Julia documentation</a> makes numerous references to MATLAB in terms of code similarity, Julia feels very familiar to me as an R and Python user. Take reading a .csv file into a dataframe and finding the dimensions of the resulting object:

In each language, the basic syntax is to call a &#8216;read&#8217; function, specify the .csv filename, then the defaults of the function read in a basic file. I also could&#8217;ve specified other keyword arguments, but for purposes of this example I kept it simple.

#### Looping

Looping in Julia is similar to other languages. Python requires proper spacing for each level of a loop, with a colon for each evaluated expression. And although you generally don&#8217;t use many loops in R, to do so requires using parenthesis and brackets.

If you&#8217;re coming from a Python background, you can see that there&#8217;s not a ton of difference between Python looping into a dictionary vs. Julia. The biggest differences are the use of the &#8216;end&#8217; control-flow word and that Julia doesn&#8217;t currently have the convenience &#8220;Counter&#8221; object type. R doesn&#8217;t natively have a dictionary type, but you can add a similar concept using the <a title="CRAN hash package" href="http://cran.r-project.org/web/packages/hash/" target="_blank">hash</a> package.

#### Vectorization

While not required to achieve high performance, Julia also provides the <a title="Is looping as a programming construct bad?" href="http://slendrmeans.wordpress.com/2013/05/11/julia-loops/" target="_blank">functional programming construct of vectorization and list comprehensions</a>. In R, you use the &#8216;apply&#8217; family of functions instead of loops in order to <a title="Functional programming in R" href="https://github.com/hadley/devtools/wiki/Functional-programming" target="_blank">apply a function to multiple elements in a list</a>. In Python, there are the &#8216;map&#8217; and &#8216;reduce&#8217; functions, but there is also the concept of list comprehensions. In Julia, both of the aforementioned functionalities are possible.

In each case, the syntax is _just about_ the same to apply a function across a list/array of numbers.





### A small, but intense community

One thing that&#8217;s important to note about Julia at this stage is that it&#8217;s very early. If you&#8217;re going to be messing around with Julia, there&#8217;s going to be a lot of alone-time experimenting and reading the <a title="Julia documentation" href="http://docs.julialang.org/en/latest/" target="_blank">Julia documentation</a>. There are also several other resources including a <a title="Julia users Google group" href="https://groups.google.com/forum/?fromgroups=#!forum/julia-users" target="_blank">Julia-Users Google group</a>, <a title="Julia for R programmers" href="http://www.stat.wisc.edu/~bates/JuliaForRProgrammers.pdf" target="_blank">Julia for R programmers</a>, individual discussions on GitHub in the &#8216;Issues&#8217; section of each Julia package, and a few tutorials floating around (<a title="Julia tutorials" href="http://forio.com/julia/tutorials-list" target="_blank">here</a> and <a title="Julia meta tutorial" href="http://datacommunitydc.org/blog/2013/07/a-julia-meta-tutorial/" target="_blank">here</a>).

Beyond just the written examples though, I&#8217;ve found that the budding Julia community is very helpful and willing in terms of answering questions. I&#8217;ve been bugging the hell out of <a title="John Myles White" href="http://www.johnmyleswhite.com/" target="_blank">John Myles White</a> and he hasn&#8217;t complained (yet!), and even when code issues are raised through the users group or on GitHub, ultimately everyone has been very respectful and eager to help. So don&#8217;t be intimidated by the fact that Julia has a very MIT and Ph.D-ness to it&#8230;jump right in and migrate some of your favorite code over from other languages.

While I haven&#8217;t moved to using Julia for my everyday workload, I am getting facility to the point where I&#8217;m starting to consider using Julia for selected projects. Once the language matures a bit more, <a title="Julia Studio" href="http://forio.com/julia/" target="_blank">JuliaStudio</a> starts to approach <a title="RStudio" href="http://www.rstudio.com/" target="_blank">RStudio</a> in terms of functionality, and I get more familiar with the language in general, I can see Julia taking over for at least one if not all of my scientific programming languages.
