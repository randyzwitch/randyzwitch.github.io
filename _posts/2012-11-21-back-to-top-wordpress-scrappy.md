---
title: 'Adding a "Back to Top" Link on WordPress'
date: 2012-11-21T17:44:30+00:00
author: Randy Zwitch
layout: post
permalink: /back-to-top-wordpress-scrappy/
category: Design
description: Adding a 'Back to Top' link on a WordPress blog is a simple update that can add a lot of usability. This post shows how to update the Scrappy theme.
tags:
  - Child Theme
  - Footer
  - Header
  - HTML
  - Scrappy
---
In a previous post, I discussed how to [remove "Powered By WordPress"](http://randyzwitch.com/removing-powered-by-wordpress-scrappy/ "Remove Powered By WordPress Scrappy theme") from the footer of the Scrappy theme.  You might also want to add a "Back to Top" link in the footer, especially if your blog has a lot of vertical distance from the top to the bottom.  Here's how to do it...

## Step 1:  Modifying the Scrappy header.php file

The first step in creating our 'Back to Top' link is to modify the _header.php_ file in our <a title="WordPress Child Theme" href="http://randyzwitch.com/twenty-eleven-child-theme-creating-css-file/" target="_blank">WordPress child theme</a> by adding an <a title="HTML anchor tag" href="http://www.w3schools.com/tags/tag_a.asp" target="_blank">empty HTML link</a> using the `<a>` tag.  Although you can place an "anchor" like this anywhere you want on your site, we'll add this empty link to the very top of the page for this tutorial.

Find the line of code in your `header.php` file that says `<div id=page class="hfeed site">`.  Here we'll add our extra line of code with the <a> tag (line 5 of the code snippet):

{% highlight php linenos %}
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
<a name= "TopOfPage"/a>
        <?php do_action( 'before' ); ?>
        <div class="wrapper">
                <header id="masthead" class="site-header" role="banner">
{% endhighlight %}

Normally when using an `'<a>'` tag, we would also use an `href` in order to create a link.  However, in this case we're just defining an empty element in the page that we can refer to later using our 'Back to Top' link.

## Step 2: Modifying the Scrappy footer.php file

With our anchor in place, we can now add our link.  For this tutorial, we're going to place the link right above the widget area in the Scrappy footer.

Opening up our `footer.php` file, we need to look for the code `<div class = "footer-sidebars">`.  Underneath this line, we'll add another `<a>` tag, but this time, we'll add an `href` tag in order to have a link to send the page back to the top (line 5 of the code snippet):

{% highlight php linenos %}

                       </div><!-- #main -->
       </div><!-- .wrapper -->
       <footer id="colophon" class="site-footer" role="contentinfo">
               <div class="footer-sidebars">
                       <a href=#TopOfPage> Your Text Goes Here </a>
                       <?php get_sidebar( 'footer1' );
                                 get_sidebar( 'footer2' );
                                 get_sidebar( 'footer3' ); ?>
                       <div class="stripes">&nbsp;</div>
               </div>
{% endhighlight %}

Notice that the link we have here uses the same "TopOfPage" reference as we did in Step 1, this time with a # sign in front of the word. This lets the page code that we want to point to the "TopOfPage" anchor elsewhere on site. Note also that we don't need to make any domain-specific references like we would do with a "normal" http://www.-type of link.

Obviously, feel free to change the reference to "Your Text Goes Here" to be whatever message you'd like the link to say 🙂

## Success!

Once you are done with these two changes, the bottom of your Scrappy WordPress theme should look similar to this:

![scrappy-wordpress-theme-back-to-top](/wp-content/uploads/2012/11/scrappy-wordpress-theme-back-to-top.png)
<p class="wp-caption-text">
'Back to Top' link added to the bottom of the Scrappy WordPress theme
</p>

The styling of the link should be right-aligned to your main article width and the link styling will be handled automatically based on the rules set in your CSS file.
