---
title: 'Google Analytics for WordPress: Two Methods'
date: 2011-08-16T08:19:40+00:00
author: Randy Zwitch
layout: post
permalink: /google-analytics-for-wordpress/
category: Analytics
description: "There are two ways to implement Google Analytics for WordPress: manually in your theme or by using a plugin. Manually is more flexible."
tags:
  - Google Analytics
  - JavaScript
---
There are two ways to install Google Analytics for WordPress:  manually in your theme or by using a plugin.  While most of this post will cover the manual installation of the tracking code, I will also briefly discuss some of the WordPress Google Analytics plugins I have used over the years.

Note:  This post isn't going to cover creating an account at Google, since most people have at least one already through Gmail, Google+, YouTube, Picasa, etc.  However, if you do need help setting up a Google Analytics account, there is a great video provided by Google as part of their Conversion University series:  [Creating a Google Analytics account](http://services.google.com/analytics/breeze/en/installing_ga_code/index.html "Google Analytics Video")

## Finding your Google Analytics Account Number

Once you have your Google Analytics account set up, you've conquered probably 75% of your installation.  Hard to believe, right?  All you need now is your account number/profile from Google Analytics to plug in to the tracking code.

To find the proper code, sign in to Google Analytics and look for the following on the account home tab:

![google-analytics-account-number](/wp-content/uploads/2011/08/google-analytics-account-number.png)

I've obscured my number with red X's so that no one accidentally starts writing data to my account!  But if you see a code that starts with `UA-`, that's your account and profile number.

## Installing the default Google Analytics tracking code

With account number in hand, we're ready to install the tracking code in our WordPress header file, right before the `wp_head();` line (and definitely before the closing tag.)  Note: if you are using the Twenty Eleven theme, there are some comments about how removing the `wp_head` line will break WordPress plugins...this is the correct location.

Once you hit save to your `header.php` file, you're done. If all is well, you'll see the basic Google Analytics data starting to populate in your account in about 24 hours!

## Of course, you can always use the Google Analytics for WordPress plugin...

If it turns out this is too complicated (though, I hope not!), or your needs are more complicated than the 'standard' Google Analytics installation, there are myriad WordPress plugins that you can install.  In the past, I've used many different plugins for my Google Analytics tracking needs, but the one I feel is the best is provided by [Joost de Valk.](http://www.yoast.com "Google Analytics for WordPress plugin")  His [plugin](http://yoast.com/wordpress/google-analytics/ "Google Analytics for WordPress plugin"), not surprisingly named "Google Analytics for WordPress", will allow you to do some link tracking, custom variables, e-commerce tracking, and much more.  Of course, the downside to this is that you lose the flexibility of coding exactly what you what, how you want...but it's a good trade-off for those looking for simplicity.

I've also used <a title="Google Analyticator" href="http://ronaldheft.com/code/analyticator/" target="_blank">Google Analyticator</a> in the past, and it too seemed to work pretty well.  I've never really done an A/B comparison of the two, but the feature set is pretty much the same, and both gentleman seem to be excellent WordPress web developers, so I doubt either plugin will cause any performance hit.

No matter which way you choose to get your Google Analytics fix on your WordPress blog, happy tracking!  If you're not measuring, you're not improving 🙂
