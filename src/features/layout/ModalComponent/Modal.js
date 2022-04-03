import React from 'react';
import styles from './modal.module.css';

function Modal({ children, open = false, onClose = () => null, ...props }) {
	return (
		<div
			className={styles.modalContainer}
			style={{
				display: open ? 'block' : 'none',
			}}
			onClick={() => onClose()}
		>
			{children}
		</div>
	);
}

export default Modal;
