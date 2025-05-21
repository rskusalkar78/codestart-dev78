
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

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
          className="bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 py-3 px-5 flex items-center gap-2 animate-pulse"
        >
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
            View My GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
