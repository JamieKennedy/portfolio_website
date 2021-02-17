import React from 'react';
import HeaderTitle from './HeaderTitle';
import Socials from './Socials';

const Header = () => {
	return (
		<div className={'headerContainer'}>
			<HeaderTitle />
			<Socials />
		</div>
	);
};

export default Header;
