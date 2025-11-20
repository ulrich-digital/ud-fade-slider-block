import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { duration, hidden } = attributes;

	const blockProps = useBlockProps({
		"data-hidden": hidden ? "true" : "false",
	});

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title="Slide-Einstellungen">
					<RangeControl
						label="Anzeigedauer (Sekunden)"
						min={1}
						max={300}
						step={1}
						value={duration}
						onChange={(value) => setAttributes({ duration: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
					<ToggleControl
						label="Slide ausblenden"
						checked={hidden}
						onChange={(value) => setAttributes({ hidden: value })}
						__next40pxDefaultSize={true}
						__nextHasNoMarginBottom={true}
					/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks />
		</div>
	);
}
