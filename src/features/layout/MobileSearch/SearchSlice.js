import { createSlice } from '@reduxjs/toolkit';

export const SearchSlice = createSlice({
	name: 'search',
	initialState: {
		open: false,
	},
	reducers: {
		openSearchModal: (state) => {
			state.open = true;
		},
		closeSearchModal: (state) => {
			state.open = false;
		},
	},
});

export const { closeSearchModal, openSearchModal } = SearchSlice.actions;

export default SearchSlice.reducer;
