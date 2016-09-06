---
id: 212
title: 'Twenty Eleven Child Theme:  Custom Header'
date: 2011-07-20T13:16:53+00:00
author: Randy Zwitch
layout: post
guid: http://randyzwitch.com/?p=212
permalink: /custom-header-twenty-eleven-child-theme/
tweetbackscheck:
  - 1473001280
shorturls:
  - 'a:3:{s:9:"permalink";s:63:"http://randyzwitch.com/custom-header-twenty-eleven-child-theme/";s:7:"tinyurl";s:26:"http://tinyurl.com/7kqu636";s:4:"isgd";s:19:"http://is.gd/NiZlE1";}'
twittercomments:
  - 'a:0:{}'
tweetcount:
  - 0
category:
  - WordPress Tutorials
tags:
  - Child Theme
  - CSS
  - PHP
---
In a previous [post](http://randyzwitch.com/2011/07/twenty-eleven-child-theme-creating-css-file/) about creating a child theme for Twenty-Eleven, we created a custom CSS file using the <a title="Import CSS rule" href="http://www.w3.org/TR/CSS2/cascade.html#at-import" target="_blank">@import CSS rule</a>.  Technically, the new CSS file is all that is needed to create a child theme in WordPress, but _just_ changing the colors and font styles isn&#8217;t that much fun.  If it&#8217;s worth making your own WordPress child theme, it&#8217;s worth changing _everything&#8230;_starting with creating a custom header file.

## Creating a custom header file for our child theme

Creating a custom header file in WordPress is even simpler than creating a custom style sheet, because this time we&#8217;ll just copy the file directly from the base Twenty-Eleven theme directly into our child theme.

  1. Go to your &#8220;/wp-content/themes/twentyeleven&#8221; directory and locate the file _header.php_
  2. Paste the _header.php_ file to your &#8220;/wp-content/themes/twentyeleven-child&#8221; directory

That&#8217;s it!  Not very exciting&#8230;so let&#8217;s do some additional code modification while we&#8217;re in the new file.

<!--more-->





## Changing header image and size

Of all of the great things about the WordPress Twenty-Eleven theme, the one thing I can&#8217;t understand is why WordPress decided to make the header image so damn big!  There is the option to change the image you display to any number of provided images, or upload your own as part of the Appearance > Header menu.  But you can&#8217;t change the size&#8230;if your upload is too short, the theme will stretch it for you, distorting the image.  If your upload is too large, you&#8217;ll have to crop it. Luckily, with a minor modification we can change that.

First, go your newly created header.php file and find the following code:

What we&#8217;re going to do is use the <a title="Comment out code" href="http://www.w3schools.com/tags/tag_comment.asp" target="_blank">commenting tag</a> in HTML to &#8220;comment out&#8221; the portions of our header code that we no longer want to be active (i.e. the re-sizing feature in the Twenty-Eleven theme).  We can do this by adding the following tag (a left arrow, and exclamation point, and two dashes):



You&#8217;re not required to put in the &#8220;Comment out WordPress header checking&#8221; text as I did, but it is good practice to notate why changes have been made to your code.  A little documentation now goes a long way a year from now, when you can&#8217;t remember why you changed something! Now that we&#8217;ve got the opening tag for commenting, we need to find the end of the code we want to comment out, and put the closing tag.  Once we do this, all of the code between the commenting tags will not get executed by our browser.



The closing tag above is the two dashes, then the right arrow.  Again, you don&#8217;t have to write &#8220;End of RZ commenting out&#8221;, but it&#8217;s good for documentation.  Save your header.php file to make the completed changes.

## Hey, now I don&#8217;t have ANY banner!

If you refreshed your blog at this point, you&#8217;ll realize that not only did we get rid of the massive size of the banner, we got rid of the banner overall!  That&#8217;s not the goal of this tutorial&#8230;so let&#8217;s add the banner back, except now we&#8217;ll control the sizing.

First thing you need to do is make sure you have the banner you want uploaded to your server, and that it is the size you want.  This blog is 1000 pixels wide at the body (white space), and I decided to make my banner 225 pixels tall, because that&#8217;s where the picture looked good.

Once you have your banner location, we need to add the HTML link to our image, using the image tag.  For the &#8220;alt&#8221; section, you should put a description of what your banner represents, as this will be displayed if the users browser can&#8217;t download the image.  In the &#8220;src&#8221; section, add the location of your banner file.



Once you hit save, that&#8217;s it!  You now have control over your banner image.  Yes, modifying the code in this manner disables the Appearance > Header functionality in the theme, but that&#8217;s a small price to pay to get flexibility.  If you want to change your banner in the future to show a different image, you&#8217;ll need to do so in the header.php file.  But since you&#8217;ve documented this change in your code, you&#8217;ll know where to look and what to change when that time comes&#8230;

<div id="attachment_250" style="width: 310px" class="wp-caption alignleft">
  <a href="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdot-before.png"><img class="size-medium wp-image-250" title="randyzwitchdotcom-before" alt="" src="http://i2.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdot-before-300x182.png?fit=300%2C182" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdot-before.png?resize=300%2C182 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdot-before.png?resize=1024%2C622 1024w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdot-before.png?resize=493%2C300 493w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdot-before.png?w=1057 1057w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>

  <p class="wp-caption-text">
    Before &#8211; 1000px by 288px image
  </p>
</div>

<div id="attachment_251" style="width: 310px" class="wp-caption alignleft">
  <a href="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdotcom-after.png"><img class="size-medium wp-image-251 " title="randyzwitchdotcom-after" alt="" src="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdotcom-after-300x169.png?fit=300%2C169" srcset="http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdotcom-after.png?resize=300%2C169 300w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdotcom-after.png?resize=1024%2C579 1024w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdotcom-after.png?resize=500%2C283 500w, http://i1.wp.com/randyzwitch.com/wp-content/uploads/2011/07/randyzwitchdotcom-after.png?w=1060 1060w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>

  <p class="wp-caption-text">
    After: 1000px by 225 px
  </p>
</div>
