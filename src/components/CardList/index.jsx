import React from 'react';
import { Card } from '../Card';

import './CardList.css';
import { CartItemsContext } from '../../App';

export const CardList = ({ items }) => {
  const { cartItems, setCartItems } = React.useContext(CartItemsContext);

  const onAdd = (obj) => {
    const existed = cartItems.find((item) => item.id === obj.id);
    if (existed) {
      setCartItems((prev) =>
        prev.filter((item) => item.id !== obj.id)
      );
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  }

  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card
          key={index}
          isAdded={item.isAdded}
          id={item.id}
          price={item.price}
          title={item.title}
          imageUrl={item.imageUrl}
          isFavorite={item.isFavorite}
          onClickAdd={(obj) => onAdd(obj)}
          onClickFavorite={() => console.log(item)}
        />
      ))}
    </div>
  );
};
