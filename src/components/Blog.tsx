
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: string;
  url: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon, url }) => {
  return (
    <Card className="bg-portfolio-lightNavy border-portfolio-lightestNavy h-full portfolio-card hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-portfolio-green text-3xl">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-portfolio-lightestSlate">
          {title}
        </h3>
        
        <p className="text-portfolio-slate mb-6 flex-grow">
          {description}
        </p>
        
        <Button
          asChild
          variant="link"
          className="text-portfolio-green hover:text-portfolio-green/90 p-0 self-start mt-auto"
        >
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

const Blog: React.FC = () => {
  const beginnerResources = [
    {
      title: "Web Development Roadmap",
      description: "A step-by-step guide to becoming a modern web developer with recommended learning resources and practice projects.",
      icon: "🗺️",
      url: "https://roadmap.sh/frontend"
    },
    {
      title: "Open Source Contributions",
      description: "Learn how to contribute to open source projects, find beginner-friendly issues, and build your portfolio while giving back to the community.",
      icon: "🌍",
      url: "https://firstcontributions.github.io/"
    },
    {
      title: "Developer Communities",
      description: "Join communities like Stack Overflow, DEV, and GitHub Discussions to learn from experienced developers and showcase your work.",
      icon: "👥",
      url: "https://dev.to/"
    }
  ];

  return (
    <section id="blog">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span>04.</span> Resources for Beginners
      </h2>
      
      <div className="mb-8">
        <p className="text-lg text-portfolio-lightSlate">
          As a beginner software engineer, I'm constantly learning and expanding my skills. Here are some valuable resources that have helped me on my journey:
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {beginnerResources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
      
      <div className="mt-12 bg-portfolio-lightNavy border border-portfolio-lightestNavy rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-portfolio-lightestSlate">My Learning Path</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-portfolio-green mr-3 text-xl">1.</span>
            <div>
              <h4 className="font-semibold text-portfolio-lightestSlate">Master the Fundamentals</h4>
              <p className="text-portfolio-slate">Focus on understanding HTML, CSS, and JavaScript deeply before moving on to frameworks.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-portfolio-green mr-3 text-xl">2.</span>
            <div>
              <h4 className="font-semibold text-portfolio-lightestSlate">Build Projects</h4>
              <p className="text-portfolio-slate">Create projects that solve real problems and showcase your abilities.</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-portfolio-green mr-3 text-xl">3.</span>
            <div>
              <h4 className="font-semibold text-portfolio-lightestSlate">Never Stop Learning</h4>
              <p className="text-portfolio-slate">Technology evolves rapidly. Dedicate time each week to learning new skills and keeping up with industry trends.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
