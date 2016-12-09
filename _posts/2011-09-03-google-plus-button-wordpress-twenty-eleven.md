---
title: Installing Google Plus Button on WordPress
date: 2011-09-03T11:33:11+00:00
author: Randy Zwitch
layout: post
permalink: /google-plus-button-wordpress-twenty-eleven/
category: Design
description: It's clear that Google+ Plus isn't going away. Here's how to install the +1 button on WordPress Twenty Eleven to get those \"plus ones\"!
tags:
  - Child Theme
  - JavaScript
  - Social Media
  - WordPress functions
---
If you've been anywhere on the internet in the past few months, you've seen the +1 button from Google right next to Facebook, Twitter, StumbleUpon and other social media sharing buttons.  It's pretty clear that Google intends the "plus one" to be THE most important form of approval on the 'net, integrating all those "plusses" into search results as well as showing them within the Google+ Plus network.

Here's how to integrate the Google Plus button on the WordPress Twenty Eleven theme.

<span class="Apple-style-span" style="font-weight: bold; color: #000000;">Installing the Google Plus JavaScript code snippet</span>

The first step to adding the Google Plus button to this theme is to add the JavaScript code snippet that "talks" to Google.  This code can be placed anywhere in the theme, but lets install it in our `footer.php` file, right before the the closing </body> tag:

{% highlight javascript linenos %}
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>

</body>
{% endhighlight %}

## Adding Google Plus button on front page

To add the Google Plus button to each post displayed on the first page, we need to modify the `content.php` file.  Like all of the other modifications we've made to create a [child theme](http://randyzwitch.com/tag/child-theme/ "WordPress Twenty Eleven Child Theme") like creating a [custom header](http://randyzwitch.com/2011/07/custom-header-twenty-eleven-child-theme/ "Twenty Eleven Child Theme:  Custom Header") and [custom footer](http://randyzwitch.com/2011/08/removing-powered-by-wordpress-twenty-eleven/ "Removing “Powered by WordPress” in Twenty Eleven"), copy the `content.php` file into your child theme folder. To display the Google Plus button underneath the title, we need to place the following code, after the `<div class="entry-content">` and before the `<?php the_content>` tag:

{% highlight javascript linenos %}
<div class="entry-content">
<!-- Place this tag where you want the +1 button to render -->
<g:plusone href="<?php the_permalink(); ?>"></g:plusone>
<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'twentyeleven' ) ); ?>
{% endhighlight %}

In the Google button code, the piece of code that references `the_permalink` is a WordPress function that passes the link of blog post to the Google Plus button.  Without this addition to the button, Google will use the URL of the page you are on…in my case, the 3 buttons on the front page would all reference www.randyzwitch.com, which means a visitor wouldn't be able to recommend an individual post.

## Adding a Google Plus button to an individual blog post

To add the Google Plus button on an individual article or blog post using the "Standard" format in Twenty Eleven, we can do the same basic process as above, except we'll modify the `content-single.php` file (again, copy this file into your child theme folder!).  We'll add the code after the <h1> tag and before the "If" statement that starts building the content:

{% highlight php linenos %}
<h1 class="entry-title"><?php the_title(); ?></h1>
<!-- Place this tag where you want the +1 button to render -->
<g:plusone href="<?php the_permalink(); ?>"></g:plusone>

<?php if ( 'post' == get_post_type() ) : ?>
{% endhighlight %}

Technically, you don't need to specify the `the_permalink` reference, since there will only be a single button on an individual blog post, and the Google Plus button will use the URL of the page.  But, it doesn't hurt, so for documentation sake I've left it in.

Once you've added the button code on the individual page, you're done! Visitors to your blog can now recommend your content on Google search and on the Google+ network.

## Optional steps

For this tutorial, I only provided the code for modifying the "Standard" page format for a single blog post.  If you are using multiple formats across your blog, you'll need to modify each template you are using.  They all begin with `content-<format>.php`, and the button code goes after the <h1> tag and before any other code.

It's also possible to modify how large the Google Plus button is and what is displayed.  I'm using the default bubble annotation, but if you'd like to have a larger or smaller button, or just different options, you can use the code builder from Google to see the [button options](http://www.google.com/intl/en/webmasters/+1/button/index.html "Google Plus button size").
