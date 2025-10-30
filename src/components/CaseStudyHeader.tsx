import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define the order of case studies
const caseStudyOrder = [
  { path: "/case-study/awardco", title: "Awardco Case Study" },
  { path: "/case-study/craigslist", title: "Craigslist Redesign" },
  { path: "/case-study/uvu", title: "UVU Website Redesign" },
  { path: "/case-study/memory-matters", title: "Memory Matters" },
  { path: "/case-study/collectedaf", title: "CollectedAF" },
  { path: "/case-study/cookie-recipe", title: "Cookie Recipe Website" }
];

interface CaseStudyHeaderProps {
  currentPath: string;
}

export const CaseStudyHeader = ({ currentPath }: CaseStudyHeaderProps) => {
  const navigate = useNavigate();
  
  // Find current index
  const currentIndex = caseStudyOrder.findIndex(study => study.path === currentPath);
  
  // Get next case study (loop back to first if at end)
  const nextIndex = (currentIndex + 1) % caseStudyOrder.length;
  const nextCaseStudy = caseStudyOrder[nextIndex];

  const handleNextClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(nextCaseStudy.path);
    }, 300);
  };

  return (
    <div className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link to="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
        
        <Button 
          onClick={handleNextClick}
          variant="ghost"
          size="sm"
        >
          Read Next Case Study
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
