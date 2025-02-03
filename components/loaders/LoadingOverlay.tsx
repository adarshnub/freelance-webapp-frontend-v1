import { motion } from "framer-motion";

const LoadingOverlay: React.FC = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      <motion.div
        className="w-20 h-20 border-4 border-solid rounded-full"
        style={{
          borderTopColor: "#3498db",
          borderRightColor: "#9b59b6",
          borderBottomColor: "#2ecc71",
          borderLeftColor: "#f39c12",
        }}
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          rotate: 360,
          opacity: [0.5, 1],
        }}
        transition={{
          scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 2, ease: "linear" },
          opacity: { repeat: Infinity, duration: 0.5, ease: "easeInOut" },
        }}
      />
    </motion.div>
  );
};

export default LoadingOverlay;
