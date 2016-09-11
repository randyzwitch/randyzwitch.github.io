---
title: 'How To Remove "This entry was posted in" on WordPress single posts'
date: 2011-09-27T15:29:42+00:00
author: Randy Zwitch
layout: post
permalink: /wordpress-remove-this-entry-was-posted-in/
category: Design
tags:
  - Child Theme
  - Footer
  - HTML
  - PHP
---
In prior <a title="Removing “Powered by WordPress” in Twenty Eleven" href="http://randyzwitch.com/removing-powered-by-wordpress-twenty-eleven/" target="_blank">posts</a>, I've commented that I'm a fan of clean, sleek design when it comes to WordPress themes.  I've added the "breadcrumb" style navigation to the top of my posts, which makes the "This Entry was Posted in <category>" and "Bookmark the Permalink" text at the bottom of each post redundant.

Here's how to remove/modify both of these messages through a simple change to the `content-single.php` file.

## Removing all text at the bottom of the single post

To make all of text disappear at the bottom of each post, all we need to do is comment out a few lines of code. Open your `content-single.php` file from your Twenty Eleven child theme and find the following lines of code:

{% highlight php linenos %}
<footer class="entry-meta">
<?php
            /* translators: used between list items, there is a space after the comma */
{% endhighlight %}

We'll use our <a title="Twenty Eleven Child Theme: Custom Header" href="http://randyzwitch.com/custom-header-twenty-eleven-child-theme/" target="_blank">HTML comment tag</a> to comment out the PHP code that starts the line below this one, and close the comment tag at the end of the PHP script.  When done correctly, the code will look like this:

{% highlight php linenos %}
<!--     <?php
            /* translators: used between list items, there is a space after the comma */
            $categories_list = get_the_category_list( __( ', ', 'twentyeleven' ) );
            /* translators: used between list items, there is a space after the comma */
            $tag_list = get_the_tag_list( '', __( ', ', 'twentyeleven' ) );
            if ( '' != $tag_list ) {
                $utility_text = __( 'This entry was posted in %1$s and tagged %2$s by <a href="%6$s">%5$s</a>. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'twentyeleven' );
            } elseif ( '' != $categories_list ) {
                $utility_text = __( 'This entry was posted in %1$s by <a href="%6$s">%5$s</a>. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'twentyeleven' );
            } else {
                $utility_text = __( 'This entry was posted by <a href="%6$s">%5$s</a>. Bookmark the <a href="%3$s" title="Permalink to %4$s" rel="bookmark">permalink</a>.', 'twentyeleven' );
            }
            printf(
                $utility_text,
                $categories_list,
                $tag_list,
                esc_url( get_permalink() ),
                the_title_attribute( 'echo=0' ),
                get_the_author(),
                esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) )
            );
        ?> -->
{% endhighlight %}

Hit save and you're done, no more "This Entry was Posted in" or "Bookmark the Permalink" verbiage at the end of your posts!

## Modifying the text at the bottom of the post to just keep the Post Tags

Perhaps you don't want to remove the text entirely from the bottom of the post, but just want to leave the tags behind (for SEO purposes or whatever).  To do this, we'll modify the same piece of code, but instead of commenting out all of the PHP code, we'll comment out a smaller piece of code, then redefine the `$utility_text`  PHP variable.

The piece of code we want to comment out is shown below.  Note that because this code is within a PHP code block, we need to comment the code out using a "forward slash-star, star-backslash" comment tag:

{% highlight php linenos %}
/*  if ( '' != $tag_list ) {
				$utility_text = __( 'This entry was posted in %1$s and tagged %2$s by %5$s. Bookmark the permalink.', 'twentyeleven' );
			} elseif ( '' != $categories_list ) {
				$utility_text = __( 'This entry was posted in %1$s by %5$s. Bookmark the permalink.', 'twentyeleven' );
			} else {
				$utility_text = __( 'This entry was posted by %5$s. Bookmark the permalink.', 'twentyeleven' );
			}
*/
{% endhighlight %}

With this code commented out, we can now define the _$utility_text_ variable as we want.  To show just the text "Tagged: <tag list>", add the following code just below the commented code above:

{% highlight php linenos %}
$utility_text = _( 'Tagged: %2$s');
{% endhighlight %}

Once you hit save, the bottom of each of your single posts will show the tags that the post belongs to.
