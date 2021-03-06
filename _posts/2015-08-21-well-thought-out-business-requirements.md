---
title: Four Tactics For Well Thought Out Business Requirements
date: 2015-08-21T10:42:13+00:00
author: Randy Zwitch
layout: post
permalink: /well-thought-out-business-requirements/
category: Miscellany
description: Well thought out business requirements are the key to success for a short-term project and your long-term career. Here are four tactics to try.
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



One of the most common issues in business (especially large corporations) is trying to nail down the requirements for a given analysis request. The "business people" on the front-lines are talking to their higher-ups about what they think are important questions for the business to solve, but by the time the question gets to the analyst or developer, it sounds something like:

> It would be interesting to model using SAS how our customers shop for our merchandise by channel and what overlaps there are between demographics, geography, product type and tenure. But we also have to timebox this, we can't be boiling-the-ocean just looking for needles-in-a-haystack.

Say WHAT? Mr. Business Person, I cannot help you if you do not run that mess through [Unsuck-It](http://unsuck-it.com/) first.

In all seriousness, I've found there are a few great ways for an analyst to refine a "question" like the one above into an actionable plan of attack. So the next time you get a jargon-filled, completely generic analysis request such as the one above, try these four tactics.

### 1. All Requests Should Be Phrased In The Form Of A Question

The first thing to notice about the mock interaction above is that there are no question marks; it's not a question! For an analyst or developer to work effectively, _questions_ need to be presented, not bland _statements_. For example, a refinement series of questions from the analyst might include:

  * You need a _model_? What type of model? Do you mean a predictive model, a decision tree for understanding, a PivotTable for you to poke at, a one-page PowerPoint slide to give your boss?
  * You specified four attributes (demographics, geography, product type and tenure). Do you have a hypothesis around these attributes (or are you just brain-blabbing)?
  * What is meant by "shop"? Do you mean how do customers browse our goods online and in stores, the purchase cycle, what goods are frequently purchased together or something else?

Note that in all three of the refinement questions above, you are taking a generic idea and really drilling into what is needed. It is _the analyst_ that is the expert in the techniques for analyzing data, so the analyst should be helping the business person to take a raw analysis request and make it into answerable questions.

### 2. Separate The Tools From The Question

The second thing to notice in the mock interaction above is the statement "_using SAS_". I didn't write that to pick on SAS, but rather, this exact statement was said to me early in my career. I had a boss who would try and guess which tool was appropriate for the question he was asking. I presume that he was trying to gauge how hard he thought the problem was, or try to signal to me how hard he thought the problem was. In the end, a plain SQL query with the results copied into an Excel table was all that was necessary.

As the analyst, confirm whether _the tool_ is actually part of the _deliverable_. Meaning, if you need to deliver a Tableau workbook, ok, specifying "use Tableau" is an important part of the business question. But if the requirement is "production-quality visualizations", Tableau may or may not be the right tool or might just be one part of a larger workflow.

### 3. Every Question Is Interesting To Someone. Solve The Valuable Ones.

Paraphrasing the aphorism "_The path to hell is paved with good intentions_", the path to doing low-value work your entire career is answering questions that start "Wouldn't it be interesting if...".

The basis for these statements are often tangents in other meetings, where high-level executives think there is information that should just be available at everyone's fingertips. But if you were to ask "What business action would you take if you knew this piece of information?" or "Is it worth me stopping a project worth $1 million in Pre-Tax Profit per month to answer this for you?", you'll suddenly the question becomes a lot less _interesting_.

So always have estimates of the business impact of what you are currently working on and ask for the same estimate of those who ask for your time. Projects that are _valuable_ to the business are "interesting", everything else is just _making work_ for other people.

### 4. Don't Just Solved The Stated Question. Solve The Unstated Question Too.

Finally, when I read the mock interaction above, there are actually _two_ questions:

  * Stated: Do we understand our customer's purchasing behaviors?
  * Unstated: How do we optimize our business to take into account our customer's purchasing behaviors?

For sure, a deep understanding of the customer base is important no matter the product. But the unstated question of "What are we doing to _do about it_?" is so much more valuable to answer (i.e. tactic #3).

So even if the refined question becomes 'Build a customer segmentation based on past purchases', go one step further and figure out how to implement your findings. Create a test plan for increasing email click-through-rates based on the segments or optimize your display bidding, maybe build a recommender system for your website...implementation of new ideas is always going to be more valuable than just analyzing the past.

### Always Be Assertive.

If the key to sales is "Always Be Closing", the key to quality analysis is "Always Be Assertive". Ask questions. Make people think about what they are doing, what they ask of others and what can be done to improve the business. It's a rare, ego-centric co-worker who doesn't appreciate collaborating to get to a better quality question (and answer!) than they originally started with.

Being able to read into what other people are asking for, estimating its value, then delivering more than they even knew they were asking for has helped me tremendously throughout my career. Hopefully by doing some or all of the tactics above, you'll see a marked improvement in your analysis and career as well!
