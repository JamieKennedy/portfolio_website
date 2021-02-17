import React, { useState } from 'react';
import TagButtons from './TagButtons';
import ProjectList from './ProjectList';

const availableTags = ['C#', '.Net', 'React', 'Typescript', 'Python', 'Unity', 'A.I', 'Machine Learning', 'Java', 'SQL'];

const Projects = () => {
	const [tags, setTags] = useState<string[]>([]);

	return (
		<div className={'projectsContainer'}>
			<TagButtons availableTags={availableTags} setTags={setTags} currentTags={tags} />
			<ProjectList currentTags={tags} setTags={setTags} />
		</div>
	);
};

export default Projects;
