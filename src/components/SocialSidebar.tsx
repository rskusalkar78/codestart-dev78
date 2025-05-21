
import React from 'react';

const SocialSidebar: React.FC = () => {
  return (
    <>
      {/* Left sidebar with social links */}
      <div className="fixed bottom-0 left-5 md:left-10 z-10 hidden md:block">
        <ul className="flex flex-col items-center space-y-5 after:content-[''] after:block after:w-px after:h-32 after:mx-auto after:bg-gray-400 dark:after:bg-gray-600">
          <li>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors transform hover:-translate-y-1 inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors transform hover:-translate-y-1 inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="https://instagram.com/rohan_kusalkar" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors transform hover:-translate-y-1 inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      
      {/* Right sidebar with email */}
      <div className="fixed bottom-0 right-5 md:right-10 z-10 hidden md:block">
        <div className="flex flex-col items-center space-y-5 after:content-[''] after:block after:w-px after:h-32 after:mx-auto after:bg-gray-400 dark:after:bg-gray-600">
          <a 
            href="mailto:rkusalkar78@gmail.com" 
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors font-mono text-xs tracking-widest writing-vertical"
            style={{ writingMode: 'vertical-rl' }}
          >
            rkusalkar78@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
