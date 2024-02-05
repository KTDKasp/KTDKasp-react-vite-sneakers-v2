// import React from 'react';
import { CardList } from '../../components/CardList';

import './Home.css';

export const Home = () => {
	return (
		<div className="main">
			<div className="main__slider"></div>
			<div className="search">
				<h2 className="content__h2">Все кроссовки</h2>
				<div className='search-and-sort'>
					<select className='sort__type'>
						<option>По названию</option>
						<option>По цене (дешевые)</option>
						<option>По цене (дорогие)</option>
					</select>
					<div className="search__block">
						<img src="/svg/search.svg" alt="Search" />
						<input
							className="search__input"
							type="text"
							placeholder="Поиск..."
						/>
					</div>
				</div>
			</div>
			<CardList />
		</div>
	);
};
