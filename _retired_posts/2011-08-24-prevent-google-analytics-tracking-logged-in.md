---
title: Prevent Google Analytics From Tracking Logged-in Users
date: 2011-08-24T08:22:15+00:00
author: Randy Zwitch
layout: post
permalink: /prevent-google-analytics-tracking-logged-in/
category: Design
published: false
description: Preventing Google Analytics from tracking logged in users isn't as easy as in WordPress stats, but it still can be done pretty easily.
tags:
  - Google Analytics
  - JavaScript
  - PHP
  - WordPress conditional tag
  - WordPress functions
---
In a previous <a title="WordPress Stats or Google Analytics?  Yes!" href="http://randyzwitch.com/2011/07/wordpress-stats-or-google-analytics/" target="_blank">post</a>, I discussed how it's useful to have _both_ WordPress Stats and Google Analytics installed on a WordPress blog; the former can be used as a quick dashboard to check in on the day's traffic, and the latter can be used for more advanced analysis. But in order to keep our datasets comparable, we need to track users in a similar manner.

## How do WordPress Stats and Google Analytics differ?

WordPress Stats doesn't track visits from logged in users, but Google Analytics doesn't provide this functionality out-of-the-box. It is possible to filter out traffic by IP address in Google Analytics using a <a title="Custom Filters video - Google Analytics" href="http://services.google.com/analytics/breeze/en/filters/index.html" target="_blank">Custom Filter</a>, but this only works if you have a static IP address (many/most home users don't).

However, with some simple PHP code using the WordPress <a title="WordPress Conditional Tags" href="http://codex.wordpress.org/Conditional_Tags" target="_blank">conditional tag</a> `is_user_logged_in()` we can mimic this behavior with Google Analytics, and no matter what browser you choose or what location you work from, as long as you are logged in to WordPress, Google Analytics won't track your visits.

## Modifying the header.php file

In order to add the conditional tag to our Google Analytics code, we need to modify the `header.php` file where we <a title="Google Analytics for WordPress: Two Methods" href="http://randyzwitch.com/2011/08/google-analytics-for-wordpress/" target="_blank">originally installed</a> the Google tracking code.  What we're going to do is add the following code around our Google Analytics code, and WordPress will handle the "logged in logic" for us:

{% highlight php linenos %}
<?php
if ( is_user_logged_in() ) {
} else {
}
?>
{% endhighlight %}

The first clause of this code (the `IF` line) checks WordPress to see if you are logged in; if so, the code that is between the `{}` brackets will execute.  The second clause (the `ELSE` statement) is what happens if the user is NOT logged in.  Since we only want Google Analytics to track our visits when we're not logged in, we'll place our tracking code within the `ELSE` clause. When you have done this correctly, the code in your `header.php` file should look similar to the following:

{% highlight php linenos %}
<?php
if ( is_user_logged_in() ) {
} else {
<script type="text/javascript">
var _gaq =_gaq || [];
 _gaq.push(['_setAccount', 'UA-XXXXXXXX-X']);
 _gaq.push(['_trackPageview']);
_gaq.push(['_trackPageLoadTime']);
(function() {
 var ga = document.createElement('script');
 ga.type = 'text/javascript';
 ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga,s);
})();
</script>
}
?>
{% endhighlight %}

If you have an external JavaScript file holding your tracking code, the code would look like the following:

{% highlight php linenos %}
<?php
if ( is_user_logged_in() ) {
} else {
 echo "<script type='text/javascript' src='http://yourdomain.com/your_ga_code_filename.js'></script>";
}
?>
{% endhighlight %}

## Are there any downsides to this method of implementing Google Analytics this way?

By implementing Google Analytics in this manner, you improve your data consistency between WordPress Stats and Google Analytics. You also avoid inflating your page views and visits, especially when doing blog development and re-designs or while previewing drafts of blog posts.

The one downside I've encountered so far is that if you are testing any tracking code changes themselves (such as adding `onclick` events to links/buttons to track additional data), you have to log in and log out every time you want to test whether your JavaScript code is firing your Google Analytics code properly.

Yes, that's a bit tedious, but I think it's small price to pay for better data consistency.

_Note:  If you are running a multi-user blog, you might consider using the [`is_admin()`](http://codex.wordpress.org/Function_Reference/is_admin "is_admin WordPress Conditional Tag") conditional tag instead of `is_logged_in()`, especially if you want to understand how the non-Admin authors are interacting with your blog.  The possibilities are endless!_
