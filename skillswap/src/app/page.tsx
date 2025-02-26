"use client";
import Logo from "./_components/Logo";
import Footer from "./footer";
export default function Homepage() {
  return (
    <>
<header style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}>
        {/* Left Section: Logo */}
        <Logo /> {/* Logo Component from /_components/Logo.tsx */}
        {/* Middle Section: Navigation Links */}
        <nav style={{
          display: 'flex',
          gap: '15px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="#languages" style={{ color: '#fff', textDecoration: 'none' }}>Languages</a>
          <a href="#art-music" style={{ color: '#fff', textDecoration: 'none' }}>Art & Music</a>
          <a href="#sport" style={{ color: '#fff', textDecoration: 'none' }}>Sport</a>
          <a href="#other" style={{ color: '#fff', textDecoration: 'none' }}>Other</a>
        </nav>
        {/* Right Section: Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search for skill"
            style={{
              padding: '10px',
              width: '200px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          />
        </div>
      </header>
      <div className="min-h-screen flex flex-col justify-center w-full mx-auto px-8 lg:px-8 xl:px-[90px] pt-32 ">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-8xl pb-6">Skill Swap</h1>
            <p className="text-xl lg:text-2xl">Learn & teach - Swap your skills with us!</p>
          </div>
          <div className="flex flex-row gap-4 lg:gap-6 mt-12 lg:mt-0 ">
            <img src="/images/homepage/people.PNG" alt="people in a meeting" className="rounded-[50px] w-[300px] lg:w-[350px] h-auto" />
            <img src="/images/homepage/man.PNG" alt="man in front of laptop" className="rounded-[50px] w-[300px] lg:w-[350px] h-auto" />
          </div>
        </div>
        <div className="mt-32 text-center border-b-2 border-gray-300 pb-8">
            <h2 className="text-5xl font-bold uppercase">HOW DOES IT WORK?</h2>
              <p className="text-xl mt-6 max-w-3xl mx-auto">
    Skill Swap is a platform where people exchange knowledge! You can teach a skill you know and learn something new in return. Connect with people, grow your skills, and enjoy learning together!</p>
</div>
<div className="min-h-screen flex flex-col justify-center w-full mx-auto px-8 lg:px-8 xl:px-[90px] pt-32">
        <div className="text-center">
          <h2 className="text-6xl font-light tracking-wide">VIEW OFFERS BY CATEGORY</h2>
        </div>
        <div className="mt-12">
          <h3 className="text-4xl font-light">Languages</h3>
          <div className="mt-4 space-y-6">
            <div className="bg-gray-400 p-6 rounded-2xl">
              <div className="bg-gray-200 p-4 rounded-xl text-lg font-semibold">
              I want to learn German, I will teach you French</div>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum voluptate quam sit iure asperiores tenetur praesentium? Laborum dolorum veniam maiores iusto commodi maxime assumenda. Similique consequatur recusandae aliquam architecto!</p>
            </div>
            <div className="bg-gray-400 p-6 rounded-2xl">
              <div className="bg-gray-200 p-4 rounded-xl text-lg font-semibold">
              I want to learn Spanish, I will teach you Swedish</div>
              <p className="mt-4 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure dolor ipsa quam harum eius quis ad aut nostrum quisquam vero nulla, architecto nesciunt ducimus recusandae sequi magnam enim incidunt?</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right text-2xl font-light">
          <a href="#" className="hover:underline">View all offers ----&gt;&gt;&gt;&gt;&gt;</a>
        </div>
        <div className="mt-12">
          <h3 className="text-4xl font-light">Music & Art</h3>
          <div className="mt-4 space-y-6">
            <div className="bg-gray-400 p-6 rounded-2xl">
              <div className="bg-gray-200 p-4 rounded-xl text-lg font-semibold">
              I want to learn guitar to play, I will teach you German</div>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum voluptate quam sit iure asperiores tenetur praesentium? Laborum dolorum veniam maiores iusto commodi maxime assumenda. Similique consequatur recusandae aliquam architecto!              </p>
            </div>
            <div className="bg-gray-400 p-6 rounded-2xl">
              <div className="bg-gray-200 p-4 rounded-xl text-lg font-semibold">
              I want to learn piano to play, I will teach you Spanish</div>
              <p className="mt-4 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure dolor ipsa quam harum eius quis ad aut nostrum quisquam vero nulla, architecto nesciunt ducimus recusandae sequi magnam enim incidunt?</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right text-2xl font-light">
          <a href="#" className="hover:underline">View all offers ----&gt;&gt;&gt;&gt;&gt;</a>
        </div>
        <div className="mt-12">
          <h3 className="text-4xl font-light">Sport</h3>
          <div className="mt-4 space-y-6">
            <div className="bg-gray-400 p-6 rounded-2xl">
              <div className="bg-gray-200 p-4 rounded-xl text-lg font-semibold">
              I want to learn yoga, I will teach you German</div>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum voluptate quam sit iure asperiores tenetur praesentium? Laborum dolorum veniam maiores iusto commodi maxime assumenda. Similique consequatur recusandae aliquam architecto!              </p>
            </div>
            <div className="bg-gray-400 p-6 rounded-2xl">
              <div className="bg-gray-200 p-4 rounded-xl text-lg font-semibold">
              I want to learn pilates, I will teach you Spanish</div>
              <p className="mt-4 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure dolor ipsa quam harum eius quis ad aut nostrum quisquam vero nulla, architecto nesciunt ducimus recusandae sequi magnam enim incidunt?</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right text-2xl font-light">
          <a href="#" className="hover:underline">View all offers ----&gt;&gt;&gt;&gt;&gt;</a>
        </div>
        <div className="mt-12">
          <h3 className="text-4xl font-light">Other</h3>
          <div className="mt-4 space-y-6">
            <div className="bg-gray-400 p-6 rounded-2xl">
              <div className="bg-gray-200 p-4 rounded-xl text-lg font-semibold">
              I want to learn cooking, I will teach you German</div>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum voluptate quam sit iure asperiores tenetur praesentium? Laborum dolorum veniam maiores iusto commodi maxime assumenda. Similique consequatur recusandae aliquam architecto!              </p>
            </div>
            <div className="bg-gray-400 p-6 rounded-2xl">
              <div className="bg-gray-200 p-4 rounded-xl text-lg font-semibold">
              I want to learn programming, I will teach you Spanish</div>
              <p className="mt-4 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero iure dolor ipsa quam harum eius quis ad aut nostrum quisquam vero nulla, architecto nesciunt ducimus recusandae sequi magnam enim incidunt?</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right text-2xl font-light">
          <a href="#" className="hover:underline">View all offers ----&gt;&gt;&gt;&gt;&gt;</a>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}