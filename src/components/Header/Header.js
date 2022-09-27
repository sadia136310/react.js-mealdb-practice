import React from 'react';
import mealDb from '../../images/logo-small.png'
import './Header.css'
const Header = () => {
    return (
 
        <nav className='header'>
             <img src={mealDb} alt="" />
             <div className='menu'>
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/order">Orders</a>
                <a href="/about">About Us</a>
          </div>
        </nav>
        
   
    );
};

export default Header;