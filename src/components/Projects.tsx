
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  featured
}) => {
  if (featured) {
    return (
      <div className="grid md:grid-cols-12 gap-4 md:gap-10 relative mb-12">
        <div className="md:col-span-7 md:order-2">
          <div className="relative aspect-video w-full">
            <img 
              src={image} 
              alt={title} 
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-portfolio-navy/50 hover:opacity-0 transition-opacity duration-300 rounded-lg"></div>
          </div>
        </div>
        
        <div className="md:col-span-5 md:order-1 flex flex-col justify-center z-10">
          <p className="font-mono text-portfolio-green text-sm mb-1">Featured Project</p>
          <h3 className="text-2xl font-bold text-portfolio-lightestSlate mb-4">{title}</h3>
          
          <div className="bg-portfolio-lightNavy p-5 rounded-lg shadow-xl mb-4">
            <p className="text-portfolio-lightSlate">{description}</p>
          </div>
          
          <ul className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <li key={index} className="font-mono text-xs text-portfolio-slate">
                {tech}
              </li>
            ))}
          </ul>
          
          <div className="flex gap-4">
            <a 
              href={githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
                aria-label={`Live demo for ${title}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <Card className="bg-portfolio-lightNavy border-portfolio-lightestNavy h-full portfolio-card">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-portfolio-navy/50 hover:opacity-0 transition-opacity duration-300 rounded-t-lg"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-portfolio-lightestSlate">{title}</h3>
          <p className="text-portfolio-lightSlate mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-mono text-portfolio-slate"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <a 
          href={githubUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
          aria-label={`GitHub repository for ${title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
            aria-label={`Live demo for ${title}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      title: "Task Management Platform",
      description: "A full-stack project management application with real-time updates, drag-and-drop interfaces, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=700",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "E-commerce Solution",
      description: "A complete e-commerce platform featuring product catalog, user authentication, shopping cart, payment processing, and order management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=700",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true
    }
  ];

  const otherProjects = [
    {
      title: "Weather App",
      description: "Weather application with real-time updates, location tracking, and 5-day forecast.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500",
      technologies: ["React", "Weather API", "Geolocation API"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website to showcase projects and skills.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com"
    },
    {
      title: "Recipe App",
      description: "App for sharing and discovering recipes with search and filtering capabilities.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com"
    },
    {
      title: "Budget Tracker",
      description: "Personal finance app to track income, expenses, and savings goals.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
      technologies: ["Vue.js", "Chart.js", "LocalStorage"],
      githubUrl: "https://github.com/",
    }
  ];

  return (
    <section id="projects">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span>03.</span> Projects
      </h2>
      
      <div className="mb-20">
        {featuredProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      
      <h3 className="text-xl font-semibold text-center mb-10 text-portfolio-lightestSlate">
        Other Noteworthy Projects
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Button
          asChild
          variant="outline"
          className="border border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10 py-3 px-5 flex items-center gap-2"
        >
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            View More Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
