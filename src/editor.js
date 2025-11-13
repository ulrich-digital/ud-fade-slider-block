import { registerBlockType } from "@wordpress/blocks";

// Styles (optional)
import "./editor.scss";

// Parent + Child
import editFadeSlider from "../fade-slider-block/edit.js";
import saveFadeSlider from "../fade-slider-block/save.js";
import editFadeSlide from "../fade-slide-item/edit.js";
import saveFadeSlide from "../fade-slide-item/save.js";

registerBlockType("ud/fade-slider-block", {
	edit: editFadeSlider,
	save: saveFadeSlider,
});

registerBlockType("ud/fade-slide-item", {
	edit: editFadeSlide,
	save: saveFadeSlide,
});
