---
title: 'How To Remove "This entry was posted in" on WordPress single posts'
date: 2011-09-27T15:29:42+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=633
permalink: /wordpress-remove-this-entry-was-posted-in/
tweetbackscheck:
  - 1472921734
shorturls:
  - 'a:3:{s:9:"permalink";s:65:"http://randyzwitch.com/wordpress-remove-this-entry-was-posted-in/";s:7:"tinyurl";s:26:"http://tinyurl.com/88sv6e3";s:4:"isgd";s:19:"http://is.gd/8xavkL";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - WordPress Tutorials
tags:
  - Child Theme
  - Footer
  - HTML
  - PHP
---
In prior <a title="Removing “Powered by WordPress” in Twenty Eleven" href="http://randyzwitch.com/2011/08/removing-powered-by-wordpress-twenty-eleven/" target="_blank">posts</a>, I've commented that I'm a fan of clean, sleek design when it comes to WordPress themes.  I've added the "breadcrumb" style navigation to the top of my posts, which makes the "This Entry was Posted in <category>" and "Bookmark the Permalink" text at the bottom of each post redundant.

Here's how to remove/modify both of these messages through a simple change to the _content-single.php_ file.

## Removing all text at the bottom of the single post

To make all of text disappear at the bottom of each post, all we need to do is comment out a few lines of code. Open your _content-single.php_ file from your Twenty Eleven child theme and find the following lines of code:

We'll use our <a title="Twenty Eleven Child Theme:  Custom Header" href="http://randyzwitch.com/2011/07/custom-header-twenty-eleven-child-theme/" target="_blank">HTML comment tag</a> to comment out the PHP code that starts the line below this one, and close the comment tag at the end of the PHP script.  When done correctly, the code will look like this:

Hit save and you're done, no more "This Entry was Posted in" or "Bookmark the Permalink" verbiage at the end of your posts!



## Modifying the text at the bottom of the post to just keep the Post Tags

Perhaps you don't want to remove the text entirely from the bottom of the post, but just want to leave the tags behind (for SEO purposes or whatever).  To do this, we'll modify the same piece of code, but instead of commenting out all of the PHP code, we'll comment out a smaller piece of code, then redefine the _$utility_text_  PHP variable.

The piece of code we want to comment out is shown below.  Note that because this code is within a PHP code block, we need to comment the code out using a "forward slash-star, star-backslash" comment tag:



With this code commented out, we can now define the _$utility_text_ variable as we want.  To show just the text "Tagged: <tag list>", add the following code just below the commented code above:

<pre>$utility_text = _( 'Tagged: %2$s');</pre>

Once you hit save, the bottom of each of your single posts will show the tags that the post belongs to.
