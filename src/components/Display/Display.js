import React from 'react';
import './Display.css'

const Display = ({meal, handleClick}) => {
    // console.log(props);
//    const{meal, handleClick} = props;
    const {strMeal,strMealThumb,strArea,strInstructions} = meal;
    return (
       
            <div className='meal'>
            <img src={strMealThumb} alt="" />
            <div className='details'>
            <h4>Name: {strMeal}</h4>
            <p>Category: {strArea} </p>
            <p>Details: {strInstructions.length > 95 ? strInstructions.slice( 0, 95) + '...' : strInstructions}</p>
            </div>
          
            <button className='btn-cart' onClick={ () => handleClick(meal)}><p>Add to Cart</p></button>
     
            </div>
    );
};

export default Display;