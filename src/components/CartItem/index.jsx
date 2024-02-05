import './CartItem.css'

export const CartItem = () => {
	return (
		<div className="drawer-cart__item">
			<img src="/sneakers/sneakers-1.jpg" alt="Sneaker" />
			<div className="item__description">
				<p>Nike CactusJack Air Jordan 720</p>
				<div className="item__delete">
					<b>12 999 руб.</b>
					<img src="/svg/close.svg" alt="Delete" />
				</div>
			</div>
		</div>
	);
};
