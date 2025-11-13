import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { duration, hidden } = attributes;
	const blockProps = useBlockProps.save({
		"data-duration": duration,
		"data-hidden": hidden ? "true" : "false",
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
