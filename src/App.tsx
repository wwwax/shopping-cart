import { useEffect } from 'react';
import { Button } from '@material-ui/core';

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
  const getProducts = (): Promise<ProductItemType[]> =>
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((products) => products)
      .catch((error) => console.log(error.message));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className='title'>App</h1>
      <Button color='primary'>Hello World</Button>
    </div>
  );
};

export default App;
