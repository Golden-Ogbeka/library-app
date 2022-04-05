import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './features/pages/Homepage/Homepage';
import Search from './features/pages/Search/Search';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/search' element={<Search />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
