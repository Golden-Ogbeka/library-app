import React from 'react';
import styles from './styles.module.css';

function SectionHeader({ title, hiddenInMobile = false }) {
	return (
		<div className={`${styles.container} ${hiddenInMobile && styles.hiddenInMobile}`}>
			{title}
		</div>
	);
}

export default SectionHeader;
