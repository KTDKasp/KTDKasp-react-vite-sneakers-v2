import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';

import './CartPage.css';
import { EmptyBlock } from '../../components/EmptyBlock';

export const CartPage = () => {
	const hasItems = true;

	return (
		<div className="cart">
			{!hasItems ? (
				<>
					<div className="cart__top">
						<Link to="/">
							<img
								className="cart__top-arrow"
								src="/svg/arrow-right.svg"
								alt="Arrow"
							/>
						</Link>
						<h2 className="content__h2">Мои покупки</h2>
					</div>
					<div className="card-list">
						<Card
							isAdded={true}
							id={3}
							price={12990}
							title={'Nike CactusJack Air Jordan 720'}
							imageUrl={'/sneakers/sneakers-5.jpg'}
						/>
						<Card
							isAdded={true}
							id={4}
							price={12990}
							title={'Nike CactusJack Air Jordan 720'}
							imageUrl={'/sneakers/sneakers-7.jpg'}
						/>
					</div>
				</>
			) : (
				<EmptyBlock
					title={'У вас нет заказов'}
					description={'Вы нищеброд? Оформите хотя бы один заказ.'}
					image={'/png/emoji-2.png'}
				/>
			)}
		</div>
	);
};
