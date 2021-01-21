---
layout: post
author: Johan
title: "Grunt 'the socket is closed' error and how I found a workaround"
tags: post
published: "2015-06-09"
description: Building a site with Jekyll issues
---

So the other day I started building a website for a friend. Since I am pretty happy with Jekyll I decided to use the same website building technology for this new site.

Thanks to the GDG Düsseldorf group I had come across the excellent template called "[Zeppelin](https://github.com/gdg-x/zeppelin-grunt)".

The super devs who built this Jekyll template offer the complete source code, including the build system, for free on GitHub.

Since my personal site is built with Jekyll and I have some experience with Grunt, I was convinced that setting up the site and building it using Grunt would be a piece of cake. It was not. Nevertheless that all Node NPM modules should work on Windows, I ran into issues with the *Windows Command Prompt* itself.

The issue happened when I tried building the site using the grunt command:

    $grunt serve:dist

The following error stopped everything midway in the build process:

[![Error: the socket is closed during script execution](/images/20150609-gruntsocketisclosederror.png)](/images/20150609-gruntsocketisclosederror.jpg)

Serving the site for testing directly worked without troubles. So what was going on? Was the error caused by the *imagemin* and *svgmin* modules? Was it *lodash*? I actually still don't know.

Desperate to find a solution, I hunted down pages of Github project issues and comments but was not able to find anything that helped me to the issue.

At this point I thought I should document this endeavour and perhaps the Internet could help me sort this out. I knew you can pipe the command prompt output to text files. So my next step was to transfer the output of the Windows command line window into a text file. I used this command:

    $grunt serve:dist > out.log

Guess what? This created the *out.log* file containing the output from the process as expected, but what happened as well? Wel, the grunt build command executed without any hiccup! :relieved: :smile:

It would still be cool to figure out what exactly is causing the socket issue. I will have to return on this issue at a later time when my deeper knowledge on how NPM's inner workings tick improved.

There were some other issues with the Windows Command Prompt. And for each I found a way of getting around, with big thanks to [Stackoverflow](http://stackoverflow.com/) and [Github](http://www.github.com).

The **[Jekyll Multiple Languages](https://github.com/screeninteraction/jekyll-multiple-languages-plugin)** plugin did not want to include markdown files which had non-US characters like the German "&uml;". So I [found out on a blog post](http://joseoncode.com/2011/11/27/solving-utf-problem-with-jekyll-on-windows/) that this is caused by the Windows command prompt page encoding not being set to **UTF-8** by default.

Execute this in the command prompt to set the page encoding for the current command prompt session:

    $chcp 65001

The other problem is related to Node's [nested node_modules](https://github.com/joyent/node/issues/6960) of [endless dependencies](https://github.com/npm/npm/issues/3697). It is possible that you end with too many nested folders which gets Windows OS stuck where it is not able to get through to all folders because of a 260 character path limit. :unamused:

To circumvent this you can [create a temporary drive assignment](http://stackoverflow.com/questions/21731066/too-long-paths-because-of-nested-node-dependencies) using the command ```subst``` from within half-way the nested folders.

This command will effectively [create a temporary partition drive letter](http://www.makeuseof.com/tag/how-to-map-a-local-windows-folder-to-a-drive-letter/) and hence the path will be literally cut in half so you can, try, to delete the folders.

    $subst j: .\

After all these years Windows is still full of little surprises! :sweat_smile:
