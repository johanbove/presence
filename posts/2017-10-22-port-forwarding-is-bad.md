---
layout: post
author: Johan
category: posts
title: "Ihre Sicherheit und Datenschutz sind uns besonders wichtig."
published: "2017-10-22"
description: Security tips from HomeMatic
---

The security experts at [EQ3](https://www.eq-3.de/produkte/homematic.html) warned for not using port forwarding and provide some more tips in making the [HomeMatic CCU](https://www.eq-3.de/produkte/homematic/zentralen-und-gateways.html) unit more secure. (in German)

---

## Lieber Anwender!

Ihre Sicherheit und Datenschutz sind uns besonders wichtig.

Die CCU können Sie komplett autonom im Haus betreiben, ohne dass Ihre Installation und/oder Daten von Ihnen im Internet bekannt werden.

Aus dem Internet ist gewöhnlich kein Zugriff direkt auf Geräte in Ihrem Heimnetz möglich. Eine Adressumsetzung (Network Address Translation - NAT) wandelt die lokalen Adressen in Ihrem Heimnetz in die öffentliche Adresse an Ihrem Router um. Während NAT ursprünglich entwickelt wurde, damit in den Haushalten mehrere oder viele Geräte mit nur einer Adresse arbeiten können, bietet NAT auch einen Schutz gegen Missbrauch aus dem Internet: Durch NAT können Geräte im Netz des Anwenders typisch nicht direkt angesprochen werden. Umgekehrt kann NAT aber einen Zugriff aus dem Internet auf Ihre CCU - z. B. mit einem Smartphone - im Wege stehen.

Sofern Sie aus dem Internet auf Ihre Installation mit der CCU zugreifen möchten, empfehlen wir Ihnen insbesondere zwei Arten von Lösungen:

1)  Nutzung eines "Remote Access Dienstes"

Hier wird mit einer kleinen Software aus der CCU eine Verbindung zu einem Rendezvous-Server im Internet aufgebaut. Mit dem Smartphone und einer entsprechend App wählen Sie ebenfalls diesen Rendezvous-Server an. Nur wenn User ID und Passwort stimmen, werden Sie mit der CCU verbunden. Bei diesem Verfahren ist die CCU vom Internet aus niemals direkt sichtbar.

Beispiele für Remote Access Dienste sind "CloudMatic" und "Orbilon".

Sie finden als Beilage zur CPU eine Liste von Partnerlösungen mit weiteren Details.

2)  Einwahl mittels VPN ("Virtuelles Privates Netz")

Die meisten Hersteller  von Routern erlauben den Aufbau eines VPN von einem Smartphone. Sie können sich ein VPN als sicheren Tunnel vorstellen, in dem alle Daten verschlüsselt und authentisiert sind. Bei VPN-Aufbau ist mindestens die Angabe einer User ID und eines Passworts notwendig. Es gibt aber auch VPN-Lösungen, die eine zweite Form der Authentisierung benötigen, z. B. eine auf das Handy gesendete TAN. Auch beim VPN ist die CCU im Internet niemals direkt sichtbar.

Ein Beispiel für eine VPN Lösung ist "My Fritz!" von AVM.

Smartphone Apps für die CCU wie die "Pocket Control App" können VPNs automatisch unterstützen.

Warum warnen wir Sie vor PORT FORWARDING?

Bis vor etwa 8 Jahren war es durchaus üblich, eine andere Technik für den Remote Zugriff zu unterstützen: Bei Port Forwarding werden ein oder mehrere Ports - d. h. Zugangspunkte - eines Geräts innerhalb des Heimnetzes auch "außen" am Router zur Verfügung gestellt. Eine CCU - oder auch ein anderes Gerät in Ihrem lokalen Netz - kann mit Port Forwarding von einem Smartphone im Internet direkt angesprochen werden.

Port Forwarding wurde früher von vielen Herstellern empfohlen und sogar aktiv unterstützt, damit die Konfiguration einfacher ist. Es gibt sogar bis heute einen Standard "UPnP", mit dem Port Forwarding am DSL oder Cable Router eingerichtet werden kann, ohne dass hierzu eine manuelle Konfiguration notwendig ist. LAN und WLAN Kameras haben früher fast ausschließlich auf Port Forwarding basiert und unterstützen es oft selbst noch heute aktiv.

Der gravierende Nachteil von Port Forwarding ist, dass Ihr Gerät von jedem anderen System im Internet angesprochen werden kann. Leider auch von Hackern, die nur darauf, bislang noch unbekannte Sicherheitsfehler in Linux zu nutzen, um die Systeme in Ihrem Netz anzugreifen.

Port Forwarding ist heute nicht mehr für den Zugriff auf eine CCU notwendig! Wie oben gezeigt, stehen bessere Alternativen zur Verfügung, die weitaus sicherer sind.

Falls Sie heute noch Port Forwarding für eine CCU oder andere Geräten verwenden, stellen Sie dies in Ihrem eigenen Interesse BALDMÖGLICHST ein.

Um die Sicherheit gegen unbefugtes Anmelden weiter zu verbessern, empfehlen wir ebenfalls die Funktion "Automatisches Anmelden" in der Benutzerverwaltung zu deaktivieren.

Viele Grüße
Ihr eQ-3 Support Team

---
