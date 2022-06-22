import React, { useState } from 'react'
import '../styles/Home.css'

function Home():React.ReactNode {
    //explicitly saying this function is returning a react node (typescript)
    //strict typescript on the app (the ideal) especially because this is a new app
    //all functions you write will have a return type and you will add the above
    return(
        <p> I am the home </p>
    )
}

export default Home