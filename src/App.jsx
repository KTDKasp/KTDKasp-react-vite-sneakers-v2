import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';

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
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [animationParent] = useAutoAnimate();

	const onAddToCart = (obj) => {
    setCartItems((prev) => {
			const isItemAdded = prev.find((item) => Number(item.id) === Number(obj.id));
			if (isItemAdded) {
				return prev.filter((item) => Number(item.id) !== Number(obj.id));
			} else {
				return [...prev, obj];
			}
		});
  };
	
  React.useEffect(() => {
		try {
			const fetchData = async () => {
				const favoritesData = await axios.get('https://6d35450ae5876ee3.mokky.dev/favorites')
				setFavoriteItems(favoritesData.data);
			}
			fetchData()
		} catch (error) {
			console.log(error);
		}
  }, []);

	const onAddToFavotites = async (obj) => {
		try {
			const isItemFavorite = favoriteItems.find((item) => Number(item.itemId) === Number(obj.id));
				if (isItemFavorite) {
					axios.delete(`https://6d35450ae5876ee3.mokky.dev/favorites/${isItemFavorite.id}`)
					console.log(isItemFavorite);
					setFavoriteItems(prev => prev.filter((item) => Number(item.itemId) !== Number(obj.id)));
				} else {
					const { data } = await axios.post('https://6d35450ae5876ee3.mokky.dev/favorites', {
						itemId: obj.id,
						price: obj.price,
						title: obj.title,
						imageUrl: obj.imageUrl
					});
					console.log(data);
					setFavoriteItems((prev) => [...prev, data]);
				}
		} catch (error) {
			console.log(error);
		}
	}

  return (
    <div className="container">
      <AppContext.Provider
        value={
					{ 
						items,
						animationParent, 
						cartItems, 
						setCartItems, 
						setItems, 
						favoriteItems, 
						setFavoriteItems,
						onAddToFavotites,
						onAddToCart
					}
				}
      >
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
