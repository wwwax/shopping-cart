import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { ProductItemType } from './types';
import ProductItem from './components/ProductItem';

const App = () => {
  const [products, setProducts] = useState<ProductItemType[]>([]);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={3}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
