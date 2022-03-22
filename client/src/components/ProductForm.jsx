import React, { useState } from 'react'

export default props => {
   const { initialTitle, initialPrice, initialDescription } = props;
   const [ title, setTitle ] = useState(initialTitle);
   const [ price, setPrice ] = useState(initialPrice);
   const [ description, setDescription ] = useState(initialDescription);

   const handleOnSubmit = (e) => {
      e.preventDefault();
      onSubmitProp({ title, price, description });
   }

   return(
      <div className="container my-4">
         <div className="mb-3 text-center"><span className="h4">Product Manager</span></div>
         <form className="col-6 bg-light border border-dark rounded p-3 mx-auto" onSubmit={ handleOnSubmit }>
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
