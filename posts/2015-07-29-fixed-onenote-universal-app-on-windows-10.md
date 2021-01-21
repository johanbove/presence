---
layout: post
author: Johan
title: "Fixing OneNote Universal App on Windows 10"
tags: post
published: "2015-07-29"
description: "Universal OneNote did not work any more after the Windows 10 update."
---

## Universal OneNote did not work any more after the #windows10 update.

I encountered various issues like blank screens and enigmatic messages that I could not log in anymore. So I figured the fix was to reinstall the app.

To do this I first had to figure out how to remove it. So I [found out](https://social.technet.microsoft.com/Forums/en-US/ab5cf7ef-71bf-4dde-9711-313e440e6a82/onenote-cant-login?forum=WinPreview2014General) that we can remove the app with the following command in PowerShell.

The command:

    get-appxpackage *microsoft.office.onenote* | remove-appxpackage

When the process is done, simply reinstall OneNote using the Windows Store.

*Note:* most help threads are stating to execute this command in a PowerShell with elevated privileges (as admin). However the command will remove OneNote Universal for the admin account. There's actually no need to run this as admin. My usual Windows account has regular user rights and I was still able to execute the above command and reinstall OneNote Universal.
