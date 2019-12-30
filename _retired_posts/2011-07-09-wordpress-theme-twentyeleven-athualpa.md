---
title: 'Picking a WordPress Theme: Fancy or Basic?'
date: 2011-07-09T07:43:20+00:00
author: Randy Zwitch
layout: post
permalink: /wordpress-theme-twentyeleven-athualpa/
category: Design
published: false
description: I've had past success with the Atahualpa Wordpress theme. But that theme is complex, so I'm going to hack on Twenty Eleven instead.
tags:
  - Child Theme
  - Google Adsense
  - Google Analytics
  - PHP
  - Twitter
---
## A complicated WordPress theme may LOOK better...

As I referenced in a prior post</a>, when I was getting [The Fuqua Experience](http://the-fuqua-experience.com) (TFE) off the ground, I tried to find good-looking themes to complement my writing.  For a while, I used the [Cutline 3-column split](http://cutline.tubetorial.com/) theme, because I liked the spartan nature of the theme.  I figured that all that white-space could be filled up with crazy tag-cloud widgets, Google Adsense ads, Twitter feeds...the web equivalent of Tufte's "<a title="Business Week Chartjunk" href="http://images.businessweek.com/ss/09/06/0608_tufte/7.htm" target="_blank">chartjunk</a>."

Once I moved away from the "must put every widget and plugin everywhere" mentality, I switched to the <a title="Atahualpa theme" href="http://wordpress.bytesforall.com/?p=102" target="_blank">Atahualpha</a> theme.  This is an amazing theme that allowed me to get TFE into a more professional, magazine style layout. I started thinking about search engine optimization (due to the included functionality), as well as customizing the hell out of every single font and layout attribute.  I started getting into using WordPress <a title="Wordpress shortcodes" href="http://codex.wordpress.org/Shortcode" target="_blank">shortcodes</a>, adding some additional social networking features like a Twitter widget and some special RSS buttons, and learning a lot along the way.

## ...but eventually you run out of flexibility

While complex themes like Atahualpa are great, eventually you come upon a problem that you can't solve.  For me, it was adding a JavaScript `onclick` event to the "Read More" tag in WordPress (for tracking in Google Analytics).  Because of how the theme is set up, you can go right into the options area and modify what text is shown on the link (say, "_Continue Reading_" or "_Read this, Fool!_" instead of "Read More"), but you can't put JavaScript in that box.

After contacting the theme developer, I still haven't solved that problem!  So rather than make the same mistake again, I sought out the easiest, cleanest theme I could:  [Twenty Eleven](http://theme.wordpress.com/themes/twentyeleven/ "Twenty Eleven"), designed by WordPress.  Compared to Cutline and (definitely) Atahualpa, Twenty Eleven looks like it is written in English instead of PHP!

## Creating a Child Theme

Before I discuss the modifications I've made to the Twenty Eleven theme thus far, it's important to talk about creating a "child" theme.  WordPress has a great functionality where you can use one theme as the base for another theme.  The benefit to doing this is that when the theme developer updates the theme, your modifications don't get over written.

If you're following along looking to create a child theme, the exact makeup of how child themes work doesn't matter at this point.  The only thing you need to do is:

  1. Navigate to the directory where you've installed your theme (likely /wp-content/themes)
  2. Create a new directory with a meaningful name (such as twentyeleven-child)

And that's it!  You're on your way to creating your own theme.  In the next post, I'll outline how you start creating a theme that reflects your style, starting with the CSS file.
