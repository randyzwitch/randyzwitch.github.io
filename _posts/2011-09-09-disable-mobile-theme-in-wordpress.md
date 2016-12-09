---
title: How to Disable Mobile Theme in WordPress
date: 2011-09-09T11:53:04+00:00
author: Randy Zwitch
layout: post
permalink: /disable-mobile-theme-in-wordpress/
category: Design
description: "With smartphone usage on the rise, why would anyone disable the mobile theme in WordPress Twenty Eleven? Answer: It's poorly implemented."
tags:
  - CSS
  - HTML
  - Mobile
---
With smartphone usage on the rise, you might wonder why anyone would want to disable mobile support in WordPress (specifically, in the Twenty Eleven theme).  Answer: It's poorly implemented, or at minimum sub-optimal in its default settings.

![wordpress-mobile](/wp-content/uploads/2011/09/wordpress-mobile.png)

<p class="wp-caption-text">
Default WordPress mobile theme view
</p>

While the readability of each post is improved by laying out the main post area as full width, by placing the sidebars at the bottom, your readers may miss any content you are hoping to share.  For this website, the search button, social networking buttons, and Twitter feed information are shown at the bottom of the site layout (see picture on left).  It's not the end of the world, but not ideal either.

To make things worse, if you start making changes to your CSS file to customize the theme and aren't careful, the mobile theme will get mangled.  In my case, I assume that because I specified some of my width parameters in pixels instead of percentages, the mobile theme doesn't know how to display them. But, since the traffic to this blog is mainly from desktop/laptop computers (which I know because I'm using <a title="WordPress Stats or Google Analytics?  Yes!" href="http://randyzwitch.com/2011/07/wordpress-stats-or-google-analytics/" target="_blank">Google Analytics</a>!), I'll optimize the blog design to non-mobile devices at the risk of mangling the mobile theme.

Luckily, what makes the mobile theme sub-optimal when using the Twenty Eleven theme is what makes it so easy to _disable_ the mobile theme!

**Disable the "viewport"**

In order to turn off the mobile theme, all we need to do is comment out a single line of code within our `header.php` file.  The line we are looking for is a meta tag that refers to the "viewport", which is a mobile META tag to specify dimensions for a mobile browser to use, and well as control/modify some functionality such as browser scaling (zoom).  Here's what the commented out code should look like:

<pre>&lt;head&gt;
&lt;meta charset="&lt;?php bloginfo( 'charset' ); ?&gt;" /&gt;

&lt;!-- &lt;meta name="viewport" content="width=device-width" /&gt; --&gt;</pre>

![css-modifications-ruin-wordpress-mobile-theme](/wp-content/uploads/2011/09/css-modifications-ruin-wordpress-mobile-theme-200x300.png)

<p class="wp-caption-text">
Any CSS mods and the mobile theme breaks down
</p>

Inside of this META tag, the "content" parameter specifies that the mobile browser should set the width of the content equal to whatever the device width is currently set.  So in the case of iPhones where the width varies depending on the phone orientation, the browser will re-size the content appropriately.

**But, what if I want to just improve the mobile browser experience?**

Obviously, just because the default mobile functionality in this theme doesn't work very well, that doesn't mean your desktop theme is ideal either.  If you want to design a mobile theme, you can use this same "Viewport" line of code to play around with the settings, hopefully finding ones that not only make your site look great, but are also compatible with the range of smartphones on the market.

For an explanation of all of the parameters that can be changed as part of the Viewport META tag, see this [article](http://learnthemobileweb.com/2009/07/mobile-meta-tags/ "Viewport META tag explanation") from 'Learn the Mobile Web'.
