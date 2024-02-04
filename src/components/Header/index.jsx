import React from 'react'

import './Header.css'

export const Header = () => {
  return (
    <header className='header'>

      <div className='header__left'>
        <img className='header__logo' src="/png/logo.png" alt="Logo" />
        <div className='header__text'>
          <h2>React Sneakers</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className='header__right'>
        <li className='header__list-elem'>
          <img src="/svg/cart.svg" alt="Cart" />
          <b>1205 руб.</b>
        </li>
        <li className='header__list-elem'>
          <img src="/svg/heart.svg" alt="Saved" />
          <span>Закладки</span>
        </li>
        <li className='header__list-elem'>
          <img src="/svg/profile.svg" alt="Profile" />
          <span>Профиль</span>
        </li>
      </ul>

    </header>
  )
}
