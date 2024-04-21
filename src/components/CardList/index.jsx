import { Card } from '../Card';

import './CardList.css';

export const CardList = ({ items, onAddToCart }) => {

  // const onClickAdd = () => {
  //   console.log(items);
  // }

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
          onClickAdd={(obj) => onAddToCart(obj)}
          onClickFavorite={() => console.log(item)}
        />
      ))}
    </div>
  );
};
