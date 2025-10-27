import { motion } from "framer-motion";
import { ArrowLeft, Heart, Target, Palette, CheckCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useState } from "react";

const MemoryMattersCaseStudy = () => {
  const [sketchGalleryOpen, setSketchGalleryOpen] = useState(false);
  const [sketchCurrentIndex, setSketchCurrentIndex] = useState(0);
  
  const [designGalleryOpen, setDesignGalleryOpen] = useState(false);
  const [designCurrentIndex, setDesignCurrentIndex] = useState(0);
  
  const [finalGalleryOpen, setFinalGalleryOpen] = useState(false);
  const [finalCurrentIndex, setFinalCurrentIndex] = useState(0);

  const sketchImages = [
    "/lovable-uploads/mm-wireframes.png",
    "/lovable-uploads/mm-sitemap.png"
  ];

  const designImages = [
    "/lovable-uploads/mm-mobile.png",
    "/lovable-uploads/mm-tablet.png",
    "/lovable-uploads/mm-desktop.png"
  ];

  const finalDesigns = [
    "/lovable-uploads/mm-final-desktop.png",
    "/lovable-uploads/mm-final-mobile.png"
  ];

  const openSketchGallery = (index: number) => {
    setSketchCurrentIndex(index);
    setSketchGalleryOpen(true);
  };

  const openDesignGallery = (index: number) => {
    setDesignCurrentIndex(index);
    setDesignGalleryOpen(true);
  };

  const openFinalGallery = (index: number) => {
    setFinalCurrentIndex(index);
    setFinalGalleryOpen(true);
  };

  const navigateGallery = (
    currentIndex: number,
    setIndex: (index: number) => void,
    imagesLength: number,
    direction: 'prev' | 'next'
  ) => {
    if (direction === 'prev') {
      setIndex(currentIndex === 0 ? imagesLength - 1 : currentIndex - 1);
    } else {
      setIndex(currentIndex === imagesLength - 1 ? 0 : currentIndex + 1);
    }
  };

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
              Accessibility
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            MemoryMatters Website Redesign
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Creating a <strong>compassionate digital platform</strong> for memory care and support services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-teal-600 mb-3" />
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-gray-600">UX/UI Designer</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Target className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-gray-600">Academic Project</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Palette className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-gray-600">Figma, Sketchbook</p>
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
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700">
                The original MemoryMatters website appeared <strong>cluttered and inconsistent</strong>. 
                Some pages contained too much information while others were nearly empty. Navigation links overlapped in purpose, 
                and <strong>important features like volunteering and program information were hard to locate</strong>. My goal 
                was to redesign the website to provide a <strong>clear, intuitive, and welcoming user experience</strong> that 
                highlights the organization's mission and encourages user engagement.
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
          <h2 className="text-3xl font-bold mb-6">🎯 The Problem</h2>
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Users visiting the site struggled to find the information they needed due to <strong>poor layout structure</strong>, 
                <strong>unclear labeling</strong>, and <strong>missing or redundant pages</strong>. The absence of a 
                <strong> search function</strong> and <strong>clear calls to action</strong> made it difficult for potential 
                volunteers or families to connect with the organization.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">The site needed:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Organized information architecture</strong></li>
                <li><strong>Consistent visual hierarchy</strong> to communicate trust and compassion effectively</li>
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
          
          <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                I started by <strong>analyzing the existing website</strong> to identify usability issues and content inconsistencies. 
                I then researched similar nonprofit and healthcare websites for design inspiration, paying close attention to 
                <strong> tone, color, and accessibility</strong>.
              </p>

              <h3 className="text-xl font-semibold mb-4">Main User Goals:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Learn about programs</strong> for people with memory loss</li>
                <li>Find ways to <strong>volunteer or donate</strong></li>
                <li>Understand the organization's <strong>mission and impact</strong></li>
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
          
          <Card className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                To start, I <strong>sketched out potential redesigns</strong> and focused on <strong>simplifying the navigation</strong> 
                by creating a navigation map and improving content hierarchy.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {sketchImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card 
                      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                      onClick={() => openSketchGallery(index)}
                    >
                      <img 
                        src={image} 
                        alt={`Sketch ${index + 1}`}
                        className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      />
                    </Card>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Key Design Decisions:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Adding a <strong>search bar</strong> to improve accessibility</li>
                <li>Creating clear <strong>call-to-action buttons</strong> ("Get Involved" and "Volunteer") in the hero section</li>
                <li>Using a <strong>column grid system</strong> to ensure consistent alignment</li>
                <li>Incorporating <strong>video and imagery</strong> to emotionally connect with visitors</li>
                <li>Maintaining <strong>consistency across desktop, tablet, and mobile</strong> using responsive components</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openDesignGallery(index)}
                >
                  <img 
                    src={image} 
                    alt={`Design ${index + 1}`}
                    className="w-full h-auto max-h-96 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Card>
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
                One of the biggest challenges was <strong>deciding what information to keep, combine, or remove</strong> 
                while maintaining the organization's core message.
              </p>

              <h3 className="text-xl font-semibold mb-4">Other Challenges:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Ensuring <strong>design consistency</strong> across all device sizes</li>
                <li>Fixing <strong>footer and component inconsistencies</strong> in Figma</li>
                <li>Adjusting <strong>layout grids</strong> after realizing initial frame sizes didn't match specifications</li>
              </ul>

              <p className="text-gray-700 mt-6">
                Through feedback from my professor and classmates, I learned to <strong>refine my layouts</strong> and 
                improve my <strong>responsive design workflow</strong>.
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
              <p className="text-lg text-gray-700 mb-6">
                I reviewed the prototype with classmates and received feedback on <strong>clarity, alignment, and accessibility</strong>. 
                After applying their suggestions, I refined the design to maintain <strong>consistent components</strong> and 
                improve <strong>readability</strong>.
              </p>

              <h3 className="text-xl font-semibold mb-4">Testing Focused On:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Navigational flow and clarity</strong></li>
                <li><strong>Responsiveness</strong> on mobile and tablet</li>
                <li><strong>Visual hierarchy</strong> and emphasis on the mission statement</li>
              </ul>

              <p className="text-gray-700 mt-6">
                The result was a <strong>clean, user-friendly design</strong> that made it easier for visitors to explore 
                programs, volunteer opportunities, and organizational goals.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Final Designs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">🎨 Final Designs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {finalDesigns.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => openFinalGallery(index)}
                >
                  <img 
                    src={image} 
                    alt={`Final design ${index + 1}`}
                    className="w-full h-auto max-h-96 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              </motion.div>
            ))}
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
              <p className="text-lg leading-relaxed text-gray-700">
                I learned that <strong>effective design takes time, patience, and attention to detail</strong>. 
                Ensuring consistency across all devices required <strong>careful adjustments and problem-solving</strong> 
                to create a cohesive user experience. Through this project, I developed a deeper understanding of 
                <strong> Figma tools</strong> such as components, grids, and icon systems, and gained greater appreciation 
                for how <strong>structure and creativity work together</strong> in design. Most importantly, this experience 
                <strong> strengthened my confidence as a designer</strong> and deepened my desire to keep exploring new tools 
                and improving my craft in UX/UI design.
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

      {/* Sketch Gallery */}
      <Dialog open={sketchGalleryOpen} onOpenChange={setSketchGalleryOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <div className="relative flex items-center justify-center bg-black/95 min-h-[85vh]">
            <button
              onClick={() => navigateGallery(sketchCurrentIndex, setSketchCurrentIndex, sketchImages.length, 'prev')}
              className="absolute left-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            
            <img 
              src={sketchImages[sketchCurrentIndex]} 
              alt={`Sketch ${sketchCurrentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain p-4"
            />
            
            <button
              onClick={() => navigateGallery(sketchCurrentIndex, setSketchCurrentIndex, sketchImages.length, 'next')}
              className="absolute right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {sketchCurrentIndex + 1} / {sketchImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Design Gallery */}
      <Dialog open={designGalleryOpen} onOpenChange={setDesignGalleryOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <div className="relative flex items-center justify-center bg-black/95 min-h-[85vh]">
            <button
              onClick={() => navigateGallery(designCurrentIndex, setDesignCurrentIndex, designImages.length, 'prev')}
              className="absolute left-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            
            <img 
              src={designImages[designCurrentIndex]} 
              alt={`Design ${designCurrentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain p-4"
            />
            
            <button
              onClick={() => navigateGallery(designCurrentIndex, setDesignCurrentIndex, designImages.length, 'next')}
              className="absolute right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {designCurrentIndex + 1} / {designImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Final Gallery */}
      <Dialog open={finalGalleryOpen} onOpenChange={setFinalGalleryOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden">
          <div className="relative flex items-center justify-center bg-black/95 min-h-[85vh]">
            <button
              onClick={() => navigateGallery(finalCurrentIndex, setFinalCurrentIndex, finalDesigns.length, 'prev')}
              className="absolute left-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            
            <img 
              src={finalDesigns[finalCurrentIndex]} 
              alt={`Final design ${finalCurrentIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain p-4"
            />
            
            <button
              onClick={() => navigateGallery(finalCurrentIndex, setFinalCurrentIndex, finalDesigns.length, 'next')}
              className="absolute right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              {finalCurrentIndex + 1} / {finalDesigns.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MemoryMattersCaseStudy;
