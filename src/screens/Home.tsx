import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import SideMenu from '../shared/SideMenu'
import { homeItems } from './constants'
import airship_image from '../img/Airship-Decktop-Background.jpg'


const Home: React.FC = () => {
    //explicitly saying this function is returning a react node (typescript)
    //strict typescript on the app (the ideal) especially because this is a new app
    //all functions you write will have a return type and you will add the above
    return (
        <div className="Home">
            <SideMenu menuItems={homeItems} />
            <div className='image_div'><img src={airship_image} alt="airship_image" /></div>

        </div>
    )
}

export default Home