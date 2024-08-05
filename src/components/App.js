
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ItemList />} />
				<Route path="/item/:id" element={<ItemDetail />} />
			</Routes>
		</Router>
	);
}

export default App;