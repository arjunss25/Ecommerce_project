import Image from 'next/image';
import React from 'react';
import { MdDelete } from 'react-icons/md';

const Ordersummarycard = () => {
  return (
    <div className="w-full max-w-[40rem]  rounded-[2rem] overflow-hidden flex flex-col sm:flex-row border-black border-[2px]">
      <div className="left-section w-full sm:w-[30%] aspect-square sm:aspect-auto">
        <div className="relative w-full h-full">
          <Image
            className="object-cover rounded-[1rem]"
            src="/productimg.png"
            layout="fill"
            alt="Product image"
          />
        </div>
      </div>

      <div className="right-section w-full sm:w-[70%] p-4 sm:p-5 flex flex-col justify-between">
        <div className="top w-full flex items-start justify-between">
          <div>
            <h2 className="text-base sm:text-lg">Perfume</h2>
            <h2 className="text-xl sm:text-[1.5rem] font-semibold truncate">
              SAUVAGE dior
            </h2>
            <h2 className="text-base sm:text-lg">50ml</h2>
          </div>

          <MdDelete className="text-red-500 text-[1.5rem]" />
        </div>

        <div className="price w-full flex flex-col items-end mt-4 sm:mt-0">
          <div className="flex flex-col leading-none">
            <span className="text-zinc-500 text-sm sm:text-base mb-2">Quantity: 1</span>
            <span className="text-xl sm:text-[1.5rem] font-semibold">₹1,999</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordersummarycard;