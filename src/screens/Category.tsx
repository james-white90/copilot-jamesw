import React from 'react'
import './Category.css'
// import { NavLink } from 'react-router-dom'

const Category: React.FC = () => {
    //explicitly saying this function is returning a react node (typescript)
    //strict typescript on the app (the ideal) especially because this is a new app
    //all functions you write will have a return type and you will add the above
    return (
       <>I am the category now</>
    )
}

export default Category