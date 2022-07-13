import React from 'react'
import '../shared/SideMenu.css'
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
            <ul>
            { menuItems.map((item) => {
                return(
                    <li>{item.title}</li>
                )
            })}
            </ul>
        </div>
    )
}

//reusable component helps with uniformity

export default SideMenu;