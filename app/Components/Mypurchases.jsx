import React, { useState } from 'react'
import MypurchaseOrders from './MypurchaseOrders'
import MypurchaseCompleted from './MypurchaseCompleted'
import MypurchaseCancelled from './MypurchaseCancelled'

const Mypurchases = () => {


const [tab, settab] = useState('orders')

const renderTab = () =>{
  if (tab === 'orders'){
    return <MypurchaseOrders/>
  }else if(tab === 'completed'){
    return <MypurchaseCompleted/>
  }else if(tab === 'cancelled'){
    return <MypurchaseCancelled/>
  }else{
    return <MypurchaseOrders/>
  }
}


  return (
    <div>

      {/* top-section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <h1 className="text-xl font-semibold mb-2 lg:mb-0">My Purchases</h1>
        <p className="text-sm text-gray-600">Hi, Christopher Columbus</p>
      </div>


      {/* orders-section */}

      <div className="tabs-section w-full h-[10vh]  border-black border-b-[2px] relative">
        <ul className='w-full flex items-center h-full justify-between lg:text-[1.2rem]'>
          <li className='w-[30vw] sm:w-[10rem] py-2 flex items-center justify-center cursor-pointer ' onClick={() => settab('orders')}>Orders</li>
          <li className='w-[30vw] sm:w-[10rem] py-2 flex items-center justify-center cursor-pointer ' onClick={() => settab('completed')}>Completed</li>
          <li className='w-[30vw] sm:w-[10rem] py-2 flex items-center justify-center cursor-pointer ' onClick={() => settab('cancelled')}>Cancelled</li>
        </ul>
        <div className={`tab-selector1 w-[30vw] sm:w-[10rem] h-[5px] bg-black rounded-[2rem] absolute bottom-[-4px] left-0 -translate-x-0 ${tab === 'orders' ? "block" : "hidden"}`}></div>
        <div className={`tab-selector2 w-[30vw] sm:w-[10rem] h-[5px] bg-black rounded-[2rem] absolute bottom-[-4px] left-[50%] -translate-x-1/2 ${tab === 'completed' ? "block" : "hidden"}`}></div>
        <div className={`tab-selector1 w-[30vw] sm:w-[10rem] h-[5px] bg-black rounded-[2rem] absolute bottom-[-4px] right-0 -translate-x-0 ${tab === 'cancelled' ? "block" : "hidden"}`}></div>





      </div>
      

        <div className="content-sec-main">
          {renderTab()}
        </div>
    </div>
  )
}

export default Mypurchases