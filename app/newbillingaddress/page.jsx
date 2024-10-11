'use client'

import Image from 'next/image'
import Footer from '../Components/Footer'
import MainNavbar from '../Components/MainNavbar'
import Ordersummary from '../Components/Ordersummary'
import Secondarynavbar from '../Components/Secondarynavbar'
import { ChevronDown } from 'lucide-react';

const BillingInfoFormPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <Secondarynavbar />

      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Left section */}
        <div className="w-full lg:w-3/5 p-6 lg:p-10">
          <h1 className="text-3xl lg:text-4xl font-medium mb-8">Billing</h1>

          <div className="max-w-2xl">
            <h2 className="font-medium text-xl mb-6">Add new billing details</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">User name</label>
                  <input type="text" id="firstName" placeholder="First name" className="w-full p-2 border border-gray-300 rounded-full px-4" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
                  <input type="text" id="lastName" placeholder="Last name" className="w-full p-2 border border-gray-300 rounded-full px-4" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-full px-4" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded-full px-4" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input type="text" id="address" className="w-full p-2 border border-gray-300 rounded-full px-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <div className="relative">
                    <select id="country" className="w-full p-2 border border-gray-300 rounded-full px-4 appearance-none">
                      <option value="">Select...</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Region/State</label>
                  <div className="relative">
                    <select id="region" className="w-full p-2 border border-gray-300 rounded-full px-4 appearance-none">
                      <option value="">Select...</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <div className="relative">
                    <select id="city" className="w-full p-2 border border-gray-300 rounded-full px-4 appearance-none">
                      <option value="">Select...</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  </div>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <input type="text" id="zipCode" className="w-full p-2 border border-gray-300 rounded-full px-4" />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="defaultBilling" className="mr-2" />
                <label htmlFor="defaultBilling" className="text-sm text-gray-700">Use as my default billing info</label>
              </div>
              <button type="submit" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Add
              </button>
            </form>
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

export default BillingInfoFormPage