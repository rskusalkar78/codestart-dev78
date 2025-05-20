
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span>01.</span> About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="space-y-4 text-lg">
            <p>
              Hello! My name is John, and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 font-mono text-sm">
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'].map((tech, index) => (
                <li key={index} className="flex items-center before:content-['▹'] before:text-portfolio-green before:mr-2">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 bg-portfolio-navy/50">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-lg bg-portfolio-green opacity-50 blur-sm group-hover:opacity-75 transition duration-300"></div>
              <div className="relative aspect-square max-w-xs mx-auto rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500" 
                  alt="John Doe" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300 z-10"
                />
                <div className="absolute inset-0 border-2 rounded-lg border-portfolio-green z-0 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
