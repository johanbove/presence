---
layout: text
name: Johan's DWeb Presence
eleventyExcludeFromCollections: true
---
# README

"[{{name}}](/)" is an [Eleventy](https://www.11ty.dev) powered static site.

You should also be able to find it on [the IPFS](https://dweb.link/ipns/k51qzi5uqu5dhvw5e389n9c02e34sbipwungdz7uie5ykw9kwk05c7b2nrrq4l).


## Getting Started with Eleventy

- <https://www.11ty.dev/docs/getting-started/> 

## Commands

Install

> See the Getting started docs.

Build

    npx @11ty/eleventy

Serve

    npx @11ty/eleventy --serve
    
Deploy

    Xcopy /E /I _site C:\Users\Johan\Projects\johanbove.info\domains\johanbove.info\private_html\_site

## Plans

- ✅ Move content from https://johanbove.info here.
- ✅ Fix layout to an usuable state.
- ✅ Mirror gemini journal posts here.
- ✅ Set up collections for "plans".
- ✅ Add RSS feed.
- ✅ Add "plans".
- ✅ Fresh up the design.
- ✅ Rename #content to #root
- ✅ Fix Webmentions implementation
- ✅ Fix footer links
- ❌ Retire blog.johanbove.info site
- ❌ Add "Quotes" page from gem.johanbove.info
- ❌ Add anchor ids for every heading element in the page
 
## IPFS / IPNS

Use this IPNS domain name for accessing the IPFS stored mirror of the site:

https://ipfs.io/ipns/johanbove.info/

On Brave you should be able to access this site on:

ipns://johanbove.info


## Inspiration

- ["Turn Jekyll up to Eleventy"](https://app.getpocket.com/read/2416710133)
- ["Using Webmentions in Eleventy](https://mxb.dev/blog/using-webmentions-on-static-sites/)
- <https://sia.codes/posts/webmentions-eleventy-in-depth/>

## Content-Security Policy

The inline script in the HTML needs a CSP Hash. Here is how to generate it:

```bash
$ echo -n "document.body.classList.remove('no-js')" | openssl sha256 -binary | openssl base64
9yVPleo+y1MAj09u+hM2TT784nZ5OXfdUkw60zxGLYs=
```

## Deploying

Use **ipfs-shipyard/ipfs-deploy**:

```bash
$ npm install -g ipfs-deploy
$ ipfs-deploy -p infura -p pinata _site 
```

> **NOTE:** Make sure to set get an account with <https://pinata.cloud> and create an API key for the environment variables!

```bash
IPFS_DEPLOY_PINATA__API_KEY=<api key>
IPFS_DEPLOY_PINATA__SECRET_API_KEY=<secret api key>
```

```bash
$ ipfs name publish --key=johanbove.info QmSomeHash
```

> **NOTE:** You cannot remove pinned content from <https://infura.io/>!


## Check Markdown IT

See <https://github.com/siakaramalegos/sia.codes-eleventy/blob/main/.eleventy.js>

```
 /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

```
