import { Link } from 'react-router-dom';

import './EmptyCart.css';

export const EmptyCart = () => {
  return (
    <div className="empty-wrapper">
      <img src="/png/emoji-2.png" alt="Emoji" />
      <h2>У вас нет заказов</h2>
      <p>
        Вы нищеброд?
        <br />
        Оформите хотя бы один заказ.
      </p>
      <Link to="/">
        <button className='button_green'>Вернуться назад</button>
      </Link>
    </div>
  );
};
