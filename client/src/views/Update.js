import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default props => {
   const { id } = useParams();
   const [ title, setTitle ] = useState("");
   const [ price, setPrice ] = useState("");
   const [ description, setDescription ] = useState("");

   useEffect(() => {
      axios.get('http://localhost:8000/api/product/' + id)
         .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
         })
   }, []);

   const updateProduct = e => {
      e.preventDefault();
      axios.put('http://localhost:8000/api/product/update/' + id, { title, price, description })
         .then(res => console.log(res))
         .catch(err => console.log(err));
   }

   return(
      <div className="container my-4">
         <form className="col-6 bg-light border border-dark rounded p-3 mx-auto" onSubmit={ updateProduct }>
            <div className="mb-3 text-center"><span className="h4">Update the Product</span></div>
            <div className="row mb-3">
               <label htmlFor="title" className="col-sm-3 col-form-label">Title:</label>
               <div className="col-sm-9">
                  <input type="text" name="title" id="title" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
               </div>
            </div>
            <div className="row mb-3">
               <label htmlFor="price" className="col-sm-3 col-form-label">Price ($):</label>
               <div className="col-sm-9">
                  <input type="number" name="price" id="price" className="form-control" step=".01" onChange={e => setPrice(e.target.value)} value={price} />
               </div>
            </div>
            <div className="row mb-3">
               <label htmlFor="description" className="col-sm-3 col-form-label">Description:</label>
               <div className="col-sm-9">
                  <textarea className="form-control" id="description" name="description" rows="5" onChange={e => setDescription(e.target.value)} value={description}></textarea>
               </div>
            </div>
            <div className="text-center"><input type="submit" className="col-2 btn btn-sm btn-info" value="Update" /></div>
         </form>
      </div>
   )
}
