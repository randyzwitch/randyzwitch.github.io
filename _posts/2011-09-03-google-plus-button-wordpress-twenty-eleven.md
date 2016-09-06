---
id: 484
title: Installing Google Plus Button on WordPress
date: 2011-09-03T11:33:11+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=484
permalink: /google-plus-button-wordpress-twenty-eleven/
sharing_disabled:
  - 1
tweetbackscheck:
  - 1472965542
shorturls:
  - 'a:3:{s:9:"permalink";s:66:"http://randyzwitch.com/google-plus-button-wordpress-twenty-eleven/";s:7:"tinyurl";s:26:"http://tinyurl.com/6pog5ca";s:4:"isgd";s:19:"http://is.gd/Z4xJ55";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - WordPress Tutorials
tags:
  - Child Theme
  - JavaScript
  - Social Media
  - WordPress functions
---
If you&#8217;ve been anywhere on the internet in the past few months, you&#8217;ve seen the +1 button from Google right next to Facebook, Twitter, StumbleUpon and other social media sharing buttons.  It&#8217;s pretty clear that Google intends the &#8220;plus one&#8221; to be THE most important form of approval on the &#8216;net, integrating all those &#8220;plusses&#8221; into search results as well as showing them within the Google+ Plus network.

Here&#8217;s how to integrate the Google Plus button on the WordPress Twenty Eleven theme.

<!--more-->

<span class="Apple-style-span" style="font-weight: bold; color: #000000;">Installing the Google Plus JavaScript code snippet</span>

The first step to adding the Google Plus button to this theme is to add the JavaScript code snippet that &#8220;talks&#8221; to Google.  This code can be placed anywhere in the theme, but lets install it in our _footer.php_ file, right before the the closing </body> tag:



## Adding Google Plus button on front page

To add the Google Plus button to each post displayed on the first page, we need to modify the _content.php_ file.  Like all of the other modifications we&#8217;ve made to create a [child theme](http://randyzwitch.com/tag/child-theme/ "WordPress Twenty Eleven Child Theme") like creating a [custom header](http://randyzwitch.com/2011/07/custom-header-twenty-eleven-child-theme/ "Twenty Eleven Child Theme:  Custom Header") and [custom footer](http://randyzwitch.com/2011/08/removing-powered-by-wordpress-twenty-eleven/ "Removing “Powered by WordPress” in Twenty Eleven"), copy the content.php file into your child theme folder. To display the Google Plus button underneath the title, we need to place the following code, after the <div class=&#8221;entry-content&#8221;> and before the <?php the_content> tag:

In the Google button code, the piece of code that references &#8220;the_permalink&#8221; is a WordPress function that passes the link of blog post to the Google Plus button.  Without this addition to the button, Google will use the URL of the page you are on…in my case, the 3 buttons on the front page would all reference www.randyzwitch.com, which means a visitor wouldn&#8217;t be able to recommend an individual post.



## Adding a Google Plus button to an individual blog post

To add the Google Plus button on an individual article or blog post using the &#8220;Standard&#8221; format in Twenty Eleven, we can do the same basic process as above, except we&#8217;ll modify the _content-single.php_ file (again, copy this file into your child theme folder!).  We&#8217;ll add the code after the <h1> tag and before the &#8220;If&#8221; statement that starts building the content:



Technically, you don&#8217;t need to specify the &#8220;the_permalink&#8221; reference, since there will only be a single button on an individual blog post, and the Google Plus button will use the URL of the page.  But, it doesn&#8217;t hurt, so for documentation sake I&#8217;ve left it in.

Once you&#8217;ve added the button code on the individual page, you&#8217;re done!  Visitors to your blog can now recommend your content on Google search and on the Google+ network.

## Optional steps

For this tutorial, I only provided the code for modifying the &#8220;Standard&#8221; page format for a single blog post.  If you are using multiple formats across your blog, you&#8217;ll need to modify each template you are using.  They all begin with &#8220;content-<format>.php&#8221;, and the button code goes after the <h1> tag and before any other code.

It&#8217;s also possible to modify how large the Google Plus button is and what is displayed.  I&#8217;m using the default bubble annotation, but if you&#8217;d like to have a larger or smaller button, or just different options, you can use the code builder from Google to see the [button options](http://www.google.com/intl/en/webmasters/+1/button/index.html "Google Plus button size").
