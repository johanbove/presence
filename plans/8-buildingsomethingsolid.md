---
layout: plan
plan: "8-buildingsomethingsolid"
title: " Building something SOLID"
tags: "completed"
started: "2019-02-02"
status: "completed"
completed: "2021-01-30"
---

## Learing about SOLID

Gathering resources to prepare and educate myself on how to build apps which integrate with [SOLID](https://www.w3.org/community/solid/wiki/Main_Page/).

 1. ❓Question: What to build on top of [Linked Data](http://rubenverborgh.github.io/WebFundamentals/semantic-web/)?
 1. 💡Idea: Add [SOLID pod integration](https://solid.inrupt.com/docs/app-on-your-lunch-break) to this site: likes, comments.
 1. 🚀Inspiration: [Vue.js powered Task manager app](https://forum.solidproject.org/t/focus-a-solid-task-manager/1022/9) and [Solid Focus](https://github.com/noeldemartin/solid-focus)
 1. ❎ Task: Fix the pages on this site to be RDF compatible.
 1. ❎ Task: Set up a SOLID POD test server on Ubuntu (use Nginx as Proxy)
 1. 📚Study: Check [Ruben Verborgh's website](https://ruben.verborgh.org/blog/2018/12/28/designing-a-linked-data-developer-experience/).
 1. 📚Study: Do something with [LDFlex](https://ruben.verborgh.org/blog/2018/12/28/designing-a-linked-data-developer-experience/#ldflex).
 1. 📚Study: The [SOLID REACT SDK](https://github.com/Inrupt-inc/solid-react-sdk/blob/master/README.md).
 1. 🛠Test: See Yeoman generator [generator-solid-react](https://github.com/Inrupt-inc/generator-solid-react)

## Updates

{% plan_task "2021-01-26 22:00" %}

I've placed my Solid endeavours on hold for now to focus on the IndieWeb technologies first.

{% endplan_task %}

{% plan_task "2021-01-25 22:00" %}

Read the Linked Data articles by Ruben Verborgh and almost made it through the [Linked Data book](http://linkeddatabook.com/editions/1.0/).

Decided to have a good look at the [Solid-Focus](https://github.com/noeldemartin/solid-focus) app by Noel Martin as a great example on how to build a Web app which saves data in a Solid Pod.

I've [forked the Solid-Focus project on Github](https://github.com/johanbove/solid-focus) and have set up the local work environment and it's running fine locally, even on my Windows 10 machine. So now I need to learn how it all comes together within the Vue.js application. I'm especially impressed by the code organisation and structure of the Vue.js app. The way how the various services are initialized is very cool. Great idea to use a Service class where the Vue.js app instance is being passed into.

Here's the code of src/services/index.ts, released under the GNU General Public License v3.0:

```js
/**
* Services are singletons used throughout the app that encapsulate
* business logic and interact with Vuex to manipulate application state.
*/

import Vue from 'vue';

import UI from '@/services/UI';
import Auth from '@/services/Auth';
import Config from '@/services/Config';
import Service from '@/services/Service';
import Workspaces from '@/services/Workspaces';

export default async function bootServices(app: Vue): Promise {
    Vue.prototype.$services = [
    Vue.prototype.$ui = new UI(app),
    Vue.prototype.$auth = new Auth(app),
    Vue.prototype.$config = new Config(app),
    Vue.prototype.$workspaces = new Workspaces(app),
  ];

  await Promise.all(Vue.prototype.$services.map((service: Service) => service.ready));
}
```

As a first improved or my contribution to the project, I proposed the ability to [edit existing tasks](https://github.com/NoelDeMartin/solid-focus/issues/4) and Noel had already planned this. I'll need to check how the PATCH verb works in the Solid API.

He's getting inspiration from Wunderlist and I agree that that's a good example of a great task manager.

{% endplan_task %}
