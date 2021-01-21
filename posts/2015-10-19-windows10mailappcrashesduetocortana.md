---
layout: post
author: Johan
title: "Windows 10 Mail app crashes due to Cortana integration"
tags: post
published: "2015-10-19"
description: "Doing Microsoft's work: debugging the Mail Windows 10 application"
---

## Doing Microsoft's work: debugging the Mail Windows 10 application

Since a couple of days the Windows 10 Mail application crashes on interaction... again.

It opens, but as soon as I interact with any element in the interface the application crashes to desktop.
Worst of all the user is not getting any error message at all, leaving her completely in the dark as to what just happened.
This makes the whole experience really bad.

As a tech savvy Windows user I figured that Windows must have log some error in the Windows Events log.
So I opened the "Event Viewer" desktop application and selected the ``Windows Logs > Application`` event log.

Sure off, there were multiple red exclamation mark "Error" entries in the log with the source "Apps".

Here's a screenshot of the Windows Event Log; click it for more detail.

[![Screenshot: Windows 10 Event Log Error entries](/images/20151019-windowseventviewerappserrorslog.jpg)](/images/20151019-windowseventviewerappserrorslog2.png)

## Event viewer log: Access is denied

The details from the latest error log from this morning:

```text
Log Name:      Application
Source:        Microsoft-Windows-Immersive-Shell
Date:          2015-10-19 08:58:49
Event ID:      5973
Task Category: (5973)
Level:         Error
Keywords:
User:          SURFACE\Johan
Computer:      Surface
Description:
Activation of app Microsoft.Windows.Cortana_cw5n1h2txyewy!CortanaUI failed with error: Access is denied.
See the Microsoft-Windows-TWinUI/Operational log for additional information.
```
Event Xml:
```xml
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Immersive-Shell" Guid="{315A8872-923E-4EA2-9889-33CD4754BF64}" />
    <EventID>5973</EventID>
    <Version>0</Version>
    <Level>2</Level>
    <Task>5973</Task>
    <Opcode>0</Opcode>
    <Keywords>0x2000000000000000</Keywords>
    <TimeCreated SystemTime="2015-10-19T06:58:49.958861400Z" />
    <EventRecordID>83119</EventRecordID>
    <Correlation />
    <Execution ProcessID="3816" ThreadID="16076" />
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

The **Microsoft-Windows-TwinUI/Opertional** log can be found here:

    "Applications and Services Logs"\Microsoft\Windows\Apps\Microsoft-Windows-TWinUI/Operational

The log entry at the exact same time as the previous error entry contains these details:

```text
Log Name:      Microsoft-Windows-TWinUI/Operational
Source:        Microsoft-Windows-Immersive-Shell
Date:          2015-10-19 08:58:49
Event ID:      5961
Task Category: (5961)
Level:         Error
Keywords:
User:          SURFACE\Johan
Computer:      Surface
Description:
Activation of the app Microsoft.Windows.Cortana_cw5n1h2txyewy!CortanaUI for the Windows.
BackgroundTasks contract failed with error: Access is denied..
```
Event Xml:
```xml
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Immersive-Shell" Guid="{315A8872-923E-4EA2-9889-33CD4754BF64}" />
    <EventID>5961</EventID>
    <Version>0</Version>
    <Level>2</Level>
    <Task>5961</Task>
    <Opcode>0</Opcode>
    <Keywords>0x4000000000000000</Keywords>
    <TimeCreated SystemTime="2015-10-19T06:58:49.958859800Z" />
    <EventRecordID>62209</EventRecordID>
    <Correlation />
    <Execution ProcessID="3816" ThreadID="16076" />
    <Channel>Microsoft-Windows-TWinUI/Operational</Channel>
    <Computer>Surface</Computer>
    <Security UserID="S-1-5-21-1112854955-1420992795-1371588587-1001" />
  </System>
  <EventData>
    <Data Name="AppId">Microsoft.Windows.Cortana_cw5n1h2txyewy!CortanaUI</Data>
    <Data Name="ContractId">Windows.BackgroundTasks</Data>
    <Data Name="ErrorCode">-2147024891</Data>
  </EventData>
</Event>
```

Another "Access is denied" entry in the event log from the **CloudExperienceHost** app:

```text
Log Name:      Application
Source:        Microsoft-Windows-Immersive-Shell
Date:          2015-10-20 09:32:00
Event ID:      5973
Task Category: (5973)
Level:         Error
Keywords:
User:          SURFACE\Johan
Computer:      Surface
Description:
Activation of app Microsoft.Windows.CloudExperienceHost_cw5n1h2txyewy!App failed with error: Access is denied.
See the Microsoft-Windows-TWinUI/Operational log for additional information.
```
Event Xml:
```xml
<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Immersive-Shell" Guid="{315A8872-923E-4EA2-9889-33CD4754BF64}" />
    <EventID>5973</EventID>
    <Version>0</Version>
    <Level>2</Level>
    <Task>5973</Task>
    <Opcode>0</Opcode>
    <Keywords>0x2000000000000000</Keywords>
    <TimeCreated SystemTime="2015-10-20T07:32:00.562228300Z" />
    <EventRecordID>85941</EventRecordID>
    <Correlation />
    <Execution ProcessID="5084" ThreadID="360" />
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

## The - probable - cause

I'm suspecting that Cortana want access to my emails, since it uses the information to be the helpful assistent "she" wants to be.
Since my main Windows user account has normal user access rights, the whole system which allows Cortana access to my mails is not able to get to the mails and the application crashes.

## The solution

Microsoft should build their apps taking into account that Windows user's should use their PC's not with administrator rights.

But that's just a guess, since I'm not using my Windows machine with admin rights due to security reasons.

I'm thinking of dropping Cortana alltogether since I am NOT at all using it for anything other than telling me jokes or sending me the latest headlines of the news.

I prefer to be able to read my email instead.
