---
title: Using Omniture SiteCatalyst Target Report To Calculate YOY growth
date: 2012-02-22T08:15:18+00:00
author: Randy Zwitch
layout: post
permalink: /omniture-sitecatalyst-target-report/
category: Analytics
description: Calculating year over year growth in Omniture SiteCatalyst is easy using this simple hack of the Omniture SiteCatalyst Target report.
tags:
  - Adobe Analytics
  - Analytics
  - Omniture
---
Of the hundreds of stock reports and capabilities present within Adobe (Omniture) SiteCatalyst, calculating year-over-year growth isn't the easiest thing to do.  And while conversion reports (eVars) have the "Compare Dates" functionality within the calendar menu, we can't quickly plot the difference between two time periods within a dashboard.  This is where the Omniture SiteCatalyst Target report comes in handy.

## Setting up your "Goal"

Within the Omniture Knowledge Base <a href="https://omniture-help.custhelp.com/app/answers/detail/a_id/2153/kw/targets" target="_blank">KB2153</a>, I think Omniture does a disservice by stating:

> _Targets_ are quantifiable goals that you can place within the SiteCatalyst interface and compare against reports.

While this is a true statement, I think one of the reasons that the Omniture SiteCatalyst Target report isn't more widely used is that it doesn't _have to be_ a future "goal" per se, any set numbers can be used.  When last year's numbers are used, the report becomes a year-over-year comparison!

For this example, I'm going to be comparing page views year-over-year.  Here's what the page views summary by month looks like for 2011:

![omniture-page-views-report](/wp-content/uploads/2012/02/omniture-page-views-report.png)

<p class="wp-caption-text">
Omniture Page Views Report - 2011
</p>

Using this report to set a year-over-year target, we can see the early months are in the few thousands of page views, increasing to 12,000 -14,000 later in the year.

## Omniture SiteCatalyst Target interface - Inputting our numbers

![Screen Shot 2012-02-22 at 7.49.46 AM](/wp-content/uploads/2012/02/Screen-Shot-2012-02-22-at-7.49.46-AM.png)

<p class="wp-caption-text">
Monthly Target Setup within Omniture Interface
</p>

Assuming you are using Omniture SiteCatalyst v15, you set up a Target report under `Favorites -> Targets -> Manage Targets`, then choose `Add New` once you're in the Targets menu.  I'll be setting up a monthly target for Page Views, so I'll just type it in instead of using the file upload capability.  For this example, we want to apply this target to "Entire Site" for the "Page Views" Metric.  The date range will be all of 2012, with "Monthly" granularity.  This will give you 12 boxes to type in the 2011 Page View results, and once we hit "Ok" to save, we'll have our year-over-year report set up.

## Getting the Year-over-Year graph within Omniture

Showing the results of our newly created Target report is as easy as going to `Favorites -> Targets`, then choosing the appropriate Target.  By default, the report will show like a normal metric report, with a green overlay for your targets:

![Omniture-target-report-default](/wp-content/uploads/2012/02/Omniture-target-report-default.png)

<p class="wp-caption-text">
Default view of Omniture SiteCatalyst Target report
</p>

The above report shows that Page Views for January 2012 are well above our January 2011 "Target" and that February has already exceeded the goal as well...which is great since we've got 7 more days left in the month!

If we want to show the year-over-year delta, however, we can choose the "Variance" report option at the top of the graph.  Doing so will show the following report:

![omniture-target-variance](/wp-content/uploads/2012/02/omniture-target-variance.png)

<p class="wp-caption-text">
Omniture SiteCatalyst Target Report - "Variance" option
</p>

By placing this report in a dashboard, we can quickly evaluate whether Page Views have grown by month year-over-year.  It's disappointing that the only graph option Adobe provides is the raw metric higher/lower than the target instead of a percentage difference view, but the percentage difference is calculated as part of the data table view that goes along with this report.

## Conclusion

When talking about "growth" many businesses aren't content with just year-over-year growth, usually aiming for 10%, 20%...10,000% growth.  These are goals that work well to track within the Omniture SiteCatalyst Target report.  But year-over-year growth can be worth monitoring too, and the Omniture SiteCatalyst Target report is a great way to do so.
