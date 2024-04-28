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
      <Link to="/" className='return-homepage'>
        <button className='button_green drawer__button_green'>
          <img src="/svg/arrow-next.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};
