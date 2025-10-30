import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

// Define the order of case studies
const caseStudyOrder = [
  { path: "/case-study/awardco", title: "Awardco Case Study" },
  { path: "/case-study/craigslist", title: "Craigslist Redesign" },
  { path: "/case-study/uvu", title: "UVU Website Redesign" },
  { path: "/case-study/memory-matters", title: "Memory Matters" },
  { path: "/case-study/collectedaf", title: "CollectedAF" },
  { path: "/case-study/cookie-recipe", title: "Cookie Recipe Website" }
];

interface CaseStudyNavigationProps {
  currentPath: string;
}

export const CaseStudyNavigation = ({ currentPath }: CaseStudyNavigationProps) => {
  // Find current index
  const currentIndex = caseStudyOrder.findIndex(study => study.path === currentPath);
  
  // Get next case study (loop back to first if at end)
  const nextIndex = (currentIndex + 1) % caseStudyOrder.length;
  const nextCaseStudy = caseStudyOrder[nextIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16 border-t mt-16"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/">
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto rounded-lg transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
        
        <Link to={nextCaseStudy.path}>
          <Button 
            size="lg"
            className="w-full sm:w-auto rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Read Next Case Study
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
