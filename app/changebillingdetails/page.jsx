'use client'

import Image from 'next/image'
import Footer from '../Components/Footer'
import MainNavbar from '../Components/MainNavbar'
import Ordersummary from '../Components/Ordersummary'
import Secondarynavbar from '../Components/Secondarynavbar'
import Radiobtn from '../Components/Radiobtn'
import Billinginfobox from '../Components/Billinginfobox'


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

{/* billing-templates */}
              <div className="basic-info-sec w-full  py-5 border-b-[2px] border-black text-[1.2rem]">
                  <div className="">
                    <h1 className='font-medium mb-2 text-[1.5rem]'>Select the Billing details</h1>
                      
                      <div className="billind-box mt-10 flex flex-wrap gap-5 ">
                        <Billinginfobox/>
                        <Billinginfobox/>
                        <Billinginfobox/>
                        <Billinginfobox/>
                      </div>


                      <div className="btn px-6 py-2 bg-black rounded-[2rem] w-fit mt-8">
                        <h1 className='text-white text-[1rem]'>Deliver Here</h1>
                      </div>

                  </div>
              </div>


{/* address */}
              <div className="basic-info-sec w-full  py-5 border-b-[2px] border-black text-[1.2rem]">
                  <div className="">
                    <h1 className='font-medium mb-2 text-[1.5rem]'>Shipping Address</h1>
                      <h1>1234 Maple Street Springfield, IL 62701 United States</h1>
                      
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