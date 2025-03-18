'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Logo from '@/app/components/Logo';
import Socials from '@/app/components/Socials';

const sport = [
  { name: 'Public Speaking', image: '/images/other/1.jpg' }, 
  { name: 'Cooking', image: '/images/other/2.jpg' }, 
  { name: 'Programming', image: '/images/other/3.jpg' },
  { name: 'Graphic Design', image: '/images/other/4.jpg' },
];

const Other = () => {
  return (
    <div>
      <Header />
      <Logo />
      <Socials />

      {/* Section with sport categories */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Explore New Skills & Passions 
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Learning never stops! 
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
          }}
        >
          {sport.map((item) => (
            <div
              key={item.name} 
              style={{
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
              <h3 style={{ marginTop: '10px', fontSize: '1.2rem' }}>
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Other;