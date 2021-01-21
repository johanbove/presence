---
layout: post
title: "Project: Sustainica"
timeframe: "2015-2016"
tag: project
published: "2016-01-25"
description: A Jekyll website I created for the Sustainica 2016 Conference.
---

## A Jekyll website I created for the Sustainica 2016 Conference.

This project consists of a static website built on top of [the Zeppelin template](https://github.com/gdg-x/zeppelin). The system generates HTML, CSS and optimized images by running a program called Jekyll which is written in Ruby.

The project's deployed files are compiled through Grunt tasks. The front-end code applies Bower, SCSS and various other web tools to construct a fast and modern web site. The content of the site is structured and managed using Markdown and Yaml (yml) files. The layout engine uses [Liquid Template](http://liquidmarkup.org/) (by Shopify) syntax and engine to compile simple HTML and display logic into powerfull HTML structures from simple text files.

The template was heavily modified to adjust to the requirements of the [Sustainica event site](http://www.sustainica.org), but the major building blocks, Grunt scripts, components and file organisation, were kept.

Initially the site code was privately hosted on git.geekli.st, but after a couple of authentication issues and a better offer of Atlassian's BitBucket we moved the project to a private Git repo on [Bitbucket.org](http://www.bitbucket.org).

BitBucket's web editor allows us to make changes to the content and data files. We plan releases of the site in [Trello](http://www.trello.com).

### The Template Features

- Once you get the hang of Jekyll it is easy to setup and make changes
- Modern and responsive design
- Integrated speakers and sessions management
- i18n (internationalization)
- SVG icons
- SEO friendly
- Optimized for quick delivery and rendering

### Using BitBucket's Git code repository

- Introduction on the code repository
- Issues: creating, editing, emojies, assigning to users
- Commenting
- Commit annotation and comparison
- Milestones
- Labels: bug, content, feature, installation, layout, major, minor, patch, tweaks, not doing
- Commits
- Branching & merging
- RSS feed to e-mail through IFTTT integration.
- Tags and releases
- Not possible to upload files through the GitLab interface [GitLab issue](http://feedback.gitlab.com/forums/176466-general/suggestions/5867835-allow-file-upload-to-repositories-from-the-web-int)

### Release Process

In the beginning the site was build locally after editing the content and layout files using Grunt. When the build process was done, the build folder contents was simply manually FTP-ed to the hosting server. We now can publish the site using Git hooks by pushing the Git changes to specific Git repositories which trigger the Grunt build process when a change is committed.

### Software Used

- [Adobe Brackets](http://brackets.io/) was my main code editor for a while before I switched to [Microsoft's Visual Studio Code](https://code.visualstudio.com/) after having issues with NodeJS.
- [Paint.net](http://www.getpaint.net/) for bitmap images (PNG, JPG) - the best free image editing software for Windows.
- [Inkscape](https://inkscape.org/en/) was used for SVG manipulation - the main site logos are SVG.
- [FileZilla](https://filezilla-project.org/) for uploading files until I switched to Beyond Compare.
- [Beyond Compare](http://www.scootersoftware.com/) for FTP synchronization.
- [GitHub Desktop](https://desktop.github.com/) for it's powerful and useful Git workflow gui.

### Using Git

Windows PowerShell and Git for Windows; fixing some issues with dealing with Git in Github Git bash console
Tagging: before I figured I can use NPM version I did manual ``git tag -a v1.4 -m "my version 1.4"`` [manual](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

``git push origin master`` - pushes the local changes to the "origin" git remote repo.

``git push ci release`` - triggers a "continuous integration" build.

### Google Structured Data

The template introduces [Schema.org tags](http://schema.org/docs/gs.html) which are detected by Google using <https://developers.google.com/structured-data/rich-snippets/events>.

### Using Grunt and NPM

Building the site and execution the various optimizations: [SVGMIN](https://github.com/sindresorhus/grunt-svgmin), Imagemin, Uglifier, etc.
Deployment with grunt; running grunt tasks, ...

NPM version: ``npm version [major|minor|patch] -m "Upgrade to version %s for ..."``

#### Bower Components in this project

[Bootstrap Sass](https://github.com/twbs/bootstrap-sass)
[Animate.css Sass](https://github.com/tgdev/animate-sass)
[Waves](https://github.com/publicis-indonesia/Waves)
[jquery.appear](https://github.com/bas2k/jquery.appear)
[Sticky-kit](https://github.com/leafo/sticky-kit)
[superslides](https://github.com/nicinabox/superslides)
[compass-mixins](https://github.com/Igosuki/compass-mixins)
[jquery-easing-original](https://libraries.io/bower/jquery-easing-original)
[svg4everybody](https://github.com/jonathantneal/svg4everybody)

#### NPM Bundles in this project

```text
"bower": "~1.4.1",
"grunt": "~0.4.5",
"grunt-autoprefixer": "~2.2.0",
"grunt-browser-sync": "^2.0.0",
"grunt-build-control": "~0.3.0",
"grunt-contrib-clean": "~0.6.0",
"grunt-contrib-copy": "~0.8.0",
"grunt-contrib-cssmin": "~0.12.2",
"grunt-contrib-htmlmin": "~0.4.0",
"grunt-contrib-imagemin": "~0.9.4",
"grunt-contrib-uglify": "~0.8.0",
"grunt-contrib-watch": "~0.6.1",
"grunt-critical": "~0.1.2",
"grunt-jekyll": "~0.4.2",
"grunt-sass": "~0.18.1",
"grunt-svgmin": "~2.0.1",
"jit-grunt": "~0.9.1",
 "time-grunt": "~1.1.0"
```

## What I learned

- Project planning using [Trello](https://trello.com/johanbove/recommend)
- Gathered experience with building static websites using [Jekyll](https://jekyllrb.com/)
- Create multi-lingual Jekyll websites, with the "jekyll-multiple-languages-plugin"
- For loops, data lists and conditional statements in [Shopify's Liquid template](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) syntax
- Bootstrap's grid CSS layout system
- Improving my knowledge of the [Grunt JavaScript Task runner](http://gruntjs.com/) and build system
- [SCSS - "SASS" style sheets](http://sass-lang.com/)
- Working with [NPM](https://docs.npmjs.com/cli/version) and Git "tags"
- Improving my Git command-line skills
- Setting up a [secure VPS server with remote Git on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-14-04) and [SSH keys access](https://confluence.atlassian.com/bitbucket/set-up-ssh-for-git-728138079.html)
- Applying Git "post-receive" hooks in [a bare git repository](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps)
- Using Schema.org tags
