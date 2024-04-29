import React from 'react';
import AppContext from '../../context';
import { Card } from '../Card';

import './CardList.css';

export const CardList = ({ items, onAddToCart, onAddToFavotites }) => {
  const { animationParent, cartItems, favoriteItems } = React.useContext(AppContext);

  return (
    <div ref={animationParent} className="card-list">
      {items.map((item, index) => (
        <Card
          key={index}
          isAdded={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
          id={item.id}
          price={item.price}
          title={item.title}
          imageUrl={item.imageUrl}
          isFavorite={favoriteItems.some((obj) => Number(obj.itemId) === Number(item.id))}
          onClickAdd={(obj) => onAddToCart(obj)}
          onClickFavorite={(obj) => onAddToFavotites(obj)}
        />
      ))}
    </div>
  );
};
