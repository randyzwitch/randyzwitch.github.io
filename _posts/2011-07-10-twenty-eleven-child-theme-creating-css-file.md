---
id: 65
title: 'Twenty Eleven Child Theme: Creating CSS File'
date: 2011-07-10T12:37:42+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=65
permalink: /twenty-eleven-child-theme-creating-css-file/
tweetbackscheck:
  - 1472779383
shorturls:
  - 'a:3:{s:9:"permalink";s:67:"http://randyzwitch.com/twenty-eleven-child-theme-creating-css-file/";s:7:"tinyurl";s:26:"http://tinyurl.com/7t2kwfp";s:4:"isgd";s:19:"http://is.gd/Q9RoWt";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - WordPress Tutorials
tags:
  - Child Theme
  - CSS
---
With the Twenty Eleven child theme directory <a title="Picking a WordPress Theme:  Fancy or Basic?" href="http://randyzwitch.com/2011/07/wordpress-theme-twentyeleven-athualpa/" target="_blank">created</a> as &#8220;twentyeleven-child&#8221; in the &#8216;/wp-content/themes&#8217; directory, we&#8217;re now ready to create the first file as part of the child theme: the CSS file.

While we _could_ just copy the existing CSS file from the Twenty Eleven theme (_style.css_ in the /wp-content/themes/twentyeleven directory) and modify that file directly, if we do that then we will lose track of the changes that were made relative to the original Twenty Eleven styling.  So what we&#8217;re going to do is create a new CSS file to hold our changes, with a reference back to the original CSS file.

<!--more-->

## Step 1:  Creating a blank CSS file

To start the process of creating the blank CSS file, open up your favorite plain text editor such as TextPad if you are using a PC or TextEdit if you are using a Mac.  It&#8217;s important to use a plain text editor and not a word processor such as Microsoft Word, as Word can add strange characters into your file.

So with a new, blank text document open, save this file with the name &#8216;style.css&#8217;.  Your file MUST be named style.css in order to work correctly.

## Step 2:  Creating template/theme header

In the newly created style.css file, add the following code (including the /\*  and \*/ characters):

<pre>/* Theme Name: randyzwitch.com
Description: Child theme for the twentyeleven theme
Author: Randy Zwitch
Template: twentyeleven */</pre>

For your theme, you can choose to put whatever you want in the &#8220;Theme Name&#8221;, &#8220;Description&#8221; and &#8220;Author&#8221; files.  The text you list here is what will be visible in the Appearance > Themes menu in the WordPress admin panel.

If you are creating your child theme based on Twenty Eleven, then you are done, as no additional changes need to be made.  Otherwise, place the **directory** name (with no leading or trailing slashes) of the theme are using on the &#8220;Template&#8221; line.





**Step 3:  Include &#8220;CSS import&#8221; of Twenty Eleven CSS file

**

The final step in creating the CSS file for our new child theme is to import the CSS properties from the original Twenty Eleven theme.  Note that above, I discussed that we _could_ just copy the entire CSS file into our new file, but then we wouldn&#8217;t be able to see our changes as a stand-alone.  What we can do instead is add the following code to our new file, directly under the header we created in Step 2:

<pre>@import url("../twentyeleven/style.css");</pre>

It&#8217;s important to note that there can be no CSS code above this &#8220;import&#8221; line (other than the header file info).

And that&#8217;s it!  Save your newly created CSS file, and be sure that it is located in the directory &#8216;/wp-content/themes/twentyeleven-child&#8217;

## Final comments

If you&#8217;ve done this correctly, the contents of your new CSS file should have the following format (with your information, obviously):



Technically, this is all you need to have a fully-functional &#8220;child theme&#8221; in WordPress.  To make sure that everything is working correctly, go to the WordPress admin panel and select your new theme under Appearance > Themes and hit &#8216;Activate&#8217; your new theme!

&nbsp;

_For more information about creating CSS files for child themes in WordPress, go to the <a title="Wordpress Codex: Child Theme" href="http://codex.wordpress.org/Child_Themes#The_required_style.css_file" target="_blank">CSS section</a> of the WordPress Codex on this topic._
