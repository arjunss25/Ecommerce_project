import Image from 'next/image';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const Wishlistcard = () => {
    return (
        <div className="w-full max-w-[40rem]  rounded-[2rem] overflow-hidden flex flex-col sm:flex-row border-black border-[2px]">
          <div className="left-section w-full sm:w-[30%]  aspect-square sm:aspect-auto overflow-hidden">
            <div className="relative w-full h-full ">
              <Image
                className="object-cover rounded-[1rem]" 
                src="/productimg.png"
                layout="fill"
                alt="Product image"
              />
            </div>
          </div>
    
          <div className="right-section w-full sm:w-[70%]  p-4 sm:p-5 flex flex-col justify-between ">
            <div className="top w-full flex items-start justify-between">
              <div>
                <h2 className="text-base sm:text-lg">Perfume</h2>
                <h2 className="text-xl sm:text-[1.5rem] font-semibold truncate">
                  SAUVAGE dior
                </h2>
                <h2 className="text-base sm:text-lg">50ml</h2>

                {/* pricing */}
                <div className="price w-full flex flex-col  mt-4 ">
                  <div className="flex flex-col leading-none">
                    <span className="text-zinc-500 text-sm sm:text-base mb-2">Quantity: 1</span>
                    <span className="text-xl sm:text-[1.5rem] font-semibold">₹1,999</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 my-auto">
                <button className="bg-black text-white px-6 py-2 rounded-full">
                  Move to Cart
                </button>
                <button className="px-6 py-2 rounded text-red-500 border-black border-[2px] rounded-full flex items-center justify-center gap-3">
                <MdDelete className="text-red-500 " />Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
export default Wishlistcard;