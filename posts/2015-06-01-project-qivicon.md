---
layout: post
title: "Project: Qivicon"
timeframe: "2014-2015"
tags: project
published: "2015-06-01"
description: "Building three web applications which connect to the Qivicon platform"
---

The client entrusted me to construct and structure three web applications which connect to the Qivicon platform and which fall in the category "Internet Of Things": the apps allowed users to control their heating-system at home, change the state of lighting and measure power consumption of household appliances through the modern web browsers installed on either smart-phone or regular PC.

The applications were build upon the MVVM programming pattern, with a true separation in the JavaScript code between the "view", the "model" and the "controller" and "services". Since we were working in a team of ten people, this separation allowed us to organize the work and changes applied to the application modules. It also meant that the application-code was fully testable using continuous integration.

## Tools Used

 - [The Qivicon Platform](https://developer.qivicon.com/) by Telekom
 - [OSGI Internet Of Things - platform](https://www.osgi.org/about-us/working-groups/internet-of-things/)
 - [Microsoft Visual Studio 2013 - IDE](https://www.visualstudio.com/)
 - [Microsoft Team Foundation Server - code repository and planning](https://www.visualstudio.com/en-us/products/tfs-overview-vs.aspx)
 - [Knockout JS](http://knockoutjs.com/) for declarative bindings, automatic UI refresh, dependency tracking and templating
 - [LESS CSS stylesheet precompilation](http://lesscss.org/)
 - [Jasmine unit-tests](http://jasmine.github.io/)
 - [PhantomJS headless browser](http://phantomjs.org/)
 - [SammyJS router](http://sammyjs.org/docs/routes)
 - [RequireJS - the JS file and module loader](http://requirejs.org/)

## What I learned

 - Constructing Single-Page Web applications with RequireJS and KnockoutJS on top of the ["Model View View Model" pattern](https://msdn.microsoft.com/en-us/library/hh848246.aspx).
 - Mobile-First and adaptive/responsive web design.
 - Working with Microsoft's Team Foundation Server which was later renamed to Visual Studio Online.
 - Including [code reviews](https://www.visualstudio.com/en-us/get-started/code/get-code-reviewed-vs), the wiki and project planning.
 - Coding JAVA using the OSGI platform.
 - Agile Development in bi-weekly sprints and Scrum best practices.
 - Test Driven Development and continuous integration with [Visual Studio's Testing Tools and Services](https://www.visualstudio.com/en-us/features/testing-tools-vs.aspx).
 - Setting up a build server with Microsoft Visual Studio using [XAML process templates](https://msdn.microsoft.com/en-us/library/dd647551(v=vs.120).aspx).
