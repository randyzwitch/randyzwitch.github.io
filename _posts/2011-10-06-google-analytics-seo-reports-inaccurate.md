---
title: 'Google Analytics SEO reports: Not Ready For Primetime?'
date: 2011-10-06T08:40:58+00:00
author: Randy Zwitch
layout: post
permalink: /google-analytics-seo-reports-inaccurate/
category: Analytics
tags:
  - Data Accuracy
  - Google Analytics
  - SEO
  - Webmaster Tools
---
On October 4th, Google <a title="Webmaster Tools in GA" href="http://analytics.blogspot.com/2011/10/webmaster-tools-in-google-analytics-for.html" target="_blank">announced</a> that the Webmaster Tools/Google Analytics integration was now available to all users. The three new reports (Queries, Landing Pages, and Geographical Summary) are intended to allow site owners and content creators to monitor how well their content is indexed in Google for their keywords of interest across time, all within the Google Analytics interface.  However, based on my preliminary research from the first few days of data, I have to question the current algorithm's accuracy.



## Google Analytics SEO reports:  Impressions, Clicks,  Average Position, CTR

<div id="attachment_786" style="width: 610px" class="wp-caption aligncenter">
  <img class="size-full wp-image-786" title="google-seo-query-report" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-query-report.png?fit=600%2C209" alt="" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-query-report.png?w=600 600w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-query-report.png?resize=150%2C52 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-query-report.png?resize=300%2C104 300w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-query-report.png?resize=500%2C174 500w" sizes="(max-width: 600px) 100vw, 600px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Google Analytics SEO Report: Queries
  </p>
</div>

All three reports have the same format, showing Impressions in Google search, Clicks, Average Link position (Organic) and Click-through Rate (CTR).  You can show this data by:

  * Search query: to understand how specific search terms are ranking
  * Landing page: to show how well individual pages (and their position) lead to clicks
  * Geography:  to understand how well your pages are ranking in your target market(s)

To avoid problems of false precision, these reports appear to round impressions to the nearest 10 for numbers less than 1000, and then to the nearest hundred when impressions are > 1000.  Similarly, clicks aren't reported when there are less than 10, although a CTR is reported...which is it Google, not enough data or is it measured precisely?

## I rank WHERE for a female body part?

<div id="attachment_785" style="width: 610px" class="wp-caption aligncenter">
  <img class="size-full wp-image-785" title="google-seo-report-womens-body-part" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-report-womens-body-part.png?fit=600%2C97" alt="" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-report-womens-body-part.png?w=600 600w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-report-womens-body-part.png?resize=150%2C24 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-report-womens-body-part.png?resize=300%2C48 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/10/google-seo-report-womens-body-part.png?resize=500%2C80 500w" sizes="(max-width: 600px) 100vw, 600px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Ranked 8th on average for these keywords Google? I think not.
  </p>
</div>

In the web analytics world, if you aren't comfortable with imprecision and incomplete data, you'll get burned out pretty quickly.  My above example of the exact click-through rate calculated from an inexact display of clicks is a minor nitpick.  However, when I see data from the table above being written into my account, I have to wonder just how precisely Google is measuring their impressions data.

The table above is from my other blog about the <a title="Duke Cross Continent MBA blog" href="http://the-fuqua-experience.com/" target="_blank">Duke MBA</a>; I'm QUITE certain it doesn't rank, on average, 8th for anything to do with female body parts!  I'd be the most in demand SEO in the world if I could pull that off, without even having the words on my page.  I would've been comfortable chalking that result up to a weird bug, had the page the query references was mangled.  It turns out, they all link to the <a title="Small town girl with BIG ambitions" href="http://the-fuqua-experience.com/blog/2011/06/30/small-town-girl-with-big-ambitions/" target="_blank">same exact blog post</a>, the story of a current (female, naturally) student's journey from a small town in India to attending business school.  From what I can tell, the error is persistent as well, showing a small number of impressions every day.





## Web Analytics:  Again, it all comes down to the Analyst

The above example is somewhat tongue-in-cheek; obviously it's a data error, and I'm not running a multi-million dollar e-commerce website.  Heck, I'm not even paying for Google Analytics.  But had I been part of the Beta test of the Google Analytics/Webmaster Tools integration, I think I would've provided the following comments:

  * <span style="text-decoration: underline;"><em>Don't show search terms where there are low number of impressions</em>:</span> if you are getting 50 impressions per day and you rank 213th, you're not really ranking for that term
  * <span style="text-decoration: underline;"><em>Accuracy vs. Precision</em>:</span>  Either round the numbers or don't.  Rounding impressions, putting <10 for clicks, then dividing the two to provide a CTR doesn't provide confidence in the data
  * <span style="text-decoration: underline;"><em>Provide the same reporting drill-down capabilities from Webmaster Tools within Google Analytics</em>:</span> To find out which page is ranking for this error term, I started in Google Analytics, but needed to go to Webmaster Tools.  Kinda defeats the purpose of having the data in the Google Analytics interface.

I'm confident now that Google has decided to step into the paid web analytics arena that these reports will only improve over time.  For now, I'll be taking a sharp eye to the results, manually typing the queries into Google where necessary to see if I'm truly ranking where it says I am.

(And yes, I verified I don't rank 8th for pornography terms ;))
