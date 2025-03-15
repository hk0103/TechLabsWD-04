'use client';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(10px)', 
        color: '#000',
        padding: '10px 20px',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)', 
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '10px', 
        }}
      >
        {/* Left: Logo */}
        <div>
        <img
            src="/images/homepage/favicon.png"
            alt="Skill Swap Logo"
            style={{
              height: '40px', 
              width: 'auto',
            }}
          />
        </div>

        {/* Middle: Search Bar */}
        <div
          style={{
            flex: 1,
            maxWidth: '600px', 
            margin: '0 20px', 
          }}
        >
          <input
            type="text"
            placeholder="Search "
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>

        {/* Right: Login Button */}
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#000', 
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Sign In
        </button>
      </div>

      {/* Second Line */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px', 
          padding: '10px 0',
          borderTop: '1px solid #e0e0e0', 
          width: '100%',
        }}
      >
        <a href="#home" style={{ color: '#000', textDecoration: 'none' }}>
          Home
        </a>
        <a href="#languages" style={{ color: '#000', textDecoration: 'none' }}>
          Languages
        </a>
        <a href="#art-music" style={{ color: '#000', textDecoration: 'none' }}>
          Art & Music
        </a>
        <a href="#sport" style={{ color: '#000', textDecoration: 'none' }}>
          Sport
        </a>
        <a href="#other" style={{ color: '#000', textDecoration: 'none' }}>
          Other
        </a>
      </nav>
    </header>
  );
}