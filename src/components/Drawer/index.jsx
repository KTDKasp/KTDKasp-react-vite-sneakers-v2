import React from 'react';

import arrowClose from '/svg/arrow-next-drawer.svg';

import './Drawer.css';
import { CartItem } from '../CartItem';
import AppContext from '../../context';

export const Drawer = (props) => {
	const { cartItems, setCartItems } = React.useContext(AppContext);

	const onRemoveItem = (id) => {
		// axios.delete(`https://6d35450ae5876ee3.mokky.dev/cart/${id}`);
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

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
						<div className="drawer-cart__list">
							{cartItems.map((obj) => (
								<CartItem
									key={obj.id}
									id={obj.id}
									title={obj.title}
									price={obj.price}
									imageUrl={obj.imageUrl}
									onRemove={() => onRemoveItem(obj.id)}
								/>
							))}
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

						<button className="button_green" disabled>
							Оформить заказ
						</button>
					</>
				) : (
					// #TODO: Завершить верстку пустой корзины
					<div className='drawer__empty'>
						<img width="120px" height="120px" src="/png/package-icon.png" alt="Empty Cart" />
						<h2>Корзина пустая</h2>
						<p>Добавьте хотя бы одну пару кроссовок, чтобы оформить заказ.</p>
						<button className="button_green">
							<img src="/svg/arrow-next.svg" alt="Arrow" />
							Вернуться назад
						</button>
					</div>
				)}
			</div>
		</>
	);
};
