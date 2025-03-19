'use client'; 

import React from 'react';
import Header from '@/app/components/Header'; 
import Footer from '@/app/components/Footer'; 
import Logo from '@/app/components/Logo'; 
import Socials from '@/app/components/Socials'; 

// Array of music/art categories with names and image paths
const music = [
  { name: 'Painting', image: '/images/music/1.jpg' }, 
  { name: 'Photography', image: '/images/music/2.jpg' }, 
  { name: 'Singing', image: '/images/music/3.jpg' },
  { name: 'Guitar', image: '/images/music/4.jpg' },
  { name: 'Piano', image: '/images/music/5.jpg' },
  { name: 'Crocheting', image: '/images/music/6.jpg' },
];

const Music = () => {
  return (
    <div>
      <Header /> 
      <Logo />    
      <Socials /> 

      {/* Section for displaying music/art categories */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        {/* Title */}
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Explore Our Art & Music
        </h1>
        
        {/* Description */}
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Dive into a world of art & music. Click what you like to learn and find someone who can help you!
        </p>

        {/* Grid layout for music/art items */}
        <div
          style={{
            display: 'grid', // Use grid layout
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Auto-fit grid columns based on screen size
            gap: '20px', // Space between grid items
          }}
        >
          {/* Iterate over the music array and create a card for each item */}
          {music.map((item) => (
            <div
              key={item.name} // Use item name as the key
              style={{
                padding: '20px',
                borderRadius: '10px', // Rounded corners for the card
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Add shadow for 3D effect
                transition: 'transform 0.3s', // Smooth transform effect on hover
                textAlign: 'center',
                cursor: 'pointer', // Change cursor to pointer on hover
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; // Slightly enlarge the card on hover
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; // Reset scale when hover ends
              }}
            >
              {/* Container for image */}
              <div
                style={{
                  width: '100%',
                  height: '100px', // Set a fixed height for the image container
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', // Center the image horizontally and vertically
                }}
              >
                <img
                  src={item.image} 
                  alt={item.name}   
                  style={{
                    width: '100%',
                    maxWidth: '150px', 
                    height: 'auto',
                    objectFit: 'cover', 
                    borderRadius: '8px', 
                  }}
                />
              </div>
              {/* Display the name of the art/music item */}
              <h3 style={{ marginTop: '10px', fontSize: '1.2rem' }}>
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Footer /> {/* Render Footer component */}
    </div>
  );
};

export default Music;