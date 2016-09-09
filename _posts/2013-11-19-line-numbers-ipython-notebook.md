---
title: Adding Line Numbers in IPython/Jupyter Notebooks
date: 2013-11-19T08:48:18+00:00
author: Randy Zwitch
layout: post
permalink: /line-numbers-ipython-notebook/
category: DataScience
tags:
  - Julia
  - Python
---
Lately, I've been using Jupyter Notebooks for all of my Python and Julia coding. The ability to develop and submit small snippets of code and create plots inline is just so useful that it has broken the stranglehold of using an IDE while I'm coding. However, the one thing that was missing for a smooth transition was line numbers in the cells; luckily, this can be achieved in two ways.

## Keyboard Shortcut

The easiest way to add line numbers to a Jupyter Notebook is to use the keyboard shortcut, which is **Ctrl-m** to enter Command Mode, then type** L**. Just highlight the cell you are interested in adding line numbers to, then hit the keyboard shortcut to toggle the line numbers.

![ipython-notebook-line-numbers](/wp-content/uploads/2013/11/ipython-notebook-line-numbers.png)

## Add Line Numbers to All Cells at Startup

<del>While the keyboard shortcut is great for toggling line numbers on/off, I prefer having line numbers always on. Luckily, the IPython Dev folks on Twitter were kind enough to explain how to do this:</del>

<blockquote class="twitter-tweet" lang="en">
  <p style="text-align: center;">
    <del><a href="https://twitter.com/randyzwitch">@randyzwitch</a> add `IPython.Cell.options_default.cm_config.lineNumbers = true;` to your custom.js</del>
  </p>

  <p style="text-align: center;">
    <del>— IPython Dev (@IPythonDev) <a href="https://twitter.com/IPythonDev/statuses/394906726828236800">October 28, 2013</a></del>
  </p>
</blockquote>

<del>I use OSX with the default 'profile_default' profile, so the path for my custom.js file for IPython is:</del>

<pre><del>/Users/randyzwitch/.ipython/profile_default/static/custom/</del></pre>

<del>Similarly, you can do the same for IJulia:</del>

<pre><del>/Users/randyzwitch/.ipython/profile_julia/static/custom</del></pre>

<del>If you are using a different operating system than OSX, or you are using OSX and you don't see a custom.js file in these locations, a quick search for custom.js will get you to the right file location. Once you open up the custom.js file, you can place the line of JavaScript anywhere in the file, as long as it's not inside any of any pre-existing functions in the file.</del>

<del>Once you place the line of JavaScript in your file, you'll need to restart IPython/IJulia completely for the change to take effect. After that, you'll have line numbers in each cell, each Notebook!</del>

_Edit 11/4/2015: Thanks to reader Nat Dunn, I've been made aware that the above method no longer works, which isn't a surprise given the amount of changes between IPython Notebook to the entire Jupyter project in the past 2 years._

_For the (currently) correct method of <a href="https://www.webucator.com/blog/2015/11/show-line-numbers-by-default-in-ipython-notebook/" target="_blank">adding line numbers to Jupyter Notebook by default</a>, please see <a href="https://www.webucator.com/blog/2015/11/show-line-numbers-by-default-in-ipython-notebook/" target="_blank">Nat's post</a> with the correct instructions on modifying the custom.js file._
