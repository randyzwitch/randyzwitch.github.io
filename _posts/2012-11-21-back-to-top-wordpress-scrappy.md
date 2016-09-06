---
title: 'Adding a "Back to Top" Link on WordPress'
date: 2012-11-21T17:44:30+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1392
permalink: /back-to-top-wordpress-scrappy/
tweetbackscheck:
  - 1472851125
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1392";s:7:"tinyurl";s:26:"http://tinyurl.com/be5ekgd";s:4:"isgd";s:19:"http://is.gd/JrtUp8";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - WordPress Tutorials
tags:
  - Child Theme
  - Footer
  - Header
  - HTML
  - Scrappy
---
In a previous post, I discussed how to [remove "Powered By WordPress"](http://randyzwitch.com/removing-powered-by-wordpress-scrappy/ "Remove Powered By WordPress Scrappy theme") from the footer of the Scrappy theme.  You might also want to add a "Back to Top" link in the footer, especially if your blog has a lot of vertical distance from the top to the bottom.  Here's how to do it...

## Step 1:  Modifying the Scrappy header.php file

The first step in creating our 'Back to Top' link is to modify the _header.php_ file in our <a title="WordPress Child Theme" href="http://randyzwitch.com/twenty-eleven-child-theme-creating-css-file/" target="_blank">WordPress child theme</a> by adding an <a title="HTML anchor tag" href="http://www.w3schools.com/tags/tag_a.asp" target="_blank">empty HTML link</a> using the "<a>" tag.  Although you can place an "anchor" like this anywhere you want on your site, we'll add this empty link to the very top of the page for this tutorial.

Find the line of code in your _header.php_ file that says '<div id=page class="hfeed site">'.  Here we'll add our extra line of code with the <a> tag (line 5 of the pastebin):

Normally when using an <a> tag, we would also use an "href" in order to create a link.  However, in this case we're just defining an empty element in the page that we can refer to later using our 'Back to Top' link.





## Step 2: Modifying the Scrappy footer.php file

With our anchor in place, we can now add our link.  For this tutorial, we're going to place the link right above the widget area in the Scrappy footer.

Opening up our _footer.php_ file, we need to look for the code "<div class = "footer-sidebars">'.  Underneath this line, we'll add another <a> tag, but this time, we'll add an "href" tag in order to have a link to send the page back to the top (line 6 of the pastebin):

Notice that the link we have here uses the same "TopOfPage" reference as we did in Step 1, this time with a # sign in front of the word. This lets the page code that we want to point to the "TopOfPage" anchor elsewhere on site. Note also that we don't need to make any domain-specific references like we would do with a "normal" http://www.-type of link.

Obviously, feel free to change the reference to "Your Text Goes Here" to be whatever message you'd like the link to say 🙂

## Success!

Once you are done with these two changes, the bottom of your Scrappy WordPress theme should look similar to this:

<div id="attachment_1404" style="width: 554px" class="wp-caption aligncenter">
  <img class=" wp-image-1404 " title="scrappy-wordpress-theme-back-to-top" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/11/scrappy-wordpress-theme-back-to-top.png?resize=544%2C70" alt="" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/11/scrappy-wordpress-theme-back-to-top.png?w=907 907w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/11/scrappy-wordpress-theme-back-to-top.png?resize=150%2C19 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/11/scrappy-wordpress-theme-back-to-top.png?resize=300%2C38 300w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/11/scrappy-wordpress-theme-back-to-top.png?resize=500%2C63 500w" sizes="(max-width: 544px) 100vw, 544px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    'Back to Top' link added to the bottom of the Scrappy WordPress theme
  </p>
</div>

The styling of the link should be right-aligned to your main article width and the link styling will be handled automatically based on the rules set in your CSS file.
