'use client'
import Checkbox from '../Components/Checkbox'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'

const Cart = () => {
  return (
    <div>
        <MainNavbar/>
        <Secondarynavbar/>

        <div className="Cart-content-section flex">

          {/* left-section */}
        <div className="left-section w-[60vw] min-h-[80vh] bg-red-500 ">
            <div className="cart-top-section w-full h-[15vh] bg-blue-500 flex items-center justify-between px-5 py-2">
              <h1 className='text-[4rem] font-semibold'>Your Cart</h1>
              <div className="check-section flex gap-1">
                <Checkbox/>
                <h2>Select All</h2>
              </div>
            </div>
        </div>


        {/* right-section */}
        <div className="right-section w-[40vw] min-h-[80vh] bg-green-500">

        </div>




        </div>
        
    </div>
  )
}

export default Cart