import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const LanguagesPage = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      
      <main style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h1>Languages Page</h1>
        <p>This is the Languages page.</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LanguagesPage;