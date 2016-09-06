---
id: 875
title: Page Navigation For WordPress Twenty Eleven
date: 2011-10-21T11:18:47+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=875
permalink: /page-navigation-wordpress-twenty-eleven/
tweetbackscheck:
  - 1472963217
shorturls:
  - 'a:3:{s:9:"permalink";s:63:"http://randyzwitch.com/page-navigation-wordpress-twenty-eleven/";s:7:"tinyurl";s:26:"http://tinyurl.com/7hdm9ge";s:4:"isgd";s:19:"http://is.gd/fYe3bV";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - WordPress Tutorials
tags:
  - Child Theme
  - CSS
  - PHP
  - WordPress plugins
---
By default, most WordPress themes (including Twenty Eleven) have relatively weak page-to-page navigation.  Users can improve content structure on their WordPress blogs by using categories, tags, and custom menus, but one navigation element that&#8217;s a bit more difficult to modify are the &#8220;Next Page/Previous Page&#8221; links.  These links are great if you want to move a page at a time, but if your blog has lots of pages, users won&#8217;t easily be able to navigate very deeply into your content.  That&#8217;s where a page navigation menu comes in handy.

Here&#8217;s how to implement page navigation, using a plugin and a simple modification to the WordPress Twenty Eleven theme.

<!--more-->

## Using a plugin?  For shame!

Usually, I&#8217;m not a big fan of using plugins for every little modification on my blogs. While there are some amazing WordPress developers out there, there are many _less than perfect_ ones as well, and by loading up your blog with their buggy code can really slow (or brick!) your blog.  However, for something as complex as page navigation, I&#8217;ve opted to use the [WP-PageNavi](http://wordpress.org/extend/plugins/wp-pagenavi/ "WordPress Page Navigation plugin") plugin.  With over a million downloads, I&#8217;m fairly confident that this plugin&#8217;s popularity indicates its code quality.  Since I&#8217;ve installed it, I&#8217;ve seen no performance deterioration&#8230;

So the first step for this tutorial is to install this plugin!





## Modifying your Twenty Eleven child theme for Page Navigation

When you install this plugin and refresh your blog, the first thing you&#8217;ll realize is that nothing happened!  This occurs because the plugin itself doesn&#8217;t know where you want to put the page navigation; this needs to be done with some minor PHP coding.

In your WordPress Twenty Eleven [child theme](http://randyzwitch.com/tag/child-theme/ "Child Theme posts"), we need to add a new PHP file if it&#8217;s not already available:  _index.php_.  It is this file that controls the front page container of the blog, and is where the &#8220;Next Page/Previous Page&#8221; code resides.

In the _index.php_ file, find the following code:

<pre>&lt;?php twentyeleven_content_nav( 'nav-below' ); ?&gt;</pre>

We want to comment this code out by doing the following:

<pre>&lt;?php /*twentyeleven_content_nav( 'nav-below' );*/ ?&gt;</pre>

Finally, we want to add a call to the page navigation function by placing the following code directly under the code we just commented out:

<pre>&lt;?php wp_pagenavi(); ?&gt;</pre>

Once you hit save and refresh your blog, you should now see the page navigation at the bottom of your blog where the default navigation option used to reside!

## WP-PageNavi Settings

The default settings for this plugin should be sufficient for most users, but if you want to change how many page numbers show in the navigation, or any of the other options, you can go to the Settings menu and click on &#8220;PageNavi&#8221;.  The only setting I&#8217;ve changed so far is the &#8220;Number of Pages to Show&#8221;, which I set to 10 because I like round numbers.  Given that this blog only has 8 pages as of the time of the tutorial, this means all pages are showing in the page navigation.

## Customizing the Page Navigation with CSS

The plugin by default has its own CSS turned on, which makes the menu look pretty stylish on its own.  Because the page navigation are links, the plugin will keep the same styling as the rest of your page.  Pretty cool!

The only CSS modification I made was to put a small amount of padding on the bottom of the navigation, because it was sitting on top of the gray horizontal line for the footer.  To correct this problem, place the following code in your [style.css](http://randyzwitch.com/2011/07/twenty-eleven-child-theme-creating-css-file/ "Creating Custom CSS file") file:

<pre>div.wp-pagenavi { padding-bottom: 10px;}</pre>

You can change the number from &#8220;10&#8221; to any amount of pixels you&#8217;d like, as your design eye sees fit.

And that&#8217;s it!  Any questions? Leave a comment 🙂
