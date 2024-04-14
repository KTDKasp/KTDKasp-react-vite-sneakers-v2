import React from 'react';

import { CartItem } from '../CartItem';
import AppContext from '../../context';

export const CartItemList = () => {
	const { cartItems } = React.useContext(AppContext);

	return (
		<>
			{cartItems.map((obj) => (
				<CartItem key={obj.id} title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
			))}
		</>
	)
}
