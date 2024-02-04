import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { MainLayout } from './layout/MainLayout';

import './app.css';
import { Drawer } from './components/Drawer';

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
