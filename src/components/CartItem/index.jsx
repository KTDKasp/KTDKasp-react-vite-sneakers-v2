import './CartItem.css'

export const CartItem = ({ title, price, imageUrl }) => {
	return (
		<div className="drawer-cart__item">
			<img src={imageUrl} alt="Sneaker" />
			<div className="item__description">
				<p>{title}</p>
				<div className="item__delete">
					<b>{price} руб.</b>
					<img src="/svg/close.svg" alt="Delete" />
				</div>
			</div>
		</div>
	);
};
