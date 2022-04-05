import React from 'react';
import styles from './styles.module.css';
import BookCard from '../BookCard/BookCard';

function BookSection({ books = [] }) {
	return (
		<div className={styles.container}>
			{books && books.length > 0 ? (
				books.map((book) => (
					<BookCard
						key={book.id}
						book={book}
						author={book.authors?.map((author) => author.name)?.join(', ')}
						copies={book.available_copies}
						image={book.image_url}
						likes={book.likes}
						name={book.title}
						people={book.number_of_purchases}
						type={book.genres?.map((genre) => genre.name)?.join(', ')}
						price={book.price}
						rating={book.rating}
						year={book.release_date && new Date(book.release_date).getFullYear()}
					/>
				))
			) : (
				<>No book found</>
			)}
		</div>
	);
}

export default BookSection;
