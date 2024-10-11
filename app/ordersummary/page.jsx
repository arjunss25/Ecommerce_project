'use client';

import Footer from '../Components/Footer';
import MainNavbar from '../Components/MainNavbar';
import Ordersummary from '../Components/Ordersummary';
import Secondarynavbar from '../Components/Secondarynavbar';
import Ordersummarycard from '../Components/Ordersummarycard';

const OrderSummaryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <Secondarynavbar />

      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Left section */}
        <div className="w-full lg:w-3/5 p-6 lg:p-10">
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-medium">Order Summary</h1>
          </div>

          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-xl font-medium">Order ID: 334902445</h2>
              <div className="px-3 py-1 bg-red-100 rounded-full">
                <span className="text-red-500 text-sm">Payment pending</span>
              </div>
            </div>

            <p className="text-gray-600">
              June 10, 2024 at 12:45am from draft orders
            </p>

            <div className="space-y-6">
              <Ordersummarycard />
              <Ordersummarycard />
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

export default OrderSummaryPage;