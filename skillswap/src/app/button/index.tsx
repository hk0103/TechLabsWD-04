import React from 'react';
import Header from './../components/Header';
import Button from './../components/Button'; 

const Home = () => {
  return (
    <div>
      <Header /> 
      <main style={{ padding: '20px' }}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of your website!</p>
        <Button text="Go to Languages" link="../button/languages" /> 
      </main>
    </div>
  );
};

export default Home;