
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

  // Dynamic background cycling
  const backgroundImages = [
    "/lovable-uploads/89510afe-32e0-4b4e-a350-2ff0e1b12b92.png",
    "/lovable-uploads/6796a5e1-a0b9-4ca9-938a-97a4701566df.png",
    "/lovable-uploads/c8b4a6d1-f8c5-45f3-b5b3-722ee6096b38.png",
    "/lovable-uploads/b3d18de9-200d-452d-925e-eb17856b18bc.png",
    "/lovable-uploads/9c34fd52-a9db-4d58-b306-cbe4437c5c61.png",
    "/lovable-uploads/59785e14-480f-4113-99e5-a493a32dc76e.png",
    "/lovable-uploads/e05ad64b-a25a-40fb-9165-085007fa7f78.png",
    "/lovable-uploads/749af75d-a662-4ff4-b291-98676687944f.png",
    "/lovable-uploads/1ea35176-3b74-4582-b08b-ce06c37efd52.png",
    "/lovable-uploads/ca269e3f-25f5-447b-b4a8-911c35375c03.png",
    "/lovable-uploads/fbf0299a-8248-4b7a-9d9d-df3433bd46ff.png",
    "/lovable-uploads/2326011b-b3ee-4704-8469-1dc54531398b.png",
    "/lovable-uploads/af5f2f85-8c53-4356-9264-756fe2067701.png",
    "/lovable-uploads/56ddf9a7-a96c-48a0-9b6c-3ad4742e8283.png",
    "/lovable-uploads/02f111fe-9ef0-42bd-912a-792e86f00d5e.png",
    "/lovable-uploads/3c8afaa5-bdaf-4db5-a111-cb6c33bf14d6.png",
    "/lovable-uploads/9c3907bc-e1d4-40df-bd58-d3d61484bfa3.png"
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingShapes />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic background images */}
        {backgroundImages.map((bg, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bg})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentBgIndex ? 0.8 : 0,
              scale: index === currentBgIndex ? 1.05 : 1
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
        
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

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
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
