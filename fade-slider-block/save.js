import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { autoplay, loop, transitionSpeed, pauseOnHover, startIndex } = attributes;

	const blockProps = useBlockProps.save({
		"data-autoplay": autoplay ? "true" : "false",
		"data-loop": loop ? "true" : "false",
		"data-transition-speed": transitionSpeed,
		"data-pause-on-hover": pauseOnHover ? "true" : "false",
		"data-start-index": startIndex,
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
