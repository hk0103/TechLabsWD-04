import Socials from "./Socials"; 

const Footer = () => {
  return (
    // Footer section with background color and padding
    <footer className="bg-secondary py-12">
      <div className="container mx-auto"> {/* Center content and apply responsive styling */}
        <div className="flex flex-col items-center justify-between">
          
          {/* Social media icons section */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />

          {/* Contact information */}
          <div className="text-center mt-6">
            <p>Contact us: <a href="mailto:info@example.com" className="text-primary">SkillSwap@example.com</a></p>
            <p>Phone: +49 123 456 789</p>
            <p>Address: 123 Main Street, Hamburg, Germany</p>
          </div>

          {/* Navigation links */}
          <div className="flex gap-x-6 mt-6">
            <a href="/about" className="text-muted-foreground hover:text-primary transition-all">About Us</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-all">Contact</a>
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-all">Privacy Policy</a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-all">Terms of Service</a>
          </div>

          {/* Copyright notice */}
          <div className="text-muted-foreground text-sm mt-6">
            &copy; HH-Group-04-WD - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 