'use client'

import React, { useState, useEffect, useRef } from 'react';

const PriceRangeSlider = () => {
  const [price, setPrice] = useState(0);
  const rangeRef = useRef(null);

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  useEffect(() => {
    const rangeInput = rangeRef.current;
    const updateRangeStyle = () => {
      const percent = ((price - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
      rangeInput.style.background = `linear-gradient(to right, #3b82f6 ${percent}%, #e5e7eb ${percent}%)`;
    };
    updateRangeStyle();
  }, [price]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="priceRange" className="block text-[1.2rem]  font-medium text-black">
          Price
        </label>
        <span className="text-sm text-gray-500">${price.toFixed(2)}</span>
      </div>
      <input
        ref={rangeRef}
        type="range"
        id="priceRange"
        name="priceRange"
        min="0"
        max="200"
        step="0.01"
        value={price}
        onChange={handlePriceChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        style={{
          WebkitAppearance: 'none',
          outline: 'none',
        }}
      />
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          cursor: pointer;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>$0.00</span>
        <span>$200.00</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;