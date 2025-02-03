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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div 
      className="categories-container" 
      style={{ 
        padding: '80px 50px', 
        maxWidth: '1400px',   
        margin: '0 auto',
        boxSizing: 'border-box'
      }}
    >
      <h1 style={{ 
        fontFamily: 'sans-serif',
        textAlign: 'center', 
        marginBottom: '30px', 
        fontSize: '2.5rem',   
        fontWeight: '700',
        color: 'amber',       
      }}>
        Categories
      </h1>
      
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20} 
        slidesPerView={3} 
        loop={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: false,
          dynamicBullets: true
        }}
        navigation={true}  
        style={{
          padding: '0 1px',
          position: 'relative'
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div style={{ 
              textAlign: 'center',
              padding: '10px', 
              borderRadius: '12px',
              transition: 'transform 0.3s ease',
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '16/9', 
                width: '100%',
                height: '450px', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img 
                  src={category.image} 
                  alt={category.text} 
                  style={{
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain' 
                  }}
                />
              </div>
              <h3 style={{ 
                marginTop: '15px',
                fontWeight: '600',
                fontSize: '1.4rem', 
                color: '#2d3748',
                lineHeight: '1.4',
                minHeight: '3em',
                padding: '0 10px'
              }}>
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
