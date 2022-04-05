import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../ModalComponent/Modal';
import styles from './cart.module.css';
import CartBody from './CartBody';
import { closeCartModal } from './CartModalSlice';
import CartNavbar from './CartNavbar';

function Cart() {
	const dispatch = useDispatch();
	const cartModalState = useSelector((state) => state.cartModal.open);

	return (
		<Modal open={cartModalState} onClose={() => dispatch(closeCartModal())}>
			<div className={styles.cartContainer} onClick={(e) => e.stopPropagation()}>
				<CartNavbar onClose={() => dispatch(closeCartModal())} />
				<CartBody />
			</div>
		</Modal>
	);
}

export default Cart;
