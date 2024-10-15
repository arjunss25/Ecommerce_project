import React from 'react';
import { Star } from 'lucide-react';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Review = () => {
  return (
    <div className="w-full lg:w-[50vw] bg-[#F9F9F9] rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center mb-2">
          <img src="/api/placeholder/40/40" alt="User avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h2 className="text-base font-semibold">sarah Anderson</h2>
            <p className="text-xs text-gray-500">April 20, 2023</p>
          </div>
          <div className="ml-auto flex items-center bg-blue-700 rounded px-2 py-1">
            <Star className="w-4 h-4 text-white fill-current" />
            <span className="ml-1 text-white text-sm font-semibold">4.2</span>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-2">
          This was my first personal Mac purchase. We are using a combination of Mac & PC at work and while my PC skills are good the Mac side needs work.
        </p>
        <p className="text-sm text-gray-700 mb-2">
          So far I like the experience, although not all my apps will run on the Mac, I am finding workarounds.
        </p>
        <p className="text-xs text-gray-500 mb-2">One person found this helpful</p>
        <div className="flex items-center w-full justify-end">
          <button className="flex items-center text-gray-500 mr-4">
            <span className="mr-1"><AiOutlineLike /></span>
            34
          </button>
          <button className="flex items-center text-gray-500">
            <span className="mr-1"><AiOutlineDislike /></span>
            5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;