import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Lightbulb, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { LightboxGallery, SingleImageLightbox } from "@/components/LightboxGallery";
import { CaseStudyNavigation } from "@/components/CaseStudyNavigation";
import { CaseStudyHeader } from "@/components/CaseStudyHeader";

const CollectedAFCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <CaseStudyHeader currentPath="/case-study/collectedaf" />

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
              Web Development
            </Badge>
            <Badge className="bg-gradient-to-r from-teal-50 to-purple-50 text-purple-700 border-purple-200">
              Collaboration
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            CollectedAF
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A collaborative UX and development project creating a fully functional website and admin platform for collectors to showcase and manage their collections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-teal-600 mb-3" />
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-gray-600">UX Designer</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-gray-600">Several Months</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-gray-600">UVU Students & Project Owner</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">📋 Overview</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Over several months, I worked with a small team of front-end and back-end developers and the owner of CollectedAF, who mentored us through each stage. My role focused on designing and refining layouts for both the mobile and desktop experiences, ensuring usability and visual consistency.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                We held weekly meetings to align priorities, share progress, and gather UX feedback. Using tools like Slack and Jira, we tracked tasks, documented decisions, and coordinated updates efficiently.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* The Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">💡 The Problem</h2>
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                CollectedAF needed a <strong>functional</strong> and <strong>user-friendly website</strong> that included:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
                <li><strong>Login page</strong></li>
                <li><strong>Admin dashboard</strong></li>
              </ul>
              
              <div className="max-w-sm mx-auto mb-8">
                <SingleImageLightbox 
                  src="/lovable-uploads/collectedaf-existing-page.png" 
                  alt="CollectedAF existing page interface" 
                  className="portfolio-image-standard"
                />
              </div>
              
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                The challenge was to design a <strong>cohesive experience</strong> that met the owner's vision within <strong>tight time constraints</strong> and with <strong>limited formal wireframing</strong>. The official CollectedAF page had only the design, summary, and logo with no other content.
              </p>
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
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                We began by discussing the <strong>brand's goals</strong>, <strong>desired features</strong>, and <strong>target audience</strong> with the owner. These meetings helped clarify layout priorities and user flow expectations.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Though understanding the vision was hard at first, I sketched interface ideas and used <strong>AI tools</strong> to explore different structure options that balanced <strong>visual hierarchy</strong> and <strong>usability</strong>.
              </p>
              <div className="bg-white/50 p-4 rounded-lg border border-blue-200 mt-6">
                <p className="text-gray-600 italic">
                  "What is a good category admin site that categorizes accepting and denying. This is for the CollectedAF project I am working on"
                </p>
                <p className="text-gray-600 italic mt-2">
                  "Can you draft a design so I know what it looks like and what you are talking about"
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <h3 className="font-semibold text-lg mb-4">Early Sketches & Design Exploration</h3>
                
                <LightboxGallery
                  images={[
                    { src: "/lovable-uploads/collectaf-sketch-1.jpg", alt: "CollectedAF initial wireframe sketches" },
                    { src: "/lovable-uploads/collectaf-sketch-2.jpg", alt: "CollectedAF admin dashboard sketches" },
                    { src: "/lovable-uploads/collectaf-admin-ui.png", alt: "CollectedAF admin interface design" }
                  ]}
                  columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                />
              </div>
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
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                The design phase focused on <strong>simplicity</strong>, <strong>accessibility</strong>, and <strong>intuitive navigation</strong>. I created and refined mobile app layouts that emphasized clarity and user needs, ensuring seamless transitions between login, admin, and main pages.
              </p>
              <h3 className="font-semibold text-lg mb-4">Key Design Focuses:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Clean Layouts</h4>
                  <p className="text-gray-700">Quick readability and intuitive structure</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Intuitive Flows</h4>
                  <p className="text-gray-700">Seamless login and sign-up experiences</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Accessibility</h4>
                  <p className="text-gray-700">Color contrast and button placement</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Early Wireframes</h3>
                <p className="text-gray-600 mb-6">
                  Initial wireframe explorations of the admin dashboard, showing various layout approaches and interaction patterns.
                </p>
                <LightboxGallery
                  images={[
                    { src: "/lovable-uploads/collectaf-wireframe-1.png", alt: "CollectedAF admin wireframe - collected data view" },
                    { src: "/lovable-uploads/collectaf-wireframe-2.png", alt: "CollectedAF admin wireframe - category management" }
                  ]}
                  columns="grid-cols-1 md:grid-cols-2"
                />
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Login Page Design Iterations</h3>
                <p className="text-gray-600 mb-6">
                  Various states of the login page including error handling and developer-ready designs.
                </p>
                <LightboxGallery
                  images={[
                    { src: "/lovable-uploads/collectedaf-sign-in-dev-ready.png", alt: "CollectedAF sign-in page - dev ready" },
                    { src: "/lovable-uploads/collectedaf-error-sign-in-1.png", alt: "CollectedAF sign-in - error state password" },
                    { src: "/lovable-uploads/collectedaf-error-sign-in.png", alt: "CollectedAF sign-in - error state username" }
                  ]}
                  columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                />
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Final Admin Dashboard Design</h3>
                <p className="text-gray-600 mb-6">
                  The completed admin dashboard interface showing the submission management system with categories, filtering, and action controls.
                </p>
                <div className="max-w-sm mx-auto">
                  <SingleImageLightbox 
                    src="/lovable-uploads/collectedaf-admin-page-final.png" 
                    alt="CollectedAF final admin dashboard design" 
                    className="portfolio-image-standard"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* The Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🚧 The Challenges</h2>
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                One of the biggest challenges was how to <strong>visualize what the project owner was wanting</strong>, finding time and references that had the same idea, and sketching out ideas.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Limited time</strong> for full UX documentation and usability testing</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Irregular team communication</strong> and project pauses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Balancing mentorship feedback</strong> with practical design execution</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Aligning visual design</strong> with back-end development constraints</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mt-6">
                Ultimately, <strong>AI helped organize the idea</strong> and put the idea to life.
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
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                While the project did not reach formal usability testing, I gathered <strong>informal feedback</strong> and suggestions from the team. This <strong>iterative feedback loop</strong> helped refine the visual hierarchy and improve the overall user flow.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                Overall, the testing focused on whether the developers could code it and have the <strong>basic functions of a login page and the admin page</strong> working properly.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Tools Used */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🧰 Materials & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">Figma</h3>
              <p className="text-xs text-gray-600 mt-1">Sketching, mockups & layouts</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">AI Tools</h3>
              <p className="text-xs text-gray-600 mt-1">Layout ideation</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">Slack</h3>
              <p className="text-xs text-gray-600 mt-1">Team communication</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">Jira</h3>
              <p className="text-xs text-gray-600 mt-1">Task tracking & documentation</p>
            </Card>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">💭 Conclusion</h2>
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Even though the project's continuation remains uncertain, CollectedAF provided valuable experiences in <strong>cross-functional collaboration</strong>, <strong>real-world project communication</strong>, and <strong>UX problem-solving</strong>.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                It strengthened my ability to <strong>balance user needs with business goals</strong> and revealed the value of <strong>Figma starter kits</strong> for maintaining design consistency and efficiency in future projects.
              </p>
              <div className="bg-white/50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-lg mb-3">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Cross-functional collaboration</strong> strengthens design outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Real-world communication</strong> requires adaptability and clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Design systems and starter kits</strong> improve consistency and efficiency</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Navigation */}
        <CaseStudyNavigation currentPath="/case-study/collectedaf" />
      </div>
    </div>
  );
};

export default CollectedAFCaseStudy;
