import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'
import Wishlistcard from '../Components/Wishlistcard'

const Wishlist = () => {
  return (
    <div>
        <MainNavbar/>
        <Secondarynavbar/>
        <div className="wishlist-cards p-10">
            <div className="title-sec w-full flex items-center justify-between">
                <h1  className="text-3xl lg:text-4xl font-medium mb-8">Wishlist</h1>
                <button className="bg-black text-white px-6 py-2 rounded-full">
                  Move All to Cart
                </button>
            </div>
            <Wishlistcard/>
        </div>
    </div>
  )
}

export default Wishlist