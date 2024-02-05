import React from 'react';
import axios from 'axios';

import { CardList } from '../../components/CardList';

import './Home.css';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [sortType, setSortType] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://6d35450ae5876ee3.mokky.dev/items?sortBy=${sortType}&title=*${searchValue}*`
        );
        setItems(data);
      } catch (error) {
        console.log(`Hey, you have ${error}`);
      }
    };

    fetchData();
  }, [sortType, searchValue]);

  const onChangeSelect = (event) => {
    setSortType(event.target.value);
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="main">
      <div className="main__slider"></div>
      <div className="search">
        <h2 className="content__h2">Все кроссовки</h2>
        <div className="search-and-sort">
          <select onChange={onChangeSelect} className="sort__type">
            <option value="name">По названию</option>
            <option value="price">По цене (дешевые)</option>
            <option value="-price">По цене (дорогие)</option>
          </select>
          <div className="search__block">
            <img src="/svg/search.svg" alt="Search" />
            <input
              className="search__input"
              type="text"
              placeholder="Поиск..."
              value={searchValue}
              onChange={onChangeSearch}
            />
          </div>
        </div>
      </div>
      <CardList items={items} />
    </div>
  );
};
