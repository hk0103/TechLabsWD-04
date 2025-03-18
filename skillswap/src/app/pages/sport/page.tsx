'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Logo from '@/app/components/Logo';
import Socials from '@/app/components/Socials';

const sport = [
  { name: 'Zumba', image: '/images/sport/1.jpg' }, 
  { name: 'Running', image: '/images/sport/2.png' }, 
  { name: 'Tennis', image: '/images/sport/3.jpg' },
  { name: 'Personal Training', image: '/images/sport/4.jpg' },
  { name: 'Pilates', image: '/images/sport/5.jpeg' },
];

const Sport = () => {
  return (
    <div>
      <Header />
      <Logo />
      <Socials />

      {/* Section with sport categories */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Explore Our Sport
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Dive into a world of sport. Click what you like to learn and find someone who can help you!
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

export default Sport;