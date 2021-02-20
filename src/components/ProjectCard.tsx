import React, { Dispatch, SetStateAction } from 'react';

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	setTags: Dispatch<SetStateAction<string[]>>;
	currentTags: string[];
}

const ProjectCard = ({ title, description, tags, setTags, currentTags }: ProjectCardProps) => {
	const onClick = (event: any, tag: string) => {
		event.preventDefault();

		if (currentTags.includes(tag)) {
			// Remove tag from tags and deselect button
			setTags(currentTags.filter((item) => item !== tag));
		} else {
			// Add tag to tag and select button
			setTags([...currentTags, tag]);
		}
	};

	const renderTags: JSX.Element[] = tags.map((tag) => {
		return (
			<div className="ui label" key={tag} onClick={(event) => onClick(event, tag)}>
				{tag}
			</div>
		);
	});

	return (
		<div className="ui fluid raised link card">
			<div className="content">
				<div className="header">{title}</div>
				<div className="description">
					<p>{description}</p>
				</div>
			</div>
			<div className="extra content">
				<div className="ui medium black labels">{renderTags}</div>
			</div>
		</div>
	);
};

export default ProjectCard;
