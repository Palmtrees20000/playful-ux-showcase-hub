
import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large floating circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-teal-400/10 to-purple-400/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: "10%",
          left: "10%",
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-orange-400/10 to-pink-400/10 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: "60%",
          right: "10%",
        }}
      />

      {/* Medium floating shapes */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-teal-300/20 to-blue-300/20 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: "30%",
          left: "70%",
        }}
      />

      <motion.div
        className="absolute w-24 h-24 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-xl"
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: "80%",
          left: "20%",
        }}
      />

      {/* Small floating dots */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-r from-teal-400/30 to-purple-400/30 rounded-full blur-sm"
          animate={{
            y: [0, Math.random() * 50 - 25, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
