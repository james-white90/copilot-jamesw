//airship logo that would link you to home page
//title 
import React from 'react';
import logo from '../logo.svg';
import './Nav.css'
import { NavLink } from 'react-router-dom'
import airship_logo from '../img/AIRSHIP_Stacked.jpg'

const Nav: React.FC = () => {
    return (

        <div className='Nav'>
            <NavLink to="/"> <img src={airship_logo} alt='airship_logo' /> </NavLink>
            <h1> Airship Study Tool </h1>
        </div>
    )
}
export default Nav;

//enforcing return types on all elements. good for 
//code readability and make sure it is using the correct type