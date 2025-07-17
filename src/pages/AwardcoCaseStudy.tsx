import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const AwardcoCaseStudy = () => {
  const processImages = [
    "/lovable-uploads/061ded9b-5c28-4f26-820e-dfab1ae2aea1.png",
    "/lovable-uploads/6b2c4d28-4b5a-406f-a3a6-c5b56e5350bd.png", 
    "/lovable-uploads/0d5ed484-0cc2-48b7-bafa-3e6ff39aa28b.png",
    "/lovable-uploads/1bdd6f75-5786-4388-ad2a-46ed51f973c1.png"
  ];

  const finalDesigns = [
    "/lovable-uploads/341aedef-4aa4-4a4c-bf06-664e32ae2220.png",
    "/lovable-uploads/2957061d-c96a-4ae2-ac8c-52dc27e458f8.png"
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
              UX Design
            </Badge>
            <Badge className="bg-gradient-to-r from-teal-50 to-purple-50 text-purple-700 border-purple-200">
              User Research
            </Badge>
            <Badge className="bg-gradient-to-r from-teal-50 to-purple-50 text-purple-700 border-purple-200">
              Employee Engagement
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            Employee Recognition Platform
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A 6-week UX sprint redesigning employee recognition workflows to increase engagement and streamline award processes for a workforce of 10,000+ employees.
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
                <p className="text-gray-600">6 weeks (Summer Sprint)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Impact</h3>
                <p className="text-gray-600">Improved user engagement workflows</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Problem Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                The existing employee recognition system had complex workflows that hindered managers from 
                efficiently recognizing their teams. Users struggled with lengthy processes, unclear navigation, 
                and poor mobile experience, resulting in decreased engagement with the platform.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Design Process</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
              Wireframing & User Flows
            </h3>
            <p className="text-gray-600 mb-6">
              Started with whiteboard sessions to map user journeys and identify pain points. 
              Created low-fidelity wireframes to test different interaction patterns and information architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {processImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={image} 
                    alt={`Design process ${index + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Final Design Solution</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Designed a streamlined recognition experience with clear visual hierarchy, 
              engaging animations, and social features that encourage peer-to-peer recognition.
            </p>
          </div>

          <div className="space-y-8">
            {finalDesigns.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Final design ${index + 1}`}
                    className="w-full h-auto"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Key Design Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Visual Recognition</h3>
              <p className="text-gray-600">
                Prominent award announcements with trophy iconography and celebratory design elements 
                to make recognition feel special and memorable.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Social Engagement</h3>
              <p className="text-gray-600">
                Integrated comment system and reaction features to build community around recognition 
                and encourage peer-to-peer celebration.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Clear Hierarchy</h3>
              <p className="text-gray-600">
                Structured information layout with clear award categories, winner highlights, 
                and easy-to-scan content organization.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-semibold mb-3 text-lg">Brand Consistency</h3>
              <p className="text-gray-600">
                Cohesive visual design with consistent color palette, typography, and component 
                styling aligned with company brand guidelines.
              </p>
            </Card>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-2">Improved</h3>
                  <p className="text-gray-600">User engagement workflows</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-2">Streamlined</h3>
                  <p className="text-gray-600">Recognition processes</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">Enhanced</h3>
                  <p className="text-gray-600">Mobile experience</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700">
              View More Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AwardcoCaseStudy;