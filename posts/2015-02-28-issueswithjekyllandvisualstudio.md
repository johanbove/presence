---
layout: post
author: Johan
title: "Jekyll Visual Studio and UTF-8 encoding"
tags: post
published: "2015-02-28"
description: "So you want to write Jekyll blog posts using Visual Studio."
---

> So you want to write Jekyll blog posts using Visual Studio. Make sure you set the correct Unicode encoding!

# Jekyll does not deal well with UTF-8 encoding including BOM signatures

Create a new markdown file in Visual Studio 2013 with default settings and try parsing it in Jekyll to HTML. You'll notice that when you open the post in a browser you will see some weird series of characters.

[![What the page looks like after rendering](/images/20150228-VisualStudioJekyllMarkdownIssue001.png)](/images/20150228-VisualStudioJekyllMarkdownIssue001.png)

## How to reproduce the issue

- Have Jekyll running with the command: ``jekyll serve --drafts --watch``
- Started off Visual Studio with right-clicking the ``_drafts`` folder and selecting *"Add New Item"*.
- Select "HTML Page" and entered the name ``testing001.markdown`` in the name field in the bottom of the wizard screen.
- This created a new HTML file in the ``_drafts`` folder.
- Delete the generated HTML source code from the new file.
- Enter the basic content of the blog post, eg.:

{% highlight ruby %}
---
layout: post
author: Johan
---
> Testing 001
{% endhighlight %}

- Reload your blog posts page and check if the file shows up in the list of new articles.
- Click the link to the new blog post draft and see for yourselve that somehow the post didn't render and you end up with only a HTML page with no layout etc.

[![How it looks like in Visual Studio](/images/20150228-VisualStudioJekyllMarkdownIssue002.png)](/images/20150228-VisualStudioJekyllMarkdownIssue002.png)

## Fixing Unicode encoding issue in Visual Studio Community 2013

So Visual Studio is saving new files as Unicode (UTF-8 **with** BOM signature) by default and Jekyll needs files which are encoded using UTF-8 **without** BOM signature.

Just make sure that you save the files using the right unicode and you're good to go.

[![Save as encoding in Visual Studio wizard](/images/20150228-VisualStudioJekyllMarkdownIssue003.png)](/images/20150228-VisualStudioJekyllMarkdownIssue003.png)

The nice people at JekyllRB warned us about this at [http://jekyllrb.com/docs/windows](http://jekyllrb.com/docs/windows).

[![JekyllRB warning about having BOM in your UTF8 encoded files](/images/20150228-VisualStudioJekyllMarkdownIssue004.png)](/images/20150228-VisualStudioJekyllMarkdownIssue004.png)

> Note: This is important with rendering the *SCSS* CSS stylesheet files as well btw! If you ever wonder why your SCSS files are not parsing correctly after making changes in Visual Studio.

So better follow those guidelines!
