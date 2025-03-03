import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
 
    //  const [itemCount , setItemCount] = useState(0);
     const {cartItem,addToCart,removeFromCart} = useContext(StoreContext);


  return (
    <div className="food-item">
         <div className="food-item-img-container">
                  <img src={image} alt="" className="food-item-image" />

                  {!cartItem[id]
                      ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                      :<div className='food-item-counter'>

                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />

                        </div> 

                  }
                 
         </div>

         <div className="food-item-info">
                  <div className="food-item-name-rating">
                           <p>{name}</p>
                           <img src={assets.rating_starts} alt="" />
                  </div>
                  <p className="food-item-desc">{description}</p>
                 <div className="food-item-price">${price}</div>
         </div>
    </div>
  )
}

export default FoodItem