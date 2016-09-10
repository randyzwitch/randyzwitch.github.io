---
title: For Maximum User Understanding, Customize the SiteCatalyst Menu
date: 2012-06-06T17:31:39+00:00
author: Randy Zwitch
layout: post
permalink: /customize-adobe-sitecatalyst-menu/
category: Analytics
tags:
  - Adobe Analytics
  - Analytics
  - Omniture
---
<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/nancyskoons">@nancyskoons</a> <a href="https://twitter.com/randyzwitch">@randyzwitch</a> <a href="https://twitter.com/shawncreed">@shawncreed</a> Best Practice #1: Customizing anything is better than customizing nothing. <a href="https://twitter.com/hashtag/measure?src=hash">#measure</a> <a href="https://twitter.com/hashtag/omniture?src=hash">#omniture</a></p>&mdash; Jason Egan (@jasonegan) <a href="https://twitter.com/jasonegan/status/210398632082538497">June 6, 2012</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

![stock-menu](/wp-content/uploads/2012/06/stock-menu-109x300.png)

<p class="wp-caption-text">
Default Omniture report menu
</p>

Visits vs. Visitors vs. Unique Visitors...click-throughs, view-throughs, bounces...these concepts in digital analytics are fairly abstract, and many in business and marketing never really grasp the concepts fully.  Knowing the enormous amount of learning that needs to take place for digital success, why do we make our internal stakeholders hunt for data that's organized by TOOL definitions, instead of by business function?

In this case, the "tool" that I'm referring to here is Omniture SiteCatalyst.  To be clear, there's nothing excessively _wrong_ about the default menu structure in Omniture, just that in my experience, understanding by end-users can be greatly enhanced by customizing the Omniture menu.

Simple modifications such as 1) Hiding Omniture variables and products not in use, 2) organizing reports by logical business function, and 3) placing custom reports and calculated metrics next to the standard SiteCatalyst reports will get users to making decisions with their data that much faster.

## 1)  Hide Omniture variables and products not being used

Do your users a favor and hide the Omniture products such as Test & Target, Survey, and Genesis if you aren't using them.  Same thing with any custom traffic (props) and custom conversion variables (eVars) that aren't being used.  Nothing will distract your users faster than clicking on folders with advertisements (T&T, Survey) or worse, frustrate the user by making them wonder "What data is _supposed to be_ in this report?"

Just by hiding or disabling these empty reports and tools advertisements, you should see an increased confidence in data quality.  Or at the very least, keep the conversation from taking a detour.

## 2)  Organize SiteCatalyst reports by logical business function

Your internal users aren't thinking about Omniture variable structures when they are trying to find the answer to their business questions.  So why do we keep our data artificially separated by "Custom Events", "Custom Conversions" and "Custom Traffic"?

Worse yet, who remembers that the number of Facebook Likes can be found at "_Site Metrics -> Custom Events -> Custom Events 21-30_?"  And why are Facebook Likes next to "Logins"?  Does that mean Facebook Logins?  Probably not.

Wouldn't it be better for our users to organize reports by business function, such as:

  * **Financial/Purchase Metrics** (Revenue, Discounts, Shipping, AOV, Units, Revenue Per Visit)
  * **Usability** (Browser, Percent of Page Viewed, Operating System)
  * **SEO** (Non-campaign visits, Referring Domains)
  * **Mobile** (Device, browser, resolution)
  * **Site Engagement** (Page Views, Internal Campaigns, Logins)
  * **Site Merchandising** (Products Viewed, Cart Add Ratio, Cross-Sell)
  * **Social** (Facebook Likes, Pinterest Pins, Visits from Social domains)
  * **Paid Campaigns** (Email, Paid Search, Display)
  * **Traffic** (Total Visits, Geosegmentation)

The list above isn't meant to be exhaustive, or necessarily how you should organize your SiteCatalyst menus.  But for me, organizing the reports by the business function keeps my business thinking flowing, rather than trying to remember how Omniture was implemented by variable type.

## 3)  Place custom reports and calculated metrics next to the standard SiteCatalyst reports

This is probably more like "2b" to the above, but there's no reason to keep custom reports and calculated metric reports segregated either.  Custom reports happen because of a specific business need, and the same thing with calculated metrics.  By placing these reports along with the out-of-the-box reports from SiteCatalyst, you take away the artificial distinction between data natively in SiteCatalyst and business-specific data populated by a web developer.

## Why you wouldn't want to customize?

Shawn makes two great points in <a title="Dont customize SiteCatalyst" href="http://shawncreed.com/blog/sitecatalyst-menu-customization.htm" target="_blank">his post</a> about (not) customizing the SiteCatalyst menu: users require special training and menu customization isn't scalable.

### _Users need special training_

Users need to be trained anyway.  I don't think either of us is suggesting moving all of the menus around after an implementation has been in place for years...but if you're a company just starting out, why not start off customized?

Fellow Keystoner Tim Patten also commented to me via Twitter DM about power users being used to "default", and it's annoying have to learn a new menu when switching companies; I'm not really worried about power users, I'm thinking about the hundreds of users in thousands of organizations who can't get beyond page views and visits.  Power users can pick up a new menu quickly, switch back to default, or use the search box.

### _Menu Customization isn't scalable_

This is very much true.  The larger the company, and the more complex and varied the tracking, inevitably menu customization isn't particularly scalable.  This is probably an area where specific dashboards are a much better strategy than customizing the menus.

## Summary

For me, one of the first things I look for when working with a company looking to get their digital analytics program off the ground is whether they've customized their Omniture menu structure.  As a free customization, it's something that companies should at least _consider_.  Organizing reports by business function requires a business to think about the questions they want to regularly answer, will keep novice users from focusing on implementation concepts, and overall is just better because it's how I think 🙂

_This blog post is a continuation of a <a title="Original Tweet about SiteCatalyst Menu Customization" href="https://twitter.com/randyzwitch/status/210042295859417090" target="_blank">Twitter conversation</a> with Shawn C. Reed (<a title="Shawn C. Reed Twitter account" href="https://twitter.com/#!/shawncreed" target="_blank">@shawncreed</a>), Jason Egan (<a title="Jason Egan Twitter" href="https://twitter.com/#!/jasonegan" target="_blank">@jasonegan</a>), Tim Patten (<a title="Tim Patten Twitter" href="https://twitter.com/#!/timpatten" target="_blank">@timpatten</a>) and others.  Shawn's counter-argument can be found <a title="Why Shawn C. Reed prefers not to customize SiteCatalyst" href="http://shawncreed.com/blog/sitecatalyst-menu-customization.htm" target="_blank">here</a>.  Jason wrote about <a title="Jason Egan blog post" href="http://www.jasonegan.net/2009/09/26/omniture-sitecatalyst-menu-customization-and-custom-reports/" target="_blank">Omniture menu customization</a> a few years back.  And finally, if you want to read more pros-and-cons about SiteCatalyst menu customization, see the Adobe blog posts <a title="Adobe post 1" href="http://blogs.adobe.com/digitalmarketing/analytics/taking-sitecatalyst-menus-to-the-masses-part-i/" target="_blank">here</a> and <a title="Adobe post 2" href="http://blogs.adobe.com/digitalmarketing/analytics/taking-sitecatalyst-menus-to-the-masses-part-ii/" target="_blank">here</a>._
