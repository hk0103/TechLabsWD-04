'use client';
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
        <div>
          <img 
            src="/images/homepage/logo.png" 
            alt="Skill Swap Logo" 
            style={{ 
              height: '40px', 
              width: 'auto', 
            }} 
          />
        </div>

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

      <div className="min-h-screen flex flex-col justify-center w-full mx-auto px-8 lg:px-8 xl:px-[90px] pt-20">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="text-center lg:text-left">


}