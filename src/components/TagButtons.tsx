import React, { Dispatch, SetStateAction } from 'react';
import TagButton from './TagButton';

interface TagButtonsProps {
	availableTags: string[];
	setTags: Dispatch<SetStateAction<string[]>>;
	currentTags: string[];
}

const TagButtons = ({ availableTags, setTags, currentTags }: TagButtonsProps) => {
	const renderTagButtons: JSX.Element[] = availableTags.map((tag: string) => {
		return <TagButton key={tag} tag={tag} setTags={setTags} currentTags={currentTags} />;
	});
	return <div className={'tagButtonsContainer ui big labels'}>{renderTagButtons}</div>;
};

export default TagButtons;
