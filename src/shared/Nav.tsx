//airship logo that would link you to home page
//title 
import React from 'react';
import logo from '../logo.svg';
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav: React.FC = () => {
    return (

        <div className='Nav'>
            <NavLink to="Home"> <img src={logo} alt='logo' /> </NavLink>
            <h1> Airship Study Tool </h1>
        </div>
    )
}
export default Nav;

//enforcing return types on all elements. good for 
//code readability and make sure it is using the correct type