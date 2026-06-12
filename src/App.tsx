
import { useEffect, useState } from 'react'
import './App.css'

import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        await response.json().then(setProducts);
      } catch (error) {

      } finally {

      }
    }

    getProducts();

  }, []);

  console.log(products);

  return (
    <>
      <section id="center">
        <h1 className='text-red-300'>Get started 1</h1>

        {!products && products?.map((product) => {
          return <p>{product.title}</p>
        })}
      </section>
    </>
  )
}

export default App
