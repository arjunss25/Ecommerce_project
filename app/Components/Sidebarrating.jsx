import React from 'react';
import { Star } from 'lucide-react';
import Checkbox from './Checkbox';

const Sidebarrating = () => {
  const ratings = [
    { stars: 5, count: 210 },
    { stars: 4, count: 500 },
    { stars: 3, count: 210 },
    { stars: 2, count: 210 },
    { stars: 1, count: 210 },
  ];

  return (
    <div className="w-full ">
      <h3 className="text-[1.2rem] font-medium mb-2">Rating</h3>
      {ratings.map(({ stars, count }) => (
        <label key={stars} className="flex items-center mb-2 cursor-pointer">
          <Checkbox/>
          {/* <input type="checkbox" className="mr-2 h-4 w-4 rounded border-gray-300" /> */}
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={index < stars ? 'text-zinc-800 fill-zinc-800' : 'text-gray-300'}
              />
            ))}
            <span className="ml-1 text-sm text-gray-600">({count})</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default Sidebarrating;