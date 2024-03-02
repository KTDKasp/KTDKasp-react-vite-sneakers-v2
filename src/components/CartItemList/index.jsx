import { CartItem } from '../CartItem';

export const CartItemList = ({ items = [] }) => {
  console.log(items);
  return (
    <>
      {items.map((item, index) => (
        <CartItem key={index} title={item.title} price={item.price} imageUrl={item.imageUrl}/>
      ))}
    </>
  );
};
