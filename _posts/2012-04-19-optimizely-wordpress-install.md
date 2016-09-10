---
title: How To Install Optimizely on WordPress
date: 2012-04-19T07:45:22+00:00
author: Randy Zwitch
layout: post
permalink: /optimizely-wordpress-install/
category: Design
tags:
  - A/B testing
  - Child Theme
  - Google Analytics
  - Optimization
  - Optimizely
---
If you've spent any time working in digital marketing or analytics, you're already familiar with the power of A/B testing.  A/B testing (and it's more complicated brother <a href="http://www.smashingmagazine.com/2011/04/04/multivariate-testing-101-a-scientific-method-of-optimizing-design/" target="_blank">multivariate testing</a>) allows site owners to find out optimal combinations of site design and content for their visitors _without having to directly ask/inconvenience the user_.  All it takes to improve a website is forming a hypothesis of something that could work better, creating multiple versions of a page (or other content), setting up the experiment...and the money flows in faster than you can count it.  At least, that's the hope!

At the enterprise level, there are plenty of testing tools such as <a href="http://www.omniture.com/en/products/conversion/test-and-target" target="_blank">Omniture Test & Target</a>, <a href="http://www.sitespect.com/" target="_blank">SiteSpect</a>, <a href="http://webtrends.com/products/optimize/" target="_blank">WebTrends Optimize</a>, and <a href="http://www.monetate.com" target="_blank">Monetate</a>, but these tools are cost-prohibitive to all but the largest websites.  Google provides <a href="www.google.com/websiteoptimizer" target="_blank">Google Website Optimizer</a> (for free!), but that has often been viewed as difficult to manage, especially for dynamically created websites.  That's where <a href="http://www.optimizely.com" target="_blank">Optimizely</a> comes in.

Optimizely's tagline is "A/B testing software you'll actually use", a reference to complication (and I think indirectly, the expense) of other testing tools in the marketplace.  Optimizely claims is that you can start testing after adding a single line of JavaScript code...and here's how you do it.

## Getting Started - Sign up

The first step to installing Optimizely is to sign up. A 30-day trial is provided, but you do need to put in a credit card to activate the free trial.

After doing so, when you click on the "Implementation" button, a pop-up shows you your customized "single line of code" to implement.

![optimizely-implementation](/wp-content/uploads/2012/04/optimizely-implementation.png)

<p class="wp-caption-text">
Clicking on the "Implementation" link gives you your JavaScript code
</p>

## Installing Optimizely code snippet in WordPress Header

When you click on the 'Implementation' link, you'll get code that looks like the following:

<pre>&lt;script src="//cdn.optimizely.com/js/38######.js"&gt;&lt;/script&gt;</pre>

What we want to do is install this code in our <a title="Twenty Eleven Child Theme: Custom Header" href="http://randyzwitch.com/custom-header-twenty-eleven-child-theme/" target="_blank">WordPress header</a>, pretty much after the first <head> tag.  By placing the code as high as possible in the WordPress header, this gives Optimizely the ability to affect your website as soon as the page starts loading, and assures that your site visitors don't notice anything happening before their eyes!

![optimizely-jquery-menu](/wp-content/uploads/2012/04/optimizely-jquery-menu-300x200.png)

The only consideration you need to make when installing the code snippet is whether your site is already running jQuery or not.  You can determine this by looking in the header of your WordPress site to see if there are any scripts that say something like `jquery-xxxx`.js.  If you don't see any jQuery references in the header, you don't need to do anything: Optimizely already includes jQuery!  If you already have jQuery installed, be sure to place the Optimizely code snippet after the WordPress jQuery reference.  Then, go to the Optimizely website, click on the  `My Experiments" -> "View All Experiments" - > "Project Code"` menu to change the jQuery settings to "Do not include".

After you place the code snippet line in the header and hit save, that's it!  You'll be able to start using Optimizely to create experiments.

## Integrating Optimizely with Google Analytics

In order to track your Optimizely experiments within Google Analytics, no code changes need to be made.  The only thing you need to do is make sure you have the asynchronous version of the Google Analytics code installed and a free custom variable slot.  Then, within the Optimizely interface, you can choose which custom variable to write your data to and you're done.
