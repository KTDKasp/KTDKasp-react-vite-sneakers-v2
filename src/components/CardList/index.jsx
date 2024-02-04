import React from 'react';
import { Card } from '../Card';

import './CardList.css';

export const CardList = () => {
  const [add, setAdd] = React.useState(false);

  const onClickAdd = () => {
    setAdd(!add)
  }

	return (
		<div className="card-list">
			<Card 
        isAdded={add} 
        isFavorite={true} 
        id={1} 
        price={12399}
        title={"Nike CactusJack Air Jordan 720"}
        imageUrl={"/sneakers/sneakers-1.jpg"}
        onClickAdd={onClickAdd}
      />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
		</div>
	);
};
