import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
	name: 'cart',
	initialState: {
		data: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.data.push(action.payload);
		},
		removeFromCart: (state, action) => {
			const removeIndex = state.data.map((item) => item.id).indexOf(action.payload.id);
			~removeIndex &&
				//  removeIndex >= 0
				state.data.splice(removeIndex, 1);
		},
		removeItemFromCart: (state, action) => {
			state.data = state.data.filter((item) => item.id !== action.payload.id);
		},
		clearCart: (state) => {
			state.data = [];
		},
	},
});

export const { removeFromCart, addToCart, removeItemFromCart } = CartSlice.actions;

export default CartSlice.reducer;
