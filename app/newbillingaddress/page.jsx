'use client'

import Image from 'next/image'
import Footer from '../Components/Footer'
import MainNavbar from '../Components/MainNavbar'
import Ordersummary from '../Components/Ordersummary'
import Secondarynavbar from '../Components/Secondarynavbar'
import { ChevronDown } from 'lucide-react';


const page = () => {
  return (
    <div>
        <MainNavbar/>
        <Secondarynavbar/>


        <div className="billibginfo-content-section flex lg:flex-row flex-col">

          {/* left-section */}
        <div className="left-section w-full lg:w-[60vw] min-h-[80vh] ">

          {/* top-title-section */}
            <div className="cart-top-section w-full h-[15vh] flex items-center justify-between px-5 py-2">
              <h1 className='text-[2rem] sm:text-[4rem] font-medium'>Billing</h1>
            </div>


            <div className="billing-info-content w-full px-10">


              <div className="max-w-2xl">
              <h1 className='font-medium mb-2 text-[1.5rem]'>Add new billing details</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">User name</label>
            <input type="text" id="firstName" placeholder="First name" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
            <input type="text" id="lastName" placeholder="Last name" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input type="text" id="address" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <div className="relative">
              <select id="country" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black appearance-none">
                <option value="">Select...</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Region/State</label>
            <div className="relative">
              <select id="region" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black appearance-none">
                <option value="">Select...</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <div className="relative">
              <select id="city" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black appearance-none">
                <option value="">Select...</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <input type="text" id="zipCode" className="w-full p-2 border border-gray-300 rounded-[1.5rem]  px-3 border-black" />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="defaultBilling" className="mr-2" />
          <label htmlFor="defaultBilling" className="text-sm text-gray-700">Use as my default billing info</label>
        </div>
        <button type="submit" className="bg-black text-white px-6 py-2 rounded-[1.5rem]  px-3 border-black">
          Add
        </button>
      </form>
    </div>








            </div>

          



        </div>


        {/* right-section */}
        <div className="right-section w-full lg:w-[40vw] min-h-[80vh]  px-2 py-2 flex items-start justify-center">
          <Ordersummary/>
        </div>


        

        </div>
        <Footer/>
    </div>
  )
}

export default page