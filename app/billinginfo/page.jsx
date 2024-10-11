'use client';

import Image from 'next/image';
import Footer from '../Components/Footer';
import MainNavbar from '../Components/MainNavbar';
import Ordersummary from '../Components/Ordersummary';
import Secondarynavbar from '../Components/Secondarynavbar';
import Radiobtn from '../Components/Radiobtn';

const page = () => {
  return (
    
      <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <Secondarynavbar />

      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Left section */}
        <div className="w-full lg:w-3/5 p-6 lg:p-10">
          <h1 className="text-3xl lg:text-4xl font-medium mb-8">Billing</h1>

          <div className="space-y-8">
            {/* Basic info */}
            <div className="py-4 border-b border-gray-300">
              <h2 className="font-medium text-xl mb-3">Billing Info</h2>
              <p>Name</p>
              <p>email</p>
              <p>7995632145</p>
            </div>

            {/* Address */}
            <div className="py-4 border-b border-gray-300">
              <h2 className="font-medium text-xl mb-3">Shipping Address</h2>
              <p className="mb-4">1234 Maple Street Springfield, IL 62701 United States</p>
              <button className="px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
                Change Billing Address
              </button>
            </div>

            {/* Payment mode selection */}
            <div className="py-4">
              <h2 className="font-medium text-xl mb-4">Payment Mode</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {['COD', 'Paypal', 'Amazonpay', 'Debit'].map((method, index) => (
                  <div key={method} className="border border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center">
                    <Image src={`/${method.toLowerCase()}.svg`} width={40} height={40} alt={`${method} icon`} />
                    <p className="text-sm font-semibold mt-2 mb-1">{method}</p>
                    <Radiobtn />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-2/5 p-6 lg:p-10 bg-gray-50">
          <Ordersummary />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
