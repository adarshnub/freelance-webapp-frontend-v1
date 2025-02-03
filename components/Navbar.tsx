"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Navbar = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}) => {
  const router = useRouter();

  
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex justify-between items-center py-4 border-b">
      <h1
        className="text-xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        Freelance Hub
      </h1>
      <div className="flex space-x-4">
        <button
          className="hover:text-blue-500"
          onClick={() => router.push("/")}
        >
          Home
        </button>
        <button
          className="hover:text-blue-500"
          onClick={() => router.push("/projects")}
        >
          Freelance
        </button>
        <button
          className="hover:text-blue-500"
          onClick={() => router.push("/jobs")}
        >
          Jobs
        </button>
        <button
          className="hover:text-blue-500"
          onClick={() => router.push("/profile")}
        >
          Profile
        </button>
        <motion.button
          className="p-2 rounded-md border relative w-10 h-10 flex items-center justify-center"
          onClick={handleDarkModeToggle}
          initial={{ scale: 1 }}
          animate={{ scale: darkMode ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: darkMode ? -10 : 0, opacity: darkMode ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            ☀️
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: darkMode ? 0 : 10, opacity: darkMode ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            🌙
          </motion.div>
        </motion.button>
      </div>
    </nav>
  );
};
