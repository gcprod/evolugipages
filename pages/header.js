"use client"
import React, { useState, useEffect } from 'react';
import '../styles/header.css';

const categories = [
  { name: 'about us', link: '#aboutus' },
  { name: 'team', link: '#team' },
  { name: 'services', link: '#services' },
  { name: 'FAQ', link: '#faq' },
];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [id, setId] = useState('home')
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if(window.scrollY >= sectionTop){
        setId(section.getAttribute("id"))
        
      }
    })
    if (scrolled > 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const handleMenuClick = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
  };

  return (
    <header
      style={{
        background: visible || showMenu ? 'var(--bg-main)' : 'transparent',
        boxShadow: visible ? '2px 20px 30px var(--shadow-color)' : 'none',
      }}
    >
      <nav>
        <a href="#" className="Logo">
          <image src="/logo-navbar.png" alt="Logo" />
        </a>

        <div className="menu_btn" onClick={handleMenuClick}>
          {showMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
        </div>

        <ul style={{ height: showMenu ? 250 : 0 }}>
          {categories.map((category) => (
            <li key={category.name}>
              <a href={category.link} className={id === category.name ? 'active' : ''} onClick={handleMenuItemClick}>
                {category.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#career" className="buttoncareer" onClick={handleMenuItemClick}>
              Career
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
