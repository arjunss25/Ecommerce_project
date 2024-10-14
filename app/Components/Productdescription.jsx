import Image from 'next/image';
import React from 'react';

const ProductDescription = () => {
  const sections = [
    { title: 'THE PERFUME', expanded: true },
    { title: 'THE INSPIRATION', expanded: false },
    { title: 'BOTTLE DESIGN', expanded: false },
    { title: 'DIRECTIONS FOR USE', expanded: false },
  ];

  return (
    <div className="flex bg-white w-full mx-auto px-10 lg:flex-row flex-col">
      <div className="w-full lg:w-2/3 p-6">
        <h2 className="text-xl font-bold mb-4">PRODUCT DESCRIPTION</h2>
        {sections.map((section, index) => (
          <div key={index} className="mb-2 border-b border-gray-200 py-2">
            <div className="flex justify-between items-center">
              <span className={`text-[1.2rem] font-medium ${section.title === 'THE INSPIRATION' ? 'text-blue-500' : ''}`}>
                {section.title}
              </span>
              <span className="text-xl">{section.expanded ? '-' : '+'}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-1/3">
        <div className=" w-full flex relative items-center justify-center rounded-[1rem] overflow-hidden">
            <Image src='/description-img.svg' width={400} height={800} objectFit='cover' ></Image>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;