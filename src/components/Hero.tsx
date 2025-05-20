
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-16 gap-8">
      <div className="max-w-2xl">
        <p className="font-mono text-portfolio-green mb-5 animate-fade-in opacity-0">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-lightestSlate mb-4 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
          Rohan Shankar Kusalkar.
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
      <div className="md:w-1/3 animate-fade-in opacity-0" style={{ animationDelay: '500ms' }}>
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-portfolio-green opacity-50 blur-sm"></div>
          <Avatar className="w-72 h-72 mx-auto">
            <AvatarImage src="/lovable-uploads/c1958b3c-253b-489e-88c6-3492f7a0dc9b.png" alt="Rohan Shankar Kusalkar" className="object-cover" />
            <AvatarFallback className="text-4xl">RSK</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Hero;
