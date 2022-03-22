import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

export default props => {
   const { id } = useParams();
   const navigate = useNavigate();
   const [ product, setProduct ] = useState();
   const [ loaded, setLoaded ] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:8000/api/product/' + id)
         .then(res => {
            setProduct(res.data);
            setLoaded(true);
         })
         .catch(err => console.log(err));
   }, []);

   const updateProduct = product => {
      axios.put('http://localhost:8000/api/product/' + id + '/update', product)
         .then(res => console.log(res))
         .catch(err => console.log(err));
         navigate('/product/new');
   }

   return(
      <div className="container my-4">
         { loaded &&
            <>
               <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />
            </>
         }
      </div>
   )
}

{/* <div className="mb-3 text-center"><span className="h4">Update the Product:</span></div> */}