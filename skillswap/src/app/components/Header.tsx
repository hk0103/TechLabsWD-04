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
      {/* Logo */}
      <Logo />

      {/* Navigation */}
      <nav style={{
        display: 'flex',
        gap: '15px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <a href="#home" style={{ color: '#000', textDecoration: 'none' }}>Home</a>
        <a href="#languages" style={{ color: '#000', textDecoration: 'none' }}>Languages</a>
        <a href="#art-music" style={{ color: '#000', textDecoration: 'none' }}>Art & Music</a>
        <a href="#sport" style={{ color: '#000', textDecoration: 'none' }}>Sport</a>
        <a href="#other" style={{ color: '#000', textDecoration: 'none' }}>Other</a>
      </nav>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search for skill"
          style={{
            padding: '10px',
            width: '200px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>
    </header>
  );
}