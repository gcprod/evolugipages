import React from 'react'
import '../styles/aboutus.css'

const AboutUs = () => {
  return (
    <section id='aboutus' className='aboutus'>
        <h2 className="aboutus-title">About Us</h2>

        <div className='card-container'>
          <div className='card'>
            <h3>Making people care since 2023</h3>
            <p>The world is busier than ever. With more and more brands competing for attention from today's ever-evolving consumers</p>
          </div>

          <div className='card'>
            <h3>It's just the start</h3>
            <p>We know that launching a new brand or campaign is just the start. So we make sure you have everything you need for the journey.</p>
          </div>

          <div className='card'>
            <h3>Working together</h3>
            <p>When you work with us, you'll become part of the team too, not just along for the ride. We won't surprise you with big reveals</p>
          </div>

          <div className='card'>
            <h3>Strategy at the heart</h3>
            <p>We build for growth. Break-out brands don't happen overnight. They take robust consumer insights. The world is busier than ever</p>
          </div>
        </div>
    </section>
  );
};

export default AboutUs;
