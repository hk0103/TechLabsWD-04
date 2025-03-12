'use client';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OffersSection from "./components/OffersSection";
import HowItWorks from "./components/HowItWorks";
import LoginRegister from "./components/LoginRegister";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <LoginRegister />

      <div className="min-h-screen flex flex-col justify-center w-full mx-auto px-8 lg:px-8 xl:px-[90px] pt-32">
        {/* View Offers by Category Section */}
        <div className="mt-32 text-center border-b-2 border-gray-300 pb-8">
          <h2 className="text-5xl font-bold uppercase">VIEW OFFERS BY CATEGORY</h2>
        </div>

        {/* Languages Offers Section */}
        <OffersSection
          category="Languages"
          offers={[
            { title: "I want to learn German, I will teach you French", description: "Lorem ipsum dolor sit amet consectetur..." },
            { title: "I want to learn Spanish, I will teach you Swedish", description: "Lorem ipsum dolor sit amet consectetur..." }
          ]}
        />

        {/* Music & Art Offers Section */}
        <OffersSection
          category="Music & Art"
          offers={[
            { title: "I want to learn guitar, I will teach you German", description: "Lorem ipsum dolor sit amet consectetur..." },
            { title: "I want to learn piano, I will teach you Spanish", description: "Lorem ipsum dolor sit amet consectetur..." }
          ]}
        />

        {/* Sport Offers Section */}
        <OffersSection
          category="Sport"
          offers={[
            { title: "I want to learn yoga, I will teach you German", description: "Lorem ipsum dolor sit amet consectetur..." },
            { title: "I want to learn pilates, I will teach you Spanish", description: "Lorem ipsum dolor sit amet consectetur..." }
          ]}
        />

        {/* Other Offers Section */}
        <OffersSection
          category="Other"
          offers={[
            { title: "I want to learn cooking, I will teach you German", description: "Lorem ipsum dolor sit amet consectetur..." },
            { title: "I want to learn programming, I will teach you Spanish", description: "Lorem ipsum dolor sit amet consectetur..." }
          ]}
        />
      </div>

      <Footer />
    </>
  );
}