import "./frontend.scss";

document.addEventListener("DOMContentLoaded", () => {
	// --- Robustes Live-Mirroring: Quelle -> mehrere Ziele ---
	function makeLiveMirror(sourceSelector, targetSelector) {
		let lastHTML = null;
		let sourceNode = null;
		let sourceObserver = null;

		// kopiert aktuellen Inhalt in alle Ziele
		function push() {
			const src = document.querySelector(sourceSelector);
			if (!src) return;
			const html = src.innerHTML;
			if (html === lastHTML) return;
			lastHTML = html;
			document.querySelectorAll(targetSelector).forEach((el) => {
				if (el && el.innerHTML !== html) el.innerHTML = html;
			});
		}

		// hängt Observer an die aktuelle Quelle
		function attachToSource() {
			const node = document.querySelector(sourceSelector);
			if (node === sourceNode) return; // bereits verbunden
			if (sourceObserver) sourceObserver.disconnect();
			sourceNode = node;
			if (!node) return;
			sourceObserver = new MutationObserver(push);
			sourceObserver.observe(node, {
				childList: true,
				subtree: true,
				characterData: true,
			});
			push(); // initial befüllen
		}

		// beobachtet das Dokument, falls die Quelle neu ins DOM kommt / ersetzt wird
		const docObserver = new MutationObserver(() => {
			attachToSource();
			// falls neue Ziel-Knoten auftauchen, sofort füllen
			if (sourceNode) push();
		});
		docObserver.observe(document.documentElement, {
			childList: true,
			subtree: true,
		});

		// sanfter Poll-Fallback (falls externe Scripts innerHTML setzen ohne Mutation-Events)
		const pollId = setInterval(push, 1000);

		// Initial
		attachToSource();

		// Optional: Cleanup, falls du eine SPA hättest
		// window.addEventListener("beforeunload", () => {
		//   if (sourceObserver) sourceObserver.disconnect();
		//   docObserver.disconnect();
		//   clearInterval(pollId);
		// });
	}

	// Spiegelungen einrichten (außerhalb des Slider-Loops!)
	makeLiveMirror(".ud-kiosk-suppe", ".tagessuppe");
	makeLiveMirror("#ud-kiosk-ausverkauf", ".ausverkauft");

	/* =============================================================== *\
   Title
\* =============================================================== */

	const sliders = document.querySelectorAll(".wp-block-ud-fade-slider-block");

	sliders.forEach((slider) => {
		let slides = Array.from(slider.querySelectorAll(".wp-block-ud-fade-slide-item"));

		// ausgeblendete Slides filtern
		slides = slides.filter((s) => s.dataset.hidden !== "true" && s.dataset.hidden !== "1");

		if (!slides.length) return;

		let currentIndex = parseInt(slider.dataset.startIndex || "0", 10);
		const autoplay = slider.dataset.autoplay === "true";
		const loop = slider.dataset.loop === "true";
		const pauseOnHover = slider.dataset.pauseOnHover === "true";
		const transitionSpeed = parseInt(
			slider.dataset.transitionSpeed || "800",
			10
		);

		let timer = null;
		let paused = false;

		// Anfangszustand
		// Anfangszustand
		slides.forEach((s, i) => {
			s.classList.toggle("is-active", i === currentIndex);
			s.style.transition = `opacity ${transitionSpeed}ms ease-in-out`;
			s.style.position = "absolute";
			s.style.top = "0";
			s.style.left = "0";
			s.style.width = "100%";
			s.style.height = "100%";
		});
		function showNextSlide() {
			if (paused) return;

			const current = slides[currentIndex];
			let nextIndex = currentIndex + 1;
			if (nextIndex >= slides.length) {
				if (loop) nextIndex = 0;
				else return;
			}
			const next = slides[nextIndex];

			// Neuer Slide über alten legen und EINblenden
			next.classList.add("is-raising");
			next.style.opacity = "1";

			// Nach dem Fade den alten Slide ausblenden und den neuen als aktiv markieren
			const finalize = () => {
				current.classList.remove("is-active");
				current.style.opacity = "0";
				next.classList.remove("is-raising");
				next.classList.add("is-active");
				currentIndex = nextIndex;

				// Jetzt erst den neuen Timer starten → Dauer zählt ab hier!
				startAutoplay();
			};

			next.addEventListener(
				"transitionend",
				(e) => {
					if (e.propertyName === "opacity") finalize();
				},
				{ once: true }
			);

			setTimeout(() => finalize(), transitionSpeed + 50); // Fallback
		}

		function startAutoplay() {
			if (!autoplay) return;
			clearTimeout(timer);

			const active = slides[currentIndex];
			const slideDuration = parseInt(
				active.dataset.duration || "4000",
				10
			);

			timer = setTimeout(() => {
				showNextSlide();
			}, slideDuration);
		}

		startAutoplay();
	});
});
