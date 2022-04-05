import React from 'react';
import { useSelector } from 'react-redux';
import BookSection from '../../components/BookSection/BookSection';
import Carousel from '../../components/Carousel.js/Carousel';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import AppLayout from '../../layout/AppLayout';
import styles from './styles.module.css';

function Homepage() {
	const books = useSelector((state) => state.books.allBooks);

	return (
		<AppLayout>
			<div className={styles.container}>
				<div className={styles.paddedContainer}>
					<SectionHeader title='Featured Books' hiddenInMobile />
				</div>
				<Carousel books={books} />
				<div className={styles.paddedContainer}>
					<SectionHeader title='All Books' />

					<BookSection books={books} />
				</div>
			</div>
		</AppLayout>
	);
}

export default Homepage;
