import React from 'react';
import { useSelector } from 'react-redux';
import BookSection from '../../components/BookSection/BookSection';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import AppLayout from '../../layout/AppLayout';
import styles from './styles.module.css';

function Search() {
	const books = useSelector((state) => state.books.allBooks);
	const searchVariable = useSelector((state) => state.searchVariable.value);

	const [filteredBooks, setFilteredBooks] = React.useState([]);

	React.useEffect(() => {
		const filterBooks = (e) => {
			if (searchVariable?.length === 0) {
				return setFilteredBooks(books);
			}

			return setFilteredBooks(
				books.filter(
					(book) =>
						book.title?.includes(searchVariable) ||
						book.subtitle?.includes(searchVariable) ||
						book.publisher?.includes(searchVariable) ||
						book.full_description?.includes(searchVariable) ||
						book.authors?.find((author) => author.name?.includes(searchVariable)) ||
						book.tags?.find((tag) => tag.name?.includes(searchVariable)) ||
						book.genres?.find((genre) => genre.name?.includes(searchVariable))
				)
			);
		};
		filterBooks();
	}, [searchVariable]);

	return (
		<AppLayout>
			<div className={styles.container}>
				<SectionHeader
					title={
						searchVariable?.length > 0
							? `${filteredBooks.length} results found for '${searchVariable}'`
							: 'All Books'
					}
				/>
				<BookSection books={filteredBooks} />
			</div>
		</AppLayout>
	);
}

export default Search;
