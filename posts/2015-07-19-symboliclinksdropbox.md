---
layout: post
author: Johan
title: "Uploading files to Dropbox from an USB-drive"
tags: post
published: "2015-07-19"
description: "Use a symbolic link to the external folder to upload files into Dropbox"
---

# Use a symbolic link to the external folder to upload files into Dropbox

*Disclaimer: The following proces worked on DropBox version 3.6.9 on Windows 8.1 Pro. Execute the commands below at your own risk. There is a change you will lose data if you make a mistake. This technique probably also works with Microsoft OneDrive and Google Drive, but was not tested by me.*

## So how do you create such a link?

As a paying Dropbox user I have about a full Terabyte of space available, yet Dropbox only syncs files from within the local ``%userprofile%\Dropbox`` folder.

My Surface has a nice fast SSD, but the 256GB hard-drive space is precious and limited.

To copy all my files from my external backup USB drive to Dropbox I would have to copy it all to my local drive which would fill it up completely.

Luckily Windows allows you to make a symbolic link between the real location of a folder and your local machine. A symbolic links makes the operating system and other software on your machine *see* your files as part of your local drive while the physical data stays on your external USB drive.

## The commands

All commands are required to be executed with elevated priviliges, so shift-click the "cmd" application and select "run as administrator" if your current user is part of the administrators group.

*First step:* make a connection from the external folder location in Windows:

    net use z: "\\external\location"

Tip: use double quotes on the external paths if you have spaces in your folder names!

*Next:* create the symbolic link for this location to your DropBox folder:

The syntax is: ``mklink [options] <Link> <Target>``, Target is the file/folder that exists, and Link is the created one that links to the target.

So my command looked like this:

    mklink /d "C:\Users\Johan\Dropbox\My Files" "z:\My Files"

And presto, Dropbox is now uploading the files from your external location into your Dropbox folder of choice. :crystal_ball:

## Deleting the symbolic link folder

So when Dropbox is done uploading the files to the cloud, you might want to remove the symbolic link from your computer.

There's a catch however since Dropbox will sync the deletion of the folder as soon as it detects it. So you'll need to do a couple of more steps to keep your files save.

1. Go to [www.dropbox.com](http://www.dropbox.com) and create a new folder using the web client. You'll keep the newly uploaded files here.
2. On your computer: use DropBox's "selective sync" to disable synchronizing this new folder.
3. Move all the files to the new folder using the Dropbox web site: Select "Move...".
4. You can now pause the DropBox client on your computer.
5. Once the Dropbox client is pauzed, remove the "symbolic link" folder by simply deleting it using Windows Explorer. The physical files on the original location should be fine.
6. Unpauze Dropbox on your local machine and let it synchronize the deletion of the symbolic link.

After these steps you should have all your USB files in the cloud.

## Sources:

- [http://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/](http://www.howtogeek.com/howto/16226/complete-guide-to-symbolic-links-symlinks-on-windows-or-linux/)
- [http://superuser.com/questions/52220/how-do-i-connect-to-a-network-share-via-the-windows-command-prompt](http://superuser.com/questions/52220/how-do-i-connect-to-a-network-share-via-the-windows-command-prompt)
- [http://superuser.com/questions/597551/mklink-error-cannot-create-a-file-when-that-file-already-exists](http://superuser.com/questions/597551/mklink-error-cannot-create-a-file-when-that-file-already-exists)
