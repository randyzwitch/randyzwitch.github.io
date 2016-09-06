---
id: 1094
title: For Maximum User Understanding, Customize the SiteCatalyst Menu
date: 2012-06-06T17:31:39+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=1094
permalink: /customize-adobe-sitecatalyst-menu/
tweetbackscheck:
  - 1472939538
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=1094";s:7:"tinyurl";s:26:"http://tinyurl.com/7toap4b";s:4:"isgd";s:19:"http://is.gd/OdvYjw";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Digital Analytics
tags:
  - Adobe Analytics
  - Analytics
  - Omniture
---
> Customizing anything is better than customizing nothing &#8211; Jason Egan (<a title="Jason Egan tweet" href="https://twitter.com/jasonegan/status/210398632082538497" target="_blank">@jasonegan</a>)

<div id="attachment_1105" style="width: 119px" class="wp-caption alignright">
  <img class="size-medium wp-image-1105" title="stock-menu" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/06/stock-menu-109x300.png?fit=109%2C300" alt="Omniture stock menu interface" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/06/stock-menu.png?resize=109%2C300 109w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/06/stock-menu.png?resize=54%2C150 54w" sizes="(max-width: 109px) 100vw, 109px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Default Omniture report menu
  </p>
</div>

Visits vs. Visitors vs. Unique Visitors&#8230;click-throughs, view-throughs, bounces&#8230;these concepts in digital analytics are fairly abstract, and many in business and marketing never really grasp the concepts fully.  Knowing the enormous amount of learning that needs to take place for digital success, why do we make our internal stakeholders hunt for data that&#8217;s organized by TOOL definitions, instead of by business function?

In this case, the &#8220;tool&#8221; that I&#8217;m referring to here is Omniture SiteCatalyst.  To be clear, there&#8217;s nothing excessively _wrong_ about the default menu structure in Omniture, just that in my experience, understanding by end-users can be greatly enhanced by customizing the Omniture menu.

Simple modifications such as 1) Hiding Omniture variables and products not in use, 2) organizing reports by logical business function, and 3) placing custom reports and calculated metrics next to the standard SiteCatalyst reports will get users to making decisions with their data that much faster.

<!--more-->

## 1)  Hide Omniture variables and products not being used

Do your users a favor and hide the Omniture products such as Test & Target, Survey, and Genesis if you aren&#8217;t using them.  Same thing with any custom traffic (props) and custom conversion variables (eVars) that aren&#8217;t being used.  Nothing will distract your users faster than clicking on folders with advertisements (T&T, Survey) or worse, frustrate the user by making them wonder &#8220;What data is _supposed to be_ in this report?&#8221;

Just by hiding or disabling these empty reports and tools advertisements, you should see an increased confidence in data quality.  Or at the very least, keep the conversation from taking a detour.

## 2)  Organize SiteCatalyst reports by logical business function

Your internal users aren&#8217;t thinking about Omniture variable structures when they are trying to find the answer to their business questions.  So why do we keep our data artificially separated by &#8220;Custom Events&#8221;, &#8220;Custom Conversions&#8221; and &#8220;Custom Traffic&#8221;?

Worse yet, who remembers that the number of Facebook Likes can be found at &#8220;_Site Metrics -> Custom Events -> Custom Events 21-30_?&#8221;  And why are Facebook Likes next to &#8220;Logins&#8221;?  Does that mean Facebook Logins?  Probably not.

Wouldn&#8217;t it be better for our users to organize reports by business function, such as:

  * **Financial/Purchase Metrics** (Revenue, Discounts, Shipping, AOV, Units, Revenue Per Visit)
  * **Usability** (Browser, Percent of Page Viewed, Operating System)
  * **SEO** (Non-campaign visits, Referring Domains)
  * **Mobile** (Device, browser, resolution)
  * **Site Engagement** (Page Views, Internal Campaigns, Logins)
  * **Site Merchandising** (Products Viewed, Cart Add Ratio, Cross-Sell)
  * **Social** (Facebook Likes, Pinterest Pins, Visits from Social domains)
  * **Paid Campaigns** (Email, Paid Search, Display)
  * **Traffic** (Total Visits, Geosegmentation)

