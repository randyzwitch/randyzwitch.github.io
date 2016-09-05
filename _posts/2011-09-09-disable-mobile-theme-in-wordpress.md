---
id: 517
title: How to Disable Mobile Theme in WordPress
date: 2011-09-09T11:53:04+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=517
permalink: /disable-mobile-theme-in-wordpress/
sharing_disabled:
  - 1
tweetbackscheck:
  - 1472923288
shorturls:
  - 'a:3:{s:9:"permalink";s:57:"http://randyzwitch.com/disable-mobile-theme-in-wordpress/";s:7:"tinyurl";s:26:"http://tinyurl.com/7xxltct";s:4:"isgd";s:19:"http://is.gd/dDwx5K";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - WordPress Tutorials
tags:
  - CSS
  - HTML
  - Mobile
---
With smartphone usage on the rise, you might wonder why anyone would want to disable mobile support in WordPress (specifically, in the Twenty Eleven theme).  Answer: It&#8217;s poorly implemented, or at minimum sub-optimal in its default settings.

<!--more-->

<div id="attachment_524" style="width: 168px" class="wp-caption alignleft">
  <img class="size-full wp-image-524" title="wordpress-mobile" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2011/09/wordpress-mobile.png?fit=158%2C632" alt="" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2011/09/wordpress-mobile.png?w=158 158w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2011/09/wordpress-mobile.png?resize=75%2C300 75w" sizes="(max-width: 158px) 100vw, 158px" data-recalc-dims="1" />
  
  <p class="wp-caption-text">
    Default WordPress mobile theme view
  </p>
</div>

While the readability of each post is improved by laying out the main post area as full width, by placing the sidebars at the bottom, your readers may miss any content you are hoping to share.  For this website, the search button, social networking buttons, and Twitter feed information are shown at the bottom of the site layout (see picture on left).  It&#8217;s not the end of the world, but not ideal either.

To make things worse, if you start making changes to your CSS file to customize the theme and aren&#8217;t careful, the mobile theme will get mangled.  In my case, I assume that because I specified some of my width parameters in pixels instead of percentages, the mobile theme doesn&#8217;t know how to display them.  But, since the traffic to this blog is mainly from desktop/laptop computers (which I know because I&#8217;m using <a title="WordPress Stats or Google Analytics?  Yes!" href="http://randyzwitch.com/2011/07/wordpress-stats-or-google-analytics/" target="_blank">Google Analytics</a>!), I&#8217;ll optimize the blog design to non-mobile devices at the risk of mangling the mobile theme.

Luckily, what makes the mobile theme sub-optimal when using the Twenty Eleven theme is what makes it so easy to _disable_ the mobile theme!

**Disable the &#8220;viewport&#8221;**

In order to turn off the mobile theme, all we need to do is comment out a single line of code within our _header.php_ file.  The line we are looking for is a meta tag that refers to the &#8220;viewport&#8221;, which is a mobile META tag to specify dimensions for a mobile browser to use, and well as control/modify some functionality such as browser scaling (zoom).  Here&#8217;s what the commented out code should look like:

<pre>&lt;head&gt;
&lt;meta charset="&lt;?php bloginfo( 'charset' ); ?&gt;" /&gt;

&lt;!-- &lt;meta name="viewport" content="width=device-width" /&gt; --&gt;</pre>

<div id="attachment_527" style="width: 210px" class="wp-caption alignright">
  <img class="size-medium wp-image-527 " title="css-modifications-ruin-wordpress-mobile-theme" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/09/css-modifications-ruin-wordpress-mobile-theme-200x300.png?fit=200%2C300" alt="" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/09/css-modifications-ruin-wordpress-mobile-theme.png?resize=200%2C300 200w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/09/css-modifications-ruin-wordpress-mobile-theme.png?w=320 320w" sizes="(max-width: 200px) 100vw, 200px" data-recalc-dims="1" />
  
  <p class="wp-caption-text">
    Any CSS mods and the mobile theme breaks down
  </p>
</div>

Inside of this META tag, the &#8220;content&#8221; parameter specifies that the mobile browser should set the width of the content equal to whatever the device width is currently set.  So in the case of iPhones where the width varies depending on the phone orientation, the browser will re-size the content appropriately.

**But, what if I want to just improve the mobile browser experience?**

Obviously, just because the default mobile functionality in this theme doesn&#8217;t work very well, that doesn&#8217;t mean your desktop theme is ideal either.  If you want to design a mobile theme, you can use this same &#8220;Viewport&#8221; line of code to play around with the settings, hopefully finding ones that not only make your site look great, but are also compatible with the range of smartphones on the market.

For an explanation of all of the parameters that can be changed as part of the Viewport META tag, see this [article](http://learnthemobileweb.com/2009/07/mobile-meta-tags/ "Viewport META tag explanation") from &#8216;Learn the Mobile Web&#8217;.