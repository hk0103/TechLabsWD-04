"use client"; 

import { RiLinkedinFill, RiGithubFill, RiInstagramFill, RiFacebookFill } from "react-icons/ri";
import Link from "next/link";

// Define the expected props for the component
type SocialsProps = {
  containerStyles: string, 
  iconsStyles: string;     
};

// Define an array of social media icons and their paths (update paths as needed)
const icons = [
  { path: "/", name: <RiLinkedinFill /> },  
  { path: "/", name: <RiGithubFill /> },    
  { path: "/", name: <RiInstagramFill /> }, 
  { path: "/", name: <RiFacebookFill /> },  
];

const Socials = ({ containerStyles, iconsStyles }: SocialsProps) => {
  return (
    <div className={`${containerStyles}`}> {/* Apply container styles */}
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}> {/* Unique key for each icon */}
            <div className={`${iconsStyles}`}>{icon.name}</div> {/* Apply icon styles */}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;