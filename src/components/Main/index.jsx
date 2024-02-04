import React from 'react';
import { Card } from '../Card';

import './Main.css';

export const Main = () => {
  return (
    <div className="main">
      <h2 className="main__header">Все кроссовки</h2>
      <div className="main__card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
