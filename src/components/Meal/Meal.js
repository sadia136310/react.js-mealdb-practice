import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Display from '../Display/Display';
import './Meal.css';

const Meal = () => {
    const [meals, setMeals]=useState([]);

    const [cart,setCart]=useState([]);
  

useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res=>res.json())
    .then(data=>setMeals(data.meals))
},[])
const handleClick =(meal)=>{
    // console.log(meal);
    const isExist=cart.find(item=> item.idMeal===meal.idMeal)
    
    if(cart.length>=5){
        alert('can not add more than 5');
        return;
      }
      else if(!isExist){

        const newCart=[...cart,meal];
        setCart(newCart);
      }
else{
    alert('already exist');
}
      

}

    return (
        <div className='container'>
        <div className="meal-container">
        {
    meals.map(meal=><Display
        key={meal.idMeal}
        meal={meal} 
        handleClick={handleClick}
    ></Display>)
       }
        </div>
        <div className="cart-container">
     <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};



export default Meal;