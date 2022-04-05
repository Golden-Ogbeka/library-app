import React from 'react';
import { useSelector } from 'react-redux';
import styles from './cart.module.css';
import CartItem from './CartItem';
import CartIcon from '../../../assets/icons/cart-white.svg';

function CartBody() {
	const cartItems = useSelector((state) => state.cart.data);
	const cartCount = useSelector((state) => [
		...new Set(state.cart.data?.map((item) => item)),
	]); //to get unique items

	const [overallPrice, setOverallPrice] = React.useState(0);
	React.useEffect(() => {
		const getOverallPrice = () => {
			const total =
				cartItems && cartItems.reduce((first, second) => first + second.price, 0);
			setOverallPrice(total);
		};
		getOverallPrice();
	}, [cartItems]);

	return (
		<div className={styles.cartBody}>
			{cartCount && cartCount.length > 0 ? (
				cartCount.map((item, index) => (
					<div key={item.id}>
						<CartItem book={item} />
						<div className={styles.cartItemDivider} />
					</div>
				))
			) : (
				<>Cart empty</>
			)}
			{cartCount && cartCount.length > 0 && (
				<div className={styles.cartControlContainer}>
					<div className={styles.cartControlText}>
						<span>Subtotal</span>
						<span
							style={{
								fontWeight: '300',
								fontSize: 36,
								lineHeight: '41px',
							}}
						>
							${overallPrice.toFixed(2)}
						</span>
					</div>
					<button className={styles.cartControlButton}>
						<div className={styles.cartControlButtonText}>
							<img src={CartIcon} alt='' height='20px' />
							<span>Proceed to Checkout</span>
						</div>
					</button>
				</div>
			)}
		</div>
	);
}

export default CartBody;
