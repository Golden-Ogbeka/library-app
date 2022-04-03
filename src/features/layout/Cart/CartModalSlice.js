import { createSlice } from '@reduxjs/toolkit';

export const CartModalSlice = createSlice({
	name: 'cart',
	initialState: {
		open: false,
	},
	reducers: {
		openCartModal: (state) => {
			state.open = true;
		},
		closeCartModal: (state) => {
			state.open = false;
		},
	},
});

export const { closeCartModal, openCartModal } = CartModalSlice.actions;

export default CartModalSlice.reducer;
