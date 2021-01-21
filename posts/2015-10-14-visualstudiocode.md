---
layout: post
author: Johan
tags: post
title: "Jumping on the Visual Studio Code train"
published: "2015-10-14"
description: Visual Studio Code is like Visual Studio Light
---

## Visual Studio Code is like Visual Studio Light

Well-known web developer, [Dave Rupert](http://daverupert.com/2015/10/windows-editors-and-shells/) introduced me to this new Multi-Platform (Windows, Mac and Ubuntu :sparkles:) editor made by [Microsoft](http://www.microsoft.com).
You can download your own "preview" "for free" over at <https://code.visualstudio.com> while supplies last.
The preview will function [until 31/12/2016](https://code.visualstudio.com/License) (day/month/year); it is a little unclear as to what will happen after this date.

## First Impressions

### "5 minutes in"

- Solid Markdown support. This editor is made for creating notes in Markdown, including previews!
- Cool fresh interface.
- Great, familiar way of navigating around folders and open files if you're used to Visual Studio.
- Integrated Git support! :rocket:
- Tasks running right from within the editor is really sweet!

### "Half an hour in"

- I actually forgot until now how helpful Intellisense is.
- Build in JsLint and JsHint support!
- Easy text based preferences allowed me to quickly set the editor's look and feel to my likings.
- Fancy inline Git changes right within the editor window while working on files rocks.

## More to follow ...

This post will be updated with more experiences and impressions as I go along.

## Some initial questions

- Can I use this editor for free developer commercial applications?
- Will it stay free?
- What's the status of plugins adding missing features and functionality?
- Does it support GitHub's Two-Factor authentication?

## Issues

### Task Runner encoding is set to IBM ...

For my Jekyll grunt build to success I need to be able to set the encoding of the "Task" output window by doing:

    chcp 65001

This sets the Powershell encoding to UTF-8 and the Multi-lingual Jekyll plugin I'm using in a project works.
The issue: I don't know - yet - where to define this command so it runs everytime I run ``ctrl-shift-p`` and type ``Run Task``.
