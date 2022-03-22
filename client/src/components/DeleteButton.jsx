import React from 'react';
import axios from 'axios';

export default props => {
   const { productId, successCallback } = props;

   const deleteProduct = (e) => {
      axios.delete('http://localhost:8000/api/product/' + productId + '/delete')
         .then(res => { successCallback() })
         .catch(err => console.log(err));
   }

   return <button className="btn btn-sm btn-warning ms-3" onClick={deleteProduct} >Remove</button>
}