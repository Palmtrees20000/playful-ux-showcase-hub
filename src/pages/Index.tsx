
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Mail, Linkedin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingShapes from "@/components/FloatingShapes";
import Footer from "@/components/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const projects = [
    {
      id: 1,
      title: "Awardco UX Sprint",
      description: "A 6-week summer sprint improving user engagement through redesigned workflows and testing.",
      image: "/placeholder.svg",
      logo: "/lovable-uploads/f0cb4fe8-8bc1-4481-9ce2-dcace802b281.png",
      tags: ["UX Design", "User Research", "Figma", "Wireframing"],
      link: "/case-study/awardco",
      featured: true
    },
    {
      id: 2,
      title: "Craigslist Mobile App Redesign",
      description: "A modern redesign of the Craigslist mobile app focusing on improved navigation and visual hierarchy.",
      image: "/placeholder.svg",
      logo: "/lovable-uploads/b1227e75-307c-4610-b9bf-4363a2a7fd13.png",
      tags: ["UI/UX Design", "Mobile Design", "Figma", "Visual Design"],
      link: "/case-study/craigslist",
      featured: true
    },
    {
      id: 3,
      title: "UVU College of Engineering Redesign",
      description: "Redesigning the digital experience for Utah Valley University's College of Engineering.",
      image: "/lovable-uploads/uvu-surface-1.jpg",
      logo: "/lovable-uploads/uvu-logo.png",
      tags: ["UI/UX Design", "Web Design", "User Experience"],
      link: "/case-study/uvu",
      featured: true
    },
    {
      id: 4,
      title: "MemoryMatters Website Design",
      description: "Creating a compassionate digital platform for memory care and support services.",
      image: "/placeholder.svg",
      logo: "/placeholder.svg",
      tags: ["Web Design", "UI Design", "Accessibility"],
      link: "#",
      featured: true
    },
    {
      id: 5,
      title: "CollectedAF",
      description: "A modern platform for collectors to showcase and manage their collections.",
      image: "/placeholder.svg",
      logo: "/placeholder.svg",
      tags: ["UX Design", "Web Design", "Product Design"],
      link: "#",
      featured: true
    },
    {
      id: 6,
      title: "The Best Chocolate Chip Cookie Recipe Ever Redesign",
      description: "Reimagining the recipe experience with an intuitive, delicious interface.",
      image: "/placeholder.svg",
      logo: "/placeholder.svg",
      tags: ["UI Design", "Web Design", "Visual Design"],
      link: "#",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingShapes />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-purple-500 to-orange-400 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ opacity }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center mx-auto mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-300 to-purple-400" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-xl md:text-2xl font-light text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hi, I'm <span className="font-bold">Palmer</span> — I transform real-world insights into intuitive digital solutions.
          </motion.h1>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-white/90 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <Eye className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
