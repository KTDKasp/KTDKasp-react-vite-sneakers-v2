// import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';

import './app.css';

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="favorites" element={<Favorites />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
