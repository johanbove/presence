---
layout: plan
plan: "10-indiewebifyme"
title: "Validate me on Indiewebify.me"
tags: "completed"
started: "2019-04-03"
status: "completed"
completed: "2021-01-30"
description: Getting started on the Indieweb
---

While listening to [ep. 6 of season 4](https://irlpodcast.org/season4/episode6/#show-notes) of [Mozilla's IRL Podcast](https://irlpodcast.org/) by [Manoush Zomorodi](https://twitter.com/manoushz), I discovered - unfortunately only now - [Indieweb.org](http://indieweb.org/), the people-focused alternative to the "corporate web".

I got immediately intrigued by its concepts of decentralization and taking back control over our online presences. I'm not against corporations, it's only that I strongly believe the Web should be for everyone to publish freely in whatever format they want and have control over their own Web Presence.

The concepts of the _IndieWeb_ are:

- _Your content is yours_
- _You are better connected_
- _You are in control_

Before visiting Indieweb.org, I had no idea that my site was simply missing _MicroFormats_ as class-names and a couple of links before I could use it for [Web Sign-in](https://indieweb.org/How_to_set_up_web_sign-in_on_your_own_domain). Awesome.

I followed the instructions on the Getting Started page and quickly was able to make my personal homepage a key which can be used to authenticate with [Indielogin and IndieAuth services](https://indielogin.com/setup).

> Users will identify themselves with their website, and can authenticate using one of the supported authentication providers such as Twitter, GitHub, or email. The user ID returned to you will be their website, ensuring that you don't end up creating multiple accounts depending on how the user authenticates.  
<small>~ Source: <https://indielogin.com/api></small>

Adding the [MicroFormats 2](http://microformats.org/wiki/microformats-2) to my existing HTML and Jekyll templates was easy-peasy.

[Validate my site on indiewebify.me](https://indiewebify.me/validate-rel-me/?url=https%3A%2F%2Fjohanbove.info)

Next steps include:

- ✅ Implementing Webmentions - Not sure how to achieve this with my SHTML static Apache pages. - Managed to do this easily with <https://webmention.io> and <https://brid.gy>.
- ✅ Set up POSSE - Also here, I'm not sure how to do this from my static pages. - Republishing statuses and posts on social.johanbove.info to Twitter using Brid.gy
- ❎ Attend a [Homebrew Website Club](https://indieweb.org/Homebrew_Website_Club) meetup event. - I would like to go to the [2019 IndieWebCamp event in Düsseldorf](https://indieweb.org/2019/D%C3%BCsseldorf).
- ❎ Create an app which applies <https://indielogin.com> for authorization using Web Sign In

And that's <a href="https://aaronparecki.com/indieweb" class="u-like-of" rel="noopener">only the beginning</a>...

Thanks to <a href="https://quickthoughts.jgregorymcverry.com/2019/04/03/johanbove-yeah-it-is-so-cool-isnt" class="u-like-of" rel="noopener">Greg McVerry</a> for the correct terminology, <a href="https://aaronparecki.com" class="h-card" rel="noopener">Aaron Parecki</a> and <a href="https://tantek.com/" class="h-card" rel="noopener">Tantek Çelik</a> for starting up the _IndieWeb movement_!

## Updates

{% plan_task "2019-04-03" %}

Actively supporting the **Known CMS** development by offering my spare time to fix [open "Known CMS" issues](https://github.com/idno/known/issues). Looking at the issues list and commenting my remarks and seeing if it's something I can work with too.

Here is [the list of Issues on Github](https://github.com/idno/known/issues?utf8=%E2%9C%93&q=is%3Aissue+involves%3Ajohanbove+) that I am currently tracking.

Got in touch with Known developer <a href="https://mapkyca.com/profile/mapkyca" rel="noopener" class="h-card">Marcus Povey</a> and IndieWeb promotor <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" rel="noopener" class="h-card">Greg McVerry</a> as part of my contributions and participation to the [Known Open Collective](http://opencollective.com/known).

Haven't been able to set up the Known CMS on my local system yet. I have been risking my own site when testing changes I made myself on my live Known site. Really need to get this LAMP stack going on my _Windows 10 + Ubuntu Bash For Windows_ combo again.

{% endplan_task %}

{% plan_task "2019-04-03" %}

Contributing to the IndieWeb effort by editing the wiki and started contributing to the [Known Open Collective](http://opencollective.com/known) groups and monitoring and participating to the IndieWeb IRC channels. The `#indieweb-meta` channel especially is really interesting as it integrates Twitter mentions for any IndieWeb related topic. Thanks to this very useful integration I got to know a group of interesting _IndieWebbers_ who are sharing insightfull articles on their own sites and syndicating these on the corporate silos like Twitter and Facebook.

[#knownchat chat room log](https://chat.indieweb.org/known/)

{% endplan_task %}

{% plan_task "2019-04-03" %}

Got the "Known Twitter" plugin working, but I am still using brid.gy for a more stable publication to Twitter. It happens in some cases that the webmention context is not set correctly using the plugin.

Trying to keep up with Marcus Povey with the latest releases of Known. It's not easy however for me as the composer installation fails on my hosted web server. So I need to do manual updates. Also, I haven't had much success installing the Known instance on my local server. In fact, it got to a point where I got frustrated and decided to reinstall WSL (aka "Ubuntu on Windows"). So now I am working without a local server as I hadn't had the time to reset everything.

Added an integration of ["webmention.io"](https://webmention.io/) to all pages on this site. Wrote it using plain-vanilla JavaScript and the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). Created the HTML code based upon what I saw on [Marc Thiele](https://marcthiele.com/)'s site.

Trying to promote the IndieWeb movement at work. It seems not many colleagues actually have their own websites. So it's a bit of a hard sell.

{% endplan_task %}

{% plan_task "2019-04-03" %}

Successully Installed [Known version 0.9.9-a](https://withknown.marcus-povey.co.uk/) maintained by Marcus Povey on <https://social.johanbove.info>.

Including the set up Brid.gy from my site to Twitter, which is an IndieWeb syndication tool by Ryan Barrett, Kyle Mahan, and many other contributors to perform #POSSE to corporate Web silos. It also handles webmentions pretty well.

Had to change the Twitter profile website link to point to my social.johanbove.info site to make Brid.gy work as it authenticates you by checking this a tag which has the `rel="me"` attribute. This is an implementation of [Web Sign-in](https://indieweb.org/Web_sign-in).

My Brid.gy profile: <https://brid.gy/twitter/johanbove#>

[Known has a Twitter plugin](https://github.com/idno/Twitter/), but it doesn't seem to authenticate on my server, so I added my vote and comment to [this existing issue](https://github.com/idno/Twitter/issues/58).

Setting up [the application in Twitter](https://developer.twitter.com/) requires you to fill in an extensive form declaring - much like in customs - what your intensions are in developing the app. I simply stated the truth as that I only want to [syndicate the posts](https://developer.twitter.com/en/use-cases/publish-and-curate) from my personal site to Twitter.

{% endplan_task %}

{% plan_task "2019-04-03" %}

Setting up ["Known"](https://withknown.com/) on my server for my own social publishing platform.

It's [open source](https://withknown.com/opensource/) and free to [host on your own system](http://docs.withknown.com/en/latest/install/instructions/) - which the recommended system requirements of PHP 7 and MySQL.

### Tasks

1. ✅ Set up sub domain for https://social.johanbove.info
1. ✅ Set up MySQL database (or use SQLLite?) - MySQL is recommended.
1. ✅ Follow the installation instructions for Known
1. ❎ Set up a local instance of the Known server (Ubuntu bash for Windows) for development and testing.

{% endplan_task %}

{% plan_task "2019-04-03" %}

Figuring out how to include [Brid.gy](https://brid.gy/about) on my site; it supports backfeed, POSSE and webmention support as a service.

I'd like to achieve the same content as [this working example of a Brid.gy integration](https://snarfed.org/2014-01-15_a-new-kingdom#comments) by its creator <a href="https://snarfed.org" rel="noopener" class="h-card">Ryan Barett</a>.

{% endplan_task %}
