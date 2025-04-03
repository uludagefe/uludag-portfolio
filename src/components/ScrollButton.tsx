'use client';

interface ScrollButtonProps {
  targetId: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function ScrollButton({ targetId, variant, children, className = '' }: ScrollButtonProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const baseStyles = variant === 'primary'
    ? 'bg-[#3A5A40] text-white hover:bg-[#344E41]'
    : 'text-[#4A4A45] hover:text-[#3A5A40]';

  const buttonStyles = className.includes('text-sm')
    ? ''
    : 'px-6 py-2.5 rounded-lg border-2 border-[#3A5A40]';

  return (
    <button
      onClick={scrollToSection}
      className={`transition-colors duration-200 ${baseStyles} ${buttonStyles} ${className}`}
    >
      {children}
    </button>
  );
} 