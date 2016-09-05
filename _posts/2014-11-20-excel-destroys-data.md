---
id: 3200
title: Destroy Your Data Using Excel With This One Weird Trick!
date: 2014-11-20T10:07:55+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3200
permalink: /excel-destroys-data/
tweetbackscheck:
  - 1472942034
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3200";s:7:"tinyurl";s:26:"http://tinyurl.com/owunb8q";s:4:"isgd";s:19:"http://is.gd/p3mKbv";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
categories:
  - Miscellany
tags:
  - Data Visualization
  - Excel
  - Statistics
---
<div id="attachment_3201" style="width: 621px" class="wp-caption aligncenter">
  <a href="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/pie-charts-are-better.png"><img class="size-full wp-image-3201" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/pie-charts-are-better.png?fit=611%2C369" alt="All you pie-chart haters are wishing I used one here." srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/pie-charts-are-better.png?w=611 611w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/pie-charts-are-better.png?resize=150%2C90 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/pie-charts-are-better.png?resize=300%2C181 300w" sizes="(max-width: 611px) 100vw, 611px" data-recalc-dims="1" /></a>
  
  <p class="wp-caption-text">
    All you pie-chart haters are wishing I used one here.
  </p>
</div>

## 

I often use Twitter as a place to vent about the horribleness of Excel, from the product itself to analyses its UI and workflow influences. Admittedly, some of this is snobbish preference: if everyone used my preferred tools, then the world would be a better place! But let me back off my snobbishness a bit and just say this: please feel free to use any tool you want, up to and including pencil-and-paper&#8230;JUST.STOP.USING.EXCEL.
  

  


Excel arbitrarily destroys data for fun, as evidenced by the example below.

## Who Gives A &#8216;F&#8217; About Seconds? I&#8217;m 10 minutes Late Everywhere!

CSV files have many flaws, but at least they are just plain text. It doesn&#8217;t take any special software to read them and you can open and close them without loss of fidelity&#8230;except if you open them with Excel.

Suppose you have a CSV file with timestamps in ISO8601 format. Depending on which text editor you use, it might look something like this:

[<img class="aligncenter size-full wp-image-3209" src="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/timestamp.png?fit=403%2C144" alt="timestamp" srcset="http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/timestamp.png?w=403 403w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/timestamp.png?resize=150%2C53 150w, http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/timestamp.png?resize=300%2C107 300w" sizes="(max-width: 403px) 100vw, 403px" data-recalc-dims="1" />](http://i0.wp.com/randyzwitch.com/wp-content/uploads/2014/11/timestamp.png)

Now, let&#8217;s open our file in Excel:

[<img class="aligncenter size-full wp-image-3211" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-dates.png?fit=972%2C543" alt="excel-dates" srcset="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-dates.png?w=972 972w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-dates.png?resize=150%2C83 150w, http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-dates.png?resize=300%2C167 300w" sizes="(max-width: 972px) 100vw, 972px" data-recalc-dims="1" />](http://i2.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-dates.png)

The first thing you might notice is that not only does Excel change the date formatting in the file to be more &#8220;&#8216;Murican&#8221;, they don&#8217;t even have the courtesy to use one of their existing date or time formats! And rather than keep the date the way it was, or standardize the dates to the way the rest of the world writes them, or even keep fixed-width columns, Excel feels like it should also hide the seconds! Makes sense&#8230;seconds are for other people to see, if/when they highlight an individual cell.

So, you&#8217;ve opened this file, but can&#8217;t remember if you made any changes outside of applying auto-width to the columns. The data still _looks_ right, so you hit &#8216;Save&#8217; when prompted by Excel. But you remember that your favorite programmer asked for a CSV file, and it&#8217;s already a CSV file, so you hit save, ignore the &#8216;features&#8217; Excel brags about and email it back to your co-worker. Here&#8217;s what they receive:

[<img class="aligncenter size-full wp-image-3215" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-fidelity-loss.png?fit=353%2C143" alt="excel-fidelity-loss" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-fidelity-loss.png?w=353 353w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-fidelity-loss.png?resize=150%2C60 150w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-fidelity-loss.png?resize=300%2C121 300w" sizes="(max-width: 353px) 100vw, 353px" data-recalc-dims="1" />](http://i1.wp.com/randyzwitch.com/wp-content/uploads/2014/11/excel-fidelity-loss.png)

&nbsp;

Reading this back in our plain-text editor, we can now see we have a loss of fidelity of between 37 and 47 seconds on each cell of data. Whereas Excel keeps track of your timestamps while you&#8217;re in a SPREADSHEET, if you save as plain text, Excel assumes you want to keep the format it automatically applied to your data (automatically! silently!), and thus, destroys your file. In what world would you not care about seconds in your timestamps?

Remember, this mis-feature occurs even if the only thing you do is open a plain-text file in Excel and hit save. No other Excel actions are needed to destroy your data.

## Excel: Only The Proper Tool If You Don&#8217;t Care

If you don&#8217;t care about using the proper tool for analytics, don&#8217;t want to learn something new, don&#8217;t want numerical accuracy, hate visually interesting graphics, don&#8217;t need reproducibility&#8230;use Excel. For everything else, there&#8217;s everything else. Don&#8217;t be a VLOOKUP guru, use SQL. Don&#8217;t store your data in Excel just because it allows for a million rows, use a database. If you need point-and-click graphics, at least spring for Tableau so the defaults look nicer.

Or, learn to code using open-source languages for a total licensing cost of $0. Every analyst would get value from knowing one open-source analytics language, even topically, so that you can write simple calculation scripts and document your thought process. A side benefit is that by coding, you can also use version control like Git or SVN. Then, you can have different versions of thought, and the next analyst down the line can see how your analysis has evolved.

And while I&#8217;m ranting, a special message for all you &#8216;top-tier&#8217; analytics consultants out there: you should know SEVERAL of the common analytics languages. If you do your &#8220;analysis&#8221; in Excel, you are a hack or you are just providing _reporting_ for $300/hr. Use better tools, your clients deserve better. I have infinitely more respect for someone who delivers a sloppy set of slides and a documented R script than someone who knows who to put drop-shadows on MS Office documents and makes fancy decks. You are being judged not just by the C-Suite, but also by snobs like me. And when contract renewal time comes around, they do ask my opinion and I do make comments on how sophisticated your toolset was that you used (or lack thereof if you&#8217;re using Excel).

It&#8217;s nearly 2015, do better. Stop Using Excel.