The list above isn&#8217;t meant to be exhaustive, or necessarily how you should organize your SiteCatalyst menus.  But for me, organizing the reports by the business function keeps my business thinking flowing, rather than trying to remember how Omniture was implemented by variable type.





## 3)  Place custom reports and calculated metrics next to the standard SiteCatalyst reports

This is probably more like &#8220;2b&#8221; to the above, but there&#8217;s no reason to keep custom reports and calculated metric reports segregated either.  Custom reports happen because of a specific business need, and the same thing with calculated metrics.  By placing these reports along with the out-of-the-box reports from SiteCatalyst, you take away the artificial distinction between data natively in SiteCatalyst and business-specific data populated by a web developer.

## Why you wouldn&#8217;t want to customize?

Shawn makes two great points in <a title="Dont customize SiteCatalyst" href="http://shawncreed.com/blog/sitecatalyst-menu-customization.htm" target="_blank">his post</a> about (not) customizing the SiteCatalyst menu:  users require special training and menu customization isn&#8217;t scalable.

### _Users need special training_

Users need to be trained anyway.  I don&#8217;t think either of us is suggesting moving all of the menus around after an implementation has been in place for years&#8230;but if you&#8217;re a company just starting out, why not start off customized?

Fellow Keystoner Tim Patten also commented to me via Twitter DM about power users being used to &#8220;default&#8221;, and it&#8217;s annoying have to learn a new menu when switching companies; I&#8217;m not really worried about power users, I&#8217;m thinking about the hundreds of users in thousands of organizations who can&#8217;t get beyond page views and visits.  Power users can pick up a new menu quickly, switch back to default, or use the search box.

### _Menu Customization isn&#8217;t scalable_

This is very much true.  The larger the company, and the more complex and varied the tracking, inevitably menu customization isn&#8217;t particularly scalable.  This is probably an area where specific dashboards are a much better strategy than customizing the menus.

## Summary

For me, one of the first things I look for when working with a company looking to get their digital analytics program off the ground is whether they&#8217;ve customized their Omniture menu structure.  As a free customization, it&#8217;s something that companies should at least _consider_.  Organizing reports by business function requires a business to think about the questions they want to regularly answer, will keep novice users from focusing on implementation concepts, and overall is just better because it&#8217;s how I think 🙂

_This blog post is a continuation of a <a title="Original Tweet about SiteCatalyst Menu Customization" href="https://twitter.com/randyzwitch/status/210042295859417090" target="_blank">Twitter conversation</a> with Shawn C. Reed (<a title="Shawn C. Reed Twitter account" href="https://twitter.com/#!/shawncreed" target="_blank">@shawncreed</a>), Jason Egan (<a title="Jason Egan Twitter" href="https://twitter.com/#!/jasonegan" target="_blank">@jasonegan</a>), Tim Patten (<a title="Tim Patten Twitter" href="https://twitter.com/#!/timpatten" target="_blank">@timpatten</a>) and others.  Shawn&#8217;s counter-argument can be found <a title="Why Shawn C. Reed prefers not to customize SiteCatalyst" href="http://shawncreed.com/blog/sitecatalyst-menu-customization.htm" target="_blank">here</a>.  Jason wrote about <a title="Jason Egan blog post" href="http://www.jasonegan.net/2009/09/26/omniture-sitecatalyst-menu-customization-and-custom-reports/" target="_blank">Omniture menu customization</a> a few years back.  And finally, if you want to read more pros-and-cons about SiteCatalyst menu customization, see the Adobe blog posts <a title="Adobe post 1" href="http://blogs.adobe.com/digitalmarketing/analytics/taking-sitecatalyst-menus-to-the-masses-part-i/" target="_blank">here</a> and <a title="Adobe post 2" href="http://blogs.adobe.com/digitalmarketing/analytics/taking-sitecatalyst-menus-to-the-masses-part-ii/" target="_blank">here</a>.

_
