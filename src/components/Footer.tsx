
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 text-center bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-center space-x-6 mb-5">
        <a 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a 
          href="https://linkedin.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a 
          href="https://instagram.com/rohan_kusalkar" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <a 
          href="mailto:rkusalkar78@gmail.com" 
          aria-label="Email"
          className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
        Designed & Built by Rohan Shankar Kusalkar
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm font-mono mt-1">
        &copy; {currentYear} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
