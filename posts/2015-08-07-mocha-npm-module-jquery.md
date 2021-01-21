---
layout: post
author: Johan
title: "Mocha NPM TEST jquery module not loading"
tags: post
published: "2015-08-07"
description: "Lessons learned: keep your dependencies up-to-date"
---

# Lessons learned: keep your dependencies up-to-date

This post describes an issue I had with trying to run mocha unit tests from the command line. When I run the tests from the browser everything is fine. But when I run the same tests from the command line on my local machine using `npm test` or `mocha`, npm seems to have trouble finding the "jquery" module.

## The solution

I had jQuery version *1.9.1* previously installed. I changed the dependency in *package,json* to load version *1.11.3* and performed the command `npm update`and now `require` is able to load in *jQuery*. :smiley:

## Description

Running `npm info jquery` is showing me that jQuery is installed; yet when I execute `npm test` or run `mocha`, *module.js* is complaining it cannot find module "jquery".

## Screenshots

The issue: `Error: Cannot find module 'jquery'`:

[![Screenshot: the issue](/images/20150807-screenshot01.png)](/images/20150807-screenshot01.png)

Ran `npm list` shows *jquery* is there:

[![Screenshot: npm list showing jquery is there](/images/20150807-screenshot02.png)](/images/20150807-screenshot02.png)

Brackets folder view of *node_modules* shows *jquery* is there:

[![Screenshot: brackets folder view of node_modules shows jquery is there](/images/20150807-screenshot05.png)](/images/20150807-screenshot05.png)

My test depends on `var $ = require('jquery');`:

[![Screenshot: test require(jquery)](/images/20150807-screenshot03.png)](/images/20150807-screenshot03.png)

My *Mocha.opts* file:

[![Screenshot: mocha.opts](/images/20150807-screenshot04.png)](/images/20150807-screenshot04.png)

The "chai" `require` is working as my tests run fine without requiring jquery:

[![Screenshot: test npm works without require jquery](/images/20150807-screenshot06.png)](/images/20150807-screenshot06.png)

If you have any advice on what I can do to sort this out, please contact me.
