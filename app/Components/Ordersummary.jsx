import React from 'react'
import { GoShieldLock } from "react-icons/go";

const Ordersummary = () => {
  return (
    <div className='w-[90%] sm:w-[60%] lg:w-[80%]'>
        <div className="title-sec  py-5 border-b-[2px] border-red-500">
            <h1 className='text-[2rem] font-semibold'>SUMMARY</h1>
        </div>


        <div className="pricing-info w-full">
            <div className="total-price-sec w-full flex justify-between py-5 border-b-[2px] border-black text-[1.2rem]">
                <h1>Product Total(3)</h1>
                <h1>₹4000</h1>
            </div>


            <div className="tax-sec w-full  py-5 border-b-[2px] border-black text-[1.2rem]">
                <div className="tax-1 flex justify-between">
                    <h1>Total without VAT</h1>
                    <h1>₹4150</h1>
                </div>
                <div className="tax-1 flex justify-between">
                    <h1>Total with 10% VAT</h1>
                    <h1>₹4565</h1>
                </div>
            </div>


            <div className="overall-total w-full flex justify-between py-5 text-[1.2rem]">
                <h1>Order Total</h1>
                <h1>₹4565</h1>
            </div>



            <div className="voucher-section w-full flex justify-between py-5  text-[1.2rem]">
                <input type="text" className='w-[60%] sm:w-[70%] border-[2px] border-black rounded-[1rem] px-3' placeholder='Enter Your Code' />
                <h1 className='w-[30%] sm:w-[20%] flex items-center justify-center py-2 border-[2px] border-black rounded-[1rem]'>Apply</h1>
            </div>



            <div className="voucher-section w-full flex justify-center items-center py-5  mt-5 bg-black text-white">
                <h1 className='text-[#D7F400]'>Proceed to Checkout</h1>
            </div>
            <h1 className='flex w-full items-center justify-center text-[0.8rem] gap-3 mt-1'><GoShieldLock />Payments are processed securely</h1>


            <div className="total-price-sec w-full flex justify-center gap-1 sm:gap-5 py-5 border-t-[2px] border-black mt-10">
            <img src="/pay (1).png" alt="" />
            <img src="/pay (2).png" alt="" />
            <img src="/pay (3).png" alt="" />
            <img src="/pay (4).png" alt="" />
            <img src="/pay (5).png" alt="" />
            </div>




        </div>
    </div>
  )
}

export default Ordersummary