import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'
import OrderTracker from '../Components/Ordertracker'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <MainNavbar/>
        <Secondarynavbar/>
        <OrderTracker/>
        <Footer/>
    </div>
  )
}

export default page