import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Meal.css';

const Meal = () => {
    const [meals, setMeals]=useState([]);

useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res=>res.json())
    .then(data=>setMeals(data.meals))
},[])


    return (
        <div className='container'>
        <div className="meal-container">
        {
    meals.map(meal=><Display
        key={meal.idMeal}
        meal={meal} 
    ></Display>)
       }
        </div>
        <div className="cart-container">
          <h3>order</h3>
        </div>
        </div>
    );
};



export default Meal;