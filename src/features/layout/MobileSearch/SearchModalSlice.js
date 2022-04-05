import { createSlice } from '@reduxjs/toolkit';

export const SearchModalSlice = createSlice({
	name: 'searchModal',
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

export const { closeSearchModal, openSearchModal } = SearchModalSlice.actions;

export default SearchModalSlice.reducer;
