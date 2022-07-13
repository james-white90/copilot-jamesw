import React from 'react'
// import { useParams } from 'react-router-dom'
import './Category.css'
import { categoryItems } from './constants'
import SideMenu from '../shared/SideMenu'

const Category: React.FC = () => {

    // let { category } = useParams()
    //explicitly saying this function is returning a react node (typescript)
    //strict typescript on the app (the ideal) especially because this is a new app
    //all functions you write will have a return type and you will add the above
    return (
        <>
        <SideMenu menuItems={categoryItems}/>
        </>
    )
}

export default Category