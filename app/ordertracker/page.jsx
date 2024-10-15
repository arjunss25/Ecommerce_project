import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'
import OrderTracker from '../Components/Ordertracker'

const page = () => {
  return (
    <div>
        <MainNavbar/>
        <Secondarynavbar/>
        <OrderTracker/>
    </div>
  )
}

export default page