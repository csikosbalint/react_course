import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductItem from './components/ProductItem';

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    Axios.get('http://localhost:8900/product')
      .then(resp => {
        setProducts(resp.data)
      })
  }, [])
  return (
    <div style={{display: "flex"}}>
    {Array.isArray(products) ? products.map(product => (<ProductItem key={product.id} product={product} />) ) : <p>loading</p>}
    </div>
  );
}

export default App;
