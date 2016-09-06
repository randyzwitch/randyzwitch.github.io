---
title: 'Adobe Discover 3:  First Impressions'
date: 2012-04-27T08:24:21+00:00
author: Randy Zwitch
layout: post
permalink: /adobe-discover-3-first-impressions/
category: Analytics
tags:
  - Adobe Discover
  - Analytics
  - Omniture
---
<img class="alignright size-full wp-image-1020" title="adobe-discover-logo" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-logo.png?fit=184%2C43" alt="Adobe Discover" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-logo.png?w=184 184w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-logo.png?resize=150%2C35 150w" sizes="(max-width: 184px) 100vw, 184px" data-recalc-dims="1" />With yesterday's code release, <del>Omniture</del> Adobe released version 3 of their "Discover" tool, THE way to perform web analysis within the Adobe Digital Marketing Suite.  While SiteCatalyst has its place for basic reporting, to really dig deep into your data for actionable insights there's no substitute to using Discover.

But as with every product overhaul, there is the potential to change things that users liked and while not make enough improvement to excite the user base...but luckily, that's not the case with Discover 3 (D3).  Here's how I see the new features and design changes.



## New "Darth Vader" interface

<div id="attachment_1025" style="width: 357px" class="wp-caption alignright">
  <img class="size-full wp-image-1025" title="adobe-discover-3-screenshot" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-3-screenshot.png?fit=347%2C219" alt="Adobe Discover 3 interface" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-3-screenshot.png?w=347 347w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-3-screenshot.png?resize=150%2C94 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-3-screenshot.png?resize=300%2C189 300w" sizes="(max-width: 347px) 100vw, 347px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    "Ooh, tough looking. Just like hardcore web analysts!"
  </p>
</div>

Of all the cool things about D3, I'm not sure the new color palette is one of them.  <a title="Adobe Discover 3 announcement" href="http://blogs.adobe.com/digitalmarketing/analytics/discover-3-0-the-new-ui-might-just-be-as-cool-as-the-analysts-who-use-it/" target="_blank">Several reasons were given by Adobe</a> for choosing the carbon colored interface, from trying to match analyst's personalities (yuck!), reducing eye strain (ok), and consistent branding (eh).  Of the three, I'll say that reducing eye strain is a worthy goal, although D3 never struck me as "eye-burning" in the past.

Maybe I'll grow to like it, but right now, it seems really dark.  The light gray text on dark gray background needs a bit more contrast, and in general, the interface feels kinda depressing.

## Calendars - No more #^%&$ sliders!

Now we're getting somewhere.  The slider interface in Discover 2 never made sense to me.  You pick your time period up front, open a report, and then to modify the time period within an individual report you needed to move a bunch of jerky sliders around.

In D3, we now have the same style calendar interface as SiteCatalyst.  Makes sense from a consistency standpoint within the Adobe Digital Marketing Suite and a general UX standpoint.  Pointing at two dates on the calendar is way easier and faster than moving endpoints of a slider!





## Heterogeneous Pathing

This is so completely badass and the best new feature of D3.  No longer are you confined to a fallout report that only includes just one Omniture variable type.  So if I want to do a funnel that measures visits containing a few different pages, then triggering a Facebook 'Like' event, a Cart Open, then an Exit Link, I can now do so!

You can also switch from "Visit-level" to "Visitor-level" on the fly, which can also be useful depending on how your view your business.  Some people like to think about every visit being an opportunity to convert on-site, whereas Avinash advocates in his <a title="Web Analytics 2.0 link" href="http://www.amazon.com/gp/product/0470529393/ref=as_li_ss_tl?ie=UTF8&tag=thefuquexpe-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0470529393" target="_blank">Web Analytics 2.0 book</a> that using <a title="Avinash Visitors Conversion Rate" href="http://www.kaushik.net/avinash/excellent-analytics-tip5-conversion-rate-basics-best-practices/" target="_blank">Visitors as the denominator for conversion rate</a> is the proper thought model.  I won't weigh in on the difference in this post, but it's cool that we can now change back-and-forth to see what the differences in the data are.

## Table Builder

<div id="attachment_1030" style="width: 337px" class="wp-caption alignleft">
  <img class="size-full wp-image-1030" title="adobe-discover-3-table-builder" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-3-table-builder.png?fit=327%2C225" alt="Adobe Discover Table Builder" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-3-table-builder.png?w=327 327w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-3-table-builder.png?resize=150%2C103 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2012/04/adobe-discover-3-table-builder.png?resize=300%2C206 300w" sizes="(max-width: 327px) 100vw, 327px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    Nice drag-and-drop options, very PivotTable like
  </p>
</div>

Finally, the last really obvious difference between D2 and D3 is the table builder while using ranked reports.  Like the eye-strain issue talked about above, the amount of time that it took for reports to build never really seemed like an issue to me.  Perhaps that's the SAS programmer side of me that often waits hours to return a result of a complex set of commands.

But now that I've used the table builder, it's definitely an improvement on how data tables get built.  You get to specify each element you want in the table first, THEN the data gets retrieved.  It may sound like a small change, but when you already know what you want, not having to wait for the table to build while you keep dragging in metrics does _feel like_ it's way faster to get the table you are looking for.

## Adobe D3 - Definitely an improvement

There are probably 20 other things I haven't noticed yet in the new Discover 3 interface, but from what I have used so far, this is a great upgrade in functionality!  It feels faster to get things completed with the table builder and the new pathing functionality across all variable types is a long time coming.  Now, if only there was a different color palette I could choose, it'd be perfect...maybe something like this?

<div id="attachment_1034" style="width: 408px" class="wp-caption alignleft">
  <img class="size-full wp-image-1034 " title="omniture-discover-1.5" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/omniture-discover-1.5.png?fit=398%2C266" alt="Omniture Discover 1.5" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/omniture-discover-1.5.png?w=398 398w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/omniture-discover-1.5.png?resize=150%2C100 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2012/04/omniture-discover-1.5.png?resize=300%2C200 300w" sizes="(max-width: 398px) 100vw, 398px" data-recalc-dims="1" />

  <p class="wp-caption-text">
    You should prefer green, not carbon.
  </p>
</div>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

Long-time Discover users, how do you feel about the new D3 release?
