---
layout: post
author: Johan
title: "Achievement unlocked: Lighthouse score of 100"
tags: post
hero: http://blog.johanbove.info/images/20170311-lighthouseresults100.png
published: "2017-03-11"
description: "What is *Lighthouse* and why did I care?"
---

# What is *Lighthouse* and why did I care?

[Lighthouse](https://developers.google.com/web/tools/lighthouse/) is an open-source, automated tool for improving the quality of your web apps.

> Lighthouse can be run as [a Chrome Extension](https://chrome.google.com/webstore/detail/blipmdconlkpinefehnmjammfjpmpbjk), from the command line, or used programmatically as a Node module. You give Lighthouse a URL that you want to audit, it runs a barrage of tests against the page, and then it generates a report on how well the page did. From here you can use the failing tests as indicators on what you can do to improve your app.

I cared because "I 💓 web validators" and it kicked me finally into action adding the enigmatic ["manifest.json"](https://johanbove.info/manifest.json) file to my homepage.

Turns out, creating a [web app manifest](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/), complete with taking care of offline handling with a service-worker behind the screens, is actually not that hard, thanks to a plethora of [useful documentation and tutorials](https://developers.google.com/web/tools/lighthouse/audits/manifest-exists), all of which are neatly linked right from the LightHouse report page.

The result:

[![My Lighthouse score of 100/100](/images/20170311-lighthouseresults100.png)](https://johanbove.info/lighthouse/johanbove.info_2017-03-11_00-15-24.report.html)

Running the test really helps you to learn how to set up the *manifest* file and optimize your site accordingly.

In the end it took me about three hours to achieve the great 100/100 score by following the documentation and setting up the web app manifest file with a service worker in the currently available LightHouse test. Most of that time I actually spent on creating [an app icon of myself](https://johanbove.info/img/johanbove_192x192.png).

Thanks goes out to **CSSWizardry** Magician [Harry Roberts](https://csswizardry.com/) for boasting with his site' score.

His *"First meaningful paint"*, *"Perceptual Speed index"*, *"Estimated Input Latency"* and *"Time To Interactive"* measurements are phenomenally tight!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Just spent a few minutes tweaking some settings in <a href="https://twitter.com/Cloudflare">@Cloudflare</a>. My homepage: <a href="https://t.co/z9Dr89UNHP">pic.twitter.com/z9Dr89UNHP</a></p>&mdash; Harry Roberts (@csswizardry) <a href="https://twitter.com/csswizardry/status/839814781326483456">March 9, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
