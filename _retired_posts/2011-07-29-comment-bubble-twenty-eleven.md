---
title: Removing Comment Bubble From Twenty Eleven Theme
date: 2011-07-29T21:23:16+00:00
author: Randy Zwitch
layout: post
permalink: /comment-bubble-twenty-eleven/
category: Design
published: false
description: The comment bubble in the upper right of each post on the front page of the WordPress Twenty Eleven theme clutters up the front page.
tags:
  - Child Theme
  - Firefox
---
If you're like me, one of the things that seems odd about the WordPress Twenty Eleven theme is the comment bubble in the upper right of each post on the front page of the blog.  If you don't know what I'm talking about, here's a picture:

![wordpress-twenty-eleven-comment-bubble](/wp-content/uploads/2011/07/wordpress-twenty-eleven-comment-bubble.png)

<p class="wp-caption-text">
In the upper right, the comment bubble (highlighted blue) clutters up the front page
</p>

Before we can remove the comment bubble, we first need to figure what this element is called within WordPress.  Luckily, this is quite easy using a tool that is included in all modern browsers.

## Finding the comment bubble's name is as easy as "Point, Right-click, and Inspect Element"

To find out what any HTML element is called on a page, all you need to do is to point to the element, then Right-Click on it and choose "Inspect Element".  I'm using a Mac with the Firefox browser, so it looks like the following on my computer:

![firefox-5-inspect-element](/wp-content/uploads/2011/07/firefox-5-inspect-element.png)

<p class="wp-caption-text">
'Inspect Element' is one of the most useful tools in web development
</p>

Once you click "Inspect Element", you'll see that the comment bubble is located inside the `comment-link` section of our WordPress template code:

![comment-link](/wp-content/uploads/2011/07/comment-link.png)

<p class="wp-caption-text">
We need to look for "comment-link" in our WordPress template
</p>

## Adding `content.php` to our WordPress child theme

Now that we've found what the comment bubble element is called, we need to find it in our WordPress child theme.  If you've been following along with the posts on this blog, we've already developed a [custom CSS file](http://randyzwitch.com/2011/07/twenty-eleven-child-theme-creating-css-file/ "Twenty Eleven Child Theme: Creating CSS file") and a [custom header file](http://randyzwitch.com/2011/07/custom-header-twenty-eleven-child-theme/ "Twenty Eleven Child Theme:  Custom Header").  To save you the agony, the WordPress file we need to modify is called `content.php`. Copy the `content.php` file from the base Twenty Eleven theme into your child theme directory.

Once you've copied this file to your directory, open it up in your favorite text editor.  What we're looking for is "comment-link"...using Command-F, we can see that it is contained in this file twice.  We want to modify the first one, as it controls the element at the top right of the post; the second "comment-link" refers to the link at the bottom of each post.

## When in doubt, comment it out!

Any time you are making changes in code, it's good practice to first 'comment out' the code you are modifying, so that you can 'uncomment-out' the code if the change isn't what you intended.  If you delete the code outright, before knowing what it does, you'll be scrambling when you delete the wrong line!

Using the HTML comment tag of "Left arrow, exclamation point, two dashes", we can start commenting out at the first line of the code snippet (to the left of the <? <!--? symbol), and close the comment tag at the last line (to the right of the ?--> symbol).  Use the "Two dashes, Right arrow" HTML comment tag to the right of the "php endif" statement.  When you are done, your code will look like the following:



Hit save and you're done!  No more comment bubble on your theme.  Of course, once you verify that the code is working correctly on your theme, you can delete these lines of code.  It's really up to you and your needs...if you think you might want to re-instate the comment bubble at a later date, leave the code.  If you're like me and don't like the comment bubble, then delete!
