import { motion } from "framer-motion";
import { ArrowLeft, Users, Target, Eye, Lightbulb, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const UvuCaseStudy = () => {
  const personaImages = [
    "/lovable-uploads/uvu-personas-1.png",
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
            This project focused on redesigning Utah Valley University's (UVU) College of Engineering and Technology (CET) 
            online webpage to improve navigation, clarity, and usability for prospective and current students.
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
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                We identified that the CET website had too much unclear information, making it difficult for 
                prospective and current students to choose a program. Key issues included:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>The website is difficult to navigate</li>
                <li>Broken Links</li>
                <li>Too much information</li>
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
              To begin the study, the team needed to know who the audience was, create assumptions, and identify user needs. 
              Four personas were created to accommodate the needs of the website. Two are shown below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
              <h3 className="text-xl font-semibold mb-4">Key Assumptions</h3>
              <p className="text-gray-700 mb-4">
                As the team and I created the personas, ten assumptions about the personas were made:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>The site has information on each department</li>
                <li>Prospective students want to see information on different careers and salaries</li>
                <li>Navigation changes based on different pages</li>
                <li>Students want a clear path to navigate the site and find applicable information</li>
                <li>The site should remain consistent with other UVU sites</li>
                <li>Students need a clear path to meet with their advisor, even if they aren't sure what their department is</li>
                <li>Overload of information, making it difficult to sift through</li>
                <li>The site has a lot of pages with duplicate information</li>
                <li>Unclear start point/user flow for new site users</li>
                <li>Students want to find accessible internship information</li>
              </ul>
              <p className="text-gray-700 mt-6">
                As the team's personas and assumptions were made, the users' needs became clear and reinforced the problem 
                statement that there was too much information for prospective students and current students on the CET website.
              </p>
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
                To get a greater understanding of the CET website and what students are seeing, we conducted an eye tracking station. 
                The two candidates volunteered and signed an agreement to participate in the study and allowed us to audio record them.
              </p>
              
              <div className="mb-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer hover:opacity-90 transition-opacity">
                      <img 
                        src="/lovable-uploads/uvu-eyetracking.png" 
                        alt="Eye tracking research"
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 overflow-hidden">
                    <div className="relative flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/uvu-eyetracking.png" 
                        alt="Eye tracking research"
                        className="max-w-full max-h-[85vh] object-contain"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Users were confused about navigation, especially returning to the CET homepage</li>
                <li>Career and internship information was not immediately visible, requiring users to search under "Student Resources"</li>
                <li>The banner was attention-grabbing but did not clearly communicate that the site was for CET specifically</li>
              </ul>
              <p className="text-gray-700 mt-6">
                From this study we were able to get a greater understanding of what was needed to change.
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
          
          <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6">
                The team and I began to design after getting greater information from the research we had done. We wrote down 
                the purpose of each of the webpages and identified key features that needed to change in the CET webpage, 
                for instance, adding a webpage called "Wolverine Careers".
              </p>

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

              <p className="text-gray-700">
                The team and I also created a site map to understand where each link goes.
              </p>
            </CardContent>
          </Card>

          <div className="mb-6">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer hover:opacity-90 transition-opacity">
                  <img 
                    src="/lovable-uploads/uvu-sitemap-1.png" 
                    alt="Site map"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-4 overflow-hidden">
                <div className="relative flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/uvu-sitemap-1.png" 
                    alt="Site map"
                    className="max-w-full max-h-[85vh] object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
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
          
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Here are the designs of what we created to accommodate the needed changes. There were revisions made 
              to make the web pages better and more consistent. Below are the first drafts of the wireframes.
            </p>
          </div>

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
          
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-6">
              After wireframing the team started their surface comps to give the webpages life. In addition, other changes 
              have been made to make the web pages flow and stay consistently better. For instance, the removal of the 
              "Dean section" and relocating the "Student Testimonials" to the "Donation page" so users are provided with 
              a reason rather than a "give me money" view.
            </p>
          </div>

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
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Although the project was successful overall, we faced several challenges along the way. The biggest hurdle 
                was maintaining team motivation and communication. Since late submissions weren't penalized, some team members 
                delayed their work, which slowed progress and made reminders feel frustrating. This experience taught me the 
                importance of setting clear expectations and maintaining momentum, even without external deadlines.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                On a personal level, I realized I could have done more to understand the entire project rather than focusing 
                only on my portion. Additionally, conducting user research was more difficult than expected—we struggled to 
                frame the right questions and stay focused during testing. Despite these challenges, the team completed the 
                project and I gained valuable lessons about collaboration, leadership, and the importance of refining research methods.
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
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Much like the eye tracking research, the team and I had four volunteers to undergo a test in the new CET 
                website we created. Each of the volunteers signed and agreed to go through with the test. We provided a few 
                navigation questions that would allow the testers to peruse through the new webpages.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>Users looked for the Interest Quiz and Wolverine Careers page in the navigation</li>
                <li>They scrolled past a lot of information on the homepage to find the quiz and career page</li>
                <li>No button to get back to the home page</li>
                <li>Users had trouble finding the Donate page as it was not clearly labeled in the navigation</li>
              </ul>
              
              <p className="text-lg leading-relaxed text-gray-700">
                After the new testing, we decided to move the "Departments section" up on the CET web page and change the 
                words "Make a gift" to "Donate" to make it easier for prospective students and others to locate.
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
                In conclusion, the team collaboration moments took time but as we pursued the projects, it was clear what 
                was needed to change. This project taught me the importance of understanding the entire design process, not 
                just my assigned portion. I also learned how challenging it can be to ask the right user research questions, 
                and I'd approach that differently and with more effort in future projects. Despite communication hurdles, 
                our team delivered a design that addressed major user frustrations and simplified the CET website.
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
