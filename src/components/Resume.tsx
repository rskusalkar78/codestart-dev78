
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";

const Resume: React.FC = () => {
  // These would be real work experiences in a production portfolio
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "January 2021 - Present",
      responsibilities: [
        "Lead the development of a React-based SaaS platform with over 50,000 users.",
        "Implemented CI/CD pipeline resulting in 40% faster deployment times.",
        "Mentored junior developers and conducted code reviews to ensure code quality."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Web Creations",
      period: "March 2018 - December 2020",
      responsibilities: [
        "Developed responsive web applications using React, Redux, and TypeScript.",
        "Collaborated with UX designers to implement user-friendly interfaces.",
        "Optimized application performance resulting in 30% faster load times."
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Digital Agency",
      period: "June 2017 - February 2018",
      responsibilities: [
        "Assisted in the development of client websites using HTML, CSS, and JavaScript.",
        "Created and maintained documentation for internal processes.",
        "Participated in team meetings and contributed to project planning."
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
            Here's a brief overview of my professional experience. For a more detailed version, please download my full resume.
          </p>
        </div>
        
        <Button
          asChild
          variant="outline"
          className="border border-portfolio-green text-portfolio-green hover:bg-portfolio-green/10 py-3 px-5 flex items-center gap-2 whitespace-nowrap"
        >
          <a href="/resume.pdf" download="John_Doe_Resume.pdf">
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
          Work Experience
        </h3>
        
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-portfolio-lightNavy border-portfolio-lightestNavy portfolio-card">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h4 className="text-lg font-semibold text-portfolio-lightestSlate">
                    {experience.title}
                  </h4>
                  <span className="text-portfolio-green font-mono text-sm">
                    {experience.period}
                  </span>
                </div>
                
                <p className="text-portfolio-lightSlate mb-4">{experience.company}</p>
                
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i} className="flex text-portfolio-slate">
                      <span className="text-portfolio-green mr-2">▹</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
