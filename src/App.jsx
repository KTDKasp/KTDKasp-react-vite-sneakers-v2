import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layout/MainLayout';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { CartPage } from './pages/CartPage';

import './app.css';

export const CartItemsContext = React.createContext();

function App() {
	const [cartItems, setCartItems] = React.useState([]);

	return (
		<div className="container">
			<CartItemsContext.Provider value={{cartItems, setCartItems}}>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="favorites" element={<Favorites />} />
					<Route path="cart" element={<CartPage />} />
				</Route>
			</Routes>
			</CartItemsContext.Provider>
		</div>
	);
}

export default App;
