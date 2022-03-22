import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

export default props => {
   const [ product, setProduct ] = useState({});
   const { id } = useParams();

   let navigate = useNavigate();

   useEffect(() => {
      axios.get('http://localhost:8000/api/product/' + id)
         .then(response => setProduct(response.data))
         .catch(err => console.log(err));
   }, []);

   return(
      <div className="d-flex justify-content-center mt-5 min-vh-100">
         <div className="col-4 text-center">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <div>
               <Link to={'/product/edit/' + product._id} className="btn btn-sm btn-warning">Edit</Link>
               <DeleteButton productID={product._id} successCallback={() => navigate('/product/new')} />
            </div>
         </div>
      </div>
   )
}