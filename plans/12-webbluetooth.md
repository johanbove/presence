---
layout: plan
plan: "12-webbluetooth"
title: "Web Bluetooth"
tags: "postponed"
started: "2019-04-14"
status: "postponed"
completed:
---

I got a [RaspBerry Pi](https://www.raspberrypi.org/) and this triggered my attentation and curiosity back to build something cool with [Espruino](https://www.espruino.com/) and the 5 [Puck.JS](https://www.espruino.com/Puck.js) devices I had lying around since I first packed the [2015 KickStarter campaign](https://www.kickstarter.com/projects/gfw/puckjs-the-ground-breaking-bluetooth-beacon/).

In recognition of the hard work [Gordon Williams](https://twitter.com/Espruino) is putting into Espruino and JavaScript programming in general, I - finally - started to support him with a small [monthly donation through Patreon](https://www.patreon.com/espruino).

I also purchased a copy of Gordon's book ["Making Things Smart"](https://www.amazon.com/gp/product/1680451898/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1680451898&linkCode=as2&tag=espruino-20&linkId=9a3b6e7c3a4f24c8f894e6a039828502).

Now for the task: the idea is to build an open/close door sensor using a Puck.js device and program it to send MQTT packets which should alert me through integration with Web Hook (IFTTT) if the door is opened / closed. The Pi, functioning as a [Bluetooth LE HTTP Proxy](https://www.espruino.com/BLE+HTTP+Proxy), will collect these packets and keep a log of them.

Related Sites:

- <http://www.espruino.com/Web+Bluetooth>
- ["Introduction to the Physical Web (100 days of Google Dev)"](https://www.youtube.com/watch?v=1yaLPRgtlR0)
