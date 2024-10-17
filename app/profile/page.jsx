import React from 'react';
import { Camera, Edit2 } from 'lucide-react';
import MainNavbar from '../Components/MainNavbar';
import Secondarynavbar from '../Components/Secondarynavbar';
import Image from 'next/image';
import Accountsettings from '../Components/Accountsettings';

export default function AccountSettings() {




  
  return (
    <div>
      <MainNavbar />
      <Secondarynavbar />

      <div className="flex flex-col lg:flex-row min-h-screen">
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
              <li className="text-lg font-medium text-gray-900">Account Settings</li>
              <li className="text-lg text-gray-600">My Purchase</li>
              <li className="text-lg text-gray-600">Notifications</li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-6">
          <Accountsettings/>
        </div>



        
      </div>
    </div>
  );
}