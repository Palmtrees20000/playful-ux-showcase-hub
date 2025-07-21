
import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large floating circles with gradient morphing */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-teal-400/10 to-purple-400/10 blur-3xl"
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -80, 30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 30,
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
          x: [0, -120, 80, 0],
          y: [0, 90, -30, 0],
          rotate: [360, 180, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: "60%",
          right: "10%",
        }}
      />

      {/* Medium floating shapes with more dynamic movement */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-r from-teal-300/20 to-blue-300/20 rounded-full blur-xl"
        animate={{
          y: [0, -50, 20, 0],
          x: [0, 80, -30, 0],
          rotate: [0, 270, 90, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
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
          y: [0, 60, -20, 0],
          x: [0, -50, 40, 0],
          rotate: [0, -180, 180, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          top: "80%",
          left: "20%",
        }}
      />

      {/* Flowing gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Enhanced floating dots with more variety */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-${Math.random() > 0.5 ? '3' : '4'} h-${Math.random() > 0.5 ? '3' : '4'} bg-gradient-to-r from-teal-400/30 to-purple-400/30 rounded-full blur-sm`}
          animate={{
            y: [0, Math.random() * 80 - 40, 0],
            x: [0, Math.random() * 80 - 40, 0],
            opacity: [0.2, 0.8, 0.3, 0.2],
            scale: [1, 1.5, 0.8, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 8,
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
