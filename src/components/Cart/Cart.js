import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart);
//     let names='';
//     for(const details of cart){
//    names = names + details.strMeal;
//     }

const names=cart.map(item=><li>{item.strMeal}</li>)
    return (
       
        <div className='cart'>
            <h3>Order meals are:</h3>
          <p>selected item: {cart.length}</p>
         <div>
            <ol>
            {names}
            </ol>
         </div>
        </div>
    );
};

export default Cart;