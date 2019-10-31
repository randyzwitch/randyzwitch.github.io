---
title: DataOps Summit&#58; Streaming Real-time Telemetry With OmniSci and StreamSets
date: '2019-10-31'
author: Randy Zwitch
layout: post
permalink: /omnisci-dataops-streamsets/
description: The F1 Demo debuted at NVIDIA GTC 2019 to demonstrate real-time streaming with the OmniSci GPU database. This talk from DevOps Summit 2019 highlights the internals of the streaming data pipeline.
tags:
- OmniSci
- Data Engineering
- Groovy
- JVM

---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GqLCK3Eohss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this talk from the [StreamSets DataOps 2019 conference](https://www.dataopssummit-sf.com/), I provide an overview of the [data pipeline for the OmniSci F1 Demo](https://www.omnisci.com/blog/creating-the-omnisci-f1-demo). Using [StreamSets Data Collector](https://streamsets.com/opensource) in concert with [Apache Kafka](https://kafka.apache.org/) and [OmniSciDB](https://github.com/omnisci/omniscidb), you can create a full real-time data pipeline for telemetry data using only open-source components.

The talk outlines using the UDP listener for StreamSets to collect packets from the F1 2018 game, writing the packets to Kafka, reading from Kafka and using Groovy to parse the packets, and using the [OmniSci JDBC driver](https://github.com/omnisci/omnisci-jdbc) to insert the data into one of nine OmniSciDB tables. With this workflow, you have a robust platform for accelerated analytics, using the power of GPUs for fast computation.


<br>

GitHub: [https://github.com/omnisci/vehicle-telematics-analytics-demo](https://github.com/omnisci/vehicle-telematics-analytics-demo)

Speakerdeck: [https://speakerdeck.com/omnisci/the-f1-demo-streaming-real-time-telemetry-using-apache-kafka-and-streamsets](https://speakerdeck.com/omnisci/the-f1-demo-streaming-real-time-telemetry-using-apache-kafka-and-streamsets)
