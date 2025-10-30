
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:pacharles@charlesllc.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/palmer-charles-558398275/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Palmtrees20000",
      label: "GitHub"
    }
  ];

  return (
    <footer className="py-8 px-6 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Palmer Charles. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
