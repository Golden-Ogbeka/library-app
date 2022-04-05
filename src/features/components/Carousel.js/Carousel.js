import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import PrevIcon from '../../../assets/icons/prev.svg';
import NextIcon from '../../../assets/icons/next.svg';
import styles from './styles.module.css';
import FavouriteIcon from '../../../assets/icons/favourite-white.svg';

import PeopleIcon from '../../../assets/icons/people-white.svg';
import RatingsComponent from '../BookCard/RatingsComponent';
import { useSelector } from 'react-redux';

function CarouselElement({ books }) {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 4 },
		{ width: 1150, itemsToShow: 5 },
		{ width: 1450, itemsToShow: 6 },
		{ width: 1750, itemsToShow: 7 },
	];

	const PreviousArrow = () => (
		<>
			<div className={styles.carouselArrowLeft}>
				<img src={PrevIcon} alt='' />
			</div>
		</>
	);

	const NextArrow = () => (
		<div className={styles.carouselArrowRight}>
			<img src={NextIcon} alt='' />
		</div>
	);

	function myArrow({ type, onClick, isEdge }) {
		const pointer = type === consts.PREV ? <PreviousArrow /> : <NextArrow />;
		return (
			<div onClick={onClick} disabled={isEdge}>
				{pointer}
			</div>
		);
	}
	const cartItems = useSelector((state) => state.cart.data);

	const findNumberOfItems = (id) => {
		const items = cartItems.filter((item) => item.id === id);
		return items.length;
	};
	return (
		<div
			style={{
				marginTop: 23,
				marginBottom: 40,
				position: 'relative',
			}}
		>
			<Carousel
				breakPoints={breakPoints}
				renderArrow={myArrow}
				renderPagination={({ pages, activePage, onClick }) => {
					return (
						<div className={styles.paginationContainer}>
							{pages.map((page) => {
								const isActivePage = activePage === page;
								return (
									<div
										key={page}
										onClick={() => onClick(page)}
										active={isActivePage}
										className={styles.paginationItem}
										style={{
											backgroundColor: isActivePage ? '#64C000' : '#dddddd',
										}}
									/>
								);
							})}
						</div>
					);
				}}
			>
				{books &&
					books.map((book) => (
						<div className={styles.imageContainer}>
							<img
								src={book.image_url}
								alt={book.title}
								style={{
									width: 220,
									height: 330,
									marginBottom: 20,
									objectFit: 'cover',
									boxShadow: '0px 25px 30px rgba(0, 0, 0, 0.1)',
								}}
							/>
							<div className={styles.imageDescription}>
								<div className={styles.imageDescriptionContainer}>
									{book.available_copies - findNumberOfItems(book.id) > 0 ? (
										<div
											style={{
												marginBottom: 18,
												color: '#65C100',
											}}
										>
											Available
										</div>
									) : (
										<div
											style={{
												marginBottom: 18,
												color: '#C12300',
											}}
										>
											Out of stock
										</div>
									)}

									<div
										style={{
											fontWeight: '700',
											marginBottom: 6,
											fontSize: 18,
										}}
									>
										{book.title}
									</div>
									<div
										style={{
											marginBottom: 21,
										}}
									>
										{book.authors?.map((author) => author.name)?.join(', ')}
										<br />
										{book.release_date && new Date(book.release_date).getFullYear()}
									</div>
									<div
										style={{
											marginBottom: 29,
										}}
									>
										<div>Genre</div>

										{book.genres && book.genres[0]?.name}
									</div>
									{/* <div
										style={{
											marginBottom: 18,
										}}
									>
										<div>Tags</div>

										{book.tags && book.tags[0]?.name}
									</div> */}

									<div
										style={{
											display: 'flex',
											flexDirection: 'row',
											// marginBottom: 18,
											alignItems: 'center',
											color: '#fff',
										}}
									>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												marginRight: 12.33,
												alignItems: 'center',
											}}
										>
											<img src={PeopleIcon} alt='' />
											<div>{book.number_of_purchases}</div>
										</div>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												marginRight: 14.27,
												alignItems: 'center',
											}}
										>
											<img src={FavouriteIcon} alt='' />
											<div>{book.likes}</div>
										</div>
										<div className={styles.separator} />
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												marginLeft: 10,
											}}
										>
											<div>Rating: {book.rating} </div>
											<RatingsComponent rating={book.rating} />
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</Carousel>
		</div>
	);
}

export default CarouselElement;
