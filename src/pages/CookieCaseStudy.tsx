import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { LightboxGallery } from "@/components/LightboxGallery";

const CookieCaseStudy = () => {
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
            The Best Chocolate Chip Cookie Recipe Ever Redesign
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Evaluating and redesigning a cookie recipe webpage for better usability, organization, and clarity through user research and observation.
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
                <Clock className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Status</h3>
                <p className="text-gray-600">Ongoing Project</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Focus</h3>
                <p className="text-gray-600">Usability & User Experience</p>
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
                The goal of this project was to analyze a <strong>disorganized recipe website</strong> and identify pain points that prevented users from easily accessing and enjoying its content.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                By observing users, gathering direct feedback, and conducting personal evaluations, I began redesigning the layout with a focus on <strong>simplicity</strong>, <strong>accessibility</strong>, and <strong>intuitive navigation</strong>.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                My research included direct user testing with <strong>two participants</strong> and an audit of the site's goals, including ad impressions, affiliate links, subscriber growth, and SEO ranking strategies.
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
                The original cookie recipe webpage claimed to offer <strong>"the best cookie recipe"</strong> but failed to deliver a user-friendly experience.
              </p>
              
              <h3 className="font-semibold text-lg mb-4">Common Issues Included:</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Overcrowded ads</strong> that disrupted the user journey and mimicked interactive buttons like "Print Recipe"</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Confusing spacing and layout</strong>, especially on desktop, causing unnecessary scrolling</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Misleading affiliate links</strong> and unclear calls to action</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Lack of consistency</strong> in user engagement metrics, creating confusion and reducing trust</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Too many social media icons</strong></p>
                </div>
              </div>

              <p className="text-lg font-semibold text-gray-800">
                These problems distracted users from the main goal: accessing and enjoying the cookie recipe.
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
              <h3 className="font-semibold text-lg mb-4">Understanding Business Goals</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                To understand more about the cookie website, I began analyzing the business goals:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                <li><strong>Drive ad engagement</strong> and impressions</li>
                <li>Encourage <strong>affiliate link clicks</strong> (mainly Amazon product links)</li>
                <li>Grow <strong>social media followers</strong> and newsletter subscribers</li>
                <li>Improve <strong>SEO rankings</strong> by increasing shares, time on page, and content engagement</li>
              </ul>

              <h3 className="font-semibold text-lg mb-4">User Testing</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                To better understand the user experience, I conducted <strong>informal usability testing</strong> with two participants. Each was asked to find and print the recipe on both desktop and mobile versions.
              </p>

              <div className="space-y-4">
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Mother's Feedback:</p>
                  <p className="text-gray-700">Found the "Print Recipe" button confusing because ads mimicked it; appreciated ad placement on the side but disliked their abundance.</p>
                </div>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800 mb-2">Father's Feedback:</p>
                  <p className="text-gray-700">Immediately removed ads that blocked content; disliked large blank gaps that required extra scrolling; enjoyed the color palette but wanted better spacing.</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-gray-700 mt-6">
                Their feedback revealed key usability barriers, such as <strong>misleading elements</strong> and <strong>poor content flow</strong>, the need for better ad placement and cleaner layout spacing.
              </p>
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
                Based on my findings, I began sketching layout concepts that prioritized <strong>clarity</strong> and <strong>user focus</strong>.
              </p>
              
              <h3 className="font-semibold text-lg mb-4">Redesign Goals:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Clean Layout</h4>
                  <p className="text-gray-700">Creating a clean, organized layout with minimal visual clutter</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Strategic Ad Placement</h4>
                  <p className="text-gray-700">Keeping ads aligned to the sidebar to reduce distractions</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Clear Actions</h4>
                  <p className="text-gray-700">Improving the "Print Recipe" button visibility without misleading placement</p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Visual Hierarchy</h4>
                  <p className="text-gray-700">Streamline visual hierarchy for easier navigation and readability</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Reduced Scrolling</h4>
                  <p className="text-gray-700">Reducing unnecessary spacing to minimize scrolling</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Balanced Integration</h4>
                  <p className="text-gray-700">Maintain room for affiliate integration without overwhelming content</p>
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-4">Wireframes:</h3>
              <LightboxGallery
                images={[
                  {
                    src: "/lovable-uploads/cookie-frame-8.jpg",
                    alt: "Original recipe page header"
                  },
                  {
                    src: "/lovable-uploads/cookie-ingredients-section.jpg",
                    alt: "Original ingredients section"
                  },
                  {
                    src: "/lovable-uploads/cookie-recipe-section.jpg",
                    alt: "Original recipe section"
                  },
                  {
                    src: "/lovable-uploads/cookie-recipe-section-2.jpg",
                    alt: "Original recipe section continued"
                  }
                ]}
                columns="grid-cols-1 md:grid-cols-4"
                imageClassName="w-full h-[400px] object-cover rounded-lg border border-gray-200"
              />
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
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Conducting meaningful usability testing</strong> with limited participants</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Balancing user feedback</strong> while maintaining the site's monetization through ads</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Identifying which design changes</strong> could improve usability without overhauling the entire structure</p>
                </div>
              </div>
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
                Testing was done <strong>informally</strong> through participant observation and interviews. I evaluated how quickly users could locate and print the recipe, noting confusion points and emotional reactions (frustration with ads, difficulty scrolling, etc.).
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                But after some critiques I received, I designed the <strong>final prototypes</strong>.
              </p>

              <h3 className="font-semibold text-lg mb-4">Final Prototypes:</h3>
              <LightboxGallery
                images={[
                  {
                    src: "/lovable-uploads/cookie-sketch-mobile.jpg",
                    alt: "Mobile prototype without ads"
                  },
                  {
                    src: "/lovable-uploads/cookie-sketch-desktop.jpg",
                    alt: "Desktop prototype with ads"
                  }
                ]}
                columns="grid-cols-1 md:grid-cols-2"
                imageClassName="w-full h-[400px] object-cover rounded-lg border border-gray-200"
              />
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
              <p className="text-xs text-gray-600 mt-1">Layout sketches & prototypes</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">Pen & Paper</h3>
              <p className="text-xs text-gray-600 mt-1">Initial idea sketching</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">User Feedback</h3>
              <p className="text-xs text-gray-600 mt-1">Collected from testing sessions</p>
            </Card>
            <Card className="p-4 text-center">
              <h3 className="font-semibold text-sm">Browser Tools</h3>
              <p className="text-xs text-gray-600 mt-1">Analyze spacing & ad placements</p>
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
                The Cookie Website Project reinforced the importance of <strong>user-centered research</strong> in balancing business goals with usability.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Through testing, sketching, and analysis, I identified how <strong>cluttered visuals</strong> and <strong>misplaced ads</strong> create frustration and distrust among users.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                By ideating clear, organized layouts, I learned how to solve a design problem by designing and improving the navigation, readability, and user confidence while still supporting site monetization.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                This project strengthened my skills in <strong>UX observation</strong>, <strong>wireframing</strong>, and <strong>design problem-solving</strong> and reminded me that even small layout adjustments can make a significant impact on the overall user experience.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Back to Portfolio */}
        <div className="text-center">
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-purple-600 text-white hover:opacity-90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookieCaseStudy;
