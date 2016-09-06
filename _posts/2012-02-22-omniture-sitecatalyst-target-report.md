---
id: 960
title: Using Omniture SiteCatalyst Target Report To Calculate YOY growth
date: 2012-02-22T08:15:18+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=960
permalink: /omniture-sitecatalyst-target-report/
tweetbackscheck:
  - 1472925877
shorturls:
  - 'a:3:{s:9:"permalink";s:59:"http://randyzwitch.com/omniture-sitecatalyst-target-report/";s:7:"tinyurl";s:26:"http://tinyurl.com/84khlee";s:4:"isgd";s:19:"http://is.gd/GfGNxm";}'
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
Of the hundreds of stock reports and capabilities present within Adobe (Omniture) SiteCatalyst, calculating year-over-year growth isn&#8217;t the easiest thing to do.  And while conversion reports (eVars) have the &#8220;Compare Dates&#8221; functionality within the calendar menu, we can&#8217;t quickly plot the difference between two time periods within a dashboard.  This is where the Omniture SiteCatalyst Target report comes in handy.

<!--more-->

## Setting up your &#8220;Goal&#8221;

Within the Omniture Knowledge Base <a href="https://omniture-help.custhelp.com/app/answers/detail/a_id/2153/kw/targets" target="_blank">KB2153</a>, I think Omniture does a disservice by stating:

> _Targets_ are quantifiable goals that you can place within the SiteCatalyst interface and compare against reports.

While this is a true statement, I think one of the reasons that the Omniture SiteCatalyst Target report isn&#8217;t more widely used is that it doesn&#8217;t _have to be_ a future &#8220;goal&#8221; per se, any set numbers can be used.  When last year&#8217;s numbers are used, the report becomes a year-over-year comparison!

For this example, I&#8217;m going to be comparing page views year-over-year.  Here&#8217;s what the page views summary by month looks like for 2011:

<div id="attachment_967" style="width: 849px" class="wp-caption aligncenter">
  <img class="size-full wp-image-967" title="omniture-page-views-report" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-page-views-report.png?fit=839%2C287" alt="Omniture Page Views Report - 2010" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-page-views-report.png?w=839 839w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-page-views-report.png?resize=150%2C51 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-page-views-report.png?resize=300%2C102 300w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-page-views-report.png?resize=500%2C171 500w" sizes="(max-width: 839px) 100vw, 839px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Omniture Page Views Report &#8211; 2011
  </p>
</div>

Using this report to set a year-over-year target, we can see the early months are in the few thousands of page views, increasing to 12,000 -14,000 later in the year.

## Omniture SiteCatalyst Target interface &#8211; Inputting our numbers

<div id="attachment_971" style="width: 354px" class="wp-caption alignright">
  <img class=" wp-image-971 " title="Screen Shot 2012-02-22 at 7.49.46 AM" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Screen-Shot-2012-02-22-at-7.49.46-AM.png?resize=344%2C285" alt="Target Report Setup" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Screen-Shot-2012-02-22-at-7.49.46-AM.png?w=573 573w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Screen-Shot-2012-02-22-at-7.49.46-AM.png?resize=150%2C124 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Screen-Shot-2012-02-22-at-7.49.46-AM.png?resize=300%2C248 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Screen-Shot-2012-02-22-at-7.49.46-AM.png?resize=361%2C300 361w" sizes="(max-width: 344px) 100vw, 344px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Monthly Target Setup within Omniture Interface
  </p>
</div>

Assuming you are using Omniture SiteCatalyst v15, you set up a Target report under &#8220;Favorites -> Targets -> Manage Targets&#8221;, then choose &#8220;Add New&#8221; once you&#8217;re in the Targets menu.  I&#8217;ll be setting up a monthly target for Page Views, so I&#8217;ll just type it in instead of using the file upload capability.  For this example, we want to apply this target to &#8220;Entire Site&#8221; for the &#8220;Page Views&#8221; Metric.  The date range will be all of 2012, with &#8220;Monthly&#8221; granularity.  This will give you 12 boxes to type in the 2011 Page View results, and once we hit &#8220;Ok&#8221; to save, we&#8217;ll have our year-over-year report set up.

## Getting the Year-over-Year graph within Omniture

Showing the results of our newly created Target report is as easy as going to &#8220;Favorites -> Targets&#8221;, then choosing the appropriate Target.  By default, the report will show like a normal metric report, with a green overlay for your targets:

<div id="attachment_977" style="width: 849px" class="wp-caption aligncenter">
  <img class="size-full wp-image-977" title="Omniture-target-report-default" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Omniture-target-report-default.png?fit=839%2C287" alt="Omniture Target Report" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Omniture-target-report-default.png?w=839 839w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Omniture-target-report-default.png?resize=150%2C51 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Omniture-target-report-default.png?resize=300%2C102 300w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/Omniture-target-report-default.png?resize=500%2C171 500w" sizes="(max-width: 839px) 100vw, 839px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Default view of Omniture SiteCatalyst Target report
  </p>
</div>

The above report shows that Page Views for January 2012 are well above our January 2011 &#8220;Target&#8221; and that February has already exceeded the goal as well&#8230;which is great since we&#8217;ve got 7 more days left in the month!

If we want to show the year-over-year delta, however, we can choose the &#8220;Variance&#8221; report option at the top of the graph.  Doing so will show the following report:

<div id="attachment_978" style="width: 849px" class="wp-caption aligncenter">
  <img class="size-full wp-image-978" title="omniture-target-variance" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-target-variance.png?fit=839%2C287" alt="Omniture Target Variance Report" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-target-variance.png?w=839 839w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-target-variance.png?resize=150%2C51 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-target-variance.png?resize=300%2C102 300w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/02/omniture-target-variance.png?resize=500%2C171 500w" sizes="(max-width: 839px) 100vw, 839px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Omniture SiteCatalyst Target Report &#8211; &#8220;Variance&#8221; option
  </p>
</div>

By placing this report in a dashboard, we can quickly evaluate whether Page Views have grown by month year-over-year.  It&#8217;s disappointing that the only graph option Adobe provides is the raw metric higher/lower than the target instead of a percentage difference view, but the percentage difference is calculated as part of the data table view that goes along with this report.





## Conclusion

When talking about &#8220;growth&#8221; many businesses aren&#8217;t content with just year-over-year growth, usually aiming for 10%, 20%&#8230;10,000% growth.  These are goals that work well to track within the Omniture SiteCatalyst Target report.  But year-over-year growth can be worth monitoring too, and the Omniture SiteCatalyst Target report is a great way to do so.
