import React, { Dispatch, SetStateAction, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { data } from '../data/data';

interface ProjectListInterface {
	currentTags: string[];
	setTags: Dispatch<SetStateAction<string[]>>;
}

interface IData {
	id: number;
	title: string;
	description: string;
	tags: string[];
}

const ProjectList = ({ currentTags, setTags }: ProjectListInterface) => {
	useEffect(() => {}, [currentTags]);

	const filter = (data: IData): boolean => {
		// If state tags is empty return true
		if (currentTags.length === 0) {
			return true;
		} else {
			// If state tags and data tags have share tags then return true
			let intersection = currentTags.filter((x) => data.tags.includes(x));
			return intersection.length > 0;
		}
	};

	const filteredProjects: IData[] = data.filter((data: IData) => filter(data));

	const renderProjectCards: JSX.Element[] = filteredProjects.map(({ id, title, description, tags }: IData) => {
		return (
			<ProjectCard
				key={id}
				title={title}
				description={description}
				tags={tags}
				setTags={setTags}
				currentTags={currentTags}
			/>
		);
	});

	return <div className={'ui container'}>{renderProjectCards}</div>;
};

export default ProjectList;
