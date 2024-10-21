import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'
import Wishlistcard from '../Components/Wishlistcard'
import Footer from '../Components/Footer'

const Wishlist = () => {
  return (
    <div>
      <MainNavbar/>
      <Secondarynavbar/>
      <div className="wishlist-cards px-4 md:px-10 py-6 md:py-10">
        <div className="title-sec w-full flex flex-col md:flex-row items-start md:items-center justify-between">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4 md:mb-0">Wishlist</h1>
          <button className="bg-black text-white px-4 md:px-6 py-2 rounded-full mt-4 md:mt-0">
            Move All to Cart
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-5">
          <Wishlistcard />
          <Wishlistcard />

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Wishlist
