import React from 'react';
import { Button } from '@material-ui/core';
import { ProductItemType } from '../../types';
import styles from './ProductItem.module.css';

type Props = {
  product: ProductItemType;
  addToCart: (item: ProductItemType) => void;
};

const ProductItem: React.FC<Props> = ({ product, addToCart }) => {
  return (
    <div className={styles.product}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>${product.price}</div>
      <Button
        className={styles.button}
        variant='contained'
        color='primary'
        onClick={() => addToCart(product)}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductItem;
