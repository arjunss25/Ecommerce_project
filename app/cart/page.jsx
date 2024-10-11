'use client'
import Cartproductscard from '../cartcomponents/Cartproductscard'
import Checkbox from '../Components/Checkbox'
import Footer from '../Components/Footer'
import MainNavbar from '../Components/MainNavbar'
import Ordersummary from '../Components/Ordersummary'
import Secondarynavbar from '../Components/Secondarynavbar'

const Cart = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      <Secondarynavbar />

      <div className="flex-grow flex flex-col lg:flex-row">
        {/* Left section */}
        <div className="w-full lg:w-3/5 p-6 lg:p-10">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl lg:text-4xl font-medium">Your Cart</h1>
            <div className="flex items-center space-x-2">
              <Checkbox />
              <span className="text-sm">Select All</span>
            </div>
          </div>

          {/* Cart items section */}
          <div className="space-y-6">
            <Cartproductscard />
            <Cartproductscard />
            <Cartproductscard />
            <Cartproductscard />
          </div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-2/5 p-6 lg:p-10 bg-gray-50">
          <Ordersummary />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Cart