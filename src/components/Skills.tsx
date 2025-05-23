import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
interface SkillCategoryProps {
  title: string;
  skills: string[];
}
const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills
}) => {
  return <Card className="bg-portfolio-lightNavy border-portfolio-lightestNavy portfolio-card">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-portfolio-lightestSlate">{title}</h3>
        <ul className="space-y-2">
          {skills.map((skill, index) => <li key={index} className="flex items-center text-portfolio-lightSlate">
              <span className="text-portfolio-green mr-2">▹</span>
              {skill}
            </li>)}
        </ul>
      </CardContent>
    </Card>;
};
const Skills: React.FC = () => {
  const skillCategories = [{
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/SCSS", "Python", "SQL"]
  }, {
    title: "Frontend",
    skills: ["React", "Redux", "Next.js", "Tailwind CSS", "Material UI", "Framer Motion"]
  }, {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
  }, {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Docker", "CI/CD", "AWS"]
  }];
  return <section id="skills">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span className="font-extralight text-2xl">02.</span> Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => <SkillCategory key={index} title={category.title} skills={category.skills} />)}
      </div>
      
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-portfolio-lightestSlate">Education & Certifications</h3>
        
        <div className="space-y-6">
          <div className="p-6 bg-portfolio-lightNavy border border-portfolio-lightestNavy rounded-lg portfolio-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-portfolio-lightestSlate font-semibold">Bachelor of Science in Computer Science</h4>
              <span className="text-portfolio-green font-mono text-sm">2016 - 2020</span>
            </div>
            <p className="text-portfolio-slate">University of Technology</p>
          </div>
          
          <div className="p-6 bg-portfolio-lightNavy border border-portfolio-lightestNavy rounded-lg portfolio-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-portfolio-lightestSlate font-semibold">AWS Certified Solutions Architect</h4>
              <span className="text-portfolio-green font-mono text-sm">2022</span>
            </div>
            <p className="text-portfolio-slate">Amazon Web Services</p>
          </div>
          
          <div className="p-6 bg-portfolio-lightNavy border border-portfolio-lightestNavy rounded-lg portfolio-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h4 className="text-portfolio-lightestSlate font-semibold">Full Stack Web Development</h4>
              <span className="text-portfolio-green font-mono text-sm">2021</span>
            </div>
            <p className="text-portfolio-slate">Udemy</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;