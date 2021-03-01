import React from 'react';
import CartItem from '../CartItem';
import { ProductItemType } from '../../types';
import styles from './Cart.module.css';

type Props = {
  selectedProducts: ProductItemType[];
  addToCart: (item: ProductItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ selectedProducts, addToCart, removeFromCart }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart</h1>
      {selectedProducts.length === 0 ? (
        <p className={styles.emptyList}>No products in cart</p>
      ) : null}

      {selectedProducts.map((item) => (
        <CartItem
          key={item.id}
          product={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}

      <div className={styles.total}>Total: $</div>
    </div>
  );
};

export default Cart;
