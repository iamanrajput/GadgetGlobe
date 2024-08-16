import React, { useContext } from 'react';

import { StoreContext } from '../../context/StoreContext';
import ProductItem from '../ProductItem/ProductItem';
import './ProductDisplay.css';

export const ProductDisplay = ({category}) => {
    const {product_list}=useContext(StoreContext)
  return (
    <div className='product-display' id='product-display'>
        <h2>Top dishes near to you</h2>
        <div className="product-display-list">
            {product_list.map((item,index)=>{
                if(category==="All"||category===item.category){
                    return  <ProductItem key={index} id={item._id}
                    name={item.name }
    description={item.description} price={item.price} image={item.image} />  
                }
               
            })}
        </div>
    </div>
  )
}
