---
title: My Top 20 Least Useful Omniture Reports
date: 2012-07-18T00:14:04+00:00
author: Randy Zwitch
layout: post
permalink: /least-useful-omniture-reports/
category: Analytics
description: If you want to streamline the Omniture interface for your users, hiding these default reports in the SiteCatalyst menu is a great start.
tags:
  - Adobe Analytics
  - Omniture
  - Usability
---
![data-squirrel](/wp-content/uploads/2012/07/data-squirrel-262x300.png)

<p class="wp-caption-text">
Just because data CAN be captured doesn't mean it SHOULD be!
</p>

In a prior post about [customizing the SiteCatalyst menu interface](http://randyzwitch.com/customize-adobe-sitecatalyst-menu/ "For maximum user understanding, customize the SiteCatalyst menu"), I discussed how simple changes such as hiding empty Omniture variables/reports and re-organizing the menu structure will help improve understanding within your organization.  In the spirit of even further interface optimization, here are 20 reports within Omniture that I feel that can be hidden due to their lack of business-actionable information.

Here are my Top 20, in no particular order:

  * Mobile:  Color Depth
  * Mobile:  Information Services
  * Mobile:  Decoration Mail Support
  * Mobile:  PTT
  * Mobile:  Device Number Transmit
  * Mobile:  Browser URL Length
  * Mobile:  DRM
  * Mobile:  Mail URL Length
  * Mobile:  Java version
  * Mobile:  Manufacturer
  * Technology:  Connection Types
  * Technology:  Monitor Color Depth
  * Technology:  JavaScript Version
  * Technology:  Monitor Resolutions
  * Visitor Profile:  Top-Level Domains
  * Visitor Profile:  Domains
  * Visitor Profile:  Geosegmentation
  * Traffic Sources:  All Search Page Ranking
  * Traffic Sources: Original Referring Domains
  * Custom Variable:  s.server report

## Mobile reports

For the most part, the information in the separate reports can determined just by knowing the device (which is also a default Omniture report). So, a single report can take the place of 10.

There's also the pesky issue that the reports more often than not show "Unknown" for 90%+ of the mobile traffic (at least, in the U.S.).  So not only can the data be determined from knowing the mobile device being used, the additional reports aren't even well populated.

## Technology reports

The "Connection Type" report, along with "Monitor Color Depth", measure things that haven't been an issue in too many years to continue reporting on. LAN, 16-bit or higher.

"Monitor resolution" is irrelevant in the face of also having "Browser Width" & "Browser Height" reports (the true size of the web page "real estate" on screen).

Finally, JavaScript version?  The JavaScript report with "Enabled/Disabled" is likely more than enough information.  Or, you can just include jQuery in your website and know with 100% certainty what version is being used.

## Visitor Profile reports

My dislike of the identified Visitor Profile reports are due to halfway implementation.  The "GeoSegmentation report shows a nice map representation, but only of traffic metrics like Page Views and Visits.  Why not open this up to conversion variables and really make the visualization useful, instead of needing to rely on the "flat", non-map Visitor Zip (`s.zip`) report?

For the "Domains" and "Top-Level Domains" report, you have granularity issues; the "Top-Level Domains" report is sort-of a country-level report, but the U.S. has several line items.  The "Domains" report shows what ISP people are using to access the Internet (which I think is generally useless in itself), but again...it spans geography, so the ISP network someone is on may not even have the same technology.  So what are we really measuring in these reports?

## Traffic Sources reports

The "All Search Page Ranking" report seems like it could be useful, until you realize that 1) it aggregates all search engines (whose different algorithms provide different rankings and 2) with personalized search, rankings are no longer static. Literally every single person could see a different link position for the same search term.  So while this report may have made sense for SEO measurement in the past, it's really past it's prime...use the right SEO tool for the job (Conductor, SEOmoz, and the like).

The "Original Referring Domains" report is weird in its own way...the absolute first URL that referred you to the site.  Really?  As Avinash has said, giving 100% credit to the first touchpoint is like giving your first girlfriend credit for you marrying your wife (paraphrased).  This report is very limited in its usefulness IMO, especially given the advances in attribution modeling in the past several years.

## Custom Variable:  s.server report

The only custom variable report I have on this list is the `s.server` report; hopefully, all of your other custom variables are capturing only business-useful information!

The reason I dislike the `s.server` variable/report is the same reason I dislike the "All Search Page Ranking" report; use the right tool for the job.  This is a lazy way of monitoring server volume for load balancing.  But if you're doing the job well on the back-end, shouldn't every server have the same level of volume?

Even if the answer to the previous question is no (I'm not a network engineer, clearly), having an _operational_ report like this doesn't make much sense to me in a _marketing_ reporting tool.

## Hide in the menu, don't restrict access

By hiding reports in the Omniture menu interface, this doesn't mean the info stops being collected or becomes unavailable to all users.  Rather, the option to use the reports isn't immediately obvious (since they don't show up in the menu).  Power Users can still find these reports using the search box if necessary to answer an oddball question.

But in my experience, the information in these reports are generally not business useful, or are lacking in some critical way.  If you can't make _regular, high impact decisions_ with the info, then you're better off never looking at it at all.
