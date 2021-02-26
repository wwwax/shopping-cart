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
    setSelectedProducts((prev) => [...prev, item]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid className={styles.container} container spacing={2}>
      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart selectedProducts={selectedProducts} />
      </Drawer>

      <Badge
        className={styles.cartButton}
        badgeContent={7}
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
