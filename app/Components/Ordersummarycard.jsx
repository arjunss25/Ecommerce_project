import Image from 'next/image';
import React from 'react';

const Ordersummarycard = () => {
  return (
    <div className="w-[40rem] h-[25vh] bg-red-500 rounded-[2rem] overflow-hidden flex">
      <div className="left-section h-full w-[12rem] flex bg-yellow-500">
        <div className="img-sec w-full h-full bg-green-500">
          <Image
            className="object-contain"
            src="/productimg.png"
            width={500}
            height={550}
            alt=""
          ></Image>
        </div>
      </div>

      <div className="right-section w-[28rem] h-full bg-zinc-200">
        <div>
          <h2 className="text-sm">Perfume</h2>
          <h2 className="text-lg font-semibold truncate">SAUVAGE dior</h2>
          <h2 className="text-sm">50ml</h2>
        </div>
      </div>
    </div>
  );
};

export default Ordersummarycard;
