import React from 'react';

export default props => {
   return(
      <div className="container mb-3 text-center">
         <h4>All Products:</h4>
         {props.products.map((product, idx) => { 
            return( <div><a href={ `/product/${product._id}` } className="nav-link" key={idx}>{product.title}</a></div> )
            })
         }
      </div>
   )
};
