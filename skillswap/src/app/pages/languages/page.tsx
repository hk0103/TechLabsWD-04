'use client'; 

import React from 'react';
import Header from '@/app/components/Header'; 
import Footer from '@/app/components/Footer'; 
import Logo from '@/app/components/Logo'; 
import Socials from '@/app/components/Socials'; 

// Define an array of language objects with names, codes, and flag image paths
const languages = [
  { name: 'English', code: 'en', flag: '/images/flags/gr.png' },
  { name: 'Spanish',  code: 'es', flag: '/images/flags/es.png' },
  { name: 'French',   code: 'fr', flag: '/images/flags/fr.png' },
  { name: 'German',   code: 'de', flag: '/images/flags/de.png' },
  { name: 'Ukrainian',code: 'uk', flag: '/images/flags/uk.png' },
  { name: 'Russian',  code: 'ru', flag: '/images/flags/ru.png' },
  { name: 'Chinese',  code: 'zh', flag: '/images/flags/cn.png' },
];

const Languages = () => {
  return (
    <div>
      <Header /> 
      <Logo />   
      <Socials /> 

      {/* Section with language cards */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        {/* Title */}
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Explore Our Languages
        </h1>
        
        {/* Description */}
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Dive into a world of languages. Click on a language to find someone who can help you!
        </p>

        {/* Grid layout for language cards */}
        <div
          style={{
            display: 'grid', // Display languages in a grid layout
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', // Auto-resize columns based on available space
            gap: '20px', // Gap between grid items
          }}
        >
          {/* Map through the languages array and create a card for each language */}
          {languages.map((lang) => (
            <div
              key={lang.code} // Use the language code as the unique key for each card
              style={{
                display: 'block',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Shadow for 3D effect
                transition: 'transform 0.3s', // Smooth scaling transition on hover
                textDecoration: 'none',
                color: '#000',
                textAlign: 'center',
                cursor: 'pointer', // Show a pointer cursor on hover
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; // Enlarge the card on hover
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; // Reset scale when not hovering
              }}
            >
              {/* Container for the flag image */}
              <div
                style={{
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Flag image */}
                <img
                  src={lang.flag} // Flag path from the language object
                  alt={lang.name}  // Alt text is the language name
                  style={{
                    width: '100%',
                    maxWidth: '150px', // Set max width for image
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px', // Rounded corners for the flag
                  }}
                />
              </div>
              {/* Language name */}
              <h3 style={{ marginTop: '10px', fontSize: '1.2rem' }}>
                {lang.name} {/* Display the language name */}
              </h3>
            </div>
          ))}
          </div>
      </section>

      <Footer /> {/* Render Footer component */}
    </div>
  );
};

export default Languages;