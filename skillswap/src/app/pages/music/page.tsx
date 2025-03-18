'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Logo from '@/app/components/Logo';
import Socials from '@/app/components/Socials';

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

      {/* Section with music/art categories */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Explore Our Art & Music
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Dive into a world of art & music. Click what you like to learn and find someone who can help you!
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
          }}
        >
          {music.map((item) => (
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

export default Music;