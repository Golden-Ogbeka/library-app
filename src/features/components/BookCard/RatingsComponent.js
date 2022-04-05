import React from 'react';
import ColoredStar from '../../../assets/icons/star-colored.svg';
import PlainStar from '../../../assets/icons/star-plain.svg';

function RatingsComponent({ rating = 0 }) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: 3.19,
			}}
		>
			{Array(Math.round(rating))
				.fill(0)
				.map((value, index) => (
					<img src={ColoredStar} alt='' key={index} />
				))}
			{Array(5 - Math.round(rating))
				.fill(0)
				.map((value, index) => (
					<img src={PlainStar} alt='' key={index} />
				))}
		</div>
	);
}

export default RatingsComponent;
