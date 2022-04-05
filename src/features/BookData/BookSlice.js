import { createSlice } from '@reduxjs/toolkit';
import BookData from '../../data.json';

export const BookSlice = createSlice({
	name: 'books',
	initialState: {
		allBooks: BookData.data,
	},
});

export default BookSlice.reducer;
