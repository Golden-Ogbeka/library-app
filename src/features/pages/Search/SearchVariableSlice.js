import { createSlice } from '@reduxjs/toolkit';

export const SearchVariableSlice = createSlice({
	name: 'searchVariable',
	initialState: {
		value: '',
	},
	reducers: {
		changeSearchVariable: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeSearchVariable } = SearchVariableSlice.actions;

export default SearchVariableSlice.reducer;
