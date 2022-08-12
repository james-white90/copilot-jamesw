import React from 'react'
import '../shared/SideMenu.css'
import { NavLink } from 'react-router-dom'
import airship_image from '../img/Airship-Decktop-Background.jpg'
//handle styling for me and take some menu props
//go over each item in the menu and then that list will be clickable using your nav link
//go over topic to be displayed in your topic component
export type MenuItem = {
    link: string,
    title: string
}
interface Props {
    //interface keyword
    //defining props
    menuItems: MenuItem[] //declaring what type it is and the type is array <string>
}
// you can also use a read only array (allows the array to not be mutated)
//side menu component should take some props called menu items 
//you will need to define what the menu item shape is 
//menu Items is an array of menu Item 
const SideMenu: React.FC<Props> = ({ menuItems }) => {
    return (
        <div className='SideMenu'>
            <div className='side_left'>
                <ul>
                    {menuItems.map((item) => {
                        return (
                            <li key={item.link}><NavLink to={item.link}>{item.title}</NavLink></li>
                        )
                    })}
                </ul>
            </div>
            <div className='side_right'>
            <img src={airship_image} alt="airship_image"/>
            </div>
        </div>
    )
}

//reusable component helps with uniformity
//work on styling at this point 
export default SideMenu;