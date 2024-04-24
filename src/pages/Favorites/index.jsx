import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';

import './Favorites.css';
import axios from 'axios';

export const Favorites = () => {
  const [favoritesItems, setFavoritesItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://6d35450ae5876ee3.mokky.dev/favorites')
      .then((res) => {
        setFavoritesItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="favorites">
      {favoritesItems.length > 0 ? (
        <>
          <div className="favorites__top">
            <Link to="/">
              <img
                className="favorites__top-arrow"
                src="/svg/arrow-right.svg"
                alt="Arrow"
              />
            </Link>
            <h2 className="content__h2">Мои закладки</h2>
          </div>
          <div className="card-list">
            {favoritesItems.map((item) => (
              <Card
                key={item.id}
                isAdded={false}
                id={item.id}
                price={item.price}
                title={item.title}
                imageUrl={item.imageUrl}
                onClickAdd={() => console.log(item)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="favorites__empty">
          <img src="/png/emoji-1.png" alt="Sad emoji" />
          <div className="favorites__text-empty">
            <h2>{'Закладок нет :('}</h2>
            <p>Вы ничего не добавляли в закладки</p>
          </div>
          <Link className='favorites__back' to="/">
            <button className="button_green drawer__button_green">
              <img src="/svg/arrow-next.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
