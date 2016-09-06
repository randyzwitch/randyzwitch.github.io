---
id: 302
title: 'Google Analytics for WordPress: Two Methods'
date: 2011-08-16T08:19:40+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=302
permalink: /google-analytics-for-wordpress/
tweetbackscheck:
  - 1472698912
shorturls:
  - 'a:3:{s:9:"permalink";s:54:"http://randyzwitch.com/google-analytics-for-wordpress/";s:7:"tinyurl";s:26:"http://tinyurl.com/7xp2k48";s:4:"isgd";s:19:"http://is.gd/u6QRAx";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
  - WordPress Tutorials
tags:
  - Google Analytics
  - JavaScript
---
There are two ways to install Google Analytics for WordPress:  manually in your theme or by using a plugin.  While most of this post will cover the manual installation of the tracking code, I will also briefly discuss some of the WordPress Google Analytics plugins I have used over the years.

Note:  This post isn&#8217;t going to cover creating an account at Google, since most people have at least one already through Gmail, Google+, YouTube, Picasa, etc.  However, if you do need help setting up a Google Analytics account, there is a great video provided by Google as part of their Conversion University series:  [Creating a Google Analytics account](http://services.google.com/analytics/breeze/en/installing_ga_code/index.html "Google Analytics Video")

<!--more-->

## Finding your Google Analytics Account Number

Once you have your Google Analytics account set up, you&#8217;ve conquered probably 75% of your installation.  Hard to believe, right?  All you need now is your account number/profile from Google Analytics to plug in to the tracking code.

To find the proper code, sign in to Google Analytics and look for the following on the account home tab:

<img class="aligncenter size-full wp-image-364" title="google-analytics-account-number" alt="" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/08/google-analytics-account-number.png?fit=513%2C235" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/08/google-analytics-account-number.png?w=513 513w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/08/google-analytics-account-number.png?resize=300%2C137 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/08/google-analytics-account-number.png?resize=500%2C229 500w" sizes="(max-width: 513px) 100vw, 513px" data-recalc-dims="1" />I&#8217;ve obscured my number with red X&#8217;s so that no one accidentally starts writing data to my account!  But if you see a code that starts with &#8220;UA-&#8220;, that&#8217;s your account and profile number.

## Installing the default Google Analytics tracking code

With account number in hand, we&#8217;re ready to install the tracking code in our WordPress header file, right before the _wp_head();_ line (and definitely before the closing tag.)  Note:  if you are using the Twenty Eleven theme, there are some comments about how removing the wp_head line will break WordPress plugins&#8230;this is the correct location.



Once you hit save to your header.php file, you&#8217;re done.  If all is well, you&#8217;ll see the basic Google Analytics data starting to populate in your account in about 24 hours!





## Of course, you can always use the Google Analytics for WordPress plugin&#8230;

If it turns out this is too complicated (though, I hope not!), or your needs are more complicated than the &#8216;standard&#8217; Google Analytics installation, there are myriad WordPress plugins that you can install.  In the past, I&#8217;ve used many different plugins for my Google Analytics tracking needs, but the one I feel is the best is provided by [Joost de Valk.](http://www.yoast.com "Google Analytics for WordPress plugin")  His [plugin](http://yoast.com/wordpress/google-analytics/ "Google Analytics for WordPress plugin"), not surprisingly named &#8220;Google Analytics for WordPress&#8221;, will allow you to do some link tracking, custom variables, e-commerce tracking, and much more.  Of course, the downside to this is that you lose the flexibility of coding exactly what you what, how you want&#8230;but it&#8217;s a good trade-off for those looking for simplicity.

I&#8217;ve also used <a title="Google Analyticator" href="http://ronaldheft.com/code/analyticator/" target="_blank">Google Analyticator</a> in the past, and it too seemed to work pretty well.  I&#8217;ve never really done an A/B comparison of the two, but the feature set is pretty much the same, and both gentleman seem to be excellent WordPress web developers, so I doubt either plugin will cause any performance hit.

No matter which way you choose to get your Google Analytics fix on your WordPress blog, happy tracking!  If you&#8217;re not measuring, you&#8217;re not improving 🙂
