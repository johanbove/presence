---
layout: post
author: Johan
tags: post
title: "Learning a new technology: Meteor - Day 1"
published: "2015-11-01"
description: "November 2015 - Building Meteor applications"
---

## November 2015 - Building Meteor applications

I'm going to learn how to build applications with "Meteor" this month. I'll be collecting plans, challenges and thoughts here.

What got me started was [this excellent talk on "Angular Meteor"](https://www.youtube.com/watch?v=3FT0BqYASCo) by [Uri Goldshtein](https://github.com/urigo).

### What is it and why is it interesting?

> "[Meteor.js](https://www.meteor.com/) is a cohesive development platform, a collection of libraries and packages that are bound together in a tidy way to make web development easier. It builds on ideas from previous frameworks and libraries to offer an easy way to start a prototype app, but it gives you the tools and flexibility to build a full fledged production app. There are libraries like *Tracker* and *Blaze* that the *Meteor Development Group* has built specifically for a reactive front-end experience."

> "Meteor is an ultra-simple environment for building modern websites. What once took weeks, even with the best tools, now takes hours with Meteor." - copied from the [docs](http://docs.meteor.com/#/basic/)

> "...because Meteor.js is built on top of Node.js, you could start to build in something like Angular.js and you will be 'less stuck' than you think. Plenty of people are doing it, and I've known of a few people that have adapted an Angular app to work directly with Meteor." ~ Quote by Josh Jowens, author of ["What is Meteor.JS"](http://joshowens.me/what-is-meteor-js/)

> "Meteor is a framework that lowers the barrier to entry for building apps with presence. It is an open source platform for realtime & reactive apps aligned toward the vision that delightful apps can be built easier, better, and faster than ever before. Developers can use Meteor to create software that feels alive with activity. Companies no longer have to forfeit palpable user experiences due to technical complexity. When Meteor wanted shining examples of their technology to accompany the official launch, they reached out to us to design and build it." ~ [Percolate introduces Meteor](http://percolatestudio.com/what/meteor)

And all of this is compatible with Windows! Yay. That sounds almost too good to be true though. Let's find out how I will master this.

## Day 1 - Log

- I followed the tutorial and managed to setup the ["Simple Todo"](https://www.meteor.com/tutorials/blaze/creating-an-app) tutorial application and deploy the app to the Meteor hosted "cloud".
- Next step was looking at the example application ["Todos"](https://www.meteor.com/todos).
- Learned about the Meteor package manager called [Atmosphere](https://atmospherejs.com).
- I upgraded the ["iron:router" package](https://atmospherejs.com/iron/router) in the "Todos" example application to the latest version. Learned how to manage packages; the command `meteor help` is my best friend right now.
- Investigated the CSS (LESS) code and structure and found out the app is using the incredibly extensive Less mixins library from [Made By Source's "LessHat"](https://github.com/madebysource/lesshat).
- I'm considering buying the book ["Discover Meteor"](https://www.discovermeteor.com) since it seems there's a lot of topics to cover and some guidance is still welcome.
- Got to know the [Velocity Engine](https://velocity.readme.io/) testing framework. Which also seems to push their own book ["Meteor Testing"](http://www.meteortesting.com/)
- Dr. Llama introduces me to ["Bullet-proof Meteor applications with unit testing (TDD)"](https://doctorllama.wordpress.com/2014/09/22/bullet-proof-internationalised-meteor-applications-with-velocity-unit-testing-integration-testing-and-jasmine/) and here is [the Github code repo](https://github.com/tomitrescak/BulletProofMeteor) for the *BulletProofMeteor* example application.
- And here is an explanation on [how to host Meteor apps](https://gist.github.com/chriswessels/6540167) on your own (VPS) server. Something I want to try set up on my DigitalOcean set up.
- I also always wanted to give MongoDB a try.
- Installed the ["Local Market"](https://www.meteor.com/localmarket) example application.

### Questions & Challenges

- Who are [the people behind Meteor](https://www.meteor.com/about/project)?
- What I'm not keen off is that none of the example apps have "linted" JavaScript code. There's not even the `"use strict";` statement. There's probably a good reason for it.
- There's a [boat-load of documentation](http://docs.meteor.com/#/full/) to go and read through.
- Most of the articles and documentation I found seems to be dated from about a year ago. Wondering why that is?
- As with any "example" application: the initial "Simple Todo" application only was the tip of the ginormous iceberg; building decent web apps are way more complex than that. Good thing that the "Todos" example is more complete; although it still runs with the *insecure* mode active. Wondering how to get it working with that package removed?

### Inspiration

- <https://www.meteor.com/localmarket>
- <https://www.meteor.com/case-studies/flowkey>
- <https://www.meteor.com/case-studies/blonk>
- ... And more [case-studes on Meteor.com](https://www.meteor.com/case-studies/build-apps-with-meteor)

### Installing Meteor on Windows

- Followed the steps in the excellent ["Getting Started"](http://docs.meteor.com/#/basic/quickstart) docs.

### Resources

- ["Awesome Meteor"](https://github.com/Urigo/awesome-meteor)

### Tutorials

- <https://www.meteor.com/learn>
- <http://angular-meteor.com/tutorialIntro>

#### Iron:Router

- <http://iron-meteor.github.io/iron-router/>
- <http://robertdickert.com/blog/2014/05/08/iron-router-first-steps/>

### Books

- <http://meteortips.com/deployment-tutorial/>
- <https://www.discovermeteor.com/>
