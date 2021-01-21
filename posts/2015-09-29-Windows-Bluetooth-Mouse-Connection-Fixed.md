---
layout: post
title: "Fixing BlueTooth Woes"
description: "Causes of BlueTooth interference in homes"
tags: post
published: "2015-09-09"
---

## Is your BlueTooth mouse freezing occasionally?

Whenever I am at home I experience occasional dropouts with my BlueTooth mouse, a Microsoft Sculpt mouse. This does not happen at the office where I use the exact same mouse, so I figured this is due to interference at home. Living in the city there are a lot of wireless signals surrounding me, both BlueTooth and WiFi. I figured this must be causing the annoying issue.

I have a cool, great sounding, portable Urban Ears UE Boom BlueTooth speaker which I use in the living room. Switching it off seems my mouse - PC connection is a lot more stable.

Looking for a way to make my Surface Pro 3 and the mouse talk to each other while playing music on the BlueTooth speaker without being interrupted by the signal interference, I came across [a MSDN document](https://msdn.microsoft.com/en-us/library/windows/hardware/dn133849(v=vs.85).aspx) which explains how to set the **ChannelAvoidanceRange** in Windows.

It seems that the Bluetooth bandwidth is completely saturated with devices!
Is the industry doing something about this?

## Issue Log

- Update 13:12 - Since I turned off the UE Boom BlueTooth speaker I no longer suffered the mouse freezes; but it sucks having no music.
- Update 11:00 - Unfortunately the registry key does not seem to fix the issue.
- Update 2015-10-20 09:35 - I am now experiencing occasional dropouts at Work now as well. So there must be another device interfering. #wtf

## A quick way to fix the issue

- Turn off all the BlueTooth devices in your immediate area;

## Device: Android Phone and Android Wear device communicate over BlueTooth too.

Today I experienced the issue at work as well while wearing an LG G Watch Android Wear watch which also talks to my Motorola Moto-X (2013) phone over Bluetooth.
I disabled Bluetooth on the phone and turned the watch off and it seems the Bluetooth interference has stopped - for now.

## Device: UE Boom speaker is a major BlueTooth disruptor

Found this post about [bluetooth interfering messing with devices on GoldTouch](http://www.goldtouch.com/stop-bluetooth-interference-messing-devices/):

> *Stephan Osther says: February 1, 2015 at 6:53 AM* - I just got a UE Boom bluetooth speaker, and i am loving it. But i noticed a really big differents in my wifi speed when i am am watching Youtube on my tablet, with the speaker vs without the speaker. So i ran some wifi tests, and found out that without the speaker it gets full signal, 40/20mbit, and with the speaker it goes all the way down to from 10-5mbit or lower! It’s insane. And the distance makes a minor or no differents in the speed. (i live in a tiny apartment)

Not much, except for perhaps moving the speaker further away from my desk and computer.

## A potential Solution: setting a key in the Windows registry

**Disclaimer:** I'm not a Microsoft support engineer. Be careful editing the Windows registry. You can easily screw-up your Windows machine editing the wrong things. Results may vary.

Below you can find the description on how to set the ''ChannelAvoidanceRange'' registry key which for some reason is not set on Surface Pro machines even-though the document states that OEM'S should take care of this. I guess this was a small oversight on Microsoft's side.

The steps to set the registry key:

- Opened up the Windows Registry (with administrator rights)
- As always when editing the Registry: make sure you have a backup!
- Navigated to **HKLM\System\CurrentControlSet\Services\BthServ\Parameters**
- Created the new key **ChannelAvoidanceRange** - I created it as a 32bit REG_DWORD key.
- Set the value of the key to the decimal value 40.
- reboot the machine

After the reboot I was no longer experiencing the annoying BlueTooth connection hickups *for a while*. But that could have had different reasons.

### The original source: How do I enable AFH in Windows?

> Windows 8, Windows 7, and Windows Vista include a shared-spectrum model to support AFH for Bluetooth radios that are based on version 2.0 and later versions of the Bluetooth specification. However, this feature is disabled by default. For a system to support the shared spectrum model, the OEM must explicitly enable the feature and specify the width of the frequency band that should be blocked around an active Wi Fi channel. To specify the width of the frequency band, create a value of type REG_DWORD that is named ChannelAvoidanceRange under the following registry key:

    HKLM\System\CurrentControlSet\Services\BthServ\Parameters

> The ChannelAvoidanceRange value enables or disables spectrum sharing and specifies the width of the blocked frequency band. To enable spectrum sharing, set ChannelAvoidanceRange to the full width of the frequency band that should be blocked around an active Wi-Fi channel. The units are in MHz and can range from 20 to 40 (0.02 to 0.04 GHz). OEMs must determine an appropriate bandwidth based on a selected set of radios, antenna characteristics, and radio manufacturer feedback.

> A new ChannelAvoidanceRange value takes effect only after the system has been rebooted. Ideally, the OEM should set the ChannelAvoidanceRange value during the preinstallation process.

> For the Windows shared-spectrum model to work effectively, Wi-Fi miniport drivers must report their channel usage to the networking connections manager. The networking stack then passes the channel-use information to the Bluetooth stack.

Original Source: <https://msdn.microsoft.com/en-us/library/windows/hardware/dn133849(v=vs.85).aspx>

## Resources

- <http://www.bluetoothdoctor.com/>
