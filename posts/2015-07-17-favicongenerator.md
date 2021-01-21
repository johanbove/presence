---
layout: post
author: Johan
title: "How Dan's Favicon-Generator works"
tags: post
published: "2015-07-17"
description: How to add favicons to your site
---

## How to add favicons to your site

To be honest, this post will not explain you in depth how [Dan](http://www.danstools.com/)'s script turns your beautiful image uploads into all those separate little files in exactly the right dimensions; I'm guessing [imageMagick](http://www.imagemagick.org/) has something to do with it; No, this article will explain you what you need to do after actually using his image generator.

So if you want to make your site's favicon show up nicely in all browsers, including Windows 8`s start screen and Android Chrome's "add to homescreen", then this post should be interesting.

Well, then this [favicon generating](http://www.favicon-generator.org/) tool will help you come a long way. I'll explain in brief how the tool works in this post.

## The game plan:

1. Create you base image at dimensions of 192 x 192 pixel.
2. Generate your favicons through the [www.favicon-generator.org](http://www.favicon-generator.org/) site.
3. Add the presented HTML link and meta tags to the ``<head>`` - tag of your site.
4. Upload your favicon images into the root of your website.

## HTML code to insert in your site

Add this HTML code in the ``head`` tag of your site / page:

```html
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#192a81">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#192a81">
```

### Important Note

No need to use this classic HTML meta tag, since all browsers look for the ``favicon.ico`` file in the root of the site automatically anyway.

```html
<!-- Redundant -->
<link rel="shortcut icon" href="/favicon.ico">
```

## Favicon-Generator result

The favicon-generator tool generates these files:

```text
android-icon-144x144.png
android-icon-192x192.png
android-icon-36x36.png
android-icon-48x48.png
android-icon-72x72.png
android-icon-96x96.png
apple-icon-114x114.png
apple-icon-120x120.png
apple-icon-144x144.png
apple-icon-152x152.png
apple-icon-180x180.png
apple-icon-57x57.png
apple-icon-60x60.png
apple-icon-72x72.png
apple-icon-76x76.png
apple-icon-precomposed.png
apple-icon.png
browserconfig.xml
favicon-16x16.png
favicon-32x32.png
favicon-96x96.png
favicon.ico
manifest.json
ms-icon-144x144.png
ms-icon-150x150.png
ms-icon-310x310.png
ms-icon-70x70.png

```

So it's pretty cool how the generator created all those images based upon your primary image.

The tool also created two text files which will help deliver the right favicon for every occasion: *browserconfig.xml* and *manifest.json*.

What exactly is in these files? Let's have a look shall we.

### browserconfig.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square70x70logo src="/ms-icon-70x70.png"/>
            <square150x150logo src="/ms-icon-150x150.png"/>
            <square310x310logo src="/ms-icon-310x310.png"/>
            <TileColor>#ff0000</TileColor>
        </tile>
    </msapplication>
</browserconfig>
```

As you might have guessed through the ``msapplication`` tag in the XML code, that this is [Microsoft's  Browser Configuration Schema](https://msdn.microsoft.com/en-us/library/Dn320426%28v=VS.85%29.aspx?f=255&MSPPError=-2147217396).

It is used to define "pinned site" customizations such as tile backgrounds, badge updates and tile notifications. Here we're only defining the "pinned site" images to use and defining the background color of the tile to be ``#ff0000``.

### manifest.json

```json
{
 "name": "My Cool Website",
 "icons": [
  {
   "src": "\/android-icon-36x36.png",
   "sizes": "36x36",
   "type": "image\/png",
   "density": "0.75"
  },
  {
   "src": "\/android-icon-48x48.png",
   "sizes": "48x48",
   "type": "image\/png",
   "density": "1.0"
  },
  {
   "src": "\/android-icon-72x72.png",
   "sizes": "72x72",
   "type": "image\/png",
   "density": "1.5"
  },
  {
   "src": "\/android-icon-96x96.png",
   "sizes": "96x96",
   "type": "image\/png",
   "density": "2.0"
  },
  {
   "src": "\/android-icon-144x144.png",
   "sizes": "144x144",
   "type": "image\/png",
   "density": "3.0"
  },
  {
   "src": "\/android-icon-192x192.png",
   "sizes": "192x192",
   "type": "image\/png",
   "density": "4.0"
  }
 ]
}
```

The *manifest.json" is used to define [installable web apps for Chrome on Android](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android?hl=en). Basically it optimizes how your site will show on Android phones when your visitors "add the site to their homescreen". On the developers.google.com website you can find an excellent walk-through by [Paul Kinlan](http://paul.kinlan.me/) which explains the other properties in the json configuration.

## When does Internet Explorer load favicons?

To see what's going on behind the scenes in Internet Explorer I Loaded up a simple Python HTTP web server in a command window using the command: ``python -m SimpleHTTPServer``.

When you start this server from within the folder of the your test site you can monitor the HTTP traffic in the console.

This was the output when I checked my HTML page in Internet Explorer and the "touch/modern" Internet Explorer:

```text
127.0.0.1 - - [17/Jul/2015 11:35:21] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [17/Jul/2015 11:35:21] "GET /res/js/jquery.min.js HTTP/1.1" 200 -
127.0.0.1 - - [17/Jul/2015 11:35:21] "GET /res/fonts/DINWeb.eot? HTTP/1.1" 200 -
127.0.0.1 - - [17/Jul/2015 11:35:21] "GET /res/images/login-page.svg HTTP/1.1" 200 -

// Initially this icon was loaded
127.0.0.1 - - [17/Jul/2015 11:35:21] "GET /android-icon-192x192.png HTTP/1.1" 200 -
127.0.0.1 - - [17/Jul/2015 11:35:21] "GET /res/images/sprite-main.svg HTTP/1.1" 200 -

// Adding the site to "apps" loaded the favicon.ico
127.0.0.1 - - [17/Jul/2015 11:37:25] "GET /favicon.ico HTTP/1.1" 200 -

// Opened the site in Internet Explorer "metro/modern"
127.0.0.1 - - [17/Jul/2015 11:39:56] "GET / HTTP/1.1" 200 -
127.0.0.1 - - [17/Jul/2015 11:39:56] "GET /res/js/jquery.min.js HTTP/1.1" 200 -
127.0.0.1 - - [17/Jul/2015 11:39:56] "GET /res/fonts/DINWeb.eot? HTTP/1.1" 200 -
127.0.0.1 - - [17/Jul/2015 11:39:56] "GET /res/images/login-page.svg HTTP/1.1" 200 -
127.0.0.1 - - [17/Jul/2015 11:39:56] "GET /res/images/sprite-main.svg HTTP/1.1" 200 -

// This ms-icon was loaded for "add a favorit" and "pin to start"
127.0.0.1 - - [17/Jul/2015 11:39:57] "GET /ms-icon-144x144.png HTTP/1.1" 200 -

```
