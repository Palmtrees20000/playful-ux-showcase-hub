
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Coffee } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:palmer@example.com",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always learning, always curious, and always looking for new ways to design 
            experiences that feel natural, meaningful, and human.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Coffee className="mr-3 text-orange-500" />
                  Let's Grab Coffee (Virtually)
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-purple-400"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-purple-400"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-purple-400 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-600 hover:to-purple-600 hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you have a project in mind, want to collaborate, or just want to chat 
                about UX design, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {link.label}
                    </div>
                    <div className="text-sm text-gray-500">
                      Click to connect
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl border border-purple-100"
            >
              <h4 className="font-bold text-gray-900 mb-2">Quick Response Promise</h4>
              <p className="text-sm text-gray-600">
                I typically respond to messages within 24 hours. Looking forward to connecting with you!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
