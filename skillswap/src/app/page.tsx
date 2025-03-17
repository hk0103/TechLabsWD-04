'use client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LoginRegister from "./components/LoginRegister";


export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <LoginRegister />

      <Footer />
    </>
  );
}