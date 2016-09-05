---
id: 1008
title: 'Removing &#8216;Powered by WordPress&#8217; From Scrappy'
date: 2012-04-23T21:23:37+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1008
permalink: /removing-powered-by-wordpress-scrappy/
tweetbackscheck:
  - 1472937708
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1008";s:7:"tinyurl";s:26:"http://tinyurl.com/6nkkpuu";s:4:"isgd";s:19:"http://is.gd/SQvfFc";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - WordPress Tutorials
tags:
  - Child Theme
  - Footer
  - PHP
  - Scrappy
---
My wife started a <a title="Zwitchen.com | What's Cookin'?" href="http://zwitchen.com" target="_blank">food blog</a> this weekend and decided to use the <a title="Scrappy WordPress theme" href="http://wordpress.org/extend/themes/scrappy" target="_blank">&#8220;Scrappy&#8221; WordPress theme</a> by <a href="http://carolinethemes.com/2011/11/04/scrappy/" target="_blank">Caroline Moore</a>.  But like all WordPress themes, there are a few customizations that are usually made to personalize the theme, the first of which is removing &#8220;Powered by WordPress&#8221; in the footer.

This blog post is essentially the same as my prior blog post about <a title="Removing Powered by WordPress from Twenty Eleven theme" href="http://randyzwitch.com/removing-powered-by-wordpress-twenty-eleven/" target="_blank">removing &#8220;Powered by WordPress&#8221; from the Twenty Eleven theme</a>, but of course, for the Scrappy theme!  This post assumes you&#8217;ve created a <a title="Creating a WordPress child theme" href="http://randyzwitch.com/twenty-eleven-child-theme-creating-css-file/" target="_blank">child theme</a> already, so that the changes you make persist even if the theme gets updated by the original author.

<!--more-->

## Copy the footer.php file from the Scrappy theme

The first thing to do to customize the Scrappy footer is make a copy of the _footer.php_ file from the Scrappy theme and place it in your child theme folder.  It is this file that we will modify in order to remove &#8220;Powered by WordPress&#8221; and the reference to the Scrappy theme name.
  

  


## Comment out code within the &#8220;site-info&#8221; section of the footer

Within the footer code, there is a <div> section that references &#8220;site-info&#8221;:


  
What we want to do is comment out the code, starting at the first php reference and ending after the &#8220;Caroline Moore&#8221; line.  We can do this using the &#8220;<!&#8211;&#8221; and &#8220;&#8211;>&#8221; <a title="HTML Tag Comments article" href="http://www.w3schools.com/tags/tag_comment.asp" target="_blank">codes</a>.  When the code is commented out correctly, it will look like the following:



Be sure to hit &#8220;Save&#8221; to your footer.php file after making the comment changes, and you&#8217;re all done:  no more &#8220;Powered by WordPress&#8221;!

<div id="attachment_1012" style="width: 660px" class="wp-caption alignleft">
  <img class="size-full wp-image-1012" title="wordpress-scrappy-footer-original" alt="WordPress Scrappy footer" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-original.png?fit=650%2C86" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-original.png?w=650 650w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-original.png?resize=150%2C19 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-original.png?resize=300%2C39 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-original.png?resize=500%2C66 500w" sizes="(max-width: 650px) 100vw, 650px" data-recalc-dims="1" />
  
  <p class="wp-caption-text">
    Original &#8220;Scrappy&#8221; footer &#8211; Powered by WordPress
  </p>
</div>

<div id="attachment_1013" style="width: 660px" class="wp-caption alignleft">
  <img class=" wp-image-1013" title="wordpress-scrappy-footer-modified" alt="WordPress Scrappy footer modified" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-modified.png?resize=650%2C66" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-modified.png?w=650 650w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-modified.png?resize=150%2C15 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-modified.png?resize=300%2C30 300w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/04/wordpress-scrappy-footer-modified.png?resize=500%2C50 500w" sizes="(max-width: 650px) 100vw, 650px" data-recalc-dims="1" />
  
  <p class="wp-caption-text">
    Modified WordPress Scrappy footer (with slightly different pattern!)
  </p>
</div>

## Adding your own footer text

If you want to add your own footer text, like a copyright statement, you can add any HTML code you want within the same section of code where we just commented out code.  For an example of how to <a href="http://randyzwitch.com/removing-powered-by-wordpress-twenty-eleven/" target="_blank">add a copyright statement</a>, see the bottom of my prior blog post about modifying the footer of the WordPress Twenty Eleven theme.

That&#8217;s it!  One step closer to making the WordPress Scrappy theme your own.