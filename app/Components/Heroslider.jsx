'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import './Heroslider.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Heroslider({ images }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className='w-full h-[40vh] lg:h-[60vh]'>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image 
                src={item.image} 
                alt={item.alt || `Slide ${index + 1}`} 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}