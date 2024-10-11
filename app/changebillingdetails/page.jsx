'use client'

import Footer from '../Components/Footer'
import MainNavbar from '../Components/MainNavbar'
import Ordersummary from '../Components/Ordersummary'
import Secondarynavbar from '../Components/Secondarynavbar'
import Billinginfobox from '../Components/Billinginfobox'
import { GrAdd } from "react-icons/gr";

const BillingInfoPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <Secondarynavbar />

      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Left section */}
        <div className="w-full lg:w-3/5 p-6 lg:p-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl lg:text-4xl font-medium">Billing</h1>
            <button className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition flex items-center space-x-2">
              <GrAdd className="text-white text-lg" />
              <span>Add New Address</span>
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-medium text-xl mb-6">Select the Billing details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Billinginfobox />
                <Billinginfobox />
              </div>

              <button className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
                Deliver Here
              </button>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-2/5 p-6 lg:p-10 bg-gray-50">
          <Ordersummary />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default BillingInfoPage