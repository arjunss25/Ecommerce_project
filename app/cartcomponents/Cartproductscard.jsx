import React from 'react'
import Checkbox from '../Components/Checkbox'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";

const Cartproductscard = () => {

  return (
    <div className='w-full max-w-4xl mx-auto border-b-2 border-black py-4'>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Checkbox and Image */}
        <div className="flex items-center gap-4">
          <Checkbox />
          <div className="w-[10rem] h-[6rem] overflow-hidden rounded-lg overflow-hidden">
            <Image src='/productimg.png' width={300} height={300} alt='Product' className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full">
          <div className="flex flex-row justify-between w-full items-center">
            
            <div>
              <h2 className='text-sm'>Perfume</h2>
              <h2 className='text-lg font-semibold truncate'>SAUVAGE dior</h2>
              <div className="mt-1 flex flex-col leading-none leading-none">
                <span className='line-through text-red-400 text-sm'>₹3,999</span>
                <span className='text-xl font-semibold'>₹1,999</span>
              </div>
            </div>

            {/* Quantity and Remove buttons */}
            <div className="flex flex-col items-start sm:items-center gap-2 mt-2 sm:mt-0">
              <div className="flex items-center justify-center w-28 h-10 bg-zinc-200 rounded-full">
                <button className="px-2"><FiMinus /></button>
                <span className="mx-2">5</span>
                <button className="px-2"><FiPlus /></button>
              </div>
              <button className="flex items-center justify-center w-28 h-10 bg-zinc-200 rounded-full text-sm">
                <MdDelete className="text-red-500 mr-1" />
                Remove
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartproductscard