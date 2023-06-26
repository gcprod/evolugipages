"use client"

import React, { useRef } from 'react';
import '../styles/team.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const team = [
  {
    id: 1,
    name: 'Dony Aditya',
    position: 'CTO',
    avatar: 'https://raw.githubusercontent.com/gcprod/evolugiimg/main/312.jpg',
    text: "The world is busier than ever. With more and more brands competing for attention from today's ever-evolving consumers"
  },
  {
    id: 2,
    name: 'Gilang',
    position: 'Asst. CTO',
    avatar: 'https://raw.githubusercontent.com/gcprod/evolugiimg/main/312.jpg',
    text: "The world is busier than ever. With more and more brands competing for attention from today's ever-evolving consumers"
  }
];

const Team = () => {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section id="team">
      <div className='img-container'>
        <Image
          src='https://raw.githubusercontent.com/gcprod/evolugiimg/main/Ss.png'
          alt='https://raw.githubusercontent.com/gcprod/evolugiimg/main/Ss.png'
          width={488}
          height={482}
        />
      </div>

      <div className='slider'>
        <h3>We are who we are</h3>
        <h2>Our team</h2>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000, // Delay in milliseconds (5 seconds in this case)
            disableOnInteraction: false // Autoplay continues after user interaction
          }}
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <div className='card'>
                <div className='text'>
                  <i className='fas fa-quote-left'></i>
                  <p>{member.text}</p>
                  <strong>{member.name} - {member.position}</strong>
                </div>
                <div className='avatar'>
                  <Image
                    src={member.avatar}
                    alt={member.avatar}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-buttons">
          
        </div>
      </div>
    </section>
  );
};

export default Team;
