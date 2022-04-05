import { configureStore } from '@reduxjs/toolkit';
import BookSlice from '../features/BookData/BookSlice';
import CartModalSlice from '../features/layout/Cart/CartModalSlice';
import CartSlice from '../features/layout/Cart/CartSlice';
import SearchModalSlice from '../features/layout/MobileSearch/SearchModalSlice';
import SearchVariableSlice from '../features/pages/Search/SearchVariableSlice';

export const store = configureStore({
	reducer: {
		cartModal: CartModalSlice,
		searchModal: SearchModalSlice,
		searchVariable: SearchVariableSlice,
		books: BookSlice,
		cart: CartSlice,
	},
});
