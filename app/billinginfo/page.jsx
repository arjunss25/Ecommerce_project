'use client'

import Image from 'next/image'
import Footer from '../Components/Footer'
import MainNavbar from '../Components/MainNavbar'
import Ordersummary from '../Components/Ordersummary'
import Secondarynavbar from '../Components/Secondarynavbar'
import Radiobtn from '../Components/Radiobtn'


const page = () => {
  return (
    <div>
        <MainNavbar/>
        <Secondarynavbar/>


        <div className="billibginfo-content-section flex lg:flex-row flex-col">

          {/* left-section */}
        <div className="left-section w-full lg:w-[60vw] min-h-[80vh] ">

          {/* top-title-section */}
            <div className="cart-top-section w-full h-[15vh] flex items-center justify-between px-5 py-2">
              <h1 className='text-[2rem] sm:text-[4rem] font-medium'>Billing</h1>
            </div>


            <div className="billing-info-content w-full px-10">

{/* basic-info */}
              <div className="basic-info-sec w-full  py-5 border-b-[2px] border-black text-[1.2rem]">
                  <div className="">
                    <h1 className='font-medium mb-2 text-[1.5rem]'>Billing Info</h1>
                      <h1>Name</h1>
                      <h1>email</h1>
                      <h1>7995632145</h1>
                  </div>
              </div>


{/* address */}
              <div className="basic-info-sec w-full  py-5 border-b-[2px] border-black text-[1.2rem]">
                  <div className="">
                    <h1 className='font-medium mb-2 text-[1.5rem]'>Shipping Address</h1>
                      <h1>1234 Maple Street Springfield, IL 62701 United States</h1>
                      <div className="btn px-6 py-2 bg-black rounded-[2rem] w-fit mt-5">
                        <h1 className='text-white text-[1rem]'>Change Billing Address</h1>
                      </div>
                  </div>
              </div>


{/* payment-mode-selection */}

<div className="payment-mode w-full py-5 text-[1.2rem] mt-5">
  <div>
    <h1 className="font-medium mb-2 text-[1.5rem]">Payment Mode</h1>

    <div className="payment-modes-cards-main w-full flex flex-wrap items-start sm:items-center justify-start gap-4 mt-5">

      <div className="w-full sm:w-[90%] flex flex-col sm:flex-row flex-wrap sm:flex-nowrap gap-4 sm:gap-2 items-center border border-black p-2 sm:p-0">

        <div className="card w-full sm:w-[12rem] h-[10rem] flex flex-col items-center justify-center gap-2 px-2 py-3">
          <Image src='/cod.svg' width={40} height={50} alt='icon' />
          <h1 className="text-[1rem] font-semibold text-center">COD</h1>
          <Radiobtn />
        </div>

        <div className="separator w-full h-[1px] bg-black block sm:hidden my-2"></div>
        <div className="separator hidden sm:block w-[1px] h-[8rem] bg-black"></div>

        <div className="card2 w-full sm:w-[12rem] h-[10rem] flex flex-col items-center justify-center gap-2 px-2 py-3">
          <Image src='/paypal.svg' width={40} height={50} alt='icon' />
          <h1 className="text-[1rem] font-semibold text-center">Paypal</h1>
          <Radiobtn />
        </div>

        <div className="separator w-full h-[1px] bg-black block sm:hidden my-2"></div>
        <div className="separator hidden sm:block w-[1px] h-[8rem] bg-black"></div>

        <div className="card2 w-full sm:w-[12rem] h-[10rem] flex flex-col items-center justify-center gap-2 px-2 py-3">
          <Image src='/amazonpay.svg' width={40} height={50} alt='icon' />
          <h1 className="text-[1rem] font-semibold text-center">Amazon</h1>
          <Radiobtn />
        </div>

        <div className="separator w-full h-[1px] bg-black block sm:hidden my-2"></div>
        <div className="separator hidden sm:block w-[1px] h-[8rem] bg-black"></div>

        <div className="card2 w-full sm:w-[12rem] h-[10rem] flex flex-col items-center justify-center gap-2 px-2 py-3">
          <Image src='/debit.svg' width={50} height={50} alt='icon' />
          <h1 className="text-[1rem] font-semibold text-center">Debit</h1>
          <Radiobtn />
        </div>

      </div>

    </div>
  </div>
</div>






            </div>

          



        </div>


        {/* right-section */}
        <div className="right-section w-full lg:w-[40vw] min-h-[80vh]  px-2 py-2 flex items-start justify-center">
          <Ordersummary/>
        </div>


        

        </div>
        <Footer/>
    </div>
  )
}

export default page