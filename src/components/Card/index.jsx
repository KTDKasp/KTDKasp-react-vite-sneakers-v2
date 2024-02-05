// import React from 'react';

import './Card.css';

export const Card = ({ imageUrl, price, title, isFavorite, isAdded }) => {
  return (
    <div className='card-item'>
      <div className='card__top'>
        <img className='card__fav' src={
          isFavorite ? "/svg/like-2.svg" : "/svg/like-1.svg"
        } alt="Unliked" />
        <img className='card__img' src={imageUrl} alt="Sneaker" />
      </div>
      <p>
        {title}
      </p>
      <div className='card__bottom'>
        <div className='card__bottom-price'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img onClick={() => console.log(123)} className='card__add' src={
          isAdded ? '/svg/checked.svg' : '/svg/plus.svg'
        } alt="Plus" />
      </div>
    </div>
  );
};
