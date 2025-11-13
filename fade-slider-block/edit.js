import { useBlockProps, InspectorControls, InnerBlocks } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { autoplay, loop, transitionSpeed, pauseOnHover, startIndex } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Slider-Einstellungen">
					<ToggleControl
						label="Autoplay aktivieren"
						checked={autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<ToggleControl
						label="Endlosschleife (Loop)"
						checked={loop}
						onChange={(value) => setAttributes({ loop: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<ToggleControl
						label="Bei Hover pausieren"
						checked={pauseOnHover}
						onChange={(value) => setAttributes({ pauseOnHover: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<RangeControl
						label="Übergangszeit (ms)"
						min={100}
						max={3000}
						step={100}
						value={transitionSpeed}
						onChange={(value) => setAttributes({ transitionSpeed: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks allowedBlocks={["ud/fade-slide-item"]} />
		</div>
	);
}
