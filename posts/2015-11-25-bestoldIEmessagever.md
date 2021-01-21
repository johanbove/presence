---
layout: post
author: Johan
title: "Best 'old-IE not-supported' notification ever?"
tags: post
published: "2015-11-25"
description: "We'll call you to read out our website for you"
---

Found this today on the site of [Blanko GMBH](https://blanko.de/) from Düsseldorf; it's in German, but I'll translate below:

```html
<!--[if lte IE 8]>
<div class="browser_notification" id="browser_notification">
<div class="browser_notification_content">
<form action="/" method="get" id="website_reader">
<h1>Liebe Freunde des Internet-Explorers,</h1>
<p>Sie nutzen eine veraltete Version Ihres Browsers. Uns ist das gleich: Denn wir sind sehr dafür, dass jeder das Web so nutzen darf, wie er möchte. Deswegen lesen wir Ihnen unsere Website gerne persönlich am Telefon vor.</p>
<label for="phone">Geben Sie Ihre Telefonnummer ein:</label>
<div class="browser_notification_form">
<input type="text" name="phone" id="phone" placeholder="0123 12345678" />
<button type="submit" class="button button_primary"><span>Jetzt </span>vorlesen lassen</button>
</div>
<p>Für uns ist das kostengünstiger und weniger schmerzhaft, als eine Version unserer Website aufzusetzen, die auch mit der von Ihnen genutzten Version des Internet Explorer funktioniert. Das ist unser Beitrag zur Inklusion. Danke für Ihre Aufmerksamkeit.</p>
<p class="center"><a class="button" id="browser_notification_hide" href="./"><span>Ich möchte die Webseite </span>trotzdem ansehen</a></p>
</form>
</div>
</div>
<![endif]-->
```

In short and translated to English: they are asking the visitor to leave their phone number when visiting the site in a browser older than IE8, because it is cheaper for the business to call them and read to them out loud the contents of the site, than to build a website which would be completely supported in < IE9 browsers.

Perhaps a bit much, but brilliant any way.
