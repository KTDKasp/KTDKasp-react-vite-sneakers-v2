import React from 'react';
import './Card.css';

export const Card = ({
  id,
  imageUrl,
  price,
  title,
  isFavorite = false,
  isAdded = false,
  onClickAdd,
  onClickFavorite,
}) => {
  const [isAddedCard, setIsAddedCard] = React.useState(false);
  const [isFavoriteCard, setIsFavoriteCard] = React.useState(isFavorite);

  const onClickAddBtn = () => {
    setIsAddedCard(!isAddedCard);
    onClickAdd({ id, imageUrl, price, title, isFavorite, isAdded });
  };

  const onClickFavoriteBtn = () => {
    setIsFavoriteCard(!isFavoriteCard);
    onClickFavorite({ id, imageUrl, price, title, isFavorite, isAdded });
  };

  return (
    <div className="card-item">
      <div className="card__top">
        <img
          onClick={() => onClickFavoriteBtn()}
          className="card__fav"
          src={isFavoriteCard ? '/svg/like-2.svg' : '/svg/like-1.svg'}
          alt="Unliked"
        />
        <img className="card__img" src={imageUrl} alt="Sneaker" />
      </div>
      <p>{title}</p>
      <div className="card__bottom">
        <div className="card__bottom-price">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          onClick={() => onClickAddBtn()}
          className="card__add"
          src={isAddedCard ? '/svg/checked.svg' : '/svg/plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
};
