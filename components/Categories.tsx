"use client";

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Category = {
  image: string;
  text: string;
};

const categories: Category[] = [
  { image: '/Mandir.avif', text: 'MANDIR' },
  { image: '/Sofa.avif', text: 'SOFA' },
  { image: '/Bed.avif', text: 'BED' },
  { image: '/Wardrobe.avif', text: 'WARDROBE' },
  { image: '/Dining.avif', text: 'DINING' },
  { image: '/Centre-table.avif', text: 'CENTRE-TABLE' },
  { image: '/Tv-showcase.avif', text: 'TV-SHOWCASE' },
  { image: '/Office.avif', text: 'OFFICE' },
  { image: '/Study-table.avif', text: 'STUDY-TABLE' },
  { image: '/Shoe-rack.avif', text: 'SHOE-RACK' },
  { image: '/Bean-bag.avif', text: 'BEAN' },
  { image: '/Book-shelf.avif', text: 'BOOK-SHELF' },
  { image: '/Recliner.avif', text: 'RECLINER' },
];

const Categories: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3.4);

  useEffect(() => {
    const handleResize = () => {
      // Check screen width and set slidesPerView
      if (window.innerWidth < 768) {
        // Mobile devices: 1-2 slides
        setSlidesPerView(1.2);
      } else if (window.innerWidth < 1024) {
        // Tablet devices: 2-3 slides
        setSlidesPerView(2.4);
      } else {
        // Larger screens: keep original 3.4 slides
        setSlidesPerView(3.4);
      }
    };

    // Set initial slides
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Set mounted to true
    setMounted(true);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div 
      className="categories-container px-4 sm:px-6 lg:px-8" 
      style={{ 
        maxWidth: '1400px',   
        margin: '0 auto',
        boxSizing: 'border-box',
        padding: '80px 0px'
      }}
    >
      <h1 className="text-center mb-8 font-sans font-bold text-4xl sm:text-3xl md:text-4xl text-amber-800">
        Categories
      </h1>
      
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20} 
        slidesPerView={slidesPerView} 
        loop={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={true}  
        style={{
          padding: '0 1px',
          position: 'relative',
          ...{
            '--swiper-navigation-color': '#4a2c2a' as any,
            '--swiper-navigation-size': '30px' as any
          }
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="text-center p-2 rounded-xl transition-transform duration-300"> 
              <div className="relative rounded-lg overflow-hidden aspect-video w-full h-[450px] sm:h-[350px] md:h-[400px] flex items-center justify-center">
                <img 
                  src={category.image} 
                  alt={category.text} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="mt-4 font-semibold text-2xl sm:text-xl md:text-2xl text-gray-700 leading-tight min-h-[3em] px-2">
                {category.text}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;