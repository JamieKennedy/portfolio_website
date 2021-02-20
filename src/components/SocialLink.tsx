import React from 'react';

interface SocialLinkProps {
	text: string;
	icon: string;
	link: string | null;
}

const SocialLink = ({ text, icon, link }: SocialLinkProps) => {
	// redirect page if the link != null
	const onClick = () => {
		if (link) {
			window.location.href = link;
		}
	};

	return (
		<div className={`social ${link ? 'pointer' : ''}`} onClick={onClick}>
			<div className={'socialText'}>{text}</div>
			<div className={'socialIcon'}>
				<i className={`blue ${icon} icon large`} />
			</div>
		</div>
	);
};

export default SocialLink;
