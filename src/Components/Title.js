import React from 'react';
import defaultImage from '../assets/defaultImage.jpg';

export const Title = ({ text, image }) => {
	return (
		<>
			<h1>{text}</h1>
			<img src={image || defaultImage} alt={text} />
		</>
	);
};
