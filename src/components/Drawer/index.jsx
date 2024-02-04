import React from 'react';

import arrowClose from '/svg/arrow-next-drawer.svg'
import './Drawer.css';

export const Drawer = () => {
	return (
		<>
			<div className="overlay"></div>
			<div className="drawer">
				<div className="drawer-cart__title">
					<img className='drawer__close' src={arrowClose} alt="Close" />
					<h2>Корзина</h2>
				</div>
			</div>
		</>
	);
};
