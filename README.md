# UD Fade Slider

Ein leichter, automatisch überblendender Slider-Block für WordPress.  
Ideal für ruhige Hero-Bereiche oder Stimmungsbilder ohne sichtbare Navigationselemente.

![UD Fade Slider Illustration](./assets/ud-fade-slider.webp)

## Funktionen

- **Automatische Überblendung** der Slides (Fade-Effekt ohne Bewegung)
- **Parent-Child-Struktur**  
  - Parent-Block: `ud/fade-slider-block`  
  - Child-Block: `ud/fade-slide-item`
- **Zeitgesteuerter Ablauf** mit Endlosschleife
- **Ohne Pfeile oder UI-Bedienelemente**
- **Leichtgewichtiges Frontend** (reines Vanilla-JS + CSS)
- **Responsive Darstellung** auf allen Geräten
- **Editor-Vorschau** zeigt das Fade-Prinzip live im Gutenberg-Editor
- **Lazy-Loading** für Bilder zur Performance-Optimierung

## Verwendung

1. Füge den Block **„Fade Slider“** in eine Seite oder Vorlage ein.  
2. Lege innerhalb des Sliders mehrere **Slide-Elemente** an (`Fade Slide Item`).  
3. Füge pro Slide ein Bild oder beliebigen Gutenberg-Inhalt hinzu.  
4. Die Slides wechseln im Frontend automatisch mit weicher Überblendung.

## Screenshots

## Beispiel
```html
<!-- Parent -->
<ud-fade-slider-block>
	<!-- Child Slides -->
	<ud-fade-slide-item>
		<img src="bild1.jpg" alt="Beispiel 1" />
	</ud-fade-slide-item>
	<ud-fade-slide-item>
		<img src="bild2.jpg" alt="Beispiel 2" />
	</ud-fade-slide-item>
</ud-fade-slider-block>
```


## Anforderungen

- WordPress 6.7 oder neuer
- PHP 8.0+
- Aktives Theme: `ulrichdigital_block_theme`
- Ably-API-Key für Echtzeit-Übertragung



## Autor
[ulrich.digital gmbh](https://ulrich.digital)



## Lizenz
Alle Rechte vorbehalten. Dieses Plugin ist urheberrechtlich geschützt und darf ohne ausdrückliche schriftliche Genehmigung der **ulrich.digital gmbh** weder kopiert, verbreitet, verändert noch weiterverwendet werden.
