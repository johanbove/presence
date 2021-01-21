---
layout: post
title: "Windows 10 and OneDrive woes"
description: "Issues with syncing the Documents folder in Onedrive and Windows 10"
tags: post
published: "2015-10-04"
---

The premise: I had set up my main Windows "My Documents" folder to point to the "My Documents" folder within the OneDrive folder. The plan was to save all my files, including Pictures directly to OneDrive. This worked alright for a while.

However I experienced some issues synchronizing hand-written notes in OneNote where parts of the text disappeared. I believe this is related to the synchronization between my machine and OneNote.

Since a couple of weeks I have been noticing weird anomalies in Windows Explorer: multiple "Documents" folder showing up, some with files in them, others just empty.

Through my work projects which are mostly NPM projects which rely on nested *node_modules* I often encountered the 255 character limit in Windows explorer paths.

This started happening in OneDrive as well yesterday where I would first get the 255 character limit error message and then the "Welcome to OneDrive" window. :sad:

So what I think what was going on is that OneDrive also has issues with paths longer than 255 characters and stops syncing. It apparently disconnects the session with the OneDrive server since my files had not been synched online since a couple of days ago. And it just bogged out whenever I tried logging back into OneDrive.

I therefore decided to no save files directly to the "Documents" folder within "OneDrive", copying the files from the OneDrive folder to the normal Windows "Documents" folder.

Of course, I encountered multiple error messages and issues doing this. First I was stopped by a *"you have not enough rights"* error condition where I was not able to set the target folder of the *"My Documents"* folder from within the "properties" of Explorer.

Note that I am concerned with security on my machine and have my regular user account set to "normal user" rights. Microsoft and other software makers seem to forget that not everyone using Windows has their account set to "administration" rights. A good practice I learned from dabbling with Ubuntu.

Knowing Windows a little, I figured I had to [change and restore the path to "My Documents" through the Windows Registry](http://www.howtogeek.com/222057/how-to-remove-the-folders-from-%E2%80%9Cthis-pc%E2%80%9D-on-windows-10/). Which did allow me to reset the "Documents" paths back to their original settings.

The issue is that I now have my files stored in two locations on the already cramped HD of my Surface Pro 3. Hmm.

At the end of the day I am a little confused here.

 - Does Microsoft not want its customers on Windows to use OneDrive as the main storage for important files?
 - Are we supposed to keep the files within the local "My Documents" folder and the OneDrive "Documents" manually in sync?
 - Are we supposed to see OneDrive not as our main storage location, but only as an **extra** remote folder to share files and make these accessible to others?
 - Why can't we just make one of our local "My Documents" folders behave like "OneDrive" folders? Why do we need an extra location on our hard drives for OneDrive files?
 - Why does OneDrive for Windows make it so hard to actually use it?

 The recent "developments" in OneDrive in the Windows 10 implementation has taken away lots of its charm: we can't see an file-based overview of files synced in the cloud and on the machine any more for instance. It puzzles me as to why Microsoft removed this previously excellent feature from OneDrive.

Ever since the name changing fiasco of SkyDrive to OneDrive in Windows 8 I believe the quality of this application and service to be very questionable.

In the end: I wanted to believe in OneDrive as my cloud storage solution, but I just can't trust it due to the above mentioned issues.

So I guess I'm sticking with DropBox which still offers the best possible cloud synchronization available. No fuss, no fancy tricks, just capable, fast and stable file and folder backup.

It would also be fantastic if Microsoft would clean up the error messages in its software and make the way these are thrown at its users more user-friendly and helpful. Enough already with the cryptic error messages that offer no help whatsoever to the end-user!

There are tools for keeping folders in sync of course: SyncToy (free), Beyond Compare (commercial), WineMerge (OpenSource), but why do we need to use more tools on our machines to keep our folders in synce?

**Why is OneDrive more cause for concern than being the file syncing solution Windows needs?**

## Screenshots

Moving all he files back from the OneDrive folder into My Documents:
[![Screenshot: moving files dialog](/images/20151004-doyouwanttomoveallofhefiles.png)](/images/20151004-doyouwanttomoveallofhefiles.png)

I guess I should have known better:
[![Screenshot: the wonderfully descriptive error message](/images/20151004-thefoldercannotbemovedhereaccessisdenied.png)](/images/20151004-thefoldercannotbemovedhereaccessisdenied.png)
