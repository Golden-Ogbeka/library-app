import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/layout/Cart/CartModalSlice';
import SearchReducer from '../features/layout/MobileSearch/SearchSlice';

export const store = configureStore({
	reducer: {
		cart: CartReducer,
		search: SearchReducer,
	},
});
