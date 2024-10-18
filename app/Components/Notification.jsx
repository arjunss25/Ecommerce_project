import React from 'react'
import Notificationcard from './Notificationcard'

const Notification = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <h1 className="text-xl font-semibold mb-2 lg:mb-0">Notifications</h1>
            <p className="text-sm text-gray-600">Hi, Christopher Columbus</p>
        </div>


        <div className="notifications-section w-full h-screen ">
          <h2 className='mt-5'>Today</h2>
          <div className="card-sec mt-5">
            <Notificationcard/>
          </div>
        </div>
    </div>
  )
}

export default Notification