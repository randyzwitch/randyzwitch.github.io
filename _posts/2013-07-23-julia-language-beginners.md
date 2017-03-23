---
title: "A Beginner's Look at Julia"
date: 2013-07-23T12:16:34+00:00
author: Randy Zwitch
layout: post
permalink: /julia-language-beginners/
category: DataScience
description: For the scientific programmer already using Python, R, Java, MATLAB or other languages, Julia should feel pretty familiar. Here's how to get started.
tags:
  - Julia
  - Python
  - R
---
Over the past month or so, I've been playing with a new scientific programming language called '<a title="Julia language" href="http://julialang.org/" target="_blank">Julia</a>', which aims to be a high-level language with performance approaching that of C. With that goal in mind, Julia could be a replacement for the 'multi-language' problem of needing to move between R, Python, MATLAB, C, Fortran, Scala, etc. within a single scientific programming project.  Here are some observations that might be helpful for others looking to get started with Julia.

### Get used to 'Git' and 'make'

While there are <a title="Julia language downloads" href="http://julialang.org/downloads/" target="_blank">pre-built binaries</a> for Julia, due to the rapid pace of development, it's best to build Julia from source. To be able to keep up with the literally dozen code changes per day, you can clone the <a title="Julia GitHub repo" href="https://github.com/JuliaLang/julia" target="_blank">Julia GitHub repository</a> to your local machine. If you use one of the <a title="GitHub GUI downloads" href="http://git-scm.com/downloads/guis" target="_blank">GitHub GUI's</a>, this is as easy as hitting the 'Sync Branch' button to receive all of the newest code updates.

To install Julia, you need to compile the code. The instructions for each supported operating system are listed on the <a title="Julia GitHub repo" href="https://github.com/JuliaLang/julia" target="_blank">Julia GitHub page</a>. For Mac users, use Terminal to navigate to the directory where you cloned Julia, then run the following command, where 'n' refers to the number of concurrent processes you want the compiler to use:

{% highlight julia linenos %}make -j n {% endhighlight %}

I use 8 concurrent processes on a 2013 MacBook Pro and it works pretty well. Certainly much faster than a single process. Note that the first time you run the `make` command, the build process will take much longer than successive builds, as Julia downloads all the required libraries needed. After the first build, you can just run the `make` command with a single process, as the code updates don't take very long to build.

Package management is also done via GitHub. To add <a title="Julia packages" href="http://pkg.julialang.org/" target="_blank">Julia packages</a> to your install, you use the `Pkg.add()` function, with the package name in double-quotes.

### Julia code feels very familiar

#### Text file import

Although the <a title="Julia documentation" href="http://docs.julialang.org/en/latest/manual/introduction.html#man-introduction-1" target="_blank">Julia documentation</a> makes numerous references to MATLAB in terms of code similarity, Julia feels very familiar to me as an R and Python user. Take reading a .csv file into a dataframe and finding the dimensions of the resulting object

{% highlight julia linenos %}
#R: Read in 1987.csv from airline dataset into a dataframe
#No import statement needed to create a dataframe in R
airline1987 <- read.csv("~/airline/1987.csv")
dim(airline1987)
[1] 1311826      29

#Python: use pandas to create a dataframe
import pandas as pd
airline1987 = pd.read_csv("/Users/randyzwitch/airline/1987.csv")
airline1987.shape
Out[7]: (1311826, 29)

#Julia: use DataFrames to create a dataframe
using DataFrames
airline1987 = readtable("/Users/randyzwitch/airline/1987.csv")
size(airline1987)
(1311826,29)
{% endhighlight %}

In each language, the basic syntax is to call a 'read' function, specify the .csv filename, then the defaults of the function read in a basic file. I also could've specified other keyword arguments, but for purposes of this example I kept it simple.

#### Looping

Looping in Julia is similar to other languages. Python requires proper spacing for each level of a loop, with a colon for each evaluated expression. And although you generally don't use many loops in R, to do so requires using parenthesis and brackets.

{% highlight julia linenos %}
#Python looping to create a term-frequency dictionary

