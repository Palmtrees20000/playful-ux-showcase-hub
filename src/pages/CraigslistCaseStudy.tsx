import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Figma } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
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

          {/* Early Ideation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Card className="border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Early Ideation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Initial Sketches</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <img src="/lovable-uploads/879986b9-e875-4834-973d-ad2a828abcda.png" alt="Initial sketches and ideas" className="w-full rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity" />
                      </DialogTrigger>
                      <DialogContent className="max-w-xl">
                        <img src="/lovable-uploads/879986b9-e875-4834-973d-ad2a828abcda.png" alt="Initial sketches and ideas" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Mood Board & Current State</h3>
                    <div className="space-y-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <img src="/lovable-uploads/5c20ecea-5141-4c47-91c0-fae3b6fefa33.png" alt="Mood board 1 - Current Craigslist mobile app screenshots" className="w-full rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity" />
                        </DialogTrigger>
                        <DialogContent className="max-w-xl">
                          <img src="/lovable-uploads/5c20ecea-5141-4c47-91c0-fae3b6fefa33.png" alt="Mood board 1 - Current Craigslist mobile app screenshots" className="w-full h-auto" />
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <img src="/lovable-uploads/d201658d-e335-419a-8a73-38e197f3b3c5.png" alt="Mood board 2 - Current Craigslist mobile app screenshots" className="w-full rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity" />
                        </DialogTrigger>
                        <DialogContent className="max-w-xl">
                          <img src="/lovable-uploads/d201658d-e335-419a-8a73-38e197f3b3c5.png" alt="Mood board 2 - Current Craigslist mobile app screenshots" className="w-full h-auto" />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  The initial ideation phase involved sketching out layout concepts and gathering visual inspiration. 
                  The mood board helped establish the visual direction while analyzing the current mobile interface 
                  revealed opportunities for improved user experience and modern design patterns.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <Card className="border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Design Process</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">1</div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">Discovery</h3>
                          <p className="text-gray-600">Reviewed Craigslist's current UI to identify usability issues and pain points.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">2</div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">Sketching</h3>
                          <p className="text-gray-600">Drew early layout concepts to explore improved navigation and hierarchy.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">3</div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">Wireframing</h3>
                          <p className="text-gray-600">Built low-fidelity frames in Figma to test structure and flow.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">4</div>
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
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/dabe03ef-bfda-4b80-b62e-e1fcbbf67764.png" 
                          alt="Home Screen - For Sale Near You" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/dabe03ef-bfda-4b80-b62e-e1fcbbf67764.png" alt="Home Screen - For Sale Near You" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/13f87a82-f069-4be1-8d16-50ab007453a6.png" 
                          alt="Search Screen" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/13f87a82-f069-4be1-8d16-50ab007453a6.png" alt="Search Screen" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/15813092-8e77-4575-99ce-8c1db4c7b015.png" 
                          alt="Search Results - Car Parts" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/15813092-8e77-4575-99ce-8c1db4c7b015.png" alt="Search Results - Car Parts" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/8a0f1c40-b697-4a8e-a0f8-dc09c730481c.png" 
                          alt="Create a Post" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/8a0f1c40-b697-4a8e-a0f8-dc09c730481c.png" alt="Create a Post" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/ad815b20-fb18-4e90-ab41-65912516f70a.png" 
                          alt="Messages Screen" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/ad815b20-fb18-4e90-ab41-65912516f70a.png" alt="Messages Screen" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/dabb9f3a-dce4-4f7f-b4e7-79996b76e116.png" 
                          alt="Notifications Screen" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/dabb9f3a-dce4-4f7f-b4e7-79996b76e116.png" alt="Notifications Screen" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/a6393250-bfb0-4374-a762-40efa07e442e.png" 
                          alt="Favorites Screen" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/a6393250-bfb0-4374-a762-40efa07e442e.png" alt="Favorites Screen" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/e5237505-8d9b-4676-93d2-0b8252bac3c7.png" 
                          alt="Account Profile Screen" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/e5237505-8d9b-4676-93d2-0b8252bac3c7.png" alt="Account Profile Screen" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 aspect-[9/16] flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/349b49af-8d5c-4c3d-8860-5582d3df7510.png" 
                          alt="Settings Screen" 
                          className="w-full h-full object-contain rounded-lg shadow-md cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <img src="/lovable-uploads/349b49af-8d5c-4c3d-8860-5582d3df7510.png" alt="Settings Screen" className="w-full h-auto" />
                      </DialogContent>
                    </Dialog>
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
                  This project taught me the importance of modernizing app designs to improve usability and visual appeal. 
                  I also learned how valuable it is to reference other platforms—like Facebook Marketplace and KSL—to 
                  understand what they do differently and draw inspiration from their strengths to inform my own design decisions.
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