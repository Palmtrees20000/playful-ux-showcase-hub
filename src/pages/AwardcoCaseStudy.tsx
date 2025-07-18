import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const AwardcoCaseStudy = () => {
  const processImages = [
    "/lovable-uploads/7748727c-ba3e-4922-a70a-661041a0701b.png",
    "/lovable-uploads/ed6bff6f-db96-424f-9e05-e842cd23b3d1.png", 
    "/lovable-uploads/5f7df5fd-378e-46d7-96b4-df734863cf7b.png",
    "/lovable-uploads/0834fe85-1559-4034-b19b-9e005735f2e7.png"
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

        {/* Understanding the Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">💡 Understanding the Problem</h2>
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                We kicked off with team discussions around two key questions:
              </p>
              <div className="space-y-4 mb-6">
                <p className="text-lg font-medium text-gray-800 italic">
                  "What can a user consume that would make them want to create (i.e., post)?"
                </p>
                <p className="text-lg font-medium text-gray-800 italic">
                  "What can a user consume that would make them want to claim (i.e., earn rewards)?"
                </p>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                To better understand the problem, our team created user journey maps to visualize scenarios where users interacted with the platform. One journey involved an employee being asked to recognize a colleague but feeling unmotivated to do so. We asked ourselves:
              </p>
              <p className="text-lg font-semibold text-gray-800">
                How might we increase user engagement and curiosity beyond that single task?
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* My Design Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">✏️ My Design Approach</h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-6">
              As someone newer to UX at the time, I faced a steep learning curve — but I approached it with curiosity and commitment. Due to a signed NDA, I cannot show all project details or visuals, but I'll walk through my role and process. Despite limited access to the existing Awardco UI, I focused on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
              <li>Listing key features users might need or expect</li>
              <li>Sketching initial ideas and layout possibilities</li>
              <li>Iterating quickly into low-fidelity wireframes using Figma</li>
            </ul>
            <p className="text-gray-600 mb-6">
              This approach helped me translate abstract ideas into actionable design elements, even under uncertainty.
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

        {/* Team Collaboration & Growth */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🧠 Team Collaboration & Growth</h2>
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Working with a more experienced team challenged me in the best ways. I had to quickly adapt to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>UX-specific terminology and workflows</li>
                <li>Fast-paced brainstorming sessions</li>
                <li>Stakeholder expectations</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700">
                There were moments of doubt, especially when feedback was tough or my ideas didn't land. But I learned to ask better questions, embrace critique, and refine my communication. One pivotal moment came when I had to defend my design direction and explain how it addressed user needs — this pushed me to think more strategically.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Testing & Feedback */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🧪 Testing & Feedback</h2>
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                We conducted internal usability testing with Awardco employees to validate early concepts. Feedback revealed that many users were more familiar with third-party platforms than the Awardco ecosystem — a critical insight that influenced our design adjustments.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Due to time constraints and limited UI access, we weren't able to create high-fidelity, fully branded mockups. However, our wireframes and concepts were well-received and helped shape future exploration.
              </p>
            </CardContent>
          </Card>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {/* Tools Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🧰 Tools Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">Figma</h3>
              <p className="text-xs text-gray-600 mt-1">Wireframes & visual design</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">FigJam</h3>
              <p className="text-xs text-gray-600 mt-1">Brainstorming & journey mapping</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">Notion</h3>
              <p className="text-xs text-gray-600 mt-1">Documentation and team planning</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">Discord / Slack</h3>
              <p className="text-xs text-gray-600 mt-1">Communication & feedback</p>
            </Card>
          </div>
        </motion.section>

        {/* Final Thoughts */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">💭 Final Thoughts</h2>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                This sprint taught me the importance of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Clear communication in a team setting</li>
                <li>Designing under real-world constraints</li>
                <li>Listening deeply to both users and teammates</li>
              </ul>
              <p className="text-lg leading-relaxed text-gray-700">
                Though the experience was intense, it gave me confidence in my ability to contribute to UX projects under pressure and collaborate meaningfully — even when I felt out of my depth.
              </p>
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