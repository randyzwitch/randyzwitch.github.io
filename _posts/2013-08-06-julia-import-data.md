---
title: Tabular Data I/O in Julia
date: 2013-08-06T10:05:38+00:00
author: Randy Zwitch
layout: post
permalink: /julia-import-data/
category: Data Science
tags:
  - Julia
  - Python
  - R
---
Importing tabular data into Julia can be done in (at least) three ways: reading a delimited file into an array, reading a delimited file into a DataFrame and accessing databases using ODBC.



### Reading a file into an array using readdlm

The most basic way to read data into Julia is through the use of the _readdlm_ function, which will create an array:

<p style="padding-left: 30px;">
  <code>readdlm</code>(<code>source</code>, <code>delim::Char</code>, <code>T::Type</code>; <code>options...</code>)
</p>

<pre style="padding-left: 30px;"></pre>

If you are reading in a fairly normal delimited file, you can get away with just using the first two arguments, _source_ and _delim_:It's important to note that by only specifying the first two arguments, you leave it up to Julia to determine the type of array to return. In the code example above, an array of type 'Any' is returned, as the .csv file I read in was not of homogenous type such as _Int64_ or _ASCIIString_. If you know for certain which type of array you want, you specify the data type using the _type_ argument:

It's probably the case that unless you are looking to do linear algebra or other specific mathy type work, you'll likely find that reading your data into a DataFrame will be more comfortable to work with (especially if you are coming from an R, Python/pandas or even spreadsheet tradition).

To write an array out to a file, you can use the _writedlm_ function (defaults to comma-separated):

<p style="padding-left: 30px;">
  <code>writedlm</code>(<code>filename</code>, <code>array</code>, <code>delim::Char</code>)
</p>

### Reading a file into a DataFrame using readtable

As I covered in my prior blog post about Julia, you can also <a title="Julia for Beginners" href="http://randyzwitch.com/julia-language-beginners/" target="_blank">read in delimited files into Julia using the DataFrames package</a>, which returns a DataFrame instead of an array. Besides just being able to read in delimited files, the DataFrames package also supports reading in gzippped files on the fly:From what I understand, in the future you will be able to read files directly from Amazon S3 into a DataFrame (this is already supported in the <a title="Julia Amazon S3" href="https://github.com/amitmurthy/AWS.jl" target="_blank">AWS package</a>), but for now, the DataFrames package works only on local files. Writing a DataFrame to file can be done with the _writetable_ function: `writetable(<code>filename::String`, `df::DataFrame`)</code> By default, the <a title="Julia DataFrames" href="http://juliastats.github.io/DataFrames.jl/io.html" target="_blank">writetable function</a> will use the delimiter specified by the filename extension and default to printing the column names as a header.





### Accessing Databases using ODBC

The third major way of importing tabular data into Julia is through the use of ODBC access to various databases such as MySQL and PostgreSQL.

#### Using a DSN

The <a title="Julia ODBC package" href="https://github.com/karbarcca/ODBC.jl" target="_blank">Julia ODBC package</a> provides functionality to connect to a database using a Data Source Name (DSN). Assuming you store all the credentials in your DSN (server name, username, password, etc.), connecting to a database is as easy as:

Of course, if you don't want to store your password in your DSN (especially in the case where there are multiple users for a computer), you can pass the "usr" and "pwd" arguments to the ODBC.connect function:

``Importing tabular data into Julia can be done in (at least) three ways: reading a delimited file into an array, reading a delimited file into a DataFrame and accessing databases using ODBC.



### Reading a file into an array using readdlm

The most basic way to read data into Julia is through the use of the _readdlm_ function, which will create an array:

<p style="padding-left: 30px;">
  <code>readdlm</code>(<code>source</code>, <code>delim::Char</code>, <code>T::Type</code>; <code>options...</code>)
</p>

<pre style="padding-left: 30px;"></pre>

If you are reading in a fairly normal delimited file, you can get away with just using the first two arguments, _source_ and _delim_:It's important to note that by only specifying the first two arguments, you leave it up to Julia to determine the type of array to return. In the code example above, an array of type 'Any' is returned, as the .csv file I read in was not of homogenous type such as _Int64_ or _ASCIIString_. If you know for certain which type of array you want, you specify the data type using the _type_ argument:

It's probably the case that unless you are looking to do linear algebra or other specific mathy type work, you'll likely find that reading your data into a DataFrame will be more comfortable to work with (especially if you are coming from an R, Python/pandas or even spreadsheet tradition).

To write an array out to a file, you can use the _writedlm_ function (defaults to comma-separated):

<p style="padding-left: 30px;">
  <code>writedlm</code>(<code>filename</code>, <code>array</code>, <code>delim::Char</code>)
</p>

### Reading a file into a DataFrame using readtable

As I covered in my prior blog post about Julia, you can also <a title="Julia for Beginners" href="http://randyzwitch.com/julia-language-beginners/" target="_blank">read in delimited files into Julia using the DataFrames package</a>, which returns a DataFrame instead of an array. Besides just being able to read in delimited files, the DataFrames package also supports reading in gzippped files on the fly:From what I understand, in the future you will be able to read files directly from Amazon S3 into a DataFrame (this is already supported in the <a title="Julia Amazon S3" href="https://github.com/amitmurthy/AWS.jl" target="_blank">AWS package</a>), but for now, the DataFrames package works only on local files. Writing a DataFrame to file can be done with the _writetable_ function: `writetable(<code>filename::String`, `df::DataFrame`)</code> By default, the <a title="Julia DataFrames" href="http://juliastats.github.io/DataFrames.jl/io.html" target="_blank">writetable function</a> will use the delimiter specified by the filename extension and default to printing the column names as a header.





### Accessing Databases using ODBC

The third major way of importing tabular data into Julia is through the use of ODBC access to various databases such as MySQL and PostgreSQL.

#### Using a DSN

The <a title="Julia ODBC package" href="https://github.com/karbarcca/ODBC.jl" target="_blank">Julia ODBC package</a> provides functionality to connect to a database using a Data Source Name (DSN). Assuming you store all the credentials in your DSN (server name, username, password, etc.), connecting to a database is as easy as:

Of course, if you don't want to store your password in your DSN (especially in the case where there are multiple users for a computer), you can pass the "usr" and "pwd" arguments to the ODBC.connect function:

``

#### Using a connection string

Alternatively, you can build your own connection strings within a Julia session using the _advancedconnect_ function:Regardless of which way you connect, you can query data using the _query_ function. If you want your output as a DataFrame, you can assign the result of the function to an object. If you want to save the results to a file, you specify the "file" argument:

### Summary

Overall, importing data into Julia is no easier/more difficult than any other language. The biggest thing I've noticed thus far is that Julia is a bit less efficient than Python/pandas or R in terms of the amount of RAM needed to store data. In my experience, this is really only an issue once you are working with 1GB+ files (of course, depending on the resources available to you on your machine).

_Edit 3/25/2016: A much more up-to-date method of <a href="https://cbrownley.wordpress.com/2015/05/29/reading_writing_csv_with_r_python_julia/" target="_blank">reading CSV data into Julia</a> can be found at this <a href="https://cbrownley.wordpress.com/2015/05/29/reading_writing_csv_with_r_python_julia/" target="_blank">blog post by Clinton Brownley</a>._
