import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__left">
          <img className="header__logo" src="/png/logo.png" alt="Logo" />
          <div className="header__text">
            <h2>React Sneakers</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="header__right">
        <Link to="cart">
          <li className="header__list-elem">
            <img src="/svg/cart.svg" alt="Cart" />
            <b>1205 руб.</b>
          </li>
        </Link>
        <Link to="favorites">
          <li className="header__list-elem">
            <img src="/svg/heart.svg" alt="Saved" />
            <span>Закладки</span>
          </li>
        </Link>
        <li className="header__list-elem">
          <img src="/svg/profile.svg" alt="Profile" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
};
