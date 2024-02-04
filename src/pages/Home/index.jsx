import React from 'react';
import { CardList } from '../../components/CardList';

import './Home.css'

export const Home = () => {
	return (
		<div className="main">
			<div className="main__slider">

			</div>
			<div className='search'>
				<h2 className='content__h2'>Все кроссовки</h2>
				<div className='search__input'>
					<input type="text" />
				</div>
			</div>
			<CardList />
		</div>
	);
};
