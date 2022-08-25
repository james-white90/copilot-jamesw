import React from 'react'
// import { useParams } from 'react-router-dom'
import './Category.css'
import { categoryItems } from './constants'
import SideMenu from '../shared/SideMenu'
import { Outlet, useParams } from 'react-router-dom'
import { getCategory } from '../client'
import { Category } from '../services/types'


const CategoryDisplay: React.FC = () => {

    //add use state 

    const [categoryData, setCategoryData] = React.useState<Category>()
    //since you are starting off with nothing it is category or undefined (doesn't mean you can't be more explicit)
    //defining state and state setter would be an exact match
    //useState function returns two things (variable for the state, and the function to set the state)
    let { category } = useParams()
    React.useEffect(() => {
        if (category) {
            const data = getCategory(category)
            setCategoryData(data)
        }

    }, [])
    console.log(categoryData)
    //add hooks the order they are going to be call

    //explicitly saying this function is returning a react node (typescript)
    //strict typescript on the app (the ideal) especially because this is a new app
    //all functions you write will have a return type and you will add the above
    return (
        <div className='container'>
            <SideMenu menuItems={categoryItems} />
            <div className='category-content'>{category}</div>
            <Outlet />
        </div>
    )
}

export default CategoryDisplay