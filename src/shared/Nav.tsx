//airship logo that would link you to home page
//title 
import React from 'react';
import logo from '../logo.svg';
import './Nav.css'

const Nav: React.FC = () => {
    return (
        <div className='Nav'>
            <img src={logo} alt='logo' />
            <p> I am the nav bar</p>
        </div>
    )
}
export default Nav;

//enforcing return types on all elements. good for 
//code readability and make sure it is using the correct type