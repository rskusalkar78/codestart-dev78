
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";

const Resume: React.FC = () => {
  // Replace work experiences with interests and technologies
  const interests = [
    {
      title: "Web Development",
      period: "2024 - Present",
      description: "Passionate about creating responsive and interactive web applications.",
      technologies: [
        "HTML5 - Building the structure of web pages",
        "CSS3 - Styling and responsive design",
        "Node.js - Backend development",
        "Data Structures & Algorithms - Problem-solving"
      ]
    }
  ];

  return (
    <section id="resume">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span>06.</span> Resume
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <p className="text-portfolio-lightSlate text-lg mb-4">
            As a fresher in the field of software development, I'm enthusiastic about learning and growing. Here's a snapshot of my educational background and interests.
          </p>
        </div>
        
        <Button
          asChild
          variant="outline"
          className="border border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10 py-3 px-5 flex items-center gap-2 whitespace-nowrap"
        >
          <a href="/resume.pdf" download="Rohan_Shankar_Kusalkar_Resume.pdf">
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </Button>
      </div>
      
      <div className="space-y-6">
        <iframe
          src="/resume.pdf#toolbar=0"
          className="w-full h-96 mb-8 rounded-lg border border-portfolio-lightestNavy hidden md:block"
          title="Resume Preview"
        ></iframe>
        
        <div className="md:hidden">
          <p className="text-portfolio-lightSlate italic mb-4 text-center">
            Resume preview is available on larger screens. Please download to view on mobile.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-6">
          Education
        </h3>
        
        <Card className="bg-portfolio-lightNavy border-portfolio-lightestNavy portfolio-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <h4 className="text-lg font-semibold text-portfolio-lightestSlate">
                Bachelor of Engineering in Electronics and Telecommunication
              </h4>
              <span className="text-portfolio-green font-mono text-sm">
                2024 - 2028
              </span>
            </div>
            <p className="text-portfolio-slate mb-4">Dhole Patil College of Engineering, Kharadi</p>
          </CardContent>
        </Card>
        
        <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-6 mt-8">
          Interests & Technologies
        </h3>
        
        <div className="space-y-6">
          {interests.map((interest, index) => (
            <Card key={index} className="bg-portfolio-lightNavy border-portfolio-lightestNavy portfolio-card">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h4 className="text-lg font-semibold text-portfolio-lightestSlate">
                    {interest.title}
                  </h4>
                  <span className="text-portfolio-green font-mono text-sm">
                    {interest.period}
                  </span>
                </div>
                
                <p className="text-portfolio-slate mb-4">{interest.description}</p>
                
                <ul className="space-y-2">
                  {interest.technologies.map((technology, i) => (
                    <li key={i} className="flex text-portfolio-slate">
                      <span className="text-portfolio-green mr-2">▹</span>
                      <span>{technology}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-portfolio-lightNavy border border-portfolio-lightestNavy rounded-lg">
          <h4 className="text-lg font-semibold text-portfolio-lightestSlate mb-4">As a Beginner</h4>
          <p className="text-portfolio-slate mb-4">
            I'm at the start of my software development journey, eager to learn and apply new technologies. While I don't have professional experience yet, I'm committed to continuous learning through online courses, personal projects, and practice.
          </p>
          <p className="text-portfolio-slate">
            I'm currently focusing on building a strong foundation in web development fundamentals and looking for opportunities to collaborate on meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
