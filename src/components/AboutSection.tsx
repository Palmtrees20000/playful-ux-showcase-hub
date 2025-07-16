
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Lightbulb, Users, Target } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "User Research", "Wireframing", "Prototyping", "Figma", "Sketch",
    "Adobe Creative Suite", "User Testing", "Design Systems", "Accessibility",
    "Information Architecture", "Interaction Design", "Visual Design"
  ];

  const values = [
    {
      icon: Heart,
      title: "User-Centered",
      description: "Always putting the user at the heart of every design decision"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Exploring creative solutions to complex design challenges"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focusing on measurable improvements in user experience"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-teal-400 via-purple-500 to-orange-400 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                  <div className="w-60 h-60 rounded-full bg-gradient-to-br from-teal-100 to-purple-100 flex items-center justify-center">
                    <span className="text-6xl">👋</span>
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Hi! I'm Palmer Charles
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                A passionate UX designer with a love for turning complex ideas into intuitive, 
                user-centered experiences. My journey into UX started when I first saw the term 
                while choosing a major at UVU.
              </p>
              <p>
                After exploring digital marketing and falling in love with visual design through 
                an Adobe Illustrator class, I took a break from school. When I returned two years 
                later, I revisited UX and realized it was the perfect mix of creativity, strategy, 
                and problem-solving.
              </p>
              <p>
                What I love most about UX is the process of iterating, brainstorming, and exploring 
                new design solutions. Each challenge pushes me to think critically and creatively — 
                whether I'm sketching wireframes, testing prototypes, or reworking a layout based on feedback.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow group cursor-default">
                <CardContent className="p-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-purple-400 rounded-2xl flex items-center justify-center"
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  className="px-4 py-2 text-sm bg-gradient-to-r from-teal-50 to-purple-50 text-purple-700 border-purple-200 hover:from-teal-100 hover:to-purple-100 transition-all"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
