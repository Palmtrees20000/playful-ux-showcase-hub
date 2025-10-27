import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Eye, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const UvuCaseStudy = () => {
  const personaImages = [
    "/lovable-uploads/uvu-personas-2.jpg",
    "/lovable-uploads/uvu-personas-3.jpg"
  ];

  const wireframeImages = [
    "/lovable-uploads/uvu-wireframe-1.png",
    "/lovable-uploads/uvu-wireframe-2.jpg",
    "/lovable-uploads/uvu-wireframe-3.jpg",
    "/lovable-uploads/uvu-wireframe-4.jpg"
  ];

  const surfaceCompImages = [
    "/lovable-uploads/uvu-surface-1.jpg",
    "/lovable-uploads/uvu-surface-2.jpg",
    "/lovable-uploads/uvu-surface-3.jpg",
    "/lovable-uploads/uvu-surface-4.jpg",
    "/lovable-uploads/uvu-surface-5.jpg",
    "/lovable-uploads/uvu-surface-6.jpg",
    "/lovable-uploads/uvu-surface-7.jpg",
    "/lovable-uploads/uvu-surface-8.jpg",
    "/lovable-uploads/uvu-surface-9.jpg",
    "/lovable-uploads/uvu-surface-10.jpg",
    "/lovable-uploads/uvu-surface-11.jpg",
    "/lovable-uploads/uvu-surface-12.jpg"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-gradient-to-r from-teal-50 to-purple-50 text-purple-700 border-purple-200">
              UI/UX Design
            </Badge>
            <Badge className="bg-gradient-to-r from-teal-50 to-purple-50 text-purple-700 border-purple-200">
              Web Design
            </Badge>
            <Badge className="bg-gradient-to-r from-teal-50 to-purple-50 text-purple-700 border-purple-200">
              User Research
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            UVU College of Engineering & Technology Redesign
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Redesigning UVU's College of Engineering website to improve navigation and usability for students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-teal-600 mb-3" />
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-gray-600">UX Designer & Researcher</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-gray-600">One Semester</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-gray-600">Collaborative Student Project</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🎯 The Problem</h2>
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Difficult navigation and broken links</li>
                <li>Information overload making program selection confusing</li>
                <li>Career and internship info hard to find</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Planning & Discovery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🔍 Planning & Discovery</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Created user personas to identify key needs and pain points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {personaImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <img 
                        src={image} 
                        alt={`Persona ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 overflow-hidden">
                    <div className="relative flex items-center justify-center">
                      <img 
                        src={image} 
                        alt={`Persona ${index + 1}`}
                        className="max-w-full max-h-[85vh] object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Students need clear paths to advisors and department info</li>
                <li>Career info and salaries are crucial decision factors</li>
                <li>Inconsistent navigation across pages causes confusion</li>
                <li>Duplicate information creates information overload</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Research (Eye Tracking) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">👁️ Research (Eye Tracking)</h2>
          
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 mb-6">
                Conducted eye tracking studies to understand user behavior and navigation patterns.
              </p>

              <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Users were confused about navigation, especially returning to the CET homepage</li>
                <li>Career and internship information was not immediately visible, requiring users to search under "Student Resources"</li>
                <li>The banner was attention-grabbing but did not clearly communicate that the site was for CET specifically</li>
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Design */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">✏️ Design</h2>
          
          <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Qualities</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Applicable photos</li>
                    <li>Clear call to actions</li>
                    <li>Consistent buttons across pages</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Constraints</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Don't have access to change all the pages on the website</li>
                    <li>Can't change the navigation bar even though it's not consistent across every page</li>
                    <li>Creating changes within the existing UVU design system</li>
                    <li>Timing is a constraint; must finish before the semester ends</li>
                    <li>$0 budget</li>
                  </ul>
                </div>
              </div>

            </CardContent>
          </Card>
        </motion.section>

        {/* Wireframing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">📐 Wireframing</h2>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wireframeImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                      <img 
                        src={image} 
                        alt={`Wireframe ${index + 1}`}
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 overflow-hidden">
                    <div className="relative flex items-center justify-center">
                      <img 
                        src={image} 
                        alt={`Wireframe ${index + 1}`}
                        className="max-w-full max-h-[85vh] object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Surface Comps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🎨 Surface Comps</h2>
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surfaceCompImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                      <img 
                        src={image} 
                        alt={`Surface comp ${index + 1}`}
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 overflow-hidden">
                    <div className="relative flex items-center justify-center">
                      <img 
                        src={image} 
                        alt={`Surface comp ${index + 1}`}
                        className="max-w-sm max-h-[85vh] object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* The Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">⚠️ The Challenges</h2>
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                Key challenge: maintaining team motivation without hard deadlines. Learned the importance of clear expectations, 
                asking better research questions, and understanding the full project scope beyond my individual tasks.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Testing & Validating */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🧪 Testing & Validating</h2>
          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Usability Testing Results</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>Users couldn't find Interest Quiz and Careers pages easily</li>
                <li>Missing homepage navigation button</li>
                <li>"Donate" page poorly labeled</li>
              </ul>
              
              <p className="text-gray-700">
                <strong>Solution:</strong> Moved Departments section higher, changed "Make a gift" to "Donate" for clarity.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Project Retrospective */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">💭 Project Retrospective</h2>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                Successfully simplified the CET website navigation and improved user experience for prospective and current students. 
                Key learning: the importance of understanding the full design process and asking better research questions.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Navigation */}
        <div className="flex justify-center pt-8 border-t">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UvuCaseStudy;
