import '../CSS/Home.css';
import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';

const App = () => {
	return (
		<div className={'pageRoot'}>
			<Header />
			{/*<About />*/}
			<Projects />
		</div>
	);
};

export default App;
