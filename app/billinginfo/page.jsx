'use client'
import Cartproductscard from '../cartcomponents/Cartproductscard'
import Checkbox from '../Components/Checkbox'
import Footer from '../Components/Footer'
import MainNavbar from '../Components/MainNavbar'
import Ordersummary from '../Components/Ordersummary'
import Secondarynavbar from '../Components/Secondarynavbar'

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
              <div className="check-section flex gap-1">
                <Checkbox/>
                <h2>Select All</h2>
              </div>
            </div>


          {/* cart-items-section */}
          <div className="cart-items-section w-full flex justify-center items-center flex-col gap-5 px-10 mt-10">
            <Cartproductscard/>
            <Cartproductscard/>
            <Cartproductscard/>
            <Cartproductscard/>
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