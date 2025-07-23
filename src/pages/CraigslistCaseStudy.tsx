import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Figma } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CraigslistCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/606db17c-6579-4608-957e-8229e6767f02.png" 
                  alt="Craigslist Redesign Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-6">
              Craigslist Mobile App Redesign
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              A modern redesign of the Craigslist mobile app, focusing on improved navigation, visual hierarchy, and user experience while maintaining its core community marketplace functionality.
            </p>
            
            {/* Project Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <p className="font-semibold text-gray-800">Role</p>
                <p className="text-purple-600">Solo UX/UI Designer</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800">Duration</p>
                <p className="text-purple-600">2 Weeks</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800">Project Type</p>
                <p className="text-purple-600">College Assignment</p>
              </div>
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Challenge</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The goal of this project was to redesign the Craigslist mobile app to make it feel more modern, visually appealing, and easier to navigate. Craigslist's original design felt outdated and disorganized, so this project focused on refreshing its interface while keeping its core functionalities intact.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Problems to Solve:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                  <li>A dated and unorganized user interface</li>
                  <li>Difficult navigation for users trying to browse or post listings</li>
                  <li>A lack of visual clarity for actions like searching, filtering, and browsing</li>
                </ul>
                
                <p className="text-lg text-gray-600">
                  The redesign focused on making the app feel more structured, modern, and user-friendly — especially for community buyers and sellers who rely on Craigslist for jobs, goods, and services.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Card className="border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Design Process</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">Discovery</h3>
                          <p className="text-gray-600">Reviewed Craigslist's current UI to identify usability issues and pain points.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">Sketching</h3>
                          <p className="text-gray-600">Drew early layout concepts to explore improved navigation and hierarchy.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">Wireframing</h3>
                          <p className="text-gray-600">Built low-fidelity frames in Figma to test structure and flow.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">High-Fidelity Design</h3>
                          <p className="text-gray-600">Created final UI mockups with a cleaner layout, improved typography and spacing, and more intuitive interactions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-800 mb-4">Tools Used</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Figma className="text-purple-600" size={20} />
                      <span className="text-gray-700">Figma</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      I used Figma throughout the entire process to design and organize screens, creating a cohesive design system for the redesigned app.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Final Design Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Final Design Solution</h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  The redesigned Craigslist mobile app features a modern purple color scheme, improved visual hierarchy, and streamlined navigation that makes browsing and posting listings more intuitive.
                </p>
                
                {/* High-fidelity screens grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/341aedef-4aa4-4a4c-bf06-664e32ae2220.png" 
                      alt="Home Screen" 
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/1bdd6f75-5786-4388-ad2a-46ed51f973c1.png" 
                      alt="Categories Screen" 
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/f0cb4fe8-8bc1-4481-9ce2-dcace802b281.png" 
                      alt="Listing Details" 
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/5f7df5fd-378e-46d7-96b4-df734863cf7b.png" 
                      alt="Search Results" 
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/6b2c4d28-4b5a-406f-a3a6-c5b56e5350bd.png" 
                      alt="Create Posting" 
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/6510e755-6be4-4246-856d-ee51bf76aba1.png" 
                      alt="Profile Screen" 
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/2957061d-c96a-4ae2-ac8c-52dc27e458f8.png" 
                      alt="Messages Screen" 
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/0d5ed484-0cc2-48b7-bafa-3e6ff39aa28b.png" 
                      alt="Favorites Screen" 
                      className="w-full h-full object-contain rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Design Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <Card className="border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Design Improvements</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <Badge variant="secondary" className="mb-2 bg-purple-100 text-purple-700">Visual Hierarchy</Badge>
                      <h3 className="font-semibold text-gray-800 mb-2">Improved Typography & Spacing</h3>
                      <p className="text-gray-600">Implemented consistent typography scales and spacing to create clear information hierarchy and reduce visual clutter.</p>
                    </div>
                    
                    <div className="mb-6">
                      <Badge variant="secondary" className="mb-2 bg-purple-100 text-purple-700">Navigation</Badge>
                      <h3 className="font-semibold text-gray-800 mb-2">Streamlined User Flow</h3>
                      <p className="text-gray-600">Redesigned navigation patterns to make browsing categories, searching listings, and posting items more intuitive.</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <Badge variant="secondary" className="mb-2 bg-purple-100 text-purple-700">Modern Design</Badge>
                      <h3 className="font-semibold text-gray-800 mb-2">Purple Color System</h3>
                      <p className="text-gray-600">Introduced a cohesive purple color palette that feels modern while maintaining brand recognition and accessibility.</p>
                    </div>
                    
                    <div className="mb-6">
                      <Badge variant="secondary" className="mb-2 bg-purple-100 text-purple-700">User Experience</Badge>
                      <h3 className="font-semibold text-gray-800 mb-2">Enhanced Interactions</h3>
                      <p className="text-gray-600">Improved button states, form design, and interactive elements to provide clearer feedback and smoother user experience.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reflection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <Card className="border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Reflection</h2>
                
                <p className="text-lg text-gray-600 mb-6">
                  This college project taught me valuable lessons about redesigning established platforms while respecting their core functionality. Working within the constraints of Craigslist's existing user expectations helped me focus on meaningful improvements rather than complete overhauls.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Key Learnings</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>How to balance modern design trends with familiar user patterns</li>
                    <li>The importance of visual hierarchy in information-dense interfaces</li>
                    <li>Creating cohesive design systems within tight timelines</li>
                    <li>Designing for community-focused platforms and marketplace dynamics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Back to Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <Button
              onClick={() => navigate("/")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
            >
              ← Back to Portfolio
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CraigslistCaseStudy;