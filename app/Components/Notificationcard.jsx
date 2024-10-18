import Image from 'next/image';
import React from 'react'
import { LuClock9 } from "react-icons/lu";

const Notificationcard = () => {
  return (
    <div className='w-[80%] border-[#01225B] border-[2px] px-5 py-2 min-h-[20vh] rounded-[2rem]'>
        <div className="top w-full h-[20%]">
            <h2 className='flex gap-3 items-center justify-end'><LuClock9 />10:23</h2>
        </div>
        <div className="content-sec w-full h-[80%] bg-white flex gap-2"> 
        <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <Image
                src="/profile.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="text-section">
                <div className="heading-sec">
                    <h1 className='text-[1.5rem] font-medium'>Welcome back!</h1>
                </div>
                <p>Welcome back, Christopher Columbs! Check out the latest deals just for you.</p>
            </div>
        </div>
    </div>
  )
}

export default Notificationcard