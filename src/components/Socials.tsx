import React from 'react';
import SocialLink from './SocialLink';

const Socials = () => {
	return (
		<div className={'socialsContainer'}>
			<SocialLink text={'github.com/JamieKennedy'} icon={'github'} link={'https://github.com/JamieKennedy'} />
			<SocialLink
				text={'linkedin.com/in/jamiekennedy98'}
				icon={'linkedin'}
				link={'https://www.linkedin.com/in/jamiekennedy98/'}
			/>
			<SocialLink text={'jamiekennedy97@gmail.com'} icon={'envelope'} link={'mailto:jamiekennedy97@gmail.com'} />
			<SocialLink text={'Liverpool, UK'} icon={'map marker alternate'} link={null} />
		</div>
	);
};

export default Socials;
