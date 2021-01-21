---
layout: post
author: Johan
title: "Adding Tweetledee to my site"
tags: post
published: "2015-07-07"
description: "What about some Tweets?"
---

## What about some Tweets?

[Twitter](http://www.twitter.com) does not need an introduction...

I have [my own account](http://twitter.com/johanbove) through which I tweet anything I like to share with the World. It could be a quick thought, a cool picture or some really fascinating article, I always try to keep it interesting, at least for myself :smile:

I recently became more active on Twitter and since I have this blog, I figured it would be cool to include [my Twitter stream on my own website](/tweets.html) in a fun way.

Even-though Twitter offers ways to include your tweets using Twitter's [own widgets](https://dev.twitter.com/web/overview), I still wanted to have more control over how my tweets appeared on my site.

I wanted to display my latest tweets plus the tweets from other people which I favorited for future reference.

To control how the tweets would show up on my site, I knew I needed an application which would transform my Tweets into the [super convenient JSON](http://www.json.org/js.html) format so I could manipulate them using JavaScript and CSS.

## How I found Tweetledee

The talented team of [GDG Lviv](http://lviv.gdg.org.ua/) had created this excellent template for [their GDG DevFest 2014](http://gdg-x.github.io/zeppelin-grunt/) event and I noticed that they had integrated Tweets into their "cover" home page. Since they were so nice to open-source [the whole site on Github](https://github.com/gdg-x/zeppelin-grunt), I saw they had implemented Tweetledee!

So I did a quick search and found the [Tweetledee Github page](http://chrissimpkins.github.io/tweetledee/). I learned that Tweetledee is a PHP library made by Chris Simpkins ([@csimpkins](http://twitter.com/csimpkins)) together with various contributors, always a good sign of project quality.

It looked easy to set up and offered exactly what I needed, plus on top of that Chris did an excellent job at writing exactly what needs to be done to have things going in [a fabulous "Three Minute Install" Guide](http://chrissimpkins.github.io/tweetledee/index.html#three-minute-install), so I decided to give it a go.

## The set up was extremely easy

So I planned to use the Tweetledee application on a subdomain on my hosting account, so it would be nice and snug in it's own environment.

After I downloaded [the latest version of Tweetledee](https://github.com/chrissimpkins/tweetledee/releases), I had to set my newly created [Twitter App consumer keys](https://apps.twitter.com/) in the designated PHP file and I was good to go.

I then transfered all Tweetledee files using my [favourite FTP client FileZilla](https://filezilla-project.org/) to my web space and *Bob's your uncle*.

## Why a sub domain?

The sub domain helps for setting up specific security *.htaccess* rules to allow cross-side scripting headers rules which are quite important since you don't want just anyone to be able to *take advantage* of your Tweetledee set-up and *steal* your precious bandwidth, right?

The *.htaccess* commands:

```
SetEnvIf Origin "^http(s)?://(.+\.)?(johanbove\.info)$" origin_is=$0
Header always set Access-Control-Allow-Origin %{origin_is}e env=origin_is
```

By defining "allow-origin" headers in the *.htaccess* file in my sub domain I can control who gets to call up my Tweets from my Tweetledee installation.

Plus additionally my hosting, [Antagonist.nl](http://antagonist.nl), offers [*old-skool* site statistics with Webalizer](http://www.webalizer.org/) per sub domain, so this allows me to keep an eye on how much traffic to my little Tweetledee setup is dealing with and where request are coming from.

## Caching

I liked the fact that Tweetledee caches tweets for a specific time to not over-use the limits Twitter sets on its API usage.

Next I followed the clear instructions on the Tweetledee site to create a [Twitter "widget" application](https://twitter.com/settings/widgets) through which Tweetledee will access my Tweets using Twitter's API.

## JavaScript

When Tweetledee worked fine, I then continued the integration into my site by writing up [a simple JavaScript program](https://gist.github.com/johanbove/f6f88fd6b65d01c6e257) which implements [jQuery's](http://api.jquery.com/jquery.getjson/) ``jQuery.getJSON()``, to load the tweets using JSON formatted requests and parse out the contents in HTML which I could then style with some CSS.

See the code below:

<div style="height:300px;overflow:hidden;overflow-y:auto;">
<script src="https://gist.github.com/johanbove/f6f88fd6b65d01c6e257.js"></script>
</div>

## Other ways of parsing tweets

Tweetledee also offers parsing your tweets through RSS feeds.

Here are some examples:

- [RSS Feed of my Favorite Tweets](http://tweetledee.johanbove.info/favoritesrss.php)
- [RSS Feed of my Twitter History](http://tweetledee.johanbove.info/userrss.php)

## Extending my Tweets page

Later I might include the lists, once I actually gotten into using them better, plus I will probably improve the layout of how the tweets look on my site. Perhaps even add in some fancy CSS3 transitions trickery.

## Thanks!

Anyhow, Chris gave me a big head-start getting the results I wanted. So a big thank you goes out to him.

## Get started

- [Get Tweetledee on Github](http://chrissimpkins.github.io/tweetledee/)
