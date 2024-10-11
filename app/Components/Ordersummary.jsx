import React from 'react';
import { GoShieldLock } from "react-icons/go";

const Ordersummary = () => {
  return (
    <div className='w-full max-w-md mx-auto p-6'>
      <div className="title-sec py-4 border-b-2 border-red-500 mb-6">
        <h1 className='text-2xl font-semibold'>SUMMARY</h1>
      </div>

      <div className="pricing-info space-y-4">
        <div className="total-price-sec flex justify-between py-3 border-b border-gray-300">
          <h2 className='text-lg'>Product Total (3)</h2>
          <span className='text-lg'>₹4000</span>
        </div>

        <div className="tax-sec py-3 border-b border-gray-300 space-y-2">
          <div className="tax-1 flex justify-between">
            <h2 className='text-lg'>Total without VAT</h2>
            <span className='text-lg'>₹4150</span>
          </div>
          <div className="tax-1 flex justify-between">
            <h2 className='text-lg'>Total with 10% VAT</h2>
            <span className='text-lg'>₹4565</span>
          </div>
        </div>

        <div className="overall-total flex justify-between py-3 border-b-2 border-black">
          <h2 className='text-xl font-bold'>Order Total</h2>
          <span className='text-xl font-bold'>₹4565</span>
        </div>

        <div className="voucher-section flex justify-between py-3 space-x-2">
          <input 
            type="text" 
            className='flex-grow border border-gray-300 rounded-full px-4 py-2 text-lg' 
            placeholder='Enter Your Code' 
          />
          <button className='w-24 border border-gray-300 rounded-full py-2 text-lg hover:bg-gray-100 transition'>Apply</button>
        </div>

        <button className="w-full py-3 mt-6 bg-black text-[#D7F400] rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>

        <div className='flex items-center justify-center text-sm mt-2 text-gray-600'>
          <GoShieldLock className="mr-2" />
          <span>Payments are processed securely</span>
        </div>

        <div className="payment-methods flex justify-center gap-4 py-4 border-t border-gray-300 mt-8">
          <img src="/pay (1).png" alt="Payment method" className="h-6" />
          <img src="/pay (2).png" alt="Payment method" className="h-6" />
          <img src="/pay (3).png" alt="Payment method" className="h-6" />
          <img src="/pay (4).png" alt="Payment method" className="h-6" />
          <img src="/pay (5).png" alt="Payment method" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default Ordersummary;