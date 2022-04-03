import React from 'react';
import styles from './cart.module.css';
import CartIcon from '../../../assets/icons/cart.svg';
import ArrowBackIcon from '../../../assets/icons/arrow-back.svg';

function CartNavbar({ onClose = () => null }) {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.backContainer} onClick={() => onClose()}>
				<img src={ArrowBackIcon} alt='' className={styles.icon} />

				<span className={styles.navText}>Back</span>
			</div>
			<div className={styles.cartTextContainer}>
				<span className={styles.navText}>Your Cart</span>
				<img src={CartIcon} alt='' className={styles.icon} />
			</div>
		</div>
	);
}

export default CartNavbar;
