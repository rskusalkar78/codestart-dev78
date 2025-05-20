
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
  tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({ title, description, date, image, url, tags }) => {
  return (
    <Card className="bg-portfolio-lightNavy border-portfolio-lightestNavy overflow-hidden portfolio-card">
      <CardContent className="p-0">
        <div className="relative h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-portfolio-navy to-transparent h-1/2"></div>
          <div className="absolute top-4 right-4 bg-portfolio-navy/80 text-portfolio-green px-2 py-1 rounded text-xs font-mono">
            {date}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-portfolio-lightestSlate line-clamp-2">
            {title}
          </h3>
          
          <p className="text-portfolio-slate mb-4 line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs font-mono px-2 py-1 rounded-full bg-portfolio-navy text-portfolio-green"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-portfolio-lightestNavy p-4">
        <Button
          asChild
          variant="link"
          className="text-portfolio-green hover:text-portfolio-green/90 p-0"
        >
          <a href={url} className="flex items-center gap-2">
            Read More <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Building a Design System from Scratch",
      description: "Learn how to build a comprehensive design system for your projects using Figma and implement it with React components.",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500",
      url: "#",
      tags: ["Design System", "React", "Figma"]
    },
    {
      title: "State Management in React: Context API vs Redux",
      description: "An in-depth comparison of different state management approaches in React applications and when to use each one.",
      date: "Mar 22, 2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
      url: "#",
      tags: ["React", "State Management", "Redux"]
    },
    {
      title: "Building Accessible Web Applications",
      description: "Practical tips and techniques to make your web applications more accessible and inclusive for all users.",
      date: "Jan 10, 2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      url: "#",
      tags: ["Accessibility", "HTML", "ARIA"]
    }
  ];

  return (
    <section id="blog">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span>04.</span> Blog
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Button
          asChild
          variant="outline"
          className="border border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10 py-3 px-5 flex items-center gap-2"
        >
          <a href="#" target="_blank" rel="noopener noreferrer">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Blog;
