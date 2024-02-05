import { Card } from '../Card';

import './CardList.css';

export const CardList = ({ items }) => {

  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card
          key={index}
          isAdded={true}
          isFavorite={true}
          id={item.id}
          price={item.price}
          title={item.title}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};
