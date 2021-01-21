---
layout: post
author: Johan
tags: post
title: "My `gem install bundler` Issue"
hero: "http://pngimg.com/uploads/ruby/ruby_PNG29.png"
published: "2018-06-26"
description: Trouble with Ruby and Jekyll on Windows
---

## *Update 2018-06-30*

After updating Ubuntu packages **gem v2.5.2** is working again!

The following packages were updated on running ``apt-get update && apt-get upgrade -y``:

```bash
 cpp-5 g++-5 gcc-5 gcc-5-base libasan2 libatomic1 libcc1-0 libcilkrts5 libgcc-5-dev libgomp1 libitm1 liblsan0 libmpx0
  libquadmath0 libssl-dev libssl-doc libssl1.0.0 libstdc++-5-dev libstdc++6 libtsan0 libubsan0 openssl
  update-notifier-common
```

Yay!

## *My Original Post*

I can't install anything with ``gem install bundler``. Ruby barfs out this stack dump.

Reinstalled **rbenv** and tried both with installing Ruby v2.3.3 and v2.5.1. Both output the same error.



















































