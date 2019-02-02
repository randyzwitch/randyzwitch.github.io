---
title: PyData NYC 2018&#58; End-to-End Data Science Without Leaving the GPU
date: '2019-02-01'
author: Randy Zwitch
layout: post
permalink: /omnisci-cudf-pydata-nyc-2018/
description: In this talk, I demonstrate how to use OmniSci in combination with cudf from the RAPIDS.ai project to forecast electricity demand without the data leaving the GPU
category: DataScience
tags:
- OmniSci
- Python
- RAPIDS

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/gQszQcFHcZc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This talk is from October 2018, and so much has changed in the [GOAI/RAPIDS](https://rapids.ai/) ecosystem that it's comical to see how much has changed! Regardless, the high-level concepts of how [OmniSci](https://www.omnisci.com) works and the concepts behind GPU dataframes (then: pygdf, now: [cudf](https://github.com/rapidsai/cudf)) remain the same, so watching this talk still has value if you are interested in an end-to-end GPU workflow.

[With the release of pymapd 0.7 a few days ago](https://www.omnisci.com/blog/pymapd_0.7_updated_RAPIDS_support_pyarrow_python_more/), getting started with GPU data science is just a matter of having an NVIDIA GPU and [OmniSci Core (OSS)](https://github.com/omnisci/mapd-core) and a quick conda command to set up your environment:

`conda install -c conda-forge -c nvidia -c rapidsai -c numba -c defaults pymapd cudf python=3.6`

So check out the video, grab the Jupyter Notebook from the [pydatanyc2018 GitHub repo](https://github.com/omnisci/pydatanyc2018) and get started with GPU-accelerated data science!
