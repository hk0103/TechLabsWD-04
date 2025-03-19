export default function HowItWorks() {
  return (
    // Container with top margin, centered text, bottom border, and padding
    <div className="mt-32 text-center border-b-2 border-gray-300 pb-8">
      
      {/* Section Title */}
      <h2 className="text-5xl font-bold uppercase">HOW DOES IT WORK?</h2>
      
      {/* Description paragraph with responsive max-width and centered alignment */}
      <p className="text-xl mt-6 max-w-3xl mx-auto">
        Skill Swap is a platform where people exchange knowledge! You can teach a skill you know and learn something new in return. 
        Connect with people, grow your skills, and enjoy learning together!
      </p>
      
    </div>
  );
}