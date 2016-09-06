---
id: 447
title: Prevent Google Analytics From Tracking Logged-in Users
date: 2011-08-24T08:22:15+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=447
permalink: /prevent-google-analytics-tracking-logged-in/
sharing_disabled:
  - 1
tweetbackscheck:
  - 1472941368
shorturls:
  - 'a:3:{s:9:"permalink";s:67:"http://randyzwitch.com/prevent-google-analytics-tracking-logged-in/";s:7:"tinyurl";s:26:"http://tinyurl.com/83kosxf";s:4:"isgd";s:19:"http://is.gd/Yhkij5";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - WordPress Tutorials
tags:
  - Google Analytics
  - JavaScript
  - PHP
  - WordPress conditional tag
  - WordPress functions
---
In a previous <a title="WordPress Stats or Google Analytics?  Yes!" href="http://randyzwitch.com/2011/07/wordpress-stats-or-google-analytics/" target="_blank">post</a>, I discussed how it&#8217;s useful to have _both_ WordPress Stats and Google Analytics installed on a WordPress blog; the former can be used as a quick dashboard to check in on the day&#8217;s traffic, and the latter can be used for more advanced analysis.  But in order to keep our datasets comparable, we need to track users in a similar manner.

<!--more-->

## How do WordPress Stats and Google Analytics differ?

WordPress Stats doesn&#8217;t track visits from logged in users, but Google Analytics doesn&#8217;t provide this functionality out-of-the-box.  It is possible to filter out traffic by IP address in Google Analytics using a <a title="Custom Filters video - Google Analytics" href="http://services.google.com/analytics/breeze/en/filters/index.html" target="_blank">Custom Filter</a>, but this only works if you have a static IP address (many/most home users don&#8217;t).





However, with some simple PHP code using the WordPress <a title="WordPress Conditional Tags" href="http://codex.wordpress.org/Conditional_Tags" target="_blank">conditional tag</a> _is\_user\_logged_in()_ we can mimic this behavior with Google Analytics, and no matter what browser you choose or what location you work from, as long as you are logged in to WordPress, Google Analytics won&#8217;t track your visits.

## Modifying the header.php file

In order to add the conditional tag to our Google Analytics code, we need to modify the _header.php_ file where we <a title="Google Analytics for WordPress: Two Methods" href="http://randyzwitch.com/2011/08/google-analytics-for-wordpress/" target="_blank">originally installed</a> the Google tracking code.  What we&#8217;re going to do is add the following code around our Google Analytics code, and WordPress will handle the &#8220;logged in logic&#8221; for us:

The first clause of this code (the &#8220;IF&#8221; line) checks WordPress to see if you are logged in; if so, the code that is between the {} brackets will execute.  The second clause (the &#8220;ELSE&#8221; statement) is what happens if the user is NOT logged in.  Since we only want Google Analytics to track our visits when we&#8217;re not logged in, we&#8217;ll place our tracking code within the &#8220;ELSE&#8221; clause. When you have done this correctly, the code in your header.php file should look similar to the following:

If you have an external JavaScript file holding your tracking code, the code would look like the following:



## Are there any downsides to this method of implementing Google Analytics this way?

By implementing Google Analytics in this manner, you improve your data consistency between WordPress Stats and Google Analytics.  You also avoid inflating your page views and visits, especially when doing blog development and re-designs or while previewing drafts of blog posts.

The one downside I&#8217;ve encountered so far is that if you are testing any tracking code changes themselves (such as adding onclick events to links/buttons to track additional data), you have to log in and log out every time you want to test whether your JavaScript code is firing your Google Analytics code properly.

Yes, that&#8217;s a bit tedious, but I think it&#8217;s small price to pay for better data consistency.

&nbsp;

_Note:  If you are running a multi-user blog, you might consider using the [is_admin()](http://codex.wordpress.org/Function_Reference/is_admin "is_admin WordPress Conditional Tag") conditional tag instead of is\_logged\_in(), especially if you want to understand how the non-Admin authors are interacting with your blog.  The possibilities are endless!_
