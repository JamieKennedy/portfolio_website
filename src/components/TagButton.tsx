import React, { Dispatch, SetStateAction, useState } from 'react';

interface TagButtonProps {
	tag: string;
	setTags: Dispatch<SetStateAction<string[]>>;
	currentTags: string[];
}

const TagButton = ({ tag, setTags, currentTags }: TagButtonProps) => {
	const onClick = () => {
		if (currentTags.includes(tag)) {
			// Remove tag from tags and deselect button
			setTags(currentTags.filter((item) => item !== tag));
		} else {
			// Add tag to tag and select button
			setTags([...currentTags, tag]);
		}
	};

	return (
		<div className={`ui label pointer ${currentTags.includes(tag) ? 'blue' : 'black'}`} onClick={onClick}>
			<p className={'tagText'}>{tag}</p>
		</div>
	);
};

export default TagButton;
