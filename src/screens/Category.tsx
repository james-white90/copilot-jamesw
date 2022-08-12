import React from 'react'
// import { useParams } from 'react-router-dom'
import './Category.css'
import { categoryItems } from './constants'
import SideMenu from '../shared/SideMenu'
import { Outlet, useParams } from 'react-router-dom'

const Category: React.FC = () => {

    let { category } = useParams()
    //explicitly saying this function is returning a react node (typescript)
    //strict typescript on the app (the ideal) especially because this is a new app
    //all functions you write will have a return type and you will add the above
    return (
        <div className='container'>
        <SideMenu menuItems={categoryItems}/>
        <div className='category-content'>{ category }</div>
        <Outlet />
        </div>
    )
}

export default Category