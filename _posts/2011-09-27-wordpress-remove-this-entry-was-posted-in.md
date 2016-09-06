---
id: 633
title: 'How To Remove &#8220;This entry was posted in&#8221; on WordPress single posts'
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
In prior <a title="Removing “Powered by WordPress” in Twenty Eleven" href="http://randyzwitch.com/2011/08/removing-powered-by-wordpress-twenty-eleven/" target="_blank">posts</a>, I&#8217;ve commented that I&#8217;m a fan of clean, sleek design when it comes to WordPress themes.  I&#8217;ve added the &#8220;breadcrumb&#8221; style navigation to the top of my posts, which makes the &#8220;This Entry was Posted in <category>&#8221; and &#8220;Bookmark the Permalink&#8221; text at the bottom of each post redundant.

Here&#8217;s how to remove/modify both of these messages through a simple change to the _content-single.php_ file.

## <!--more-->Removing all text at the bottom of the single post

To make all of text disappear at the bottom of each post, all we need to do is comment out a few lines of code. Open your _content-single.php_ file from your Twenty Eleven child theme and find the following lines of code:

We&#8217;ll use our <a title="Twenty Eleven Child Theme:  Custom Header" href="http://randyzwitch.com/2011/07/custom-header-twenty-eleven-child-theme/" target="_blank">HTML comment tag</a> to comment out the PHP code that starts the line below this one, and close the comment tag at the end of the PHP script.  When done correctly, the code will look like this:

Hit save and you&#8217;re done, no more &#8220;This Entry was Posted in&#8221; or &#8220;Bookmark the Permalink&#8221; verbiage at the end of your posts!



## Modifying the text at the bottom of the post to just keep the Post Tags

Perhaps you don&#8217;t want to remove the text entirely from the bottom of the post, but just want to leave the tags behind (for SEO purposes or whatever).  To do this, we&#8217;ll modify the same piece of code, but instead of commenting out all of the PHP code, we&#8217;ll comment out a smaller piece of code, then redefine the _$utility_text_  PHP variable.

The piece of code we want to comment out is shown below.  Note that because this code is within a PHP code block, we need to comment the code out using a &#8220;forward slash-star, star&#8211;backslash&#8221; comment tag:



With this code commented out, we can now define the _$utility_text_ variable as we want.  To show just the text &#8220;Tagged: <tag list>&#8221;, add the following code just below the commented code above:

<pre>$utility_text = _( 'Tagged: %2$s');</pre>

Once you hit save, the bottom of each of your single posts will show the tags that the post belongs to.
