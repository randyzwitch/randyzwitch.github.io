---
title: 'Removing "Powered by WordPress" From Scrappy'
date: 2012-04-23T21:23:37+00:00
author: Randy Zwitch
layout: post
permalink: /removing-powered-by-wordpress-scrappy/
category: Design
tags:
  - Child Theme
  - Footer
  - PHP
  - Scrappy
---
My wife started a <a title="Zwitchen.com | What's Cookin'?" href="http://zwitchen.com" target="_blank">food blog</a> this weekend and decided to use the <a title="Scrappy WordPress theme" href="http://wordpress.org/extend/themes/scrappy" target="_blank">"Scrappy" WordPress theme</a> by <a href="http://carolinethemes.com/2011/11/04/scrappy/" target="_blank">Caroline Moore</a>.  But like all WordPress themes, there are a few customizations that are usually made to personalize the theme, the first of which is removing "Powered by WordPress" in the footer.

This blog post is essentially the same as my prior blog post about <a title="Removing Powered by WordPress from Twenty Eleven theme" href="http://randyzwitch.com/removing-powered-by-wordpress-twenty-eleven/" target="_blank">removing "Powered by WordPress" from the Twenty Eleven theme</a>, but of course, for the Scrappy theme!  This post assumes you've created a <a title="Creating a WordPress child theme" href="http://randyzwitch.com/twenty-eleven-child-theme-creating-css-file/" target="_blank">child theme</a> already, so that the changes you make persist even if the theme gets updated by the original author.

## Copy the `footer.php` file from the Scrappy theme

The first thing to do to customize the Scrappy footer is make a copy of the `footer.php` file from the Scrappy theme and place it in your child theme folder.  It is this file that we will modify in order to remove "Powered by WordPress" and the reference to the Scrappy theme name.

## Comment out code within the "site-info" section of the footer

Within the footer code, there is a `<div>` section that references `site-info`:

{% highlight php linenos %}
<div>
         <?php do_action( 'scrappy_credits' ); ?>
            <a href="<?php echo esc_url( __( 'http://wordpress.org/', 'scrappy' ) ); ?>" title="<?php esc_attr_e( 'A Semantic Personal Publishing Platform', 'scrappy' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'scrappy' ), 'WordPress' ); ?></a>
            <span> | </span>
            <?php printf( __( 'Theme: %1$s by %2$s', 'scrappy' ), 'Scrappy', '<a href="http://carolinemoore.net/" rel="designer">Caroline Moore</a>' ); ?>
        </div><!-- .site-info -->
{% endhighlight %}

What we want to do is comment out the code, starting at the first php reference and ending after the "Caroline Moore" line.  We can do this using the `<!-` and `->` <a title="HTML Tag Comments article" href="http://www.w3schools.com/tags/tag_comment.asp" target="_blank">codes</a>.  When the code is commented out correctly, it will look like the following:

{% highlight php linenos %}
<!--        <?php do_action( 'scrappy_credits' ); ?>
            <a href="<?php echo esc_url( __( 'http://wordpress.org/', 'scrappy' ) ); ?>" title="<?php esc_attr_e( 'A Semantic Personal Publishing Platform', 'scrappy' ); ?>" rel="generator"><?php printf( __( 'Proudly powered by %s', 'scrappy' ), 'WordPress' ); ?></a>
            <span> | </span>
            <?php printf( __( 'Theme: %1$s by %2$s', 'scrappy' ), 'Scrappy', '<a href="http://carolinemoore.net/" rel="designer">Caroline Moore</a>' ); ?> -->
{% endhighlight %}

Be sure to hit "Save" to your `footer.php` file after making the comment changes, and you're all done:  no more "Powered by WordPress"!

![wordpress-scrappy-footer-original](/wp-content/uploads/2012/04/wordpress-scrappy-footer-original.png)

<p class="wp-caption-text">
Original "Scrappy" footer - Powered by WordPress
</p>

![WordPress Scrappy footer modified](/wp-content/uploads/2012/04/wordpress-scrappy-footer-modified.png)

<p class="wp-caption-text">
Modified WordPress Scrappy footer (with slightly different pattern!)
</p>

## Adding your own footer text

If you want to add your own footer text, like a copyright statement, you can add any HTML code you want within the same section of code where we just commented out code.  For an example of how to <a href="http://randyzwitch.com/removing-powered-by-wordpress-twenty-eleven/" target="_blank">add a copyright statement</a>, see the bottom of my prior blog post about modifying the footer of the WordPress Twenty Eleven theme.

That's it!  One step closer to making the WordPress Scrappy theme your own.
