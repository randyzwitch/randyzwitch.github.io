---
title: Data Science Without Leaving the GPU
date: '2018-07-23'
author: Randy Zwitch
layout: post
permalink: /mapd-apache-arrow-xgboost/
description: The Apache Arrow project has done an amazing job towards standardizing a columnar data format for analytics use. In this webinar, I explain the basics of Apache Arrow and demonstrate OmniSci (formerly MapD) and xgboost using Python.
category: DataScience
tags:
- OmniSci
- Python
- Machine Learning
- Hadoop

---

_Edit 10/1/2018: When I wrote this blog post, the company and product were named MapD. I've changed the title to reflect the new company name, but left the MapD references below to hopefully avoid confusion_

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9I207CIvk5Y?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Data has been growing rapidly for some time now, but CPU-based analytics solutions haven't been able to sustain the same rate of growth in order to keep up. CPUs in desktop and laptop machines have started adding more cores, but even a 4- or 8-core CPU can only do so much work. Eventually the bottleneck will become not having enough bandwidth to keep all the CPU cores 'fed' with data to manipulate. [Hadoop](/big-data-hadoop-amazon-ec2-cloudera-part-1/) provides a framework for working with larger datasets, but its distributed nature can often feel like setting it up is more hassle than its worth.

GPU-based analytics solutions provide a great middle-ground; high-parallelism via thousands of GPU cores, while not having to automatically use a networked, multi-node architecture such as Hadoop. A single [data science workstation](/building-data-science-workstation-2017/) with 2-4  GPUs can reasonably handle hundreds of millions of records, especially when using the [Ibis backend for MapD](https://www.omnisci.com/blog/scaling-pandas-to-the-billions-with-ibis-and-mapd/).

In this webinar, I demonstrate how to do each step of a machine learning workflow, from exploring a dataset to adding features to estimating an xgboost model for predicting the amount of tip a user will give after a taxi ride. Because MapD incorporates Apache Arrow under the hood for its data transfer, this can all be done seamlessly by passing pointers, rather than needing expensive I/O operations, between each tool used. Not having to transfer the data off of the GPU has interesting implications for analytics, which I also discuss towards the end of the talk.

Enjoy!
