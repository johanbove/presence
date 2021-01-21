---
author: Johan
layout: post
tags: post
title: "Cannot SSH from WSL"
published: "2018-06-30"
description: Fix unprotedcted private key file issue on Windows Subsystem For Linux
---

This is a post explaining how I got around the issue that you cannot load up an .ssh key for a SSH session from within the Windows Subsystem For Linux.

I'm currently on Windows 10 Pro, Version 1803 (OS Build 17134.112).

When trying to SSH into my remote server from a (Windows Subsystem for Linux)[https://docs.microsoft.com/en-us/windows/wsl/install-win10] terminal, I was greeted by this *lovingly* designed error message:

```text
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0777 for '/mnt/c/Users/Johan/.ssh/private-key_rsa' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
```

So I went out on the Intarwebs to look for a fix.

My (DuckDuckGo Search)[https://duckduckgo.com] found the following issue on the WSL GitHub project, posted by [@ArturChe](https://github.com/ArturChe): <https://github.com/Microsoft/WSL/issues/3181>

Arthur's issue got quite a few replies and the reply that helped me out, was the one that mentioned [this MSDN blog post](https://blogs.msdn.microsoft.com/commandline/2018/01/12/chmod-chown-wsl-improvements/) by [Craig Wilhite](https://social.msdn.microsoft.com/profile/Craig+Wilhite)

It taught me that you can mount the Windows Drive C including *metadata*... And this flag should fix the file permissions notification. The post is a little technical, but the explanation clear and best of all, it worked!

I can now use my .ssh key again!

So in short, my fix for this issue was to follow the instructions to umount and mount the C with the 'metadata' flag.

```bash
sudo umount /mnt/c
sudo mount -t drvfs C: /mnt/c -o metadata
```

To make **Windows Subsystem For Linux** always mount the Windows drive including *metadata*, you'll need to follow the instructions from[this other MSDN blog post](https://blogs.msdn.microsoft.com/commandline/2018/02/07/automatically-configuring-wsl/).

For the moment I haven't encountered any side-effects for this and the SSH connection works.
