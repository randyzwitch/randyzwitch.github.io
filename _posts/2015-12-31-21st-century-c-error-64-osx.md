---
title: '21st Century C: Error 64 on OSX When Using Make'
date: 2015-12-31T13:17:30+00:00
author: Randy Zwitch
layout: post
permalink: /21st-century-c-error-64-osx/
category: Programming
tags:
  - C
  - Clang
  - GCC
  - XCode
---
To end 2015, I decided to finally learn C, instead of making it a 2016 resolution! I had previously done the '<a href="http://c.learncodethehardway.org/book/" target="_blank">Learn C The Hard Way</a>' tutorials, taken about a year off, and thus forgotten everything.

Rather than re-do the same material, I decided to get <a href="http://shop.oreilly.com/product/0636920033677.do" target="_blank">'21st Century C'</a> from O'Reilly and work through that. Unfortunately, there is an error/misprint in the very beginning chapters that makes doing the exercises near impossible on OSX. This error manifests itself as _<span class="s1">c99: invalid argument `all' to -W </span>Error 64. _If you encounter this error on OSX (I'm using OSX 10.11.2 El Capitan as of writing this post), here are three methods for fixing the issue.

## Error 64!

When the discussion of using [Makefiles](https://www.gnu.org/software/make/) begins on page 15, there is a discussion of the "smallest practicable makefile", which is just six lines long:

Unfortunately, this doesn't _quite_ work on OSX. Page 11 in the book sort-of references that a fix is needed, but the directions aren't so clear...

## Error 64, solution 1: Book Fix, updated

To use the book fix, you are supposed to:

  1. Create a file named _c99_
  2. Put the lines (no quotes) 'gcc -std=c99 $\*' OR 'clang $\*' in the _c99_ file
  3. Add the file to your PATH in Terminal (such as 'export PATH="/Users/computeruser:$PATH"' if the _c99_ file were located in _/Users/computeruser_ directory)
  4. Run (no quotes) 'chmod +x c99' on the file to make it executable

Once you add this work-around to your PATH, then open a fresh Terminal window (or run 'source .bash_profile' to refresh the Bash settings), you should be able to use Make to compile your C code.

But to be honest, this seems like a really weird "fix" to me, as it overrides the C compiler settings for any program run via Terminal. I prefer one of two alternate solutions.





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



When you switch the 'c99' reference to just 'cc' in the Makefile, everything works fine. Here's the subtlety different, corrected Makefile:

## Error 64, solution 3: Switch to Clang

The final solution I came across is rather than using the GCC compiler, you can use an alternate compiler called Clang, which is also generally available on OSX (especially with XCode installed). Like solution 2 above, the Makefile is just subtlety different:

Whether to use GCC or Clang as your compiler is really beyond the scope of this blog post; as _21st Century C_ discusses, it really shouldn't matter (especially when you are just learning the mechanics of the language).

## Error 64, Be Gone!

There's not really much more to say at this point; this blog post is mainly documentation for anyone who comes across this error in the future. I've continued on through the book using Clang, but suffice to say, it's not the compiler that writes poor-quality, non-compiling code, it's the user. Ah, the fun of learning 🙂
