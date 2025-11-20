/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frontend.scss */ \"./src/frontend.scss\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // --- Robustes Live-Mirroring: Quelle -> mehrere Ziele ---\n  function makeLiveMirror(sourceSelector, targetSelector) {\n    let lastHTML = null;\n    let sourceNode = null;\n    let sourceObserver = null;\n\n    // kopiert aktuellen Inhalt in alle Ziele\n    function push() {\n      const src = document.querySelector(sourceSelector);\n      if (!src) return;\n      const html = src.innerHTML;\n      if (html === lastHTML) return;\n      lastHTML = html;\n      document.querySelectorAll(targetSelector).forEach(el => {\n        if (el && el.innerHTML !== html) el.innerHTML = html;\n      });\n    }\n\n    // hängt Observer an die aktuelle Quelle\n    function attachToSource() {\n      const node = document.querySelector(sourceSelector);\n      if (node === sourceNode) return; // bereits verbunden\n      if (sourceObserver) sourceObserver.disconnect();\n      sourceNode = node;\n      if (!node) return;\n      sourceObserver = new MutationObserver(push);\n      sourceObserver.observe(node, {\n        childList: true,\n        subtree: true,\n        characterData: true\n      });\n      push(); // initial befüllen\n    }\n\n    // beobachtet das Dokument, falls die Quelle neu ins DOM kommt / ersetzt wird\n    const docObserver = new MutationObserver(() => {\n      attachToSource();\n      // falls neue Ziel-Knoten auftauchen, sofort füllen\n      if (sourceNode) push();\n    });\n    docObserver.observe(document.documentElement, {\n      childList: true,\n      subtree: true\n    });\n\n    // sanfter Poll-Fallback (falls externe Scripts innerHTML setzen ohne Mutation-Events)\n    const pollId = setInterval(push, 1000);\n\n    // Initial\n    attachToSource();\n\n    // Optional: Cleanup, falls du eine SPA hättest\n    // window.addEventListener(\"beforeunload\", () => {\n    //   if (sourceObserver) sourceObserver.disconnect();\n    //   docObserver.disconnect();\n    //   clearInterval(pollId);\n    // });\n  }\n\n  // Spiegelungen einrichten (außerhalb des Slider-Loops!)\n  makeLiveMirror(\".ud-kiosk-suppe\", \".tagessuppe\");\n  makeLiveMirror(\"#ud-kiosk-ausverkauf\", \".ausverkauft\");\n\n  /* =============================================================== *\\\n    Title\n  \\* =============================================================== */\n\n  const sliders = document.querySelectorAll(\".wp-block-ud-fade-slider-block\");\n  sliders.forEach(slider => {\n    let slides = Array.from(slider.querySelectorAll(\".wp-block-ud-fade-slide-item\"));\n\n    // ausgeblendete Slides filtern\n    slides = slides.filter(s => s.dataset.hidden !== \"true\" && s.dataset.hidden !== \"1\");\n    if (!slides.length) return;\n    let currentIndex = parseInt(slider.dataset.startIndex || \"0\", 10);\n    const autoplay = slider.dataset.autoplay === \"true\";\n    const loop = slider.dataset.loop === \"true\";\n    const pauseOnHover = slider.dataset.pauseOnHover === \"true\";\n    const transitionSpeed = parseInt(slider.dataset.transitionSpeed || \"800\", 10);\n    let timer = null;\n    let paused = false;\n\n    // Anfangszustand\n    slides.forEach((s, i) => {\n      s.classList.toggle(\"is-active\", i === currentIndex);\n      s.style.transition = `opacity ${transitionSpeed}ms ease-in-out`;\n      s.style.position = \"absolute\";\n      s.style.top = \"0\";\n      s.style.left = \"0\";\n      s.style.width = \"100%\";\n      s.style.height = \"100%\";\n    });\n    function showNextSlide() {\n      if (paused) return;\n      const current = slides[currentIndex];\n      let nextIndex = currentIndex + 1;\n      if (nextIndex >= slides.length) {\n        if (loop) nextIndex = 0;else return;\n      }\n      const next = slides[nextIndex];\n\n      // Neuer Slide über alten legen und EINblenden\n      next.classList.add(\"is-raising\");\n      next.style.opacity = \"1\";\n\n      // Nach dem Fade den alten Slide ausblenden und den neuen als aktiv markieren\n      const finalize = () => {\n        current.classList.remove(\"is-active\");\n        current.style.opacity = \"0\";\n        next.classList.remove(\"is-raising\");\n        next.classList.add(\"is-active\");\n        currentIndex = nextIndex;\n\n        // Jetzt erst den neuen Timer starten → Dauer zählt ab hier!\n        startAutoplay();\n      };\n      next.addEventListener(\"transitionend\", e => {\n        if (e.propertyName === \"opacity\") finalize();\n      }, {\n        once: true\n      });\n      setTimeout(() => finalize(), transitionSpeed + 50); // Fallback\n    }\n    function startAutoplay() {\n      if (!autoplay) return;\n      clearTimeout(timer);\n      const active = slides[currentIndex];\n      // Dauer wird nun in Sekunden gespeichert → in ms umrechnen\n      const slideDuration = parseInt(active.dataset.duration || \"4\", 10) * 1000;\n      timer = setTimeout(() => {\n        showNextSlide();\n      }, slideDuration);\n    }\n    startAutoplay();\n  });\n});\n\n//# sourceURL=webpack://ud-fade-slider-block/./src/frontend.js?\n}");

/***/ }),

/***/ "./src/frontend.scss":
/*!***************************!*\
  !*** ./src/frontend.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ud-fade-slider-block/./src/frontend.scss?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/frontend.js");
/******/ 	
/******/ })()
;