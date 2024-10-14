import React from 'react';

const RatingBreakdown = () => {
  const ratings = [
    { stars: 5, percentage: 89 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  const averageRating = 4.5;
  const totalReviews = 150;

  return (
    <div className="font-sans p-4 max-w-md">
      <h2 className="text-xl font-bold mb-2">All Reviews</h2>
      <div className="flex items-center mb-4">
        <span className="text-3xl font-bold mr-2">{averageRating}</span>
        <span className="text-3xl font-bold mr-2">/</span>
        <span className="text-3xl font-bold">5.0</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">This product has been reviewed by {totalReviews} customers</p>
      
      {ratings.map(({ stars, percentage }) => (
        <div key={stars} className="flex items-center mb-2">
          <div className="w-24 flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < stars ? 'text-[#666666]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
            <div className="bg-[#01225B] h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
          </div>
          <span className="ml-2 text-sm w-8">{percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default RatingBreakdown;