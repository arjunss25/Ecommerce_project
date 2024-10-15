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
    <div className="p-10 bg-white ">
      <h1 className="text-[3rem] font-semibold mb-4">Order Tracker</h1>

      <h1 className="text-[2rem] font-medium mb-4 underline underline-offset-4">Orders</h1>
      
      {orders.map((order) => (
        <div key={order.id} className="">
          <div className="flex items-center justify-between py-5 px-2 border-black border-b-[1.5px] rounded">
            <div className="flex items-center">
              <Package size={20} className={order.status === 'IN TRANSIT' ? 'text-orange-500' : 'text-green-500'} />
              <span className={`ml-2 ${order.status === 'IN TRANSIT' ? 'text-orange-500' : 'text-green-500'} font-semibold`}>
                {order.status}
              </span>
              <span className="ml-4 text-gray-600">{order.date}</span>
              <span className="ml-4">{order.product}</span>
            </div>
            <div className="flex items-center">
              <button className="text-blue-500 flex gap-2 items-center justify-center" onClick={() => toggleOrderDetails(order.id)}>
                More Details <IoIosArrowDropdown className='text-[1.2rem]' />
              </button>
            </div>
          </div>
          
          {expandedOrder === order.id && (
            <div className="mt-2 p-10 bg-gray-100 rounded">
              <div className="text-center text-sm px-8 py-2 bg-[#01225B] w-fit mx-auto rounded-[2rem] text-white mb-4">Order id: 1234567890543</div>
              <div className="flex justify-between mb-4 relative">

                {/* progress-bar-starts */}
                <div className="progressbar w-full flex justify-center mt-10">
                  <div className={`segment1 w-[20vw] h-2 ${order.progress >= 2 ? "bg-[#D7F400]" : 'bg-zinc-200'} relative`}>
                    <div className={`circle-1 absolute w-6 h-6 rounded-full ${order.progress >= 1 ? "bg-[#D7F400]" : 'bg-zinc-200'} left-0 -translate-x-1/2 top-[-9px] flex items-center justify-center`}>
                      <div className={`icon-div ${order.progress >= 1 ? "block]" : 'hidden'} `}>
                        <CircleCheckBig size={15} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                  {/* segment-2 */}
                  <div className={`segment1 w-[20vw] h-2 ${order.progress >= 3 ? "bg-[#D7F400]" : 'bg-zinc-200'} relative`}>
                    <div className={`circle-1 absolute w-6 h-6 rounded-full ${order.progress >= 2 ? "bg-[#D7F400]" : 'bg-zinc-200'} left-0 -translate-x-1/2 top-[-9px] flex items-center justify-center`}>
                        <div className={`icon-div ${order.progress >= 2 ? "block]" : 'hidden'} `}>
                          <CircleCheckBig size={15} strokeWidth={2} />
                        </div>
                      </div>
                  </div>
                  {/* segment-3 */}
                  <div className={`segment1 w-[20vw] h-2 ${order.progress >= 4 ? "bg-[#D7F400]" : 'bg-zinc-200'} relative`}>
                    <div className={`circle-1 absolute w-6 h-6 rounded-full ${order.progress >= 3 ? "bg-[#D7F400]" : 'bg-zinc-200'} left-0 -translate-x-1/2 top-[-9px] flex items-center justify-center`}>
                        <div className={`icon-div ${order.progress >= 3 ? "block]" : 'hidden'} `}>
                          <CircleCheckBig size={15} strokeWidth={2} />
                        </div>
                      </div>
                  </div>
                  {/* segment-4 */}
                  <div className={`segment1 w-[0vw] h-2 ${order.progress >= 4 ? "bg-[#D7F400]" : 'bg-zinc-200'} relative`}>
                    <div className={`circle-1 absolute w-6 h-6 rounded-full ${order.progress == 4 ? "bg-[#D7F400]" : 'bg-zinc-200'} left-0 -translate-x-1/2 top-[-8px] flex items-center justify-center`}>
                        <div className={`icon-div ${order.progress == 4 ? "block]" : 'hidden'} `}>
                          <CircleCheckBig size={15} strokeWidth={2} />
                        </div>
                      </div>
                  </div>
                </div>
                {/* progressbar-ends */}
              </div>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-600">
                    <th>Date & Time</th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {trackingHistory.map((item, index) => (
                    <tr key={index} className="text-sm">
                      <td>{item.date}</td>
                      <td>{item.location}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderTracker;
