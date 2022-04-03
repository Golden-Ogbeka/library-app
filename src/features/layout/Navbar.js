import React from 'react';
import styles from './layout.module.css';
import Logo from '../../assets/brand/logo.svg';
import SearchIcon from '../../assets/icons/search.svg';
import CartIcon from '../../assets/icons/cart.svg';
import BooksIcon from '../../assets/icons/books.svg';

function Navbar() {
	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbarContentContainer}>
				<div className={styles.logoContainer}>
					<img src={Logo} alt='Quidax' />
					<div className={styles.logoTextContainer}>
						<span className={styles.logoText1}>Quidax Books</span>
						<span className={styles.logoText2}>A flimsy book company</span>
					</div>
				</div>
				<div className={styles.searchContainer}>
					<input
						type='text'
						className={styles.searchInput}
						placeholder='Search books, genres, authors, etc.'
					/>
					<div className={styles.searchIconContainer}>
						<img src={SearchIcon} alt='' />
					</div>
				</div>
				<div className={styles.controlsContainer}>
					<img src={SearchIcon} alt='' className={`${styles.searchIcon} ${styles.icon}`} />
					<img src={BooksIcon} alt='' className={styles.icon} />
					<div className={`${styles.cartIconContainer} ${styles.icon}`}>
						<img src={CartIcon} alt='' />
						<div className={styles.cartBadge}>3</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
