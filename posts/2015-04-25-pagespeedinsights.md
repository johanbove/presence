---
layout: post
author: Johan
title: "PageSpeed Achievement unlocked"
tags: post
published: "2015-04-25"
description: "My PageSpeed Insights results"
---

# My PageSpeed Insights results :bowtie: :triumph:

Happy to say that I have achieved an almost perfect Google's [PageSpeed Insight](https://developers.google.com/speed/pagespeed/insights/?url=blog.johanbove.info) score for both Mobile and Desktop with the home page of my own - simple - little website: http://blog.johanbove.info.

[![PageSpeed Insight score for the homepage of this site](/images/20150425-PageSpeedInsightsScore.png)](/images/20150425-PageSpeedInsightsScore.jpg)

## PageSpeed Mobile & Desktop Test Score card

### **98/100 Speed** - 9 Passed Rules

The only rule I have to *consider fixing* is the "[leverage browser caching](https://developers.google.com/speed/docs/insights/LeverageBrowserCaching)" rule. I failed that test because of two externally linked files: my "avatar" image from www.gravatar.com and the Google Analytics script. :stuck_out_tongue_winking_eye:

Below you can find the rules I did pass with flying colors:

| | # | Rule                         | Result                      |
|---|--|:-----------------------------|:----------------------------|
| :white_check_mark: | 1. | **Avoid landing page redirects** | [*Your page has no redirects.*](https://developers.google.com/speed/docs/insights/AvoidRedirects) |
|:white_check_mark: | 2. | **Eliminate render-blocking JavaScript and CSS in above-the-fold content** | [*You have no render-blocking resources.*](https://developers.google.com/speed/docs/insights/BlockingJS) |
| :white_check_mark: | 3. | **Enable compression** | [*You have compression enabled.*](https://developers.google.com/speed/docs/insights/EnableCompression) |
| :white_check_mark: | 4. | **Minify CSS** | [*Your CSS is minified.*](https://developers.google.com/speed/docs/insights/MinifyResources) |
| :white_check_mark: | 5. | **Minify HTML** | [*Your HTML is minified.*](https://developers.google.com/speed/docs/insights/MinifyResources) |
| :white_check_mark: | 6. | **Minify JavaScript** | [*Your JavaScript content is minified.*](https://developers.google.com/speed/docs/insights/MinifyResources) |
| :white_check_mark: | 7. | **Optimize images** | [*Your images are optimized.*](https://developers.google.com/speed/docs/insights/OptimizeImages) |
| :white_check_mark: | 8. | **Prioritize visible content** | [*You have the above-the-fold content properly prioritized.*](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent) |
| :white_check_mark: | 9. | **Reduce server response time** | [*Your server responded quickly.*](https://developers.google.com/speed/docs/insights/Server) |

## **100/100** User Experience

No issues found! Easy to achieve with a simple site like this. Here's Google's advice for a *perfect* UX.

* [Avoid plugins](https://developers.google.com/speed/docs/insights/AvoidPlugins)
* [Configure the viewport](https://developers.google.com/speed/docs/insights/ConfigureViewport)
* [Size content to viewport](https://developers.google.com/speed/docs/insights/SizeContentToViewport)
* [Size tap targets appropriately](https://developers.google.com/speed/docs/insights/SizeTapTargetsAppropriately)
* [Use legible font sizes](https://developers.google.com/speed/docs/insights/UseLegibleFontSizes)

## Plans

I'm sure there are still more optimizations I can work into this site for better accessibility etc. But I haven't tested the site yet for that.

And I will have to test every single page of this site though for the complete picture...

But I believe the PageSpeed Insight test proves that with a simple site like this blog you should be able to fully achieve a fast delivery of your pages on all devices.

Learn more about the [Web Performance tools by Google](https://developers.google.com/speed/pagespeed/).
