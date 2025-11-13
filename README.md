# UD Block: Fade Slider

Ein flexibler WordPress-Block zur Erstellung automatisch überblendender Slider.
Die Slides können beliebige Inhalte enthalten (Bilder, Text, Gruppen, Cover-Blöcke etc.).

## Funktionen

-   Automatisch überblendender Slider ohne Navigationselemente
-   Enthält einen übergeordneten **Fade Slider**-Block und mehrere **Fade Slide Items**
-   Jedes Slide kann beliebige Gutenberg-Blöcke enthalten (nicht nur Bilder)
-   **Fade-Geschwindigkeit** im Slider einstellbar
-   **Anzeigedauer** individuell pro Slide festlegbar
-   Optionales Autoplay, Loop und Pausieren bei Hover


## Screenshots

![Frontend](./assets/ud-fade-animiert.webp)
*Frontend-Ansicht.*

![Editor UI](./assets/ud-fade-slide_editor.webp)
*Editor-Ansicht.*

![Editor UI](./assets/ud-fade-editor_einstellungen.webp)
*Einstellungen für den gesamten Slider und die einzelnen Slides.*

## Aufbau

### Parent-Block: Fade Slider

Container für mehrere Slides. Steuert den Gesamtablauf und die Animation.

**Einstellungen:**

-   **Autoplay aktivieren** – startet die automatische Wiedergabe
-   **Endlosschleife (Loop)** – wiederholt die Slides unbegrenzt
-   **Bei Hover pausieren** – stoppt die Wiedergabe, solange der Mauszeiger über dem Slider ist
-   **Übergangszeit (ms)** – Dauer der Fade-Animation zwischen zwei Slides

### Child-Block: Fade Slide Item

Ein einzelner Slide innerhalb des Sliders. Kann beliebige Gutenberg-Blöcke enthalten.

**Einstellungen:**

-   **Anzeigedauer (ms)** – wie lange der Slide sichtbar bleibt, bevor der nächste eingeblendet wird
-   **Slide ausblenden** – blendet den Slide komplett aus (z. B. zur temporären Deaktivierung)



## Verwendung

1. Füge den Block **„Fade Slider“** in eine Seite oder Vorlage ein.
2. Ergänze darin mehrere **„Fade Slide Items“**.
3. Lege pro Slide beliebige Inhalte an (z. B. Bilder, Überschriften, Texte, Buttons, Gruppen).
4. Stelle im rechten Seitenpanel die gewünschten Zeiten und Effekte ein.
5. Speichern – im Frontend wird der Slider automatisch mit Fade-Effekt abgespielt.

> Der UD Fade Slider ist bewusst minimalistisch gehalten:
> keine Pfeile, keine Dots, keine manuelle Steuerung.



## Technische Details

-   Fade-Wechsel basiert auf CSS-Transitions (`opacity`)
-   Steuerung durch leichtes Vanilla-JS-Skript
-   Reagiert auf Editor-Attribute (`autoplay`, `loop`, `pauseOnHover`, `duration`, `fadeTime`)
-   Responsiv und FSE-kompatibel
-   Kompatibel mit Lazy-Loading und Cover-Hintergründen


## Installation

1. Ordner `ud-fade-slider-block` in
   `/wp-content/plugins/` kopieren
2. Im Backend unter **Plugins → Installierte Plugins** aktivieren
3. Den Block im Editor einfügen und konfigurieren












## Anforderungen

-   WordPress 6.7 oder neuer
-   PHP 8.0+
-   Aktives Theme: `ulrichdigital_block_theme`
-   Ably-API-Key für Echtzeit-Übertragung

## Autor

[ulrich.digital gmbh](https://ulrich.digital)

## Lizenz

Alle Rechte vorbehalten. Dieses Plugin ist urheberrechtlich geschützt und darf ohne ausdrückliche schriftliche Genehmigung der **ulrich.digital gmbh** weder kopiert, verbreitet, verändert noch weiterverwendet werden.
