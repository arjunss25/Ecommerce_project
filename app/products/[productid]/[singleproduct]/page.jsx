'use client';
import MainNavbar from '@/app/Components/MainNavbar';
import Secondarynavbar from '@/app/Components/Secondarynavbar';
import { products } from '@/app/utils/Produtsarray';
import Image from 'next/image';
import { Star, Heart, Minus, Plus, Shield } from 'lucide-react';
import { useState } from 'react';
import Review from '@/app/Components/Review';
import ProductDescription from '@/app/Components/Productdescription';
import RatingBreakdown from '@/app/Components/Ratingbreakdown';
import { SlArrowDown } from 'react-icons/sl';
import { LiaFilterSolid } from 'react-icons/lia';
import Mainbtn from '@/app/Components/Mainbtn';
import Productcard from '@/app/Components/Productcard';
import Footer from '@/app/Components/Footer';

const Page = ({ params }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
      {products.map((items, index) => {
        if (params.singleproduct == items.id) {
          return (
            <>
              <MainNavbar />
              <Secondarynavbar />

              <div className="product-view-section w-full  bg-white p-4 md:p-6 lg:p-10">
                <div className="max-w-7xl mx-auto">
                  <div className="flex flex-col lg:flex-row lg:space-x-[5rem] ">
                    {/* Image Section */}
                    <div className="image-section w-full lg:w-1/3 mb-8 lg:mb-0">
                      <div className="main-image w-full aspect-square relative rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/main.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="main-product-image"
                        />
                      </div>
                      <div className="sub-images flex space-x-2">
                        {[
                          '/mn-1.svg',
                          '/mn-2.svg',
                          '/mn-3.svg',
                          '/mn-4.svg',
                        ].map((src, index) => (
                          <div
                            key={index}
                            className="w-1/4 aspect-square relative rounded-lg overflow-hidden"
                          >
                            <Image
                              src={src}
                              layout="fill"
                              objectFit="cover"
                              alt={`product-sub-image-${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="product-info w-full lg:w-1/3 mb-8 lg:mb-0">
                      <div className="flex justify-between items-start mb-4">
                        <h1 className="text-3xl font-medium w-[70%]">
                          {items.name}
                          <span className="text-2xl"> 50ml</span>
                        </h1>
                        <span className="bg-blue-600 text-white w-[6rem] py-1 flex items-center justify-center rounded-full text-sm font-semibold">
                          60% OFF
                        </span>
                      </div>

                      <div className="flex items-center mb-4">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">
                          4.9 Rating
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-600">
                          2k+ Reviews
                        </span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span className="text-sm text-gray-600">500+ Sold</span>
                      </div>

                      <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold mb-4">
                        In Stock
                      </div>

                      <div className="mb-6">
                        <p className="text-md font-medium mb-2">Choose Size</p>
                        <div className="flex space-x-2">
                          {['50ml', '75ml', '150ml', '250ml'].map((size) => (
                            <button
                              key={size}
                              className="w-20 h-16 border border-gray-300 rounded-md flex items-center justify-center text-sm hover:border-blue-500 transition-colors"
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-lg font-semibold">About Item</h2>
                        <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                          <li>Quantity: 80 ml</li>
                          <li>Ideal For: Men</li>
                          <li>Fragrance Classification: Eau de Parfum</li>
                          <li>Fragrance Family: Fresh</li>
                          <li>Fragrance Segment: Premium</li>
                        </ul>
                      </div>
                    </div>

                    {/* Order Details Section */}
                    <div className="order-details w-full lg:w-1/3">
                      <div className="bg-blue-800 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <span className="font-bold">25% OFF</span>
                        <span className="text-sm">Until Feb, 2024</span>
                      </div>

                      <div className="border border-gray-200 rounded-b-lg p-4 bg-white ">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-lg font-semibold">
                            Order Details
                          </h2>
                          <Heart className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                        </div>

                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 relative rounded-md overflow-hidden mr-4">
                            <Image
                              src="/main.svg"
                              layout="fill"
                              objectFit="cover"
                              alt="Selected product"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">Selected Quantity</p>
                            <p className="text-gray-600">XL</p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center border rounded-full">
                            <button
                              onClick={decrementQuantity}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 font-medium">{quantity}</span>
                            <button
                              onClick={incrementQuantity}
                              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-400 line-through">₹3,000</p>
                            <p className="font-bold text-lg">
                              Total Price ₹2000
                            </p>
                          </div>
                        </div>

                        <button className="w-full bg-blue-800 text-white py-2 rounded-lg mb-2 hover:bg-blue-700 transition-colors">
                          Buy Now
                        </button>
                        <button className="w-full border border-blue-800 text-blue-800 py-2 rounded-lg mb-4 hover:bg-blue-50 transition-colors">
                          Add to Bag
                        </button>

                        <div className="flex items-center justify-center text-gray-600 text-sm">
                          <Shield className="w-4 h-4 mr-2" />
                          <span>Safe and Secure Payments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* product-discription */}
              <ProductDescription />

              {/* rating-section */}
              {/* rating-section */}
              <div className="ratingandreview-sec w-full px-4 sm:px-10  flex flex-col lg:flex-row mt-10">
                <div className="start-rating-sec w-full lg:w-[40vw] ">
                  <RatingBreakdown />
                </div>

                <div className="review-card-sec w-full lg:w-[60vw]  mt-5 lg:mt-0">
                  <div className="btn-sec flex w-full items-center justify-center sm:justify-end gap-3 sm:gap-5 px-2 py-2">
                    <div className="px-3 py-1 border-2 border-black rounded-full w-fit flex items-center justify-center gap-2">
                      Latest <SlArrowDown />
                    </div>
                    <div className="px-3 py-1 border-2 border-black rounded-full w-fit flex items-center justify-center">
                      Rate the Product
                    </div>
                  </div>

                  <div className="review-section mt-5 w-full flex flex-col gap-5 items-end px-2">
                    <Review />
                    <Review />
                  </div>
                </div>
              </div>

              {/* rating-viewall-btn */}
              <div className="btn-sec w-full flex items-center justify-center mt-10">
                <Mainbtn />
              </div>

              {/* similar-products */}
              <div className="similar-products w-full px-10 mt-10">
                <div className="title-section flex justify-between leading-none">
                  <div className="headings">
                    <h3 className='text-[1rem]'>SUGGESTED</h3>
                    <h1 className='text-[3rem] font-medium'>SIMILAR PRODUCTS</h1>
                  </div>

                  {/* btn-sec */}
                  <div className="btn-div hidden sm:block">
                  <Mainbtn/>
                  </div>
                </div>


                <div className="product-sec w-full flex gap-8 px-10 flex-wrap shrink-0 justify-center mt-10">
                  <Productcard/>
                  <Productcard/>
                  <Productcard/>
                  <Productcard/>
                </div>
              </div>

              <Footer/>
            </>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Page;
