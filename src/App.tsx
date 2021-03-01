import { useEffect, useState } from 'react';
import ProductItem from './components/ProductItem';
import Cart from './components/Cart';

// material-ui
import { Grid } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { ProductItemType } from './types';
import styles from './App.module.css';

const App = () => {
  const [products, setProducts] = useState<ProductItemType[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductItemType[]>([]);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    setProducts(products);
  };

  const addToCart = (item: ProductItemType) => {
    setSelectedProducts((prev) => {
      const isProductInCart = selectedProducts.find((el) => el.id === item.id);

      if (isProductInCart) {
        return prev.map((el) => {
          return el.id === item.id ? { ...el, amount: el.amount + 1 } : el;
        });
      }

      return [...prev, { ...item, amount: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setSelectedProducts((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;

          return [...acc, { ...item, amount: item.amount - 1 }];
        } else return [...acc, item];
      }, [] as ProductItemType[]),
    );
  };

  const getSelectedProductsAmount = (products: ProductItemType[]) =>
    products.reduce((acc, el) => el.amount + acc, 0);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid className={styles.container} container spacing={2}>
      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart
          selectedProducts={selectedProducts}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Drawer>

      <Badge
        className={styles.cartButton}
        badgeContent={getSelectedProductsAmount(selectedProducts)}
        color='secondary'
        onClick={() => setIsCartOpen(true)}>
        <AddShoppingCartIcon />
      </Badge>

      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={3}>
          <ProductItem product={product} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
