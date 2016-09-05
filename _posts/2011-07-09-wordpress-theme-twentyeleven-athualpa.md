---
id: 47
title: 'Picking a WordPress Theme:  Fancy or Basic?'
date: 2011-07-09T07:43:20+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=47
permalink: /wordpress-theme-twentyeleven-athualpa/
tweetbackscheck:
  - 1472684710
shorturls:
  - 'a:3:{s:9:"permalink";s:61:"http://randyzwitch.com/wordpress-theme-twentyeleven-athualpa/";s:7:"tinyurl";s:26:"http://tinyurl.com/7pkvxql";s:4:"isgd";s:19:"http://is.gd/EYuRqT";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - WordPress Tutorials
tags:
  - Child Theme
  - Google Adsense
  - Google Analytics
  - PHP
  - Twitter
---
## A complicated WordPress theme may LOOK better&#8230;

As I referenced in my prior <a title="Does the World really need another web analytics blog?" href="http://randyzwitch.com/2011/07/introduction/" target="_blank">post</a>, when I was getting <a title="The Fuqua Experience" href="http://the-fuqua-experience.com" target="_blank">The Fuqua Experience</a> (TFE) off the ground, I tried to find good-looking themes to complement my writing.  For a while, I used the <a title="Cutline 3-column Theme" href="http://cutline.tubetorial.com/" target="_blank">Cutline 3-column split</a> theme, because I liked the spartan nature of the theme.  I figured that all that white-space could be filled up with crazy tag-cloud widgets, Google Adsense ads, Twitter feeds&#8230;the web equivalent of Tufte&#8217;s &#8220;<a title="Business Week Chartjunk" href="http://images.businessweek.com/ss/09/06/0608_tufte/7.htm" target="_blank">chartjunk</a>.&#8221;

Once I moved away from the &#8220;must put every widget and plugin everywhere&#8221; mentality, I switched to the <a title="Atahualpa theme" href="http://wordpress.bytesforall.com/?p=102" target="_blank">Atahualpha</a> theme.  This is an amazing theme that allowed me to get TFE into a more professional, magazine style layout. I started thinking about search engine optimization (due to the included functionality), as well as customizing the hell out of every single font and layout attribute.  I started getting into using WordPress <a title="Wordpress shortcodes" href="http://codex.wordpress.org/Shortcode" target="_blank">shortcodes</a>, adding some additional social networking features like a Twitter widget and some special RSS buttons, and learning a lot along the way.

<!--more-->

## &#8230;but eventually you run out of flexibility

While complex themes like Atahualpa are great, eventually you come upon a problem that you can&#8217;t solve.  For me, it was adding a JavaScript &#8220;onclick&#8221; event to the &#8220;Read More&#8221; tag in WordPress (for tracking in Google Analytics).  Because of how the theme is set up, you can go right into the options area and modify what text is shown on the link (say, &#8220;_Continue Reading_&#8221; or &#8220;_Read this, Fool!_&#8221; instead of &#8220;Read More&#8221;), but you can&#8217;t put JavaScript in that box.
  

  

  
After contacting the theme developer, I still haven&#8217;t solved that problem!  So rather than make the same mistake again, I sought out the easiest, cleanest theme I could:  [Twenty Eleven](http://theme.wordpress.com/themes/twentyeleven/ "Twenty Eleven"), designed by WordPress.  Compared to Cutline and (definitely) Atahualpa, Twenty Eleven looks like it is written in English instead of PHP!

## Creating a Child Theme

Before I discuss the modifications I&#8217;ve made to the Twenty Eleven theme thus far, it&#8217;s important to talk about creating a &#8220;child&#8221; theme.  WordPress has a great functionality where you can use one theme as the base for another theme.  The benefit to doing this is that when the theme developer updates the theme, your modifications don&#8217;t get over written.

If you&#8217;re following along looking to create a child theme, the exact makeup of how child themes work doesn&#8217;t matter at this point.  The only thing you need to do is:

  1. Navigate to the directory where you&#8217;ve installed your theme (likely /wp-content/themes)
  2. Create a new directory with a meaningful name (such as twentyeleven-child)

And that&#8217;s it!  You&#8217;re on your way to creating your own theme.  In the next post, I&#8217;ll outline how you start creating a theme that reflects your style, starting with the CSS file.