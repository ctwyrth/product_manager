import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default props => {
   const [ products, setProducts ] = useState([]);
   const [ loaded, setLoaded ] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:8000/api/products')
         .then(response => { setProducts(response.data); setLoaded(true) })
         .catch(error => console.log(error));
   }, []);

   const removeFromDom = productId => {
      setProducts(products.filter(product => product._id != productId))
   }

   const createProduct = product => {
      axios.post('http://localhost:8000/api/prodiuct', product)
         .then(res => {
            setProducts([...people, res.data]);
         })
         .catch(err => console.log(err));
   }

   return (
      <>
         <ProductForm onSubmitProp={createProduct} initialFirstName="" initialLastName="" />
         <hr />
         { loaded && <ProductList products={ products } removeFromDom={ removeFromDom } />}
      </>
   )
}