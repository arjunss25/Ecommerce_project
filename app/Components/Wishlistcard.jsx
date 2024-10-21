import Image from 'next/image';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const Wishlistcard = () => {
  return (
    <div className="w-full max-w-[40rem] rounded-2xl overflow-hidden flex flex-col sm:flex-row border-black border-2 bg-white shadow-md">
      <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto relative">
        <Image
          className="object-cover rounded-[1rem]"
          src="/productimg.png"
          layout="fill"
          alt="Product image"
        />
      </div>

      <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="space-y-2">
            <h2 className="text-sm sm:text-base text-gray-600">Perfume</h2>
            <h2 className="text-lg sm:text-xl font-semibold truncate">SAUVAGE dior</h2>
            <h2 className="text-sm sm:text-base">50ml</h2>
            <div className="mt-2 sm:mt-4">
              <span className="text-gray-500 text-xs sm:text-sm">Quantity: 1</span>
              <p className="text-lg sm:text-xl font-semibold mt-1">₹1,999</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-auto sm:my-auto">
            <button className="w-full sm:w-auto bg-black text-white px-4 py-2 rounded-full text-sm sm:text-base hover:bg-gray-800 transition-colors">
              Move to Cart
            </button>
            <button className="w-full sm:w-auto px-4 py-2 rounded-full text-red-500 border-black border-2 text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
              <MdDelete className="text-red-500" />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlistcard;