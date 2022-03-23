import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import axios from 'axios';

export default props => {
   const [ products, setProducts ] = useState();
   const navigate = useNavigate();

   useEffect(() => {
      axios.get('http://localhost:8000/api/products')
         .then(res => setProducts(res.data))
         .catch(err => console.log(err));
   }, []);

   const removeFromDom = productId => {
      setProducts(products.filter(product => product._id != productId));
   }

   return(
      <div className="container mb-3 text-center">
         <h4>All Products:</h4>
         { products &&
            products.map((product, idx) => { 
               return <div className="col-3 my-3 mx-auto d-flex justify-content-between" key={idx}><span className="fw-bold">{product.title}</span><div><Link to={ `/product/${product._id}` } className="btn btn-sm btn-warning">Details</Link><DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} /></div></div>
               })
         }
      </div>
   )
};
