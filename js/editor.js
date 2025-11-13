import { registerBlockType } from "@wordpress/blocks";
import editFadeSlider from "../src/fade-slider/edit";
import saveFadeSlider from "../src/fade-slider/save";
import editFadeSlide from "../src/fade-slide/edit";
import saveFadeSlide from "../src/fade-slide/save";

registerBlockType("ud/fade-slider-block", {
  edit: editFadeSlider,
  save: saveFadeSlider,
});

registerBlockType("ud/fade-slide", {
  edit: editFadeSlide,
  save: saveFadeSlide,
});
