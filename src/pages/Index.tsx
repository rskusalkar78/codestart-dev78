
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

const Index = () => {
  return (
    <div className="bg-portfolio-navy text-portfolio-slate min-h-screen">
      <Navigation />
      <SocialSidebar />
      
      <main className="max-w-7xl mx-auto overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