from collections import Counter

term_freq = Counter()
for word in english_dictionary:
  for url in url_list:
    if word in url_list:
      term_freq[word] += 1

#Julia looping to create a term-frequency dictionary

term_freq=Dict{String, Int64}()
for word in english_dictionary
    for url in url_list
        if search(line, word) != (0:-1)
            term_freq[word]=get(term_freq,word,0)+1
        end
    end
end
{% endhighlight %}

If you're coming from a Python background, you can see that there's not a ton of difference between Python looping into a dictionary vs. Julia. The biggest differences are the use of the `end` control-flow word and that Julia doesn't currently have the convenience "Counter" object type. R doesn't natively have a dictionary type, but you can add a similar concept using the <a title="CRAN hash package" href="http://cran.r-project.org/web/packages/hash/" target="_blank">hash</a> package.

#### Vectorization

While not required to achieve high performance, Julia also provides the <a title="Is looping as a programming construct bad?" href="http://slendrmeans.wordpress.com/2013/05/11/julia-loops/" target="_blank">functional programming construct of vectorization and list comprehensions</a>. In R, you use the `*apply` family of functions instead of loops in order to <a title="Functional programming in R" href="https://github.com/hadley/devtools/wiki/Functional-programming" target="_blank">apply a function to multiple elements in a list</a>. In Python, there are the `map` and `reduce` functions, but there is also the concept of list comprehensions. In Julia, both of the aforementioned functionalities are possible.

{% highlight julia linenos %}
#Cube every number from 1 to 100

#Python map function
cubes = map(lambda(x): x*x*x, range(1,100))

#Python list comprehension
cubes= [x*x*x for x in range(1,100)]

#R sapply function
cubes <- sapply(seq(1,100), function(x) x*x*x)

#Julia map function
cubes = map((x)-> x*x*x, [1:100])

#Julia list comprehension
cubes = [x*x*x for x in [1:100]]
{% endhighlight %}

In each case, the syntax is _just about_ the same to apply a function across a list/array of numbers.

### A small, but intense community

One thing that's important to note about Julia at this stage is that it's very early. If you're going to be messing around with Julia, there's going to be a lot of alone-time experimenting and reading the <a title="Julia documentation" href="http://docs.julialang.org/en/latest/" target="_blank">Julia documentation</a>. There are also several other resources including a <a title="Julia users Google group" href="https://groups.google.com/forum/?fromgroups=#!forum/julia-users" target="_blank">Julia-Users Google group</a>, <a title="Julia for R programmers" href="http://www.stat.wisc.edu/~bates/JuliaForRProgrammers.pdf" target="_blank">Julia for R programmers</a>, individual discussions on GitHub in the 'Issues' section of each Julia package, and a few tutorials floating around (<a title="Julia tutorials" href="http://forio.com/julia/tutorials-list" target="_blank">here</a> and <a title="Julia meta tutorial" href="http://datacommunitydc.org/blog/2013/07/a-julia-meta-tutorial/" target="_blank">here</a>).

Beyond just the written examples though, I've found that the budding Julia community is very helpful and willing in terms of answering questions. I've been bugging the hell out of <a title="John Myles White" href="http://www.johnmyleswhite.com/" target="_blank">John Myles White</a> and he hasn't complained (yet!), and even when code issues are raised through the users group or on GitHub, ultimately everyone has been very respectful and eager to help. So don't be intimidated by the fact that Julia has a very MIT and Ph.D-ness to it...jump right in and migrate some of your favorite code over from other languages.

While I haven't moved to using Julia for my everyday workload, I am getting facility to the point where I'm starting to consider using Julia for selected projects. Once the language matures a bit more, <del><a title="Julia Studio" href="http://forio.com/julia/" target="_blank">JuliaStudio</a> starts to approach <a title="RStudio" href="http://www.rstudio.com/" target="_blank">RStudio</a> in terms of functionality</del>, and I get more familiar with the language in general, I can see Julia taking over for at least one if not all of my scientific programming languages.
