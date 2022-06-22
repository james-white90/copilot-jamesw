import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const Home: React.FC = () => {
    //explicitly saying this function is returning a react node (typescript)
    //strict typescript on the app (the ideal) especially because this is a new app
    //all functions you write will have a return type and you will add the above
    return (
        <NavLink
            to="category"
        >
            Category
        </NavLink>
    )
}

export default Home