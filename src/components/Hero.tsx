
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-4xl">
        <p className="font-mono text-portfolio-green mb-5 animate-fade-in opacity-0">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightestSlate mb-4 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
          John Doe.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-6 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          I build things for the web.
        </h2>
        <p className="text-portfolio-slate max-w-xl text-lg mb-12 animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
          I'm a software developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
          <Button
            asChild
            className="bg-transparent hover:bg-portfolio-green/10 border border-portfolio-green text-portfolio-green py-4 px-7 text-base"
          >
            <a href="#projects">Check out my work!</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
