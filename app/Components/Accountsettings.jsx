import React from 'react';
import { Camera, Edit2 } from 'lucide-react';
import Image from 'next/image';

const Accountsettings = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <h1 className="text-xl font-semibold mb-2 lg:mb-0">Account Settings</h1>
            <p className="text-sm text-gray-600">Hi, Christopher Columbus</p>
          </div>

          {/* Profile Section */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="object-cover rounded-full"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
                  <Camera size={16} />
                </button>
              </div>
              <div className="space-y-2 text-center sm:text-left">
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
          <div className="bg-white rounded-lg p-4 lg:p-6 mb-6">
            <div className="flex justify-between items-center mb-4 border-b-[2px] border-black py-3">
              <h2 className="text-xl font-medium">Personal Details</h2>
              <button className="text-sm text-gray-500">Edit</button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-2">
                  <label className="block text-lg text-gray-600">First Name:</label>
                  <p className="text-lg">Christopher</p>
                </div>
                <div className="flex gap-2">
                  <label className="block text-lg text-gray-600">Last Name:</label>
                  <p className="text-lg">Columbus</p>
                </div>
              </div>
              <div className="flex gap-2">
                <label className="block text-lg text-gray-600">Mobile:</label>
                <p className="text-lg">9879543210</p>
              </div>
              <div className="flex gap-2">
                <label className="block text-lg text-gray-600">Email:</label>
                <p className="text-lg">chris@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="bg-white rounded-lg p-4 lg:p-6">
            <div className="flex justify-between items-center mb-4 border-b-[2px] border-black py-3">
              <h2 className="text-xl font-medium">Delivery Address</h2>
              <button className="text-sm text-gray-500">Edit</button>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex gap-2">
                <label className="block text-lg text-gray-600">Address:</label>
                <p className="text-lg">123 Explorer St.</p>
              </div>
              <div className="flex gap-2">
                <label className="block text-lg text-gray-600">City:</label>
                <p className="text-lg">Columbus</p>
              </div>
              <div className="flex gap-2">
                <label className="block text-lg text-gray-600">Mobile:</label>
                <p className="text-lg">9879543210</p>
              </div>
              <div className="flex gap-2">
                <label className="block text-lg text-gray-600">Postal/ZIP code:</label>
                <p className="text-lg">12345</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Accountsettings