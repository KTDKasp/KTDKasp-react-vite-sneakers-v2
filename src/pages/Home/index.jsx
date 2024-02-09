import React from 'react';
import axios from 'axios';

import { CardList } from '../../components/CardList';

import './Home.css';

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [sortType, setSortType] = React.useState('title');
  const [searchValue, setSearchValue] = React.useState('');

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
      setItems(
        data.map((obj) => ({
          ...obj,
          isFavorite: false,
          isAdded: false,
          favoriteId: null,
        }))
      );
    } catch (error) {
      console.log(`Hey, you have ${error}`);
    }
  }, [searchValue, sortType]);

  const fetchFavorites = React.useCallback(async () => {
    try {
      const { data: favorites } = await axios.get(
        `https://6d35450ae5876ee3.mokky.dev/favorites`
      );
      setItems((prev) =>
        prev.map((obj) => {
          const favorite = favorites.find(
            (favoriteData) => favoriteData.parentId === obj.id
          );

          if (!favorite) {
            return obj;
          }

          return {
            ...obj,
            isFavorite: true,
            favoriteId: favorite.id,
          };
        })
      );
    } catch (error) {
      console.log(`Hey, you have ${error}`);
    }
  }, []);

  React.useEffect(() => {
    async function onMount() {
      await fetchData();
      await fetchFavorites();
    }

    onMount();
  }, [fetchData, fetchFavorites]);

  const onChangeSelect = (event) => {
    setSortType(event.target.value);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  // TODO: Нужно исправить добавление в закладки
  const addToFavorite = async (item) => {
    try {
      if (!item.isFavorite) {
        const { data } = await axios.post(
          `https://6d35450ae5876ee3.mokky.dev/favorites`,
          { parentId: item.id }
        );
        setItems((prev) =>
          prev.map((obj) => {
            if (obj.id === item.id) {
              return {
                ...obj,
                isFavorite: true,
                favoriteId: data.id,
              };
            }
            return obj;
          })
        );
      } else {
        await axios.delete(
          `https://6d35450ae5876ee3.mokky.dev/favorites/${item.favoriteId}`
        );
        setItems((prev) =>
          prev.map((obj) => {
            if (obj.id === item.id) {
              return {
                ...obj,
                isFavorite: false,
                favoriteId: null,
              };
            }
            return obj;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <img src="/svg/search.svg" alt="Search" />
            <input
              className="search__input"
              type="text"
              placeholder="Поиск..."
              value={searchValue}
              onChange={onChangeSearchInput}
            />
          </div>
        </div>
      </div>
      <CardList items={items} addToFavorite={addToFavorite} />
    </div>
  );
};
