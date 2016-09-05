---
id: 991
title: How To Install Optimizely on WordPress
date: 2012-04-19T07:45:22+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=991
permalink: /optimizely-wordpress-install/
tweetbackscheck:
  - 1472993163
shorturls:
  - 'a:3:{s:9:"permalink";s:29:"http://randyzwitch.com/?p=991";s:4:"isgd";s:19:"http://is.gd/SlZBug";s:7:"tinyurl";s:26:"http://tinyurl.com/c34qprp";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Digital Analytics
tags:
  - A/B testing
  - Child Theme
  - Google Analytics
  - Optimization
  - Optimizely
---
If you&#8217;ve spent any time working in digital marketing or analytics, you&#8217;re already familiar with the power of A/B testing.  A/B testing (and it&#8217;s more complicated brother <a href="http://www.smashingmagazine.com/2011/04/04/multivariate-testing-101-a-scientific-method-of-optimizing-design/" target="_blank">multivariate testing</a>) allows site owners to find out optimal combinations of site design and content for their visitors _without having to directly ask/inconvenience the user_.  All it takes to improve a website is forming a hypothesis of something that could work better, creating multiple versions of a page (or other content), setting up the experiment&#8230;and the money flows in faster than you can count it.  At least, that&#8217;s the hope!

At the enterprise level, there are plenty of testing tools such as <a href="http://www.omniture.com/en/products/conversion/test-and-target" target="_blank">Omniture Test & Target</a>, <a href="http://www.sitespect.com/" target="_blank">SiteSpect</a>, <a href="http://webtrends.com/products/optimize/" target="_blank">WebTrends Optimize</a>, and <a href="http://www.monetate.com" target="_blank">Monetate</a>, but these tools are cost-prohibitive to all but the largest websites.  Google provides <a href="www.google.com/websiteoptimizer" target="_blank">Google Website Optimizer</a> (for free!), but that has often been viewed as difficult to manage, especially for dynamically created websites.  That&#8217;s where <a href="http://www.optimizely.com" target="_blank">Optimizely</a> comes in.
  

  


Optimizely&#8217;s tagline is &#8220;A/B testing software you&#8217;ll actually use&#8221;, a reference to complication (and I think indirectly, the expense) of other testing tools in the marketplace.  Optimizely claims is that you can start testing after adding a single line of JavaScript code&#8230;and here&#8217;s how you do it.

<!--more-->

## Getting Started &#8211; Sign up

The first step to installing Optimizely is to sign up (obviously).  A 30-day trial is provided, but you do need to put in a credit card to activate the free trial.

After doing so, when you click on the &#8220;Implementation&#8221; button, a pop-up shows you your customized &#8220;single line of code&#8221; to implement.

<div id="attachment_996" style="width: 810px" class="wp-caption aligncenter">
  <img class="size-full wp-image-996" title="optimizely-implementation" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-implementation.png?fit=800%2C301" alt="" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-implementation.png?w=800 800w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-implementation.png?resize=150%2C56 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-implementation.png?resize=300%2C112 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-implementation.png?resize=500%2C188 500w" sizes="(max-width: 800px) 100vw, 800px" data-recalc-dims="1" />
  
  <p class="wp-caption-text">
    Clicking on the &#8220;Implementation&#8221; link gives you your JavaScript code
  </p>
</div>

## Installing Optimizely code snippet in WordPress Header

When you click on the &#8216;Implementation&#8217; link, you&#8217;ll get code that looks like the following:

<pre>&lt;script src="//cdn.optimizely.com/js/38######.js"&gt;&lt;/script&gt;</pre>

What we want to do is install this code in our <a title="Twenty Eleven Child Theme: Custom Header" href="http://randyzwitch.com/custom-header-twenty-eleven-child-theme/" target="_blank">WordPress header</a>, pretty much after the first <head> tag.  By placing the code as high as possible in the WordPress header, this gives Optimizely the ability to affect your website as soon as the page starts loading, and assures that your site visitors don&#8217;t notice anything happening before their eyes!

<img class="alignright size-medium wp-image-1049" title="optimizely-jquery-menu" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-jquery-menu-300x200.png?fit=300%2C200" alt="" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-jquery-menu.png?resize=300%2C200 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-jquery-menu.png?resize=150%2C100 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/optimizely-jquery-menu.png?w=374 374w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />The only consideration you need to make when installing the code snippet is whether your site is already running jQuery or not.  You can determine this by looking in the header of your WordPress site to see if there are any scripts that say something like _jquery-162.js._  If you don&#8217;t see any jQuery references in the header, you don&#8217;t need to do anything:  Optimizely already includes jQuery!  If you already have jQuery installed, be sure to place the Optimizely code snippet after the WordPress jQuery reference.  Then, go to the Optimizely website, click on the  &#8220;My Experiments&#8221; -> &#8220;View All Experiments&#8221; &#8211; > &#8220;Project Code&#8221; menu to change the jQuery settings to &#8220;Do not include&#8221;.

After you place the code snippet line in the header and hit save, that&#8217;s it!  You&#8217;ll be able to start using Optimizely to create experiments.

## Integrating Optimizely with Google Analytics

In order to track your Optimizely experiments within Google Analytics, no code changes need to be made.  The only thing you need to do is make sure you have the asynchronous version of the Google Analytics code installed and a free custom variable slot.  Then, within the Optimizely interface, you can choose which custom variable to write your data to and you&#8217;re done.