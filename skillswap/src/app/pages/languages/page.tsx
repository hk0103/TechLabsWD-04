'use client';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Logo from '@/app/components/Logo';
import Socials from '@/app/components/Socials';

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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Explore Our Languages
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
        Dive into a world of languages. Click on a language to find someone who can help you!
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              style={{
                display: 'block',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                textDecoration: 'none',
                color: '#000',
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
                  src={lang.flag}
                  alt={lang.name}
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
                {lang.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Languages;