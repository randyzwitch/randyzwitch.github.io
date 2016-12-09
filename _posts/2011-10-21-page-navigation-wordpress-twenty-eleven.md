---
title: Page Navigation For WordPress Twenty Eleven
date: 2011-10-21T11:18:47+00:00
author: Randy Zwitch
layout: post
permalink: /page-navigation-wordpress-twenty-eleven/
category: Design
description: There are many benefits to adding page navigation for WordPress blogs, including improved reader engagement and SEO. Here's how to do it.
tags:
  - Child Theme
  - CSS
  - PHP
  - WordPress plugins
---
By default, most WordPress themes (including Twenty Eleven) have relatively weak page-to-page navigation.  Users can improve content structure on their WordPress blogs by using categories, tags, and custom menus, but one navigation element that's a bit more difficult to modify are the "Next Page/Previous Page" links.  These links are great if you want to move a page at a time, but if your blog has lots of pages, users won't easily be able to navigate very deeply into your content.  That's where a page navigation menu comes in handy.

Here's how to implement page navigation, using a plugin and a simple modification to the WordPress Twenty Eleven theme.

## Using a plugin?  For shame!

Usually, I'm not a big fan of using plugins for every little modification on my blogs. While there are some amazing WordPress developers out there, there are many _less than perfect_ ones as well, and by loading up your blog with their buggy code can really slow (or brick!) your blog.  However, for something as complex as page navigation, I've opted to use the [WP-PageNavi](http://wordpress.org/extend/plugins/wp-pagenavi/ "WordPress Page Navigation plugin") plugin.  With over a million downloads, I'm fairly confident that this plugin's popularity indicates its code quality.  Since I've installed it, I've seen no performance deterioration...

So the first step for this tutorial is to install this plugin!

## Modifying your Twenty Eleven child theme for Page Navigation

When you install this plugin and refresh your blog, the first thing you'll realize is that nothing happened!  This occurs because the plugin itself doesn't know where you want to put the page navigation; this needs to be done with some minor PHP coding.

In your WordPress Twenty Eleven [child theme](http://randyzwitch.com/tag/child-theme/ "Child Theme posts"), we need to add a new PHP file if it's not already available:  _index.php_.  It is this file that controls the front page container of the blog, and is where the "Next Page/Previous Page" code resides.

In the _index.php_ file, find the following code:

<pre>&lt;?php twentyeleven_content_nav( 'nav-below' ); ?&gt;</pre>

We want to comment this code out by doing the following:

<pre>&lt;?php /*twentyeleven_content_nav( 'nav-below' );*/ ?&gt;</pre>

Finally, we want to add a call to the page navigation function by placing the following code directly under the code we just commented out:

<pre>&lt;?php wp_pagenavi(); ?&gt;</pre>

Once you hit save and refresh your blog, you should now see the page navigation at the bottom of your blog where the default navigation option used to reside!

## WP-PageNavi Settings

The default settings for this plugin should be sufficient for most users, but if you want to change how many page numbers show in the navigation, or any of the other options, you can go to the Settings menu and click on "PageNavi".  The only setting I've changed so far is the "Number of Pages to Show", which I set to 10 because I like round numbers.  Given that this blog only has 8 pages as of the time of the tutorial, this means all pages are showing in the page navigation.

## Customizing the Page Navigation with CSS

The plugin by default has its own CSS turned on, which makes the menu look pretty stylish on its own.  Because the page navigation are links, the plugin will keep the same styling as the rest of your page.  Pretty cool!

The only CSS modification I made was to put a small amount of padding on the bottom of the navigation, because it was sitting on top of the gray horizontal line for the footer.  To correct this problem, place the following code in your [style.css](http://randyzwitch.com/2011/07/twenty-eleven-child-theme-creating-css-file/ "Creating Custom CSS file") file:

<pre>div.wp-pagenavi { padding-bottom: 10px;}</pre>

You can change the number from "10" to any amount of pixels you'd like, as your design eye sees fit.

And that's it!  Any questions? Leave a comment 🙂
