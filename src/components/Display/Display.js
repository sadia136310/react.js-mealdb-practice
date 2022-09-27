import React from 'react';
import './Display.css'

const Display = (props) => {
    console.log(props)
    const {strMeal,idMeal,strMealThumb,strArea,strInstructions}=props.meal
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h4>Name : {strMeal}</h4>
            

        </div>
    );
};

export default Display;