import { useEffect } from 'react';

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

  return <h1 style={{ backgroundColor: 'red' }}>App</h1>;
};

export default App;
