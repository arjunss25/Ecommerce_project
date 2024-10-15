'use client'
import React, { useState } from 'react';
import { Package, ChevronRight } from 'lucide-react';

const OrderTracker = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const orders = [
    { id: 1, status: 'IN TRANSIT', date: '07-02-2024', product: 'SAUVAGE', partner: 'Blue dart', progress: 2 },
    { id: 2, status: 'DELIVERED', date: '07-02-2024', product: 'SAUVAGE', partner: 'Blue dart', progress: 1 },
    { id: 3, status: 'DELIVERED', date: '07-02-2024', product: 'SAUVAGE', partner: 'Blue dart', progress: 3 },
    { id: 4, status: 'DELIVERED', date: '07-02-2024', product: 'SAUVAGE', partner: 'Blue dart', progress: 4 },
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
    <div className="p-4 bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Order Tracker</h1>
      
      {orders.map((order) => (
        <div key={order.id} className="mb-2">
          <div className="flex items-center justify-between p-2 bg-gray-100 rounded">
            <div className="flex items-center">
              <Package size={20} className={order.status === 'IN TRANSIT' ? 'text-orange-500' : 'text-green-500'} />
              <span className={`ml-2 ${order.status === 'IN TRANSIT' ? 'text-orange-500' : 'text-green-500'} font-semibold`}>
                {order.status}
              </span>
              <span className="ml-4 text-gray-600">{order.date}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">{order.product}</span>
              <span className="mr-4">{order.partner}</span>
              <button className="text-blue-500" onClick={() => toggleOrderDetails(order.id)}>
                More Details <ChevronRight size={16} className="inline" />
              </button>
            </div>
          </div>
          
          {expandedOrder === order.id && (
            <div className="mt-2 p-4 bg-gray-100 rounded">
              <div className="text-center text-sm text-gray-600 mb-4">Order id: 1234567890543</div>
              <div className="flex justify-between mb-4 relative">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="flex-1 relative">
                    <div 
                      className={`h-1 ${index < order.progress ? 'bg-green-500' : 'bg-gray-300'}`}
                      style={{ width: '100%' }}
                    ></div>
                    <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2">
                      <div className={`w-5 h-5 rounded-full border-2 ${index < order.progress ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300'} flex items-center justify-center`}>
                        {index < order.progress && (
                          <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
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

// export default OrderTracker;
