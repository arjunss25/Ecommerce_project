import React from 'react';
import { Camera, Edit2 } from 'lucide-react';
import MainNavbar from '../Components/MainNavbar';
import Secondarynavbar from '../Components/Secondarynavbar';
import Image from 'next/image';

export default function AccountSettings() {
  return (

    <div>

<MainNavbar/>
<Secondarynavbar/>

<div className="flex min-h-screen">
      
      {/* Sidebar */}
      <div className="w-[20vw] bg-white p-6 border-r border-gray-200">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-[3rem] h-[3rem] rounded-full bg-gray-200 overflow-hidden relative">
            <Image src={'/profile.png'} alt="Profile" layout='fill'></Image>
            
          </div>
          <div>
            <h2 className="text-[1rem] leading-none font-semibold">Christopher Columbus Christopher Columbus</h2>
            <p className="text-[1rem] text-gray-500">MANAGE ACCOUNTS</p>
          </div>
        </div>
        
        <nav>
          <ul className="space-y-2">
            <li className="text-sm font-medium text-gray-900">Account Settings</li>
            <li className="text-sm text-gray-600">My Purchase</li>
            <li className="text-sm text-gray-600">Notifications</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold">Account Settings</h1>
          <p className="text-sm text-gray-600">Hi, Christopher Columbus</p>
        </div>

        {/* Profile Section */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
                <Camera size={16} />
              </button>
            </div>
            <div className="space-y-2">
              <button className="text-sm font-medium">Edit Profile</button>
              <div>
                <button className="text-sm text-gray-500">Update Photo</button>
                <span className="mx-2 text-gray-300">|</span>
                <button className="text-sm text-gray-500">View Photo</button>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4 border-b-[2px] border-black py-3">
            <h2 className="text-lg font-medium">Personal Details</h2>
            <button className="text-sm text-gray-500">Edit</button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className='flex gap-2'>
                <label className="block text-sm text-gray-600 mb-1">First Name:</label>
                <p className="text-sm">Christopher</p>
              </div>
              <div className='flex gap-2'>
                <label className="block text-sm text-gray-600 mb-1">Last Name:</label>
                <p className="text-sm">Columbus</p>
              </div>
            </div>
            <div className='flex gap-2'>
              <label className="block text-sm text-gray-600 mb-1">Mobile:</label>
              <p className="text-sm">9879543210</p>
            </div>
            <div className='flex gap-2'>
              <label className="block text-sm text-gray-600 mb-1">Email:</label>
              <p className="text-sm">chris@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-4 border-b-[2px] border-black py-3">
            <h2 className="text-lg font-medium">Delivery Address</h2>
            <button className="text-sm text-gray-500">Edit</button>
          </div>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Address:</label>
              <p className="text-sm">Christopher</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">City:</label>
              <p className="text-sm">Columbus</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Mobile:</label>
              <p className="text-sm">9879543210</p>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Postal/ZIP code:</label>
              <p className="text-sm">chris@gmail.com</p>
            </div>
          </div>

          {/* Add Address Form */}


          {/* <div className="border rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Address:</label>
                <input type="text" placeholder="Address" className="w-full p-2 text-sm border rounded" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">City:</label>
                <input type="text" placeholder="City" className="w-full p-2 text-sm border rounded" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Mobile:</label>
                <input type="text" placeholder="Mobile" className="w-full p-2 text-sm border rounded" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Postal/ZIP code:</label>
                <input type="text" placeholder="Postal/ZIP code" className="w-full p-2 text-sm border rounded" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                Add Address →
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>






    </div>

    
  );
}