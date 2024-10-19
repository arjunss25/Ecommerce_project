'use client'
import React, { useState } from 'react';
import { Star, HelpCircle } from 'lucide-react';

const EnhancedProductReview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  return (
    <div className="w-full min-h-[70vh] mx-auto p-4 sm:p-6 lg:p-10 bg-white rounded-lg flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 lg:pr-6 mb-6 lg:mb-0 lg:border-r border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">What makes a good review</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <HelpCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
            <p className="text-sm text-gray-600">Have you used this product? Your review should be about your experience with the product.</p>
          </div>
          <div className="flex items-start">
            <HelpCircle className="text-blue-500 mr-2 flex-shrink-0" size={20} />
            <p className="text-sm text-gray-600">Why review a product? Your valuable feedback will help us to give you better experience</p>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-2/3 lg:pl-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Rate this product</h2>
        
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="focus:outline-none mr-1"
              onClick={() => setRating(star)}
            >
              <Star
                size={28}
                className={`transition-colors duration-150 ${
                  star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
        
        <p className="text-sm text-gray-500 mb-2">Your rating will be saved</p>
        
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Review this product</h3>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              rows="4"
              placeholder="Description..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnhancedProductReview;