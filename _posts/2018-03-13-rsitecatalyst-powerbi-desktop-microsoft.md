---
title: Using RSiteCatalyst With Microsoft PowerBI Desktop
date: '2018-03-13'
author: Randy Zwitch
layout: post
permalink: /rsitecatalyst-powerbi-desktop-microsoft/
description: With the release of Power BI desktop, Microsoft has created a tool that truly bridges the gap between open-source R and point-and-click dashboard tools. Here's how to use RSiteCatalyst with Power BI Desktop.
category: Analytics
tags:
- Adobe Analytics
- Omniture
- R
- RSiteCatalyst
- Excel
---

With pretty regular frequency I get emails asking if RSiteCatalyst can be used with [Microsoft Power BI](https://powerbi.microsoft.com/en-us/). While admittedly I'm not a frequent user of the Windows operating system (nor dashboarding tools like Tableau or Power BI), I am pleased to report that it is fact possible to call the [Adobe Analytics API](https://marketing.adobe.com/developer/documentation/analytics-reporting-1-4/whatsnew) with Power BI via RSiteCatalyst!

## Step 1: Call Adobe Analytics API Using `Get Data` Menu

The majority of getting RSiteCatalyst to work within Power BI desktop is getting the R script correct. From the `Get Data` menu, choose the `More...` menu option to bring up all of the data import tools that Power BI defines:

![rsitecatalyst powerbi get data](/assets/img/rsitecatalyst-powerbi-getdata.png)

Once you choose 'R Script', an input box will open where you can place your RSiteCatalyst function calls:

![rsitecatalyst powerbi rscript](/assets/img/rsitecatalyst-powerbi-rscript.png)

After hitting 'OK', Power BI will evaluate your R code, determining which statements return a `data.frame` (which is the only allowable data structure imported into Power BI). You can choose which `data.frame(s)` you want to import from the 'Navigator' window:

![rsitecatalyst powerbi navigator](/assets/img/rsitecatalyst-powerbi-navigator.png)

Once you hit 'OK', Power BI imports the data and you can use your Adobe Analytics data just as you would in R with RSiteCatalyst (or, like any other data source like CSV or database...)

## Limitations

While it's possible to call RSiteCatalyst through Power BI, there are some limitations to keep in mind.

First, RSiteCatalyst will only work with Microsoft Power BI _Desktop_, which is installed locally on your machine. The Power BI Service, which is more of a shared dashboard/data store environment, [does not allow external API calls](https://docs.microsoft.com/en-us/power-bi/service-r-packages-support#requirements-and-limitations-of-r-packages) as part of its security model. So while you can analyze your data locally, you cannot share dashboards to the Power BI Service.

The second limitation I've noticed is that Power BI doesn't read from from a `.Renviron` file (at least, not from the default Windows location that R GUI reads). So you will need to place your credentials directly in the R script, which is never really ideal (though, may not be a big deal all things considered).

Finally, the R script runs synchronously, so when placing multiple calls in the same R script you will need to wait for all of the `data.frame` results before you can use them within Power BI. This is the same default behavior within R, sans using [Promises](https://rstudio.github.io/promises/) or parallelism of some sort, but it's still important to keep in mind.

## Dashboards, Dashboards, Dashboards!

With a few minutes work, I was able to create this rudimentary dashboard ([R code](/assets/r_code/rsitecatalyst_powerbi_example.R)):

![rsitecatalyst powerbi dashboard](/assets/img/rsitecatalyst-powerbi-dashboard.png)

Someone with more interesting/higher volume data could surely do better. But the most important thing in my opinion is that Microsoft has built an awesome integration with R and that creating dashboards in Power BI is _waaaaaay_ easier than the last time I tried to create a dashboard using Excel and the Adobe Report Builder plugin.

Happy dashboarding!
