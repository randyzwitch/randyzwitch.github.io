---
id: 2319
title: Adding Line Numbers in IPython/Jupyter Notebooks
date: 2013-11-19T08:48:18+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=2319
permalink: /line-numbers-ipython-notebook/
tweetbackscheck:
  - 1472926995
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=2319";s:7:"tinyurl";s:26:"http://tinyurl.com/kag8hxt";s:4:"isgd";s:19:"http://is.gd/Bbul7g";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Data Science
tags:
  - Julia
  - Python
---
Lately, I&#8217;ve been using Jupyter Notebooks for all of my Python and Julia coding. The ability to develop and submit small snippets of code and create plots inline is just so useful that it has broken the stranglehold of using an IDE while I&#8217;m coding. However, the one thing that was missing for a smooth transition was line numbers in the cells; luckily, this can be achieved in two ways.

## Keyboard Shortcut

The easiest way to add line numbers to a Jupyter Notebook is to use the keyboard shortcut, which is **Ctrl-m** to enter Command Mode, then type** L**. Just highlight the cell you are interested in adding line numbers to, then hit the keyboard shortcut to toggle the line numbers.

[<img class="aligncenter size-full wp-image-2322" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/ipython-notebook-line-numbers.png?fit=1370%2C358" alt="ipython-notebook-line-numbers" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/ipython-notebook-line-numbers.png?w=1370 1370w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/ipython-notebook-line-numbers.png?resize=150%2C39 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/ipython-notebook-line-numbers.png?resize=300%2C78 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/ipython-notebook-line-numbers.png?resize=1024%2C267 1024w" sizes="(max-width: 1000px) 100vw, 1000px" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2013/11/ipython-notebook-line-numbers.png)
  

  


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

<del>I use OSX with the default &#8216;profile_default&#8217; profile, so the path for my custom.js file for IPython is:</del>

<pre><del>/Users/randyzwitch/.ipython/profile_default/static/custom/</del></pre>

<del>Similarly, you can do the same for IJulia:</del>

<pre><del>/Users/randyzwitch/.ipython/profile_julia/static/custom</del></pre>

<del>If you are using a different operating system than OSX, or you are using OSX and you don&#8217;t see a custom.js file in these locations, a quick search for custom.js will get you to the right file location. Once you open up the custom.js file, you can place the line of JavaScript anywhere in the file, as long as it&#8217;s not inside any of any pre-existing functions in the file.</del>

<del>Once you place the line of JavaScript in your file, you&#8217;ll need to restart IPython/IJulia completely for the change to take effect. After that, you&#8217;ll have line numbers in each cell, each Notebook!</del>

_Edit 11/4/2015: Thanks to reader Nat Dunn, I&#8217;ve been made aware that the above method no longer works, which isn&#8217;t a surprise given the amount of changes between IPython Notebook to the entire Jupyter project in the past 2 years._ 

_For the (currently) correct method of <a href="https://www.webucator.com/blog/2015/11/show-line-numbers-by-default-in-ipython-notebook/" target="_blank">adding line numbers to Jupyter Notebook by default</a>, please see <a href="https://www.webucator.com/blog/2015/11/show-line-numbers-by-default-in-ipython-notebook/" target="_blank">Nat&#8217;s post</a> with the correct instructions on modifying the custom.js file._