"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
  { name: "May", value: 600 },
];

export const InteractiveLineChart = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDarkMode(document.body.classList.contains("dark")); 

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-64 md:h-[28rem] p-4 rounded-lg shadow ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-bold mb-2">Sales Over Time</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke={isDarkMode ? "#f8f9fa" : "#333"} />
          <YAxis stroke={isDarkMode ? "#f8f9fa" : "#333"} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={isDarkMode ? "#4CAF50" : "#3498db"}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
