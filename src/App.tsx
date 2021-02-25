import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

export type ProductItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  amount: number;
};

const App = () => {
  const [products, setProducts] = useState<ProductItemType[]>([]);

  const getProducts = async (): Promise<ProductItemType[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
    return data;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id}>
          <h1>{product.title}</h1>
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
