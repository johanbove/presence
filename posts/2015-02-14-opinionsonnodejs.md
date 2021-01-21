---
layout: post
author: Johan
title: "Opinions on Node.JS"
tags: post
published: "2015-02-14"
description: "About Node.js server applications"
---

So we talked about this at work the other day and we dared to raize the question: should a company invest its time and effort building server-side apps with NodeJS?

My colleague, Richard Tolar raised some valid concerns regarding Node.JS:

> Look carefully at Node.js before committing a substantial investment to it. While it certainly has it’s advocates, there is a pretty substantial anti-Node.js camp.
Everything in Node.js ends up being callback-driven, since there’s only one operating thread. So, ‘callback hell’ is an often-discussed topic in the Node.js community, and there are plenty of websites dedicated to discussing it: [http://callbackhell.com/](http://callbackhell.com/).
Is Javascript the right choice for a server-side language? Fire that question into a room of developers, and step back to watch the fun. It’s certainly a topic with a lot of disagreement. Contrast that to pretty much all other languages : Java, C#, Python, etc. There’s pretty much universal agreement that all of these other languages are good server-side languages, in the right context.
Also, there are some high profile Node.js developers that recently moved away from Node.js, such as TJ Holowaychuk. See his ‘farewell Node.js’ blog at: [https://medium.com/code-adventures/farewell-node-js-4ba9e7f3e52b](https://medium.com/code-adventures/farewell-node-js-4ba9e7f3e52b) Who is TJ? A very prolific creator/contributor to Node.js frameworks: [http://www.quora.com/How-is-TJ-Holowaychuk-so-insanely-productive](http://www.quora.com/How-is-TJ-Holowaychuk-so-insanely-productive)
A google trends report shows that while Node.js was pretty hot for a few years, interest has basically flat-lined in the last 12 months. [http://www.google.com/trends/explore#q=node.js](http://www.google.com/trends/explore#q=node.js)
Are there a lot of successful projects out there using Node.js in production? Absolutely. But be aware that you are building your server-side logic in an interpreted language with a single-threaded execution model based on callbacks/async requests.
My $.02 : Node.js is ideally suited for development organizations that have a very deep bench of expertise in Javascript, and want to leverage that expertise on the server side, rather than having to manage to two language ecosystems.

So I understand from Richard's excellent thoughts that Node.JS is still alive and kicking and therefore it is perfectly sensible to learn more about it. Next logic step for me would be to check out Node's more popular web application framework: Express.JS.

## Getting started with Express.JS

Going for the official documents first of course: [http://expressjs.com/](http://expressjs.com/)

## Application ideas to start with

- [Building a todo-list app in Express.js](http://javascriptplayground.com/blog/2012/04/node-js-a-todo-app-with-express/)
- [Building a monitoring application for weather API with alerts etc](http://blog.worldweatheronline.com/2015/02/19/getting-started-world-weather-online-api-node-js/)
