import React from 'react';

const Invoice = () => {
  return (
    <div className='w-full max-w-md mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-4 border-b border-red-500 pb-2'>Invoice</h1>
      
      <div className="grid grid-cols-2 gap-y-2 mb-6">
        <p className="font-semibold">Order ID</p>
        <p className="text-right">KA123456</p>
        <p className="font-semibold">Time of Order</p>
        <p className="text-right">12:45 Pm</p>
        <p className="font-semibold">Date of Order</p>
        <p className="text-right">12-05-24</p>
        <p className="font-semibold">Payment Method</p>
        <p className="text-right">COD</p>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <p>Product Total(3)</p>
          <p>₹4000</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Charge</p>
          <p>₹150</p>
        </div>
      </div>
      
      <div className="border-t border-gray-300 pt-2 space-y-2 mb-4">
        <div className="flex justify-between">
          <p>Total without VAT</p>
          <p>₹4150</p>
        </div>
        <div className="flex justify-between">
          <p>Total with 10% VAT</p>
          <p>₹4565</p>
        </div>
      </div>
      
      <div className="border-t border-red-500 pt-2 flex justify-between items-center">
        <p className="font-semibold text-lg">Order Total</p>
        <p className="font-bold text-xl">₹4565</p>
      </div>
    </div>
  );
};

export default Invoice;