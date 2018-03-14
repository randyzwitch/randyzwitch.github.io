####### Example R script for integrating RSiteCatalyst and Microsoft Power BI
####### Created by: Randy Zwitch
####### Last updated: 2018-03-14
####### Blog post link: http://randyzwitch.com/rsitecatalyst-powerbi-desktop-microsoft/

library(RSiteCatalyst)
SCAuth("yourname", "yourcredentials")

mar2018 <- QueueOvertime("yourreportsuite", metrics = c("visits", "pageviews"),
                   date.from = "2018-03-01",
                   date.to = "2018-03-31")

referrers <- QueueRanked("yourreportsuite", date.from = "2018-03-01",
                         date.to = "2018-03-31",
                         metrics = "instances",
                         elements = "referrer")

top10pv <- QueueRanked("yourreportsuite", date.from = "2018-03-01",
                       date.to = "2018-03-31",
                       metrics = "pageviews",
                       elements = "page")
