import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'
import Image from 'next/image'
import Link from 'next/link'
import { LiaFileDownloadSolid } from "react-icons/lia";
import { FaPrint } from "react-icons/fa";
import Ordersuccessfulcard from '../Components/Ordersuccessfulcard'
import Invoice from '../Components/Invoice'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div className='w-full'>
      <MainNavbar/>
      <Secondarynavbar/>

      <div className="top-component w-full flex flex-col items-center p-6 md:p-10">
        <Image src={'/paymentsuccessful.png'} width={80} height={80} className="md:w-[100px] md:h-[100px]" />
        <h1 className="mt-6 text-[2rem] md:text-[3rem] font-medium text-center">
          Thank You! <span className="bg-[#D7F400] p-1 md:p-2">Order Successful</span>
        </h1>
      </div>

{/* sec-btn-bar */}
    <div className="btn-sec-main w-full px-5 md:px-10">
      <div className="sec-btn-nav w-full  md:h-[12vh] flex flex-col md:flex-row items-center justify-between border-t-2 border-b-2 border-black px-4 md:px-10 py-4 lg:py-0 gap-4 md:gap-0 leading-none">
        
        {/* Left Buttons */}
        <div className="left-btns flex flex-col md:flex-row gap-4 md:gap-5">
          <Link href="" className="px-4 py-3 text-center rounded-full border border-black bg-black text-white w-full md:w-auto">
            View Order Details
          </Link>
          <Link href="" className="px-4 py-3 text-center rounded-full border border-black w-full md:w-auto">
            Continue Shopping
          </Link>
        </div>
        
        {/* Right Buttons */}
        <div className="right-btns flex flex-col md:flex-row gap-4 md:gap-5 text-center">
          <Link href="" className="px-4 py-2 rounded-full flex items-center justify-center gap-2 lg:gap-3 w-full md:w-auto">
            <LiaFileDownloadSolid className="text-[1.2rem] md:text-[1.5rem]" />
            Download Invoice
          </Link>
          <Link href="" className="px-4 py-2 rounded-full flex items-center justify-center gap-2 lg:gap-3 w-full md:w-auto">
            <FaPrint className="text-[1rem] md:text-[1.2rem]" />
            Print Invoice
          </Link>
        </div>
      </div>
    </div>


      <div className="page-content-sec  w-full flex lg:flex-row flex-col">
        <div className="card-section lg:w-[60vw] py-10 pl-3 pr-3 lg:pr-0 lg:pl-10 flex flex-col gap-5">
        <Ordersuccessfulcard/>
        <Ordersuccessfulcard/>
        </div>

        <div className="invoicce-section lg:w-[40vw] bg-gray-50 py-10">
          <Invoice/>
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default page