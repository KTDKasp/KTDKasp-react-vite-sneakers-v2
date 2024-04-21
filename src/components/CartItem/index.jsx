import './CartItem.css'

export const CartItem = ({ id, title, price, imageUrl, onRemove }) => {
	return (
		<div className="drawer-cart__item">
			<img src={imageUrl} alt="Sneaker" />
			<div className="item__description">
				<p>{title}</p>
				<div className="item__delete">
					<b>{price} руб.</b>
					<img src="/svg/close.svg" alt="Delete" onClick={() => onRemove(id)} />
				</div>
			</div>
		</div>
	);
};
