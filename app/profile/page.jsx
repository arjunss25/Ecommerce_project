'use client'

import React, { useState } from 'react';
import MainNavbar from '../Components/MainNavbar';
import Secondarynavbar from '../Components/Secondarynavbar';
import Image from 'next/image';
import Accountsettings from '../Components/Accountsettings';
import Mypurchases from '../Components/Mypurchases';
import Notification from '../Components/Notification';
import Footer from '../Components/Footer';

export default function AccountSettings() {

const [activeSection, setactiveSection] = useState('accountsettings');


const trackActiveSection = ()=>{
  if(activeSection === 'accountsettings'){
    return <Accountsettings/>
  }else if(activeSection === 'mypurchase'){
    return <Mypurchases/>
  }else if(activeSection === 'notification'){
    return <Notification/>
  }else{
    return <Accountsettings/>
  }
}

  
  return (
    <div>
      <MainNavbar />
      <Secondarynavbar />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-[20rem] w-full bg-white p-6 border-b lg:border-r border-gray-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <Image
                src="/profile.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-[1rem] leading-none font-semibold truncate">
                Christopher Columbus
              </h2>
              <p className="text-[1rem] text-gray-500">MANAGE ACCOUNTS</p>
            </div>
          </div>

          <nav>
            <ul className="space-y-2">
              <li className={`text-lg  ${activeSection === 'accountsettings' ? "text-black font-medium" : "text-gray-600"} cursor-pointer`} onClick={() =>setactiveSection('accountsettings')}>Account Settings</li>
              <li className={`text-lg  ${activeSection === 'mypurchase' ? "text-black font-medium" : "text-gray-600"} cursor-pointer`} onClick={() =>setactiveSection('mypurchase')}>My Purchase</li>
              <li className={`text-lg  ${activeSection === 'notification' ? "text-black font-medium" : "text-gray-600"} cursor-pointer`} onClick={() =>setactiveSection('notification')}>Notifications</li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6 mb-10">
          {trackActiveSection()}
        </div>



        
      </div>

      <Footer/>
    </div>
  );
}