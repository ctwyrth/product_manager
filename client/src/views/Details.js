import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default props => {
   const [ product, setProduct ] = useState({});
   const { id } = useParams();

   useEffect(() => {
      axios.get('http://localhost:8000/api/products/' + id)
         .then(response => setProduct(response.data))
         .catch(err => console.log(err));
   }, []);

   return(
      <div className="d-flex justify-content-center align-items-center min-vh-100">
         <div className="col-4 text-center">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
         </div>
      </div>
   )
}