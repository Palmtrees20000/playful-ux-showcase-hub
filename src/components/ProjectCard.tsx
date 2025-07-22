
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  logo?: string;
  tags: string[];
  link: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const handleCardClick = () => {
    if (project.link.startsWith('/')) {
      window.location.href = project.link;
    } else {
      window.open(project.link, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
      onClick={handleCardClick}
    >
      <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50">
        <div className="relative overflow-hidden">
          <div
            className={`bg-gradient-to-br from-teal-400 via-purple-500 to-orange-400 ${
              project.featured ? "h-80" : "h-48"
            } flex items-center justify-center relative`}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {project.logo ? (
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4">
                  <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              )}
            </motion.div>
            
            {project.featured && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-4 right-4"
              >
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  Featured
                </Badge>
              </motion.div>
            )}
          </div>
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8"
          >
            {project.link.startsWith('/') ? (
              <Link to={project.link}>
                <Button 
                  size="sm" 
                  className="bg-white text-gray-900 hover:bg-white/90"
                >
                  View Case Study
                  <Eye className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button 
                size="sm" 
                className="bg-white text-gray-900 hover:bg-white/90"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.link, '_blank');
                }}
              >
                View Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            )}
          </motion.div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * tagIndex }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-gradient-to-r from-teal-50 to-purple-50 text-purple-700 border-purple-200 hover:scale-105 transition-transform"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
