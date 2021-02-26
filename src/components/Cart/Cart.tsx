import React from 'react';
import CartItem from '../CartItem';
import { ProductItemType } from '../../types';
import styles from './Cart.module.css';

type Props = {
  selectedProducts: ProductItemType[];
};

const Cart: React.FC<Props> = ({ selectedProducts }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart</h1>
      {selectedProducts.length === 0 ? <p>No products in cart</p> : null}

      {selectedProducts.map((item) => (
        <CartItem key={item.id} product={item} />
      ))}

      <div className={styles.total}>Total: $</div>
    </div>
  );
};

export default Cart;
