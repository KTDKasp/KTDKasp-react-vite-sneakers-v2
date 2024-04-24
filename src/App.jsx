import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { CartPage } from './pages/CartPage';
import AppContext from './context';

import './app.css';

function App() {
	const [cartItems, setCartItems] = React.useState(() => {
		return JSON.parse(localStorage.getItem('cart')) || [];
	});
	const [items, setItems] = React.useState([]);
	const [animationParent] = useAutoAnimate();


	return (
		<div className="container">
			<AppContext.Provider value={{ animationParent, cartItems, setCartItems, setItems, items }}>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="favorites" element={<Favorites />} />
						<Route path="cart" element={<CartPage />} />
					</Route>
				</Routes>
			</AppContext.Provider>
		</div>
	);
}

export default App;
