import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, removeItemFromCart } from './CartSlice';

function CartItem({ book }) {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.data);

	const findNumberOfItems = () => {
		const items = cartItems.filter((item) => item.id === book.id);
		return items.length;
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				gap: 10,
				width: '100%',
			}}
		>
			<img
				src={book.image_url}
				alt=''
				style={{
					width: 60,
					height: 90,
					objectFit: 'cover',
				}}
			/>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '100%',
					fontFamily: 'Ubuntu',
					fontWeight: '400',
					color: '#000',
					fontSize: 12,
				}}
			>
				<div>
					<span
						style={{
							fontSize: 14,
							fontWeight: '700',
						}}
					>
						{book.title}
					</span>
					<div
						style={{
							marginTop: 5,
						}}
					>
						{book.authors?.map((author) => author.name)?.join(', ')}
					</div>
					<div
						style={{
							cursor: 'pointer',
							marginTop: 32,
						}}
						onClick={() => dispatch(removeItemFromCart(book))}
					>
						Remove
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end',
					}}
				>
					<span>${book.price}</span>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							marginTop: 5,
							marginBottom: 17,
						}}
					>
						<button
							style={{
								width: 30,
								height: 30,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								border: '1px solid #DDDDDD',
								backgroundColor: '#F9F9FB',
							}}
							disabled={findNumberOfItems() <= 1}
							onClick={() => dispatch(removeFromCart(book))}
						>
							-
						</button>
						<button
							style={{
								width: 30,
								height: 30,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								border: '1px solid #DDDDDD',
								backgroundColor: '#F9F9FB',
							}}
						>
							{findNumberOfItems()}
						</button>
						<button
							style={{
								width: 30,
								height: 30,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								border: '1px solid #DDDDDD',
								backgroundColor: '#F9F9FB',
							}}
							onClick={() =>
								book.available_copies - findNumberOfItems() > 0
									? dispatch(addToCart(book))
									: alert('Book is out of stock')
							}
						>
							+
						</button>
					</div>
					<span
						style={{
							fontWeight: '700',
						}}
					>
						${findNumberOfItems() * book.price}
					</span>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
