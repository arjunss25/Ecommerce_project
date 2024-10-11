'use client'

import Footer from '../Components/Footer'
import MainNavbar from '../Components/MainNavbar'
import Ordersummary from '../Components/Ordersummary'
import Secondarynavbar from '../Components/Secondarynavbar'
import Billinginfobox from '../Components/Billinginfobox'
import { GrAdd } from "react-icons/gr";


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
              <div className="btn px-6 py-2 bg-black rounded-[2rem] w-fit ">
                <h1 className='text-white text-[1rem] flex items-center gap-3'><GrAdd  className='text-white text-[1.3rem]'/> Add New Address</h1>
              </div>
            </div>


            <div className="billing-info-content w-full px-10">

{/* billing-templates */}
              <div className="basic-info-sec w-full  py-5  text-[1.2rem]">
                  <div className="">
                    <h1 className='font-medium mb-2 text-[1.5rem]'>Select the Billing details</h1>
                      
                      <div className="billing-box mt-10 flex flex-wrap gap-5 ">
                        <Billinginfobox/>
                      </div>


                      <div className="btn px-6 py-2 bg-black rounded-[2rem] w-fit mt-8">
                        <h1 className='text-white text-[1rem]'>Deliver Here</h1>
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