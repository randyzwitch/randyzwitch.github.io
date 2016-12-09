---
title: Tabular Data I/O in Julia
date: 2013-08-06T10:05:38+00:00
author: Randy Zwitch
layout: post
permalink: /julia-import-data/
category: DataScience
description: Importing data into Julia can take three major forms: reading a delimited file into an array, reading a file into a DataFrame and accessing databases.
tags:
  - Julia
  - Python
  - R
---
Importing tabular data into Julia can be done in (at least) three ways: reading a delimited file into an array, reading a delimited file into a DataFrame and accessing databases using ODBC.

### Reading a file into an array using readdlm

The most basic way to read data into Julia is through the use of the `readdlm` function, which will create an array:

{% highlight julia linenos %}
readdlm(source, delim::Char, T::Type; options...)
{% endhighlight %}

If you are reading in a fairly normal delimited file, you can get away with just using the first two arguments, `source` and `delim`:

{% highlight julia linenos %}
julia> airline_array = readdlm("/Users/randyzwitch/airline/1987.csv", ',');

julia> size(airline_array)
(1311827,29)

julia> typeof(airline_array)
Array{Any,2}
{% endhighlight %}

It's important to note that by only specifying the first two arguments, you leave it up to Julia to determine the type of array to return. In the code example above, an array of type `Any` is returned, as the .csv file I read in was not of homogenous type such as `Int64` or <del>ASCII</del>`String`. If you know for certain which type of array you want, you specify the data type using the `type` argument:

{% highlight julia linenos %}
julia> airline_array = readdlm("/Users/randyzwitch/airline/1987.csv", ',' , String);

julia> size(airline_array)
(1311827,29)

julia> typeof(airline_array)
Array{String,2}
{% endhighlight %}

It's probably the case that unless you are looking to do linear algebra or other specific mathy type work, you'll likely find that reading your data into a DataFrame will be more comfortable to work with (especially if you are coming from an R, Python/pandas or even spreadsheet tradition).

To write an array out to a file, you can use the `writedlm` function (defaults to comma-separated):

{% highlight julia linenos %}
writedlm(filename, array, delim::Char)
{% endhighlight %}

### Reading a file into a DataFrame using readtable

As I covered in my prior blog post about Julia, you can also <a title="Julia for Beginners" href="http://randyzwitch.com/julia-language-beginners/" target="_blank">read in delimited files into Julia using the DataFrames package</a>, which returns a DataFrame instead of an array. Besides just being able to read in delimited files, the DataFrames package also supports reading in gzippped files on the fly:

{% highlight julia linenos %}
julia> using DataFrames

julia> airline_df = readtable("/Users/randyzwitch/airline/1987.csv.gz");

julia> size(airline_df)
(1311826,29)

julia> typeof(airline_df)
DataFrame  (use methods(DataFrame) to see constructors)
{% endhighlight %}

From what I understand, in the future you will be able to read files directly from Amazon S3 into a DataFrame (this is already supported in the <a title="Julia Amazon S3" href="https://github.com/amitmurthy/AWS.jl" target="_blank">AWS package</a>), but for now, the DataFrames package works only on local files. Writing a DataFrame to file can be done with the `writetable` function:

{% highlight julia linenos %}
writetable(filename::String, df::DataFrame)
{% endhighlight %}

By default, the <a title="Julia DataFrames" href="http://juliastats.github.io/DataFrames.jl/io.html" target="_blank">`writetable` function</a> will use the delimiter specified by the filename extension and default to printing the column names as a header.

### Accessing Databases using ODBC

The third major way of importing tabular data into Julia is through the use of ODBC access to various databases such as MySQL and PostgreSQL.

#### Using a DSN

The <a title="Julia ODBC package" href="https://github.com/karbarcca/ODBC.jl" target="_blank">Julia ODBC package</a> provides functionality to connect to a database using a Data Source Name (DSN). Assuming you store all the credentials in your DSN (server name, username, password, etc.), connecting to a database is as easy as:

{% highlight julia linenos %}
julia> using ODBC

julia> ODBC.connect("MySQL")
Connection 1 to MySQL successful.
{% endhighlight %}

Of course, if you don't want to store your password in your DSN (especially in the case where there are multiple users for a computer), you can pass the `usr` and `pwd` arguments to the `ODBC.connect` function:

{% highlight julia linenos %}
ODBC.connect(dsn; usr="", pwd="")
{% endhighlight %}

#### Using a connection string

Alternatively, you can build your own connection strings within a Julia session using the `advancedconnect` function:

{% highlight julia linenos %}
#Amazon Redshift/Postgres connection string
Julia> red = advancedconnect("Driver={psqlODBC};ServerName=reporting.XXXXX.us-east-1.redshift.amazonaws.com;Username=XXXX;Password=XXXX;Database=XXXX;Port=XXXX");
Connection 1 to Driver={psqlODBC};ServerName=reporting.XXXXX.us-east-1.redshift.amazonaws.com;Username=XXXX;Password=XXXX;Database=XXXX;Port=XXXX successful.

#MySQL connection string
julia> my = advancedconnect("Driver={MySQL};user=root;server=localhost;database=airline;")
Connection 1 to Driver={MySQL};user=root;server=localhost;database=airline; successful.
{% endhighlight %}

Regardless of which way you connect, you can query data using the `query` function. If you want your output as a DataFrame, you can assign the result of the function to an object. If you want to save the results to a file, you specify the `file` argument:

{% highlight julia linenos %}
julia> using ODBC

julia> ODBC.connect("MySQL")
Connection 1 to MySQL successful.

#Save query results into a DataFrame called 'results'
julia> results = query("Select * from a1987;");

julia> typeof(results)
DataFrame  (use methods(DataFrame) to see constructors)

#Save query results to a file, tab-delimited (default)
julia> query("Select * from a1987;", file="output.tab", delim = '\t');
{% endhighlight %}

### Summary

Overall, importing data into Julia is no easier/more difficult than any other language. The biggest thing I've noticed thus far is that Julia is a bit less efficient than Python/pandas or R in terms of the amount of RAM needed to store data. In my experience, this is really only an issue once you are working with 1GB+ files (of course, depending on the resources available to you on your machine).

_Edit 3/25/2016: A much more up-to-date method of <a href="https://cbrownley.wordpress.com/2015/05/29/reading_writing_csv_with_r_python_julia/" target="_blank">reading CSV data into Julia</a> can be found at this <a href="https://cbrownley.wordpress.com/2015/05/29/reading_writing_csv_with_r_python_julia/" target="_blank">blog post by Clinton Brownley</a>._
