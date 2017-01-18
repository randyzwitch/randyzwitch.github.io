---
title: Building a Data Science Workstation (2017)
date: '2017-01-18'
author: Randy Zwitch
layout: post
permalink: /building-data-science-workstation-2017/
description: For right around $2000, you can build a desktop/workstation for data science that will stretch your idea of capabilities of a single machine.
category: DataScience
tags:
- GPU
- Graph Databases
- Hadoop
- Data Visualization
---
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">i need some kind of super computer to parse a multi-gigabyte XML file, <a href="https://twitter.com/randyzwitch">@randyzwitch</a></p>&mdash; jason thompson (@usujason) <a href="https://twitter.com/usujason/status/821429000270528512">January 17, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

For all the downsides of social media these days, the people I've met and the inside jokes bring me immense joy. From just this one tweet, several people messaged me aghast at 1) the idea of multi-gigabyte XML and that 2) I apparently have a computer for just this purpose!

Recently, I did build a workstation as a test bed for learning more about data science, specifically in the areas of Docker and GPU computing. Here's what I built.

## Machine Specs and Assembling from Parts

While there are several specialist workstation companies like [Titan Computing](http://www.titancomputers.com/SearchResults.asp?Search=workstation) that sell configurable workstations, assembling a computer from parts is pretty easy, and more importantly, can be significantly cheaper if you choose 'consumer-grade' parts instead of 'server-grade'. Because I'm not planning on curing cancer or building Skynet with this computer, I opted not to get a dual-chip motherboard and used a single Intel i7 chip rather than going with Xeon workstation class chip(s). I also chose to use standard DDR4 RAM rather than ECC RAM. Here's the full spec list:

[PCPartPicker part list](https://pcpartpicker.com/list/TPwTjc)

| Component  | Details |
| ------------- | ------------- |
| CPU  | Intel Core i7-5820K 3.3GHz 6-Core Processor  |
| CPU Cooler| Cooler Master Hyper 212 EVO 82.9 CFM Sleeve Bearing CPU Cooler |
| Motherboard| Asus X99-A II ATX LGA2011-3 Motherboard |
| Memory| Crucial Ballistix Sport LT 32GB (2 x 16GB) DDR4-2400 Memory  |
| Memory| Crucial Ballistix Sport LT 32GB (2 x 16GB) DDR4-2400 Memory  |
| Memory| Crucial Ballistix Sport LT 32GB (2 x 16GB) DDR4-2400 Memory  |
| Memory| Crucial Ballistix Sport LT 32GB (2 x 16GB) DDR4-2400 Memory  |
| Storage| Samsung 850 EVO-Series 250GB 2.5" Solid State Drive  |
| Storage| Hitachi Deskstar 1TB 3.5" 7200RPM Internal Hard Drive  |
| Video Card| EVGA GeForce GTX 1060 6GB 6GB SC GAMING Video Card  |
| Case| Corsair SPEC-02 ATX Mid Tower Case  |
| Power Supply| Corsair CXM 750W 80+ Bronze Certified Semi-Modular ATX Power Supply |
| Optical Drive| Asus DRW-24B1ST/BLK/B/AS DVD/CD Writer  |

Total: ~$2000

So for about $2000 and a few hours of time assembling, I have the rough equivalent of an r3.4xlarge instance on AWS ($1.33/hr on-demand at the time of writing). It would take about 1500 hours of usage to breakeven vs. using AWS, but cost isn't really the point; the convenience of having the computer in my house and not having to do the startup/shutdown/EC2 images/S3/firewall/etc. dance is more than worth it to me so that I can focus on learning instead of operations.

## Ubuntu 16.04LTS, CUDA, and Other Installs

While I did use Windows 10 to validate I put together my hardware correctly (and to mess with overlocking settings using the ASUS motherboard tools), I decided to use Ubuntu 16.04LTS as my base operating system. This allows for the most 'server-like' operations that I'm used to from a Linux environment. I enabled an internal static IP through my router, and for the most part, I either SSH into the machine from my MacBook Pro or use web UIs such as Jupyter Notebook (and again, remotely from my laptop).

I tried to install the NVIDIA drivers from source for the GTX1060 GPU, but eventually gave up and went the [apt package manager route](http://tipsonubuntu.com/2016/08/24/nvidia-367-44-support-titan-x-pascal-gtx-1060/) and everything works fine. Though I rarely sit at my desktop, I do have a 4K monitor hooked up to this computer which looks _gorgeous_ with a video card of this caliber, and I have CUDA installed and working as well.  

From there, I installed any number of tools from Python, R, Julia, MonetDB, Docker, Neo4j, Postgres, Spark, BlazingDB...any/all of which I hope to write about more in the near future.
