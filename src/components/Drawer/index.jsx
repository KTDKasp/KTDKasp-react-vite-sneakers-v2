import React from 'react';

import './Drawer.css';

export const Drawer = () => {
	return (
		<>
			<div className="overlay"></div>
			<div className="drawer">
				<div className="drawer-cart__title">
					<svg
						className='drawer__close'
						width="32"
						height="32"
						viewBox="-8 -8 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 7H14.7143"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8.71436 1L14.7144 7L8.71436 13"
							stroke="black"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<h2>Корзина</h2>
				</div>
			</div>
		</>
	);
};
