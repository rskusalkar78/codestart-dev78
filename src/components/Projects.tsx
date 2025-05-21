
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span>03.</span> Projects
      </h2>
      
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h3 className="text-xl font-semibold mb-4 text-portfolio-lightestSlate">
          Coming Soon
        </h3>
        <p className="text-portfolio-slate max-w-xl mb-8">
          I'm currently working on some exciting projects. Check back soon to see what I've been building!
        </p>
        <Button
          asChild
          variant="outline"
          className="border border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10 py-3 px-5 flex items-center gap-2"
        >
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            View My GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
