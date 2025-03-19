import Link from 'next/link'; 

// Define the interface for the Button component's props
interface ButtonProps {
  text: string; 
  link: string;
  className?: string;
}
// Functional component for a button that wraps a Next.js Link
const Button: React.FC<ButtonProps> = ({ text, link, className = '' }) => {
  return (
    // Link component wraps the button to enable client-side navigation
    <Link href={link} className={className}>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#000', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px',
          textDecoration: 'none', 
          display: 'inline-block', 
          fontSize: '16px',
          cursor: 'pointer', 
          transition: 'background-color 0.3s', 
        }}
        // Handles mouse enter event to change background color
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#555'; // Change background to dark gray
        }}
        // Handles mouse leave event to reset background color
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#000'; // Revert background to black
        }}
      >
        {text} {/* Displays the button text */}
      </button>
    </Link>
  );
};

export default Button; 