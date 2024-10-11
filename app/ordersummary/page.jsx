'use client';

import Footer from '../Components/Footer';
import MainNavbar from '../Components/MainNavbar';
import Ordersummary from '../Components/Ordersummary';
import Secondarynavbar from '../Components/Secondarynavbar';
import Ordersummarycard from '../Components/Ordersummarycard';

const page = () => {
  return (
    <div>
      <MainNavbar />
      <Secondarynavbar />

      <div className="billibginfo-content-section flex lg:flex-row flex-col">
        {/* left-section */}
        <div className="left-section w-full lg:w-[60vw] min-h-[80vh] ">
          {/* top-title-section */}
          <div className=" w-full h-[15vh] flex items-center justify-between px-5 py-2">
            <h1 className="text-[2rem] sm:text-[3rem] font-medium">
              Order Summary
            </h1>
          </div>

          {/* order-info */}
          <div className="order-info px-10 md:px-20">
            <div className="top-sec-main flex gap-5 items-center">
              <h1 className="text-[1.5rem] font-medium">Order ID: 334902445</h1>
              <div className="status w-fit px-3 py-1 bg-red-100 rounded-[2rem] flex items-center justify-center">
                <h1 className="text-red-500 text-[0.8rem] text-center">Payment pending</h1>
              </div>
            </div>

            <h2 className="mt-2">
              June 10 , 2024 at 12:45am from draft orders
            </h2>

            <div className="card-sec mt-10">
                <Ordersummarycard />
            </div>
          </div>

          
        </div>

        {/* right-section */}
        <div className="right-section w-full lg:w-[40vw] min-h-[80vh]  px-2 py-2 flex items-start justify-center">
          <Ordersummary />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
