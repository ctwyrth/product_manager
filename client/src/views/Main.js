import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default props => {
   const [ products, setProducts ] = useState([]);
   const [ loaded, setLoaded ] = useState(false);
   const newProduct = (product) => setProducts([...products, product]);

   useEffect(() => {
      axios.get('http://localhost:8000/api/products')
         .then(response => { setProducts(response.data); setLoaded(true) })
         .catch(error => console.log(error));
   }, []);

   const removeFromDom = productId => {
      setProducts(products.filter(product => product._id != productId))
   }

   return (
      <>
         <ProductForm onNewProduct={ newProduct } />
         <hr />
         { loaded && <ProductList products={ products } removeFromDom={ removeFromDom } />}
      </>
   )
}