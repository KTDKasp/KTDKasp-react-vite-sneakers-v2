import React from 'react';

import './Card.css';

export const Card = () => {
  return (
    <div className='card-item'>
      <div className='card__top'>
        <img className='card__fav' src="/svg/like-1.svg" alt="Unliked" />
        <img className='card__img' src="/sneakers/sneakers-1.jpg" alt="Sneaker" />
      </div>
      <p>
        Мужские Кроссовки Nike Blazer Mid Suede
      </p>
      <div className='card__bottom'>
        <div className='card__bottom-price'>
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <img className='card__add' src="/svg/plus.svg" alt="Plus" />
      </div>
    </div>
  );
};
