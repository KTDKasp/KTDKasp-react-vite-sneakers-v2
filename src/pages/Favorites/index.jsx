import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';

import './Favorites.css';

export const Favorites = () => {
  return (
    <div className="favorites">
      <div className="favorites__top">
        <Link to="/">
          <img
            className="favorites__top-arrow"
            src="/svg/arrow-right.svg"
            alt="Arrow"
          />
        </Link>
        <h2 className="content__h2">Мои закладки</h2>
      </div>
      <div className="card-list">
        <Card
          isAdded={false}
          id={3}
          price={12990}
          title={'Nike CactusJack Air Jordan 720'}
          imageUrl={'/sneakers/sneakers-5.jpg'}
        />
        <Card
          isAdded={true}
          id={4}
          price={12990}
          title={'Nike CactusJack Air Jordan 720'}
          imageUrl={'/sneakers/sneakers-7.jpg'}
        />
      </div>
    </div>
  );
};
