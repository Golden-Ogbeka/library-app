import React from 'react';
import styles from './styles.module.css';
import FavouriteIcon from '../../../assets/icons/favourite.svg';
import CartIcon from '../../../assets/icons/cart.svg';
import PeopleIcon from '../../../assets/icons/people.svg';
import RatingsComponent from './RatingsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../layout/Cart/CartSlice';

function BookCard({
	image,
	name,
	author,
	year,
	type,
	people,
	likes,
	rating,
	price,
	copies,
	book,
}) {
	const dispatch = useDispatch();

	const cartItems = useSelector((state) => state.cart.data);

	const findNumberOfItems = () => {
		const items = cartItems.filter((item) => item.id === book.id);
		return items.length;
	};
	return (
		<div className={styles.container}>
			<img className={styles.imageContainer} src={image} alt={name} />
			<div className={styles.textContainer}>
				<div
					style={{
						fontWeight: '700',
						marginBottom: 6,
						fontSize: 14,
					}}
				>
					{name}
				</div>
				<div
					style={{
						marginBottom: 1,
					}}
				>
					{author} - {year}
				</div>
				<div
					style={{
						marginBottom: 19,
					}}
				>
					{type}
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						marginBottom: 18,
						alignItems: 'center',
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
						<span>{people}</span>
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
						<span>{likes}</span>
					</div>
					<div className={styles.separator} />
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginLeft: 10,
						}}
					>
						<span>Rating: {rating} </span>
						<RatingsComponent rating={rating} />
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 10,
						marginBottom: 13,
					}}
					onClick={() => dispatch(removeFromCart(book))}
				>
					<span>${price}</span>
					{copies && copies - findNumberOfItems() > 0 ? (
						<span
							style={{
								color: '#65C100',
							}}
						>
							{copies - findNumberOfItems()}{' '}
							{copies - findNumberOfItems() > 1 ? 'Copies' : 'Copy'} Available
						</span>
					) : (
						<span
							style={{
								color: '#C12300',
							}}
						>
							Out of stock
						</span>
					)}
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 10,
						cursor: 'pointer',
					}}
					onClick={() =>
						copies - findNumberOfItems() > 0
							? dispatch(addToCart(book))
							: alert('Book is out of stock')
					}
				>
					<img src={CartIcon} alt='' />
					<span
						style={{
							fontWeight: '700',
						}}
					>
						Add to Cart
					</span>
				</div>
			</div>
		</div>
	);
}

export default BookCard;
