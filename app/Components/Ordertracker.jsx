'use client'
import React, { useState } from 'react';
import { Package, ChevronRight } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { IoIosArrowDropdown } from "react-icons/io";

const OrderTracker = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const orders = [
    { id: 1, status: 'IN TRANSIT', date: '07-02-2024', product: 'SAUVAGE', partner: 'Blue dart', progress: 4 },
    { id: 2, status: 'DELIVERED', date: '07-02-2024', product: 'SAUVAGE', partner: 'Blue dart', progress: 1 },
    { id: 3, status: 'IN TRANSIT', date: '07-02-2024', product: 'SAUVAGE', partner: 'Blue dart', progress: 4 },
    { id: 4, status: 'DELIVERED', date: '07-02-2024', product: 'SAUVAGE', partner: 'Blue dart', progress: 3 },
  ];

  const trackingSteps = ['Order Confirmed', 'Processing', 'Shipping', 'Delivered'];

  const trackingHistory = [
    { date: '07-02-2024 - 05:50 Pm', location: 'Kochi', status: 'Order Processed' },
    { date: '07-02-2024 - 05:50 Pm', location: 'Kochi', status: 'Order Processed' },
    { date: '07-03-2024 - 05:50 Pm', location: 'Kochi', status: 'Order Processed' },
    { date: '07-02-2024 - 05:50 Pm', location: 'Kochi', status: 'Order Processed' },
  ];

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="p-4 md:p-10 bg-white">
      <h1 className="text-2xl md:text-[3rem] font-semibold mb-4">Order Tracker</h1>

      <h2 className="text-xl md:text-[2rem] font-medium mb-4 underline underline-offset-4 mt-10">Orders</h2>
      
      {orders.map((order) => (
        <div key={order.id} className="mb-4">
          <div className="flex flex-row items-start md:items-center justify-between py-3 md:py-5 px-2 border-black border-b-[1.5px] rounded">
            <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0">
              <div className="flex items-center mb-1 md:mb-0">
                <Package size={20} className={order.status === 'IN TRANSIT' ? 'text-orange-500' : 'text-green-500'} />
                <span className={`ml-2 ${order.status === 'IN TRANSIT' ? 'text-orange-500' : 'text-green-500'} font-semibold`}>
                  {order.status}
                </span>
              </div>
              <span className="md:ml-4 text-gray-600">{order.date}</span>
              <span className="md:ml-4">{order.product}</span>
            </div>
            <div className="flex items-center">
              <button className="text-blue-500 flex gap-2 items-center justify-center" onClick={() => toggleOrderDetails(order.id)}>
                More Details <IoIosArrowDropdown className='text-[1.2rem]' />
              </button>
            </div>
          </div>
          
          {expandedOrder === order.id && (
            <div className="mt-2 p-4 md:p-10 bg-gray-100 rounded">
              <div className="text-center text-xs md:text-sm px-4 md:px-8 py-2 bg-[#01225B] w-fit mx-auto rounded-[2rem] text-white mb-4">Order id: 1234567890543</div>
              <div className="flex justify-between mb-4 relative">

                {/* progress-bar-starts */}
                <div className="progressbar w-full flex justify-center mt-10">

                  {/* segment-1 */}
                  <div className={`segment1 w-[20vw] h-2 ${order.progress >= 2 ? "bg-[#D7F400]" : 'bg-zinc-200'} relative`}>
                    <h1 className='absolute top-[-35px] left-0 text-xs md:text-sm font-medium -translate-x-1/2'>Order Confirmed</h1>
                    <div className={`circle-1 absolute w-4 h-4 md:w-6 md:h-6 rounded-full ${order.progress >= 1 ? "bg-[#D7F400]" : 'bg-zinc-200'} left-0 -translate-x-1/2 top-[-6px] md:top-[-9px] flex items-center justify-center`}>
                      <div className={`icon-div ${order.progress >= 1 ? "block" : 'hidden'} `}>
                        <CircleCheckBig size={12} strokeWidth={2} />
                      </div>
                    </div>
                    <h1 className='absolute bottom-[-35px] left-0 text-[0.6rem] md:text-[0.8rem] -translate-x-1/2'>07/02/2024</h1>
                  </div>
                  {/* segment-2 */}
                  <div className={`segment1 w-[20vw] h-2 ${order.progress >= 3 ? "bg-[#D7F400]" : 'bg-zinc-200'} relative`}>
                    <h1 className='absolute top-[-35px] left-0 -translate-x-1/2 text-xs md:text-sm font-medium'>Processing</h1>
                    <div className={`circle-1 absolute w-4 h-4 md:w-6 md:h-6 rounded-full ${order.progress >= 2 ? "bg-[#D7F400]" : 'bg-zinc-200'} left-0 -translate-x-1/2 top-[-6px] md:top-[-9px] flex items-center justify-center`}>
                      <div className={`icon-div ${order.progress >= 2 ? "block" : 'hidden'} `}>
                        <CircleCheckBig size={12} strokeWidth={2} />
                      </div>
                    </div>
                    <h1 className='absolute bottom-[-35px] left-0 -translate-x-1/2 text-[0.6rem] md:text-[0.8rem]'>07/02/2024</h1>
                  </div>
                  {/* segment-3 */}
                  <div className={`segment1 w-[20vw] h-2 ${order.progress >= 4 ? "bg-[#D7F400]" : 'bg-zinc-200'} relative`}>
                    <h1 className='absolute top-[-35px] left-0 -translate-x-1/2 text-xs md:text-sm font-medium'>Shipping</h1>
                    <div className={`circle-1 absolute w-4 h-4 md:w-6 md:h-6 rounded-full ${order.progress >= 3 ? "bg-[#D7F400]" : 'bg-zinc-200'} left-0 -translate-x-1/2 top-[-6px] md:top-[-9px] flex items-center justify-center`}>
                      <div className={`icon-div ${order.progress >= 3 ? "block" : 'hidden'} `}>
                        <CircleCheckBig size={12} strokeWidth={2} />
                      </div>
                    </div>
                    <h1 className='absolute bottom-[-35px] left-0 -translate-x-1/2 text-[0.6rem] md:text-[0.8rem]'>07/02/2024</h1>
                  </div>
                  {/* segment-4 */}
                  <div className={`segment1 w-[0vw] h-2 ${order.progress >= 4 ? "bg-[#D7F400]" : 'bg-zinc-200'} relative`}>
                    <h1 className='absolute top-[-35px] right-0 text-xs md:text-sm font-medium translate-x-1/2'>Delivered</h1>
                    <div className={`circle-1 absolute w-4 h-4 md:w-6 md:h-6 rounded-full ${order.progress == 4 ? "bg-[#D7F400]" : 'bg-zinc-200'} right-0 translate-x-1/2 top-[-6px] md:top-[-9px] flex items-center justify-center`}>
                      <div className={`icon-div ${order.progress == 4 ? "block" : 'hidden'} `}>
                        <CircleCheckBig size={12} strokeWidth={2} />
                      </div>
                    </div>
                    <h1 className='absolute bottom-[-35px] right-0 text-[0.6rem] md:text-[0.8rem] translate-x-1/2'>07/02/2024</h1>
                  </div>
                </div>
                {/* progressbar-ends */}
              </div>
              <div className="w-full md:w-[80%] border border-black rounded-lg mx-auto mt-20 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-xs md:text-sm text-gray-600 border-b border-black text-center">
                      <th className="px-2 md:px-4 py-2">Date & Time</th>
                      <th className="px-2 md:px-4 py-2">Location</th>
                      <th className="px-2 md:px-4 py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackingHistory.map((item, index) => (
                      <tr key={index} className="text-xs md:text-sm text-center border-b border-black">
                        <td className="px-2 md:px-4 py-2">{item.date}</td>
                        <td className="px-2 md:px-4 py-2">{item.location}</td>
                        <td className="px-2 md:px-4 py-2">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderTracker;