---
id: 3696
title: Four Tactics For Well Thought Out Business Requirements
date: 2015-08-21T10:42:13+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=3696
permalink: /well-thought-out-business-requirements/
tweetbackscheck:
  - 1472825923
shorturls:
  - 'a:3:{s:9:"permalink";s:30:"http://randyzwitch.com/?p=3696";s:7:"tinyurl";s:26:"http://tinyurl.com/pjln9mq";s:4:"isgd";s:19:"http://is.gd/NmsViC";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - Miscellany
tags:
  - Analytics
  - Business
  - Data Visualization
  - Excel
  - SAS
  - SQL
  - Tableau
---
<blockquote class="twitter-tweet" data-partner="tweetdeck">
  <p dir="ltr" lang="en">
    <a href="https://twitter.com/randyzwitch">@randyzwitch</a> how to get (reasonably) well thought-through requirements from business people?
  </p>

  <p>
    — Art Webb (@arthurlwebb) <a href="https://twitter.com/arthurlwebb/status/634710548685418496">August 21, 2015</a>
  </p>
</blockquote>



One of the most common issues in business (especially large corporations) is trying to nail down the requirements for a given analysis request. The &#8220;business people&#8221; on the front-lines are talking to their higher-ups about what they think are important questions for the business to solve, but by the time the question gets to the analyst or developer, it sounds something like:

> It would be interesting to model using SAS how our customers shop for our merchandise by channel and what overlaps there are between demographics, geography, product type and tenure. But we also have to timebox this, we can&#8217;t be boiling-the-ocean just looking for needles-in-a-haystack.

Say WHAT? Mr. Business Person, I cannot help you if you do not run that mess through <a href="http://unsuck-it.com/" target="_blank">Unsuck-It</a> first.

In all seriousness, I&#8217;ve found there are a few great ways for an analyst to refine a &#8220;question&#8221; like the one above into an actionable plan of attack. So the next time you get a jargon-filled, completely generic analysis request such as the one above, try these four tactics.

### 1. All Requests Should Be Phrased In The Form Of A Question

The first thing to notice about the mock interaction above is that there are no question marks; it&#8217;s not a question! For an analyst or developer to work effectively, _questions_ need to be presented, not bland _statements_. For example, a refinement series of questions from the analyst might include:

  * You need a _model_? What type of model? Do you mean a predictive model, a decision tree for understanding, a PivotTable for you to poke at, a one-page PowerPoint slide to give your boss?
  * You specified four attributes (demographics, geography, product type and tenure). Do you have a hypothesis around these attributes (or are you just brain-blabbing)?
  * What is meant by &#8220;shop&#8221;? Do you mean how do customers browse our goods online and in stores, the purchase cycle, what goods are frequently purchased together or something else?

Note that in all three of the refinement questions above, you are taking a generic idea and really drilling into what is needed. It is _the analyst_ that is the expert in the techniques for analyzing data, so the analyst should be helping the business person to take a raw analysis request and make it into answerable questions.

### 2. Separate The Tools From The Question

The second thing to notice in the mock interaction above is the statement &#8220;_using SAS_&#8220;. I didn&#8217;t write that to pick on SAS, but rather, this exact statement was said to me really early in my career. I had a boss who would try and guess which tool was appropriate for the question he was asking. I presume that he was trying to gauge how hard he thought the problem was, or try to signal to me how hard he thought the problem was. In the end, a plain SQL query with the results copied into an Excel table was all that was necessary.

As the analyst, confirm whether _the tool_ is actually part of the _deliverable_. Meaning, if you need to deliver a Tableau workbook, ok, specifying &#8220;use Tableau&#8221; is an important part of the business question. But if the requirement is &#8220;production-quality visualizations&#8221;, Tableau may or may not be the right tool or might just be one part of a larger workflow.



### 3. Every Question Is Interesting To Someone. Solve The Valuable Ones.

Paraphrasing the aphorism &#8220;_The path to hell is paved with good intentions_&#8220;, the path to doing low-value work your entire career is answering questions that start &#8220;Wouldn&#8217;t it be interesting if&#8230;&#8221;.

The basis for these statements are often tangents in other meetings, where high-level executives think there is information that should just be available at everyone&#8217;s fingertips. But if you were to ask &#8220;What business action would you take if you knew this piece of information?&#8221; or &#8220;Is it worth me stopping a project worth $1 million in Pre-Tax Profit per month to answer this for you?&#8221;, you&#8217;ll suddenly the question becomes a lot less _interesting_.

So always have estimates of the business impact of what you are currently working on and ask for the same estimate of those who ask for your time. Projects that are _valuable_ to the business are &#8220;interesting&#8221;, everything else is just _making work_ for other people.

### 4. Don&#8217;t Just Solved The Stated Question. Solve The Unstated Question Too.

Finally, when I read the mock interaction above, there are actually _two_ questions:

  * Stated: Do we understand our customer&#8217;s purchasing behaviors?
  * Unstated: How do we optimize our business to take into account our customer&#8217;s purchasing behaviors?

For sure, a deep understanding of the customer base is important no matter the product. But the unstated question of &#8220;What are we doing to _do about it_?&#8221; is so much more valuable to answer (i.e. tactic #3).

So even if the refined question becomes &#8216;Build a customer segmentation based on past purchases&#8217;, go one step further and figure out how to implement your findings. Create a test plan for increasing email click-through-rates based on the segments or optimize your display bidding, maybe build a recommender system for your website&#8230;implementation of new ideas is always going to be more valuable than just analyzing the past.

### Always Be Assertive.

If the key to sales is &#8220;Always Be Closing&#8221;, the key to quality analysis is &#8220;Always Be Assertive&#8221;. Ask questions. Make people think about what they are doing, what they ask of others and what can be done to improve the business. It&#8217;s a rare, ego-centric co-worker who doesn&#8217;t appreciate collaborating to get to a better quality question (and answer!) than they originally started with.

Being able to read into what other people are asking for, estimating its value, then delivering more than they even knew they were asking for has helped me tremendously throughout my career. Hopefully by doing some or all of the tactics above, you&#8217;ll see a marked improvement in your analysis and career as well!

&nbsp;
