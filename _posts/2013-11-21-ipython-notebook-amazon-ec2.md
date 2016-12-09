---
title: Using Amazon EC2 with IPython Notebook
date: 2013-11-21T20:13:11+00:00
author: Randy Zwitch
layout: post
permalink: /ipython-notebook-amazon-ec2/
category: DataScience
description: Using IPython Notebook with Amazon EC2 is a great way to access large amounts of computing power at very low cost. Here's how to do it.
tags:
  - Amazon EC2
  - Python
---
Last week, I wrote a guest blog post at <a title="Guest post at Bad Hessian" href="http://badhessian.org/2013/11/cluster-computing-for-027hr-using-amazon-ec2-and-ipython-notebook/" target="_blank">Bad Hessian</a> about how to use IPython Notebook along with Amazon EC2 as your data science & analytics platform. I won't reproduce the whole article here, but if you are interested in step-by-step instruction on how to setup an Amazon EC2 instance to use IPython Notebook, see the SlideShare presentation below which outlines the steps needed to setup a remote IPython Notebook environment (or, <a title="amazon-ec2-ipython-installation PDF" href="http://randyzwitch.com/wp-content/uploads/2013/11/cluster-computing-ipython-ec2.pdf" target="_blank">PDF download</a>).

<iframe src="http://www.slideshare.net/slideshow/embed_code/28501345" width="476" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

If you already have experience setting up EC2 images and just need the IPython Notebook settings, here are the commands that are needed to set up your IPython public notebook server.

{% highlight python linenos %}
#### Start IPython, generate SHA1 password to use for IPython Notebook server

$ ipython
Python 2.7.5 |Anaconda 1.8.0 (x86_64)| (default, Oct 24 2013, 07:02:20)
Type "copyright", "credits" or "license" for more information.

IPython 1.1.0 -- An enhanced Interactive Python.
?         -> Introduction and overview of IPython's features.
%quickref -> Quick reference.
help      -> Python's own help system.
object?   -> Details about 'object', use 'object??' for extra details.

In [1]: from IPython.lib import passwd

In [2]: passwd()
Enter password:
Verify password:
Out[2]: 'sha1:207eb1f4671f:92af695...'

#### Create nbserver profile

$ ipython profile create nbserver
[ProfileCreate] Generating default config file: u'/.ipython/profile_nbserver/ipython_config.py'
[ProfileCreate] Generating default config file: u'/.ipython/profile_nbserver/ipython_qtconsole_config.py'
[ProfileCreate] Generating default config file: u'/.ipython/profile_nbserver/ipython_notebook_config.py'
[ProfileCreate] Generating default config file: u'/.ipython/profile_nbserver/ipython_nbconvert_config.py'

#### Create self-signed SSL certificate

$ openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout mycert.pem -out mycert.pem

#### Modify ipython_notebook_config.py configuration file
#### Add these lines to the top of the file; no other changes necessary
#### Obviously, you'll want to add your path to the .pem key and your password

# Configuration file for ipython-notebook.

c = get_config()

# Kernel config
c.IPKernelApp.pylab = 'inline'  # if you want plotting support always

# Notebook config
c.NotebookApp.certfile = u'/home/ubuntu/certificates/mycert.pem'
c.NotebookApp.ip = '*'
c.NotebookApp.open_browser = False
c.NotebookApp.password = u'sha1:207eb1f4671f:92af695...'
# It is a good idea to put it on a known, fixed port
c.NotebookApp.port = 8888

#### Start IPython Notebook on the remote server

$ ipython notebook --profile=nbserver
{% endhighlight %}

Happy IPython Notebooking!
