import React, { useState } from 'react'
import Header from '../common/header/Header'
import FoodMenu from './foodMenu/FoodMenu.component'
import Serving from './serving/Serving.component'

const Dashboard = () => {
    const [screen, setScreen] = useState(0);
    const handleManuSelection = (selectedScreen) => {
        setScreen(selectedScreen)
    }

    return (
        <div>
            <Header onMenuSelection={handleManuSelection}/>
            {screen ? <Serving/> : <FoodMenu/>}
        </div>
    )

}

export default Dashboard