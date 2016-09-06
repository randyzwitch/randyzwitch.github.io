---
id: 3751
title: '21st Century C: Error 64 on OSX When Using Make'
date: 2015-12-31T13:17:30+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3751
permalink: /21st-century-c-error-64-osx/
tweetbackscheck:
  - 1472986233
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3751";s:7:"tinyurl";s:26:"http://tinyurl.com/hsft5zl";s:4:"isgd";s:19:"http://is.gd/CssUJm";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - General Programming
tags:
  - C
  - Clang
  - GCC
  - XCode
---
To end 2015, I decided to finally learn C, instead of making it a 2016 resolution! I had previously done the &#8216;<a href="http://c.learncodethehardway.org/book/" target="_blank">Learn C The Hard Way</a>&#8216; tutorials, taken about a year off, and thus forgotten everything.

Rather than re-do the same material, I decided to get <a href="http://shop.oreilly.com/product/0636920033677.do" target="_blank">&#8217;21st Century C&#8217;</a> from O&#8217;Reilly and work through that. Unfortunately, there is an error/misprint in the very beginning chapters that makes doing the exercises near impossible on OSX. This error manifests itself as _<span class="s1">c99: invalid argument `all&#8217; to -W </span>Error 64. _If you encounter this error on OSX (I&#8217;m using OSX 10.11.2 El Capitan as of writing this post), here are three methods for fixing the issue.

## Error 64!

When the discussion of using [Makefiles](https://www.gnu.org/software/make/) begins on page 15, there is a discussion of the &#8220;smallest practicable makefile&#8221;, which is just six lines long:

Unfortunately, this doesn&#8217;t _quite_ work on OSX. Page 11 in the book sort-of references that a fix is needed, but the directions aren&#8217;t so clear&#8230;

## Error 64, solution 1: Book Fix, updated

To use the book fix, you are supposed to:

  1. Create a file named _c99_
  2. Put the lines (no quotes) &#8216;gcc &#8211;std=c99 $\*&#8217; OR &#8216;clang $\*&#8217; in the _c99_ file
  3. Add the file to your PATH in Terminal (such as &#8216;export PATH=&#8221;/Users/computeruser:$PATH&#8221;&#8216; if the _c99_ file were located in _/Users/computeruser_ directory)
  4. Run (no quotes) &#8216;chmod +x c99&#8217; on the file to make it executable

Once you add this work-around to your PATH, then open a fresh Terminal window (or run &#8216;source .bash_profile&#8217; to refresh the Bash settings), you should be able to use Make to compile your C code.

But to be honest, this seems like a really weird &#8220;fix&#8221; to me, as it overrides the C compiler settings for any program run via Terminal. I prefer one of two alternate solutions.





## Error 64, solution 2: Makefile Change

As I was researching this, a helpful Twitter user noted:

<blockquote class="twitter-tweet" lang="en" data-conversation="none">
  <p>
    <a href="https://twitter.com/randyzwitch">@randyzwitch</a> Remove space between CFLAGS and =, and replace c99 with cc. See man c99, -W is not -Wwarnings.
  </p>

  <p>
    — Eugene Teo (@datajottings) <a href="https://twitter.com/datajottings/status/682214537341190145">December 30, 2015</a>
  </p>
</blockquote>



When you switch the &#8216;c99&#8217; reference to just &#8216;cc&#8217; in the Makefile, everything works fine. Here&#8217;s the subtlety different, corrected Makefile:

## Error 64, solution 3: Switch to Clang

The final solution I came across is rather than using the GCC compiler, you can use an alternate compiler called Clang, which is also generally available on OSX (especially with XCode installed). Like solution 2 above, the Makefile is just subtlety different:

Whether to use GCC or Clang as your compiler is really beyond the scope of this blog post; as _21st Century C_ discusses, it really shouldn&#8217;t matter (especially when you are just learning the mechanics of the language).

## Error 64, Be Gone!

There&#8217;s not really much more to say at this point; this blog post is mainly documentation for anyone who comes across this error in the future. I&#8217;ve continued on through the book using Clang, but suffice to say, it&#8217;s not the compiler that writes poor-quality, non-compiling code, it&#8217;s the user. Ah, the fun of learning 🙂
