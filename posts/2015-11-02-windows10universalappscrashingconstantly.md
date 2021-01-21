---
layout: post
author: Johan
tags: post
title: "Windows 10 Universal apps still crash with Access is Denied errors"
published: "2015-11-02"
description: The frustration continues
---

## The frustration continues

So after almost a full week of not having issues with the Windows 10 *Universal apps*, this morning I'm experiencing the same issue again;

The *Calendar* and *Mail* apps start, but as soon as I want to interact with the apps, they crash to desktop. This is **incredibly frustrating**!

The *Event Viewer* log is again filling up with the same **"Access is denied"** error entries as before.

I've reported this issue to Microsft both through the Feedback tool and on "answers.microsoft.com";

To me, this looks like a clear structural underlying **permissions issue** in the whole Universal Apps stack tree.

Also, everytime apps crash like this I feel like a dumb idiot still trying to use Microsoft's apps. What are regular users supposed to do?

This is a thread on Answer.microsoft.com: ["Mail App stopped working in Windows 10"](http://answers.microsoft.com/en-us/windows/forum/apps_windows_10-outlook_mail/mail-app-stopped-working-in-windows-10/19dfee06-5577-43c6-a1f9-3799fdc7d72c) - Over 130 frustrated Windows users (!) looked for this issue and reported that they are having the same problem since August 1st, 2015. There is still no conclusive fix available.

> **@Microsoft: fix the permissions issue in Windows 10 Universal Apps! Create a better crash handler already!**

## Error logs

Here are a couple of the application "error" entries from the Event log:

```text
Log Name:      Application
Source:        Microsoft-Windows-Immersive-Shell
Date:          2015-11-02 09:08:11
Event ID:      5973
Task Category: (5973)
Level:         Error
Keywords:
User:          SURFACE\Johan
Computer:      Surface
Description:
Activation of app Microsoft.Windows.Cortana_cw5n1h2txyewy!CortanaUI failed with error: Access is denied.
 See the Microsoft-Windows-TWinUI/Operational log for additional information.
Event Xml:
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Immersive-Shell" Guid="{315A8872-923E-4EA2-9889-33CD4754BF64}" />
    <EventID>5973</EventID>
    <Version>0</Version>
    <Level>2</Level>
    <Task>5973</Task>
    <Opcode>0</Opcode>
    <Keywords>0x2000000000000000</Keywords>
    <TimeCreated SystemTime="2015-11-02T08:08:11.984583500Z" />
    <EventRecordID>96954</EventRecordID>
    <Correlation />
    <Execution ProcessID="9552" ThreadID="11148" />
    <Channel>Application</Channel>
    <Computer>Surface</Computer>
    <Security UserID="S-1-5-21-1112854955-1420992795-1371588587-1001" />
  </System>
  <EventData>
    <Data Name="AppId">Microsoft.Windows.Cortana_cw5n1h2txyewy!CortanaUI</Data>
    <Data Name="ErrorCode">-2147024891</Data>
  </EventData>
</Event>
```

```text
Log Name:      Application
Source:        Microsoft-Windows-Immersive-Shell
Date:          2015-11-02 09:08:06
Event ID:      5973
Task Category: (5973)
Level:         Error
Keywords:
User:          SURFACE\Johan
Computer:      Surface
Description:
Activation of app Microsoft.Windows.Cortana_cw5n1h2txyewy!CortanaUI failed with error: Access is denied.
 See the Microsoft-Windows-TWinUI/Operational log for additional information.
Event Xml:
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Immersive-Shell" Guid="{315A8872-923E-4EA2-9889-33CD4754BF64}" />
    <EventID>5973</EventID>
    <Version>0</Version>
    <Level>2</Level>
    <Task>5973</Task>
    <Opcode>0</Opcode>
    <Keywords>0x2000000000000000</Keywords>
    <TimeCreated SystemTime="2015-11-02T08:08:06.844928100Z" />
    <EventRecordID>96953</EventRecordID>
    <Correlation />
    <Execution ProcessID="9552" ThreadID="6156" />
    <Channel>Application</Channel>
    <Computer>Surface</Computer>
    <Security UserID="S-1-5-21-1112854955-1420992795-1371588587-1001" />
  </System>
  <EventData>
    <Data Name="AppId">Microsoft.Windows.Cortana_cw5n1h2txyewy!CortanaUI</Data>
    <Data Name="ErrorCode">-2147024891</Data>
  </EventData>
</Event>
```

```text
Log Name:      Application
Source:        Microsoft-Windows-Immersive-Shell
Date:          2015-11-02 09:07:56
Event ID:      5973
Task Category: (5973)
Level:         Error
Keywords:
User:          SURFACE\Johan
Computer:      Surface
Description:
Activation of app Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy!App failed with error: Access is denied.
 See the Microsoft-Windows-TWinUI/Operational log for additional information.
Event Xml:
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Immersive-Shell" Guid="{315A8872-923E-4EA2-9889-33CD4754BF64}" />
    <EventID>5973</EventID>
    <Version>0</Version>
    <Level>2</Level>
    <Task>5973</Task>
    <Opcode>0</Opcode>
    <Keywords>0x2000000000000000</Keywords>
    <TimeCreated SystemTime="2015-11-02T08:07:56.661196000Z" />
    <EventRecordID>96952</EventRecordID>
    <Correlation />
    <Execution ProcessID="9552" ThreadID="11148" />
    <Channel>Application</Channel>
    <Computer>Surface</Computer>
    <Security UserID="S-1-5-21-1112854955-1420992795-1371588587-1001" />
  </System>
  <EventData>
    <Data Name="AppId">Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy!App</Data>
    <Data Name="ErrorCode">-2147024891</Data>
  </EventData>
</Event>
```

```text
Log Name:      Application
Source:        Microsoft-Windows-Immersive-Shell
Date:          2015-11-02 09:07:56
Event ID:      5973
Task Category: (5973)
Level:         Error
Keywords:
User:          SURFACE\Johan
Computer:      Surface
Description:
Activation of app microsoft.windowscommunicationsapps_8wekyb3d8bbwe!ppleae38af2e007f4358a809ac99a64a67c1 failed with error: Access is denied.
 See the Microsoft-Windows-TWinUI/Operational log for additional information.
Event Xml:
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Immersive-Shell" Guid="{315A8872-923E-4EA2-9889-33CD4754BF64}" />
    <EventID>5973</EventID>
    <Version>0</Version>
    <Level>2</Level>
    <Task>5973</Task>
    <Opcode>0</Opcode>
    <Keywords>0x2000000000000000</Keywords>
    <TimeCreated SystemTime="2015-11-02T08:07:56.577019300Z" />
    <EventRecordID>96951</EventRecordID>
    <Correlation />
    <Execution ProcessID="9552" ThreadID="1076" />
    <Channel>Application</Channel>
    <Computer>Surface</Computer>
    <Security UserID="S-1-5-21-1112854955-1420992795-1371588587-1001" />
  </System>
  <EventData>
    <Data Name="AppId">microsoft.windowscommunicationsapps_8wekyb3d8bbwe!ppleae38af2e007f4358a809ac99a64a67c1</Data>
    <Data Name="ErrorCode">-2147024891</Data>
  </EventData>
</Event>
```
