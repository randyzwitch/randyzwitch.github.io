---
title: 'Google Analytics Custom Variables: A Page-Level Example'
date: 2011-10-02T11:10:37+00:00
author: Randy Zwitch
layout: post
permalink: /google-analytics-custom-variables/
category: Analytics
tags:
  - Custom Variables
  - Google Analytics
  - PHP
  - WordPress functions
---
Once you've <a title="Google Analytics for WordPress: Two Methods" href="http://randyzwitch.com/2011/08/google-analytics-for-wordpress/" target="_blank">implemented</a> Google Analytics on your WordPress blog, you'll likely find that the default reports aren't providing the site-specific information you are looking for...or, maybe just not at the level of aggregation you'd prefer.   Google Analytics custom variables provide a method of capturing your site-specific information, depending on whether the information changes once per visitor, once per session, or once per page.  Examples of custom variable usage includes:

  * Demographic information, such as Gender (_Visitor-level, never changes_)
  * Visitor logs in to your website (_Session-level, may not log in during future visits_)
  * Each section of the website a visitor "touches" (_Page-level, changing multiple times during a session_)

This tutorial will cover the Page-level custom variable type, capturing the WordPress Category for each blog post.  With this information, we'll be able to see which categories of posts are most popular on your WordPress blog over time.



## Setting a Google Analytics custom variable

To set a Google Analytics custom variable, we need to use the following syntax:

<pre>_setCustomVar(index, name, value, opt_scope)</pre>

The "index" section of the variable indicates which of the five allowable custom variables we want to use to record our information (slot 1-5).  "Name" indicates what we want to call our variable.  "Value" is going to be the actual value we are looking to save.  And finally, "opt_scope" represents whether we want the variable to be page-level, session-level, or visitor-level.





## Recording WordPress category into a custom variable

In order to capture the WordPress category in a Google Analytics custom variable, we're going to use a combination of PHP, WordPress <a title="WordPress functions" href="http://codex.wordpress.org/Function_Reference" target="_blank">functions</a>, and (obviously) Google Analytics code.  Here's the code snippet we're going to use:The "is\_single" part of the code is a WordPress function, which evaluates whether or not a given page is a single post.  Since only single post pages have categories, we use this function to set the Google Analytics custom variable only when there is going to be a category value available on the page.  The "$category" part of the code is a PHP variable that stores the entire array of WordPress info that goes along with the "get\_the\_category" function. Finally, the part of the code that starts "echo" is the PHP code needed to build the Google Analytics custom variable string we want to have.  Within this code, you can see the "\_setCustomVar" code described in the first part of the tutorial; we're setting the "Index" value to '2', which means we're using Google Analytics Custom Variable 2.  The "Name" of the variable will be "Category", the "Value" to be set is the WordPress category value (from the "'". $category[0]->cat\_name. "' variable), and the "opt\_scope" value is set to "3", which means page-level.

## Incorporating custom variable code into Google Analytics tracking code

According to <a title="More info on Google Analytics custom variables" href="http://cutroni.com/blog/2011/05/18/mastering-google-analytics-custom-variables/" target="_blank">Justin Cutroni</a>, who literally wrote the book on [Google Analytics](http://www.amazon.com/gp/product/0596158009/ref=as_li_ss_tl?ie=UTF8&tag=thefuquexpe-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0596158009), we want to put our custom variable code BEFORE the "\_trackPageview" portion of the Google Analytics tracking code whenever possible.  This is because on the last page of a visit, if your custom variable code is after the "\_trackPageview" code, Google Analytics won't "see" the custom variable code, since the data has to tag along with a _trackPageview call. Here's what the final set of code will look like (place in your <a title="Installing Google Analytics tracking code" href="http://randyzwitch.com/2011/08/google-analytics-for-wordpress/" target="_blank"><em>header.php</em></a> file):

## Example of Custom Variable report

Here's what the report will look like in Google Analytics.  To see the report, go to "Visitors -> Demographics -> Custom Variables".

<div id="attachment_695" style="width: 652px" class="wp-caption alignleft">
  <img class="size-large wp-image-695 " title="google-analytics-custom-variables" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-analytics-custom-variables-1024x143.png?fit=642%2C89" alt="" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-analytics-custom-variables.png?resize=1024%2C143 1024w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-analytics-custom-variables.png?resize=150%2C20 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-analytics-custom-variables.png?resize=300%2C41 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-analytics-custom-variables.png?resize=500%2C69 500w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-analytics-custom-variables.png?w=1181 1181w" sizes="(max-width: 642px) 100vw, 642px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    WordPress Categories in Google Analytics Custom Variable 2
  </p>
</div>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;
