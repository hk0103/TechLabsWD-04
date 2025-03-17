import Link from 'next/link';

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, className = '' }) => {
  return (
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
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#555';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#000';
        }}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;