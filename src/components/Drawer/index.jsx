import React from 'react';
import axios from 'axios';

import arrowClose from '/svg/arrow-next-drawer.svg';

import './Drawer.css';
import { CartItem } from '../CartItem';
import AppContext from '../../context';

export const Drawer = (props) => {
	const { animationParent, cartItems, setCartItems } = React.useContext(AppContext);

	const onRemoveItem = (obj) => {
		setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
	};

	const createOrder = React.useCallback(async () => {
		try { 
			const { data } = await axios.post('https://6d35450ae5876ee3.mokky.dev/orders', {
				items: cartItems,
				total: props.cartTotalPrice
			});
			setCartItems([]);
			return data;
		} catch (e) {
			console.log(e);
		}
	}, []);

	return (
		<>
			<div className="overlay"></div>
			<div className="drawer">
				<div className="drawer-cart__title">
					<img
						onClick={props.onClickClose}
						className="drawer__close"
						src={arrowClose}
						alt="Close"
					/>
					<h2>Корзина</h2>
				</div>

				{cartItems.length > 0 ? (
					<>
						<div ref={animationParent} className="drawer-cart__list">
							{cartItems.map((obj) => (
								<CartItem
									key={obj.id}
									id={obj.id}
									title={obj.title}
									price={obj.price}
									imageUrl={obj.imageUrl}
									onRemove={() => onRemoveItem(obj)}
								/>
							))}
						</div>
						<div className="drawer-cart__total">
							<div className="drawer-cart__summary">
								<span>Итого:</span>
								<div></div>
								<b>{props.cartTotalPrice} руб.</b>
							</div>

							<div className="drawer-cart__summary">
								<span>Налог 5%:</span>
								<div></div>
								<b>{props.cartSalePrice} руб.</b>
							</div>
						</div>

						<button onClick={() => createOrder()} className="button_green" disabled={!cartItems.length ? true : false}>
							Оформить заказ
						</button>
					</>
				) : (
					<div className='drawer__empty'>
						<img width="120px" height="120px" src="/png/package-icon.png" alt="Empty Cart" />
						<h2>Корзина пустая</h2>
						<p>Добавьте хотя бы одну пару кроссовок, чтобы оформить заказ.</p>
						<button onClick={props.onClickClose} className="button_green drawer__button_green">
							<img src="/svg/arrow-next.svg" alt="Arrow" />
							Вернуться назад
						</button>
					</div>
				)}
			</div>
		</>
	);
};
