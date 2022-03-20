import React, { useState } from 'react'
import axios from 'axios';

export default props => {
   const [ title, setTitle ] = useState("");
   const [ price, setPrice ] = useState("");
   const [ description, setDescription ] = useState("");

   const handleOnSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/products/new', {
         title,
         price,
         description
      })
      .then(res => console.log("This was the response: ", res))
      .catch(err => console.log(err));
      setTitle("");
      setPrice("");
      setDescription("");
   }

   return(
      <div className="container my-4">
         <form className="col-6 bg-light border border-dark rounded p-3 mx-auto" onSubmit={ handleOnSubmit }>
            <div className="mb-3 text-center"><span className="h4">Product Manager</span></div>
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
            <div className="text-center"><input type="submit" className="col-2 btn btn-sm btn-info" value="Create" /></div>
         </form>
      </div>
   )
};
