import React from 'react';
import AppContext from '../../context';
import { Card } from '../Card';

import './CardList.css';

export const CardList = ({ items, onAddToCart, onAddToFavotites }) => {
  const { animationParent } = React.useContext(AppContext);

  return (
    <div ref={animationParent} className="card-list">
      {items.map((item, index) => (
        <Card
          key={index}
          isAdded={item.isAdded}
          id={item.id}
          price={item.price}
          title={item.title}
          imageUrl={item.imageUrl}
          isFavorite={item.isFavorite}
          onClickAdd={(obj) => onAddToCart(obj)}
          onClickFavorite={(obj) => onAddToFavotites(obj)}
        />
      ))}
    </div>
  );
};
