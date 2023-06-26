"use client"
import React from 'react';
import '../styles/services.css';
import Image from 'next/image';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Services = () => {
    return (
        <section id="services">
          
    
          <div className='slider'>
          <h3>Building brands</h3>
            <h2>our services</h2>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ 
                clickable:true,
             }}
             modules={Pagination}
             >
            
            </Swiper>
          </div>
          <div className='card-container'>
          <div className='card'>
            <h3>Software Application With Web Based</h3>
            <p>We develop various types of applications tailored to your specific needs, ranging from company profile websites, POS systems, school academic information systems, cooperatives, goods inventory, e-commerce, and more.</p>
          </div>

          <div className='card'>
            <h3>Creative & social campaigns </h3>
            <p>We generate innovative and captivating creative concepts for your marketing campaigns, and we understand the importance of differentiating yourself from competitors, and we provide unique and compelling ideas.</p>
          </div>

          <div className='card'>
            <h3>Branding & positioning</h3>
            <p>We specialize in developing strategic brand identities that align with your company's values, goals, and target audience, and we conduct thorough market research and competitor analysis to create a unique brand positioning that sets you apart. </p>
          </div>

          <div className='card'>
            <h3>Logo design & visual identity</h3>
            <p>We go beyond just a logo and develop a comprehensive visual identity system for your brand. This includes defining typography, color palettes, graphic elements, and guidelines for consistent brand usage across various platforms and materials.</p>
          </div>
          </div>
        </section>
      );
    };
    

export default Services;
