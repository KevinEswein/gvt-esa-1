# ESA 1: Interaktiv animierte Scheibe

- **Thema:** Einrichten von Umgebung + Server für Abgaben + Auffrischen der JS Kenntnisse
- **Bearbeitungszeit:** 30 - 90 Min. (+ 30 Min.)
- **Voraussetzungen:** LE 1 - 3 (inkl. JSL. Kein WebGL, kein HTML-Canvas)
- **Vorbereitung:** Verschaffen Sie sich Zugang zu einem Web-Server (Hochschule oder unabhängiger Anbieter)

## Aufgabenstellung
- Eine sich drehende 2D-Scheibe aus Einzelbildern implementieren
  - mit JS laden + in einem <img> zeigen (nicht im Canvas)
- Die Einzelbilder sollen, ähnlich wie bei einer Sprite-Sheet-Animation oder einem Animationsfilm, so ausgetauscht + eingeblendet werden, dass visuell der Eindruck einer Rotation entsteht. Auf jedem Einzelbild ist ein Rotationszustand der Scheibe zu sehen (z. B.: 0°, 15°, 30°, …)
- Es ist Ihnen überlassen, ob Sie die Bilder auf mehrere Dateien verteilen, oder alle Bilder der Animation als Sprite-Sheet, also in einer Datei anordnen

## Erweiterungen
1. Noch ein anderes Objekt Ihrer Wahl als Sprite-Sheet kreieren + animieren (z.B. hüpfenden Hasen)
2. Die Scheibe dreht sich automatisch mit Taste "a", dazu muss diese kontinuierlich animiert werden (die Animation sollte bei einem weiteren Drücken von "a" auch wieder angehalten werden)

## Hinweise
Sie können über die CSS Eigenschaften clip, backgroundPosition und andere, einen Bildausschnitt wählen (z.B. clip: rect(10px, 20px, 30px, 40px);)

## Interaktion
- Auf den Tastendruck 'L' oder 'R' soll sich die Scheibe augenscheinlich ein Stück nach links bzw. rechts drehen
- Zum Drehen muss man wiederholt drücken (mit "L" und "R" soll es nur also einen Schritt / ein Bild weiter gehen)
- Das autom. Drehen + Stoppen für die Erweiterung erfolgt über die Taste "A"
- Alternativ können Sie die Funktionalität auf Button abbilden
- Beachten Sie dabei HCI-Kriterien beim Interaktionsdesign: ISO 9241-11 Anforderungen an die Gebrauchstauglichkeit und die ISO 9241-110 zu Interaktionsprinzipien

## Visualisierung
Lösung auf der Webseite übersichtlich darstellen

## Material
- Das Bildmaterial ist von Ihnen zu erstellen
- Als einfache Variante malen Sie einen Kreis mit einem Muster + drehen diesen im Zeichenprogramm für jede Rotation-Darstellung ein Stück weiter
- Sie können auch freies Material (z.B. Fotos aus dem Internet) als Ausgangspunkt verwenden
- Bitte geben Sie auf der HTML-Seite Ihre Materialquellen an

## Fehlerbehandlung, Test und QA
- Interaktion testen
- In der Konsole prüfen, ob Fehlermeldungen auftreten

## Dokumentation
- Dokumentieren Sie Ihre Quellen für verwandtes Material
- Quellenangaben, Benutzungshinweise + Anmerkungen (falls notwendig) gehören auf diese Webseite

## Bewertung (6 Pkt. + 4 Pkt. Erweiterung)
- Funktionsfähigkeit der Implementierung (3 Pkt.)
- Visueller Anspruch des erstellten Materials (der Grafiken für die Scheibe) (3 Pkt.)
- Erweiterung 1 - ein anderes animiertes Objekt (+2 Pkt.)
- Erweiterung 2 - kontinuierlich animiert (+2 Pkt.)
