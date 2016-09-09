---
title: Hadoop Streaming with Amazon Elastic MapReduce, Python and mrjob
date: 2013-07-31T12:34:58+00:00
author: Randy Zwitch
layout: post
permalink: /amazon-elastic-map-reduce-mrjob-python/
category: DataScience
tags:
  - EMR
  - Hadoop
  - MapReduce
  - Python
---
In a previous rant about <a title="Data Science & Innovation" href="http://randyzwitch.com/data-science-innovation/" target="_blank">data science & innovation</a>, I made reference to a problem I'm having at work where I wanted to classify roughly a quarter-billion URLs by predicted website content (without having to actually visit the website). A few colleagues have asked how you go about even starting to solve a problem like that, and the answer is _massively parallel processing_.

## Attacking the problem using a local machine

In order to classify the URLs, the first thing that's needed is a customized dictionary of words relative to our company's subject matter. When you have a corpus of words that are already defined (such as a digitized book), finding the population of words is relatively simple: split the text based on spaces & punctuation and you're more or less done. However, with a URL, you have one continuous string with no word boundaries. One way to try and find the boundaries would be the following in Python:

{% highlight python linenos %}
import collections
import nltk

#Dictionary from Unix
internal_dict = open("/usr/share/dict/words")
#Stopwords corpus from NLTK
stopwords = nltk.corpus.stopwords.words('english')

#Build english_dictionary of prospect words
english_dictionary = []
for line in internal_dict:
    if line not in stopwords and len(line) > 4:  #make sure only "big", useful words included
        english_dictionary.append(line.rstrip('\n'))

#How many words are in the complete dictionary?        
len(english_dictionary)

#Import urls
urls = [line for line in open("/path/to/urls/file.csv")]

#Build counter dictionary
wordcount = collections.Counter()
for word in english_dictionary:    #Loop over all possible English words
  for url in urls:     #Loop over all urls in list
    if word in url:
      wordcount[word] += 1 #Once word found, add to dictionary counter
{% endhighlight %}

The problem with approaching the word searching problem in this manner is you are limited to the power of your local machine. In my case with a relatively new MacBook Pro, I can process 1,000 lines in 19 seconds as a single-threaded process. At 250,000,000 URLs, that's 4.75 million seconds...197,916 minutes...3,298 hours...137 days...**4.58 months! ** Of course, 4.58 months is for the data I have <span style="text-decoration: underline;">now</span>, which is accumulating every second of every day. Clearly, to find just the custom dictionary of words, I'll need to employ MANY more computers/tasks.

## Amazon ElasticMapreduce = Lots of Horsepower

One thing you might notice about the Python code above is that the two loops have no real reason to be run serially; each comparison of URL and dictionary word can be run independently of each other (often referred to as "<a title="Embarassingly parallel" href="http://english.stackexchange.com/questions/83677/what-is-embarrassing-about-an-embarrassingly-parallel-problem" target="_blank">embarrassingly parallel</a>"). This type of programming pattern is one that is well suited to running on a Hadoop cluster. With Amazon ElasticMapReduce (EMR), we can provision tens, hundreds, even thousands of computer instances to process this URL-dictionary word comparison, and thus getting our answer much faster. The one downside of using Amazon EMR to access Hadoop is that EMR expects to get a Java ``.jar` file containing your MapReduce code. Luckily, there is a Python package called <a title="MRjob Python package" href="http://pythonhosted.org/mrjob/" target="_blank">MRJob</a> that does the Python-to-Java translation automatically, so that users don't have to switch languages to get massively parallel processing.

## Writing MapReduce code

The Python code above, keeping a tally of words & number of occurrences IS a version of the MapReduce coding paradigm. Going through the looping process to do the comparison is the "Map" portion of the code and the sum of the word values is the "Reduce" step. However, in order to use EMR, we need to modify the above code to remove the outer URL loop:

{% highlight python linenos %}
from mrjob.job import MRJob

class MRWordCounter(MRJob):    

  def mapper(self, english_dict, line):
  english_dict = ['aal', 'aalii', 'aam', 'aani'...'zythum', 'zyzomys', 'zyzzogeton']

  for word in english_dict:
            if word in line:
                yield word, 1

  def reducer(self, word, occurrences):
        yield word, sum(occurrences)

if __name__ == '__main__':
    MRWordCounter.run()
{% endhighlight %}

The reason why we remove the outer loop that loops over the lines of the URL file is because that is implicit to the EMR/Hadoop style of processing. We will specify a file that we want to process in our Python script, then EMR will distribute the URLs file across all the Hadoop nodes. Essentially, our 250,000,000 million lines of URLs will become 1,000 tasks of length 250,000 urls (assuming 125 nodes of 8 tasks each).

### Calling EMR from the Python command line

Once we have our Python MRJob code written, we can submit our code to EMR from the command line. Here's what an example code looks like:

{% highlight shell linenos %}
python ~/Desktop/mapreduce.py -r emr s3://<s3bucket>/url_unload/0000_part_01 --output-dir=s3://<s3bucket>/url_output --num-ec2-instances=81
{% endhighlight %}

There are many more options that are possible for the MRJob package, so I highly suggest that you read the <a title="MRJobs EMR options" href="http://pythonhosted.org/mrjob/guides/emr-quickstart.html" target="_blank">documentation for EMR options</a>. One thing to also note is that MRJob uses a configuration file to host various options for EMR called "runners".  Yelp (the maker of the MRJob package) has posted an <a title="MRJob .conf file" href="https://github.com/Yelp/mrjob/blob/master/mrjob.conf.example" target="_blank">example of the mrjob.conf file</a> with the most common options to use. In this file, you can specify your Amazon API keys, the type of instances you want to use (I use c1.xlarge spot instances for the most part), where your SSH keys are located and so on.

## Results

In terms of performance, I have 8 files of 5GB's each of URLs (~17.5 million lines per file) that I'm running through the MRJob code above. The first file was run with 19 c1.xlarge instances, creating on average 133 mappers and 65 reducers and taking 917 minutes (_3.14 seconds/1000 lines_).  The second file was run with 80 c1.xlarge instances, creating 560 mappers and 160 reducers and taking 218 minutes (_0.75 seconds/1000 lines_). So using four times as many instances leads to one-fourth of the run-time.

For the most part, you can expect linear performance in terms of adding nodes to your EMR cluster. I know at some point, Hadoop will decide that it no longer needs to add any more mappers/reducers, but I haven't had the desire to find out exactly how many I'd need to add to get to that point! 🙂
