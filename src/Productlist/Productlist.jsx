import React from 'react';
// import "C:\Users\sumit rai\Desktop\script\frontend\src\App.css";
import './Productlist.css';

const Productlist = ({product}) => {
  return (
    <div className='flex'>
      {
        product.map((productItem,productIndex)=>{
            return(
                <div >
                    <div>
                      <img src={productItem.url} width="100%" />
                      <p>{productItem.name} | {productItem.category}</p>
                      <p>{productItem.seller}</p>
                      <p>Rs. {productItem.price}</p>
                    </div>
                </div>
            )
            
        })
      }
    </div>
  )
}

export default Productlist;
