---
title: Real-time Reporting with the Adobe Analytics API
date: 2014-03-10T11:28:21+00:00
author: Randy Zwitch
layout: post
permalink: /real-time-reporting-adobe-analytics-api/
category: Analytics
description: Monitoring real-time activity on your website is easy if you are using Adobe Analytics. Here's how to get real-time reports with RSiteCatalyst.
tags:
  - Adobe Analytics
  - R
  - RSiteCatalyst
---
Starting with [version 1.3.1 of RSiteCatalyst](http://randyzwitch.com/rsitecatalyst-version-1-3-release-notes/), you can now access the [real-time reporting capabilities of the Adobe Analytics API](https://developer.omniture.com/en_US/documentation/sitecatalyst-reporting/c-real-time#concept_AD1D9EC2BC9C4897B9DE3C99D0066B8E) through a familiar R interface. Here's how to get started...

## GetRealTimeConfiguration

Before using the real-time reporting capabilities of Adobe Analytics, you first need to indicate which metrics and elements you are interested in seeing in real-time. To see which reports are already set up for real-time access on a given report suite, you can use the `GetRealTimeConfiguration()` function:

{% highlight r linenos %}
#Get Real-Time reports that already set up
realtime_reports <- GetRealTimeConfiguration("<reportsuite>")
{% endhighlight %}

It's likely the case that the first time you set this up, you'll already see a real-time report for 'Instances-Page-Site Section-Referring Domain'. You can leave this report in place, or switch the parameters using `SaveRealTimeConfiguration()`.

## SaveRealTimeConfiguration

If you want to add/modify which real-time reports are available in a report suite, you can use the `SaveRealTimeConfiguration()` function:

{% highlight r linenos %}
SaveRealTimeConfiguration("<report suite>",
  metric1 = "instances",
  elements1 = c("page", "referringdomain", "sitesection"),

  metric2 = "revenue",
  elements2 = c("referringdomain", "sitesection")

  metric3 = "orders",
  elements3 = c("products")
)
{% endhighlight %}

Up to three real-time reports are available to be stored at any given time. Note that you can mix-and-match what reports you want to modify, you don't have to submit all three reports at a given time. Finally, keep in mind that it can take up to 15 minutes for the API to incorporate your real-time report changes, so if you don't get your data right away don't keep re-submitting the function call!

## GetRealTimeReport

Once you have your real-time reports set up in the API, you can use the `GetRealTimeReport()` function in order to access your reports. There are numerous parameters for customization; selected examples are below.

### Minimum Example - Overtime Report

The simplest function call for a real-time report is to create an `Overtime` report (monitoring a metric over a specific time period):

{% highlight r linenos %}
rt <- GetRealTimeReport("<report suite>", "instances")
{% endhighlight %}

The result of this call will be a DataFrame having 15 rows of one minute granularity for your metric. This is a great way to monitor real-time orders & revenue during a flash sale, see how users are accessing a landing page for an email marketing campaign or any other metric where you want up-to-the-minute status updates.

### Granularity, Offset, Periods

If you want to have a time period other than the last 15 minutes, or one minute granularity is too volatile for the metric you are monitoring, you can add additional arguments to modify the returned DataFrame:

{% highlight r linenos %}
rt2 <- GetRealTimeReport("<reportsuite>",
                  "instances",
                  periodMinutes = "5",
                  periodCount = "12",
                  periodOffset = "10"
{% endhighlight %}

For this function call, we will receive instances for the last hour (12 periods) of five minute granularity, with a 10 minute offset (meaning, `now - 10 minutes ago` is the first time period reported).

### Single Elements

Beyond just monitoring a metric over time, you can specify an element such as `page` to receive your metrics by:

{% highlight r linenos %}
GetRealTimeReport("<reportsuite>",
                  "instances",
                  "page",
                  periodMinutes = "9",
                  periodCount = "3")
{% endhighlight %}

This function call will return Instances by Page, for the last 27 minutes (3 rows/periods per page, 9 minute granularity...just because!). Additionally, there are other arguments such as `algorithm`, `algorithmArgument`, `firstRankPeriod` and `floorSensitivity` that allow for creating reports similar to what is provided in the Real-Time tab in the Adobe Analytics interface.

Currently, even through the Adobe Analytics API supports real-time reports with three breakdowns, only one element breakdown is supported by RSiteCatalyst; it is planned to extend these functions in RSiteCatalyst to full support the real-time capabilities in the near future.

## From DataFrame to Something 'Shiny'

If we're talking real-time reports, we're probably talking about dashboarding. If we're talking about R and dashboarding, then naturally, <a title="R ggvis" href="http://ggvis.rstudio.com/" target="_blank">ggvis</a>/<a title="Shiny Web Applications" href="http://www.rstudio.com/shiny/" target="_blank">Shiny</a> comes to mind. While providing a full ggvis/Shiny example is beyond the scope of this blog post, it's my hope to provide a working example in a future blog post. Stay tuned!
