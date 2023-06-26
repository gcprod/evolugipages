import React from 'react';
import '../styles/banner.css';
import Image from 'next/image'

const Banner = () => {
  return (
    <div id="home" className="banner">  
      <div className="image-container">
        {/* <img src="https://raw.githubusercontent.com/gcprod/evolugiimg/main/IMG_1832.png" alt="Banner Image" /> */}
      </div>
      <div className="box">
        <div className="text-container">
          <h3>We make your mind</h3>
          <h1>Come Alive</h1>
          <p>
            We're an independent IT and Digital consultant. specializing in software, branding,
            campaigns, and digital design. We transform businesses into easily usable platforms.
          </p>
          <a href="#">Our Portfolio</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
