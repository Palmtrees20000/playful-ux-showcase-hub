import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Link 
              to="/#about" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to About
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Resume
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Here's my full resume — you can view it below or download a PDF version.
            </p>
            
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white px-8"
            >
              <a 
                href="/resume/palmer-resume.pdf" 
                download="Palmer_Charles_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a>
            </Button>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="relative w-full" style={{ height: "80vh", minHeight: "600px" }}>
              <iframe
                src="/resume/palmer-resume.pdf"
                className="w-full h-full"
                title="Palmer Charles Resume"
                style={{ border: "none" }}
              />
              
              {/* Fallback message for browsers that don't support iframe PDF viewing */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 -z-10">
                <div className="text-center p-8">
                  <p className="text-gray-600 mb-4">
                    Unable to display PDF in browser.
                  </p>
                  <Button asChild>
                    <a href="/resume/palmer-resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Download Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
            >
              <a 
                href="/resume/palmer-resume.pdf" 
                download="Palmer_Charles_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a>
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
