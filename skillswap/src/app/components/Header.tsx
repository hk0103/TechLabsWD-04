'use client'; 

import { useState, useEffect } from 'react'; 
import Link from 'next/link'; 
import Logo from './Logo'; 
import Button from './Button'; 

export default function Header() {
  // State to track if the header is visible
  const [isVisible, setIsVisible] = useState(true);
  // State to store the last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Function to handle scroll behavior
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide the header when scrolling down
      } else {
        setIsVisible(true); // Show the header when scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener on unmount
    };
  }, [lastScrollY]); // Run effect when lastScrollY changes

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
      {/* Top section of the header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center', 
          width: '100%', 
          marginBottom: '10px',
        }}
      >
        {/* Logo on the left */}
        <div><Logo /></div>

        {/* Search bar in the center */}
        <div
          style={{
            flex: 1, 
            maxWidth: '700px',
            margin: '0 10px 0 auto',
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              width: '100%', 
              padding: '10px', 
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>

        {/* Sign Up and Log In buttons on the right */}
        <div style={{ display: 'flex', marginLeft: 'auto', gap: '10px' }}>
          <Button text="Sign Up" link="../pages/signup" />
          <Button text="Log In" link="../pages/login" />
        </div>
      </div>

      {/* Navigation menu */}
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
        {/* Navigation links */}
        <Link href="/"><Button text="Home" link="/" /></Link>
        <Link href="/languages"><Button text="Languages" link="../pages/languages" /></Link>
        <Link href="/music"><Button text="Art & Music" link="../pages/music" /></Link>
        <Link href="/sport"><Button text="Sport" link="../pages/sport" /></Link>
        <Link href="/other"><Button text="Other" link="../pages/other" /></Link>
      </nav>
    </header>
  );
}