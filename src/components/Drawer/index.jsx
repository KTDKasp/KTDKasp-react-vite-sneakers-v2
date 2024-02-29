// import React from 'react';

import { CartItemList } from '../CartItemList';
import arrowClose from '/svg/arrow-next-drawer.svg';

import './Drawer.css';

export const Drawer = (props) => {
	return (
		<>
			<div className="overlay"></div>
			<div className="drawer">
				<div className="drawer-cart__title">
					<img onClick={props.onClickClose} className="drawer__close" src={arrowClose} alt="Close" />
					<h2>Корзина</h2>
				</div>

				<div className="drawer-cart__list">
					<CartItemList />
				</div>

				<div className="drawer-cart__total">
					<div className="drawer-cart__summary">
						<span>Итого:</span>
						<div></div>
						<b>12 990 руб.</b>
					</div>

					<div className="drawer-cart__summary">
						<span>Налог 5%:</span>
						<div></div>
						<b>1074 руб.</b>
					</div>
				</div>

				<button className='button_green' disabled>Оформить заказ</button>
			</div>
		</>
	);
};
