import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default props => {
   const { removeFromDom } = props;

   const deleteProduct = (productId) => {
      axios.delete('http://localhost:8000/api/product/delete/' + productId)
         .then(res => { removeFromDom(productId) })
         .catch(err => console.log(err));
   }

   return(
      <div className="container mb-3 text-center">
         <h4>All Products:</h4>
         {props.products.map((product, idx) => { 
            return <div className="col-3 my-3 mx-auto d-flex justify-content-between" key={idx}><span className="fw-bold">{product.title}</span><div><Link to={ `/product/${product._id}` } className="btn btn-sm btn-warning">Details</Link><DeleteButton productID={product._id} successCallback={() => navigate('/product/new')} /></div></div>
            })
         }
      </div>
   )
};
