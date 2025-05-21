
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  index: number;
}

const NavLink = ({ href, children, index }: NavLinkProps) => {
  return (
    <li className="animate-fade-in opacity-0" style={{ animationDelay: `${index * 100}ms` }}>
      <a 
        href={href}
        className="flex items-center gap-1 text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 py-2 px-3 transition-colors"
      >
        <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs">0{index}.</span>
        <span>{children}</span>
      </a>
    </li>
  );
};

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 px-6 py-4 md:px-12 lg:px-20 transition-all duration-300", 
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 animate-fade-in opacity-0 font-mono">profilet</a>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-2">
          <NavLink href="#about" index={1}>About</NavLink>
          <NavLink href="#skills" index={2}>Skills</NavLink>
          <NavLink href="#projects" index={3}>Projects</NavLink>
          <NavLink href="#blog" index={4}>Blog</NavLink>
          <NavLink href="#contact" index={5}>Contact</NavLink>
          <li className="animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            <Button 
              asChild
              variant="outline"
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20 transition-all ml-2"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </li>
        </ul>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-indigo-600 dark:text-indigo-400 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col items-center space-y-4 text-lg">
          {[
            { href: '#about', text: 'About' },
            { href: '#skills', text: 'Skills' },
            { href: '#projects', text: 'Projects' },
            { href: '#blog', text: 'Blog' },
            { href: '#contact', text: 'Contact' }
          ].map((link, i) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="flex flex-col items-center text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm">0{i+1}.</span>
                <span>{link.text}</span>
              </a>
            </li>
          ))}
          <li className="pt-4">
            <Button 
              asChild
              variant="outline"
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
