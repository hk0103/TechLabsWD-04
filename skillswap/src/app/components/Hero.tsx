export default function Hero() {
  return (
    <div>
      {/* Main container with full-screen height, centered content, and responsive padding */}
      <div className="min-h-screen flex flex-col justify-center w-full mx-auto px-8 lg:px-8 xl:px-[90px] pt-32">
        
        {/* Flex container for layout adjustment on different screen sizes */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
          
          {/* Text section: Centered on small screens, left-aligned on large screens */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-8xl pb-6">Skill Swap</h1> 
            <p className="text-xl lg:text-2xl">Learn & teach - Swap your skills with us!</p>
          </div>

          {/* Image section: Two images displayed side by side with spacing */}
          <div className="flex flex-row gap-4 lg:gap-6 mt-12 lg:mt-0">
            {/* Image of people in a meeting */}
            <img 
              src="/images/homepage/people.PNG" 
              alt="people in a meeting" 
              className="rounded-[50px] w-[300px] lg:w-[350px] h-auto"
            />
            
            {/* Image of a man in front of a laptop */}
            <img 
              src="/images/homepage/man.PNG" 
              alt="man in front of laptop" 
              className="rounded-[50px] w-[300px] lg:w-[350px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}