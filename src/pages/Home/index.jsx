import React from 'react';
import axios from 'axios';

import { CardList } from '../../components/CardList';
import AppContext from '../../context';

import './Home.css';

export const Home = () => {
	const [sortType, setSortType] = React.useState('title');
	const [searchValue, setSearchValue] = React.useState('');

  const { setCartItems, items, setItems } = React.useContext(AppContext);

	// const [isFavorite, setIsFavorite] = React.useState(false);
	// const [isAdded, setIsAdded] = React.useState(false);

	const fetchData = React.useCallback(async () => {
		const params = {
			sortBy: sortType,
		};

		if (searchValue) {
			params.title = `*${searchValue}*`;
		}

		try {
			const { data } = await axios.get(
				`https://6d35450ae5876ee3.mokky.dev/items`,
				{
					params,
				}
			);
			setItems(data);

			// axios.get('https://6d35450ae5876ee3.mokky.dev/cart').then((res) => {
			// 	setCartItems(res.data);
			// })
		} catch (error) {
			console.log(`Hey, you have ${error}`);
		}
	}, [searchValue, sortType]);

	React.useEffect(() => {
		async function onMount() {
			await fetchData();
		}

		onMount();
	}, [fetchData]);

	const onChangeSelect = (event) => {
		setSortType(event.target.value);
	};

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

  const onAddToCart = (obj) => {
		console.log(obj);
    setCartItems((prev) => {
			const isItemAdded = prev.find((item) => Number(item.id) === Number(obj.id));
			if (isItemAdded) {
				// axios.delete(`https://6d35450ae5876ee3.mokky.dev/cart/${obj.id}`);
				return prev.filter((item) => Number(item.id) !== Number(obj.id));
			} else {
				// axios.post('https://6d35450ae5876ee3.mokky.dev/cart', obj);
				return [...prev, obj];
			}
		});
  };

	// TODO: Нужно исправить добавление в закладки

	return (
		<div className="main">
			<div className="main__slider"></div>
			<div className="search">
				<h2 className="content__h2">Все кроссовки</h2>
				<div className="search-and-sort">
					<select onChange={onChangeSelect} className="sort__type">
						<option value="title">По названию</option>
						<option value="price">По цене (дешевые)</option>
						<option value="-price">По цене (дорогие)</option>
					</select>
					<div className="search__block">
						<img className="search__img" src="/svg/search.svg" alt="Search" />
						<input
							className="search__input"
							type="text"
							placeholder="Поиск..."
							value={searchValue}
							onChange={onChangeSearchInput}
						/>
						{searchValue && (
							<img
								onClick={() => setSearchValue('')}
								className="search__clear"
								src="/svg/close.svg"
								alt="Clear"
							/>
						)}
					</div>
				</div>
			</div>
			<CardList items={items} onAddToCart={onAddToCart}/>
		</div>
	);
};
