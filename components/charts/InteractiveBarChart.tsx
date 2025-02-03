"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Product A", sales: 400 },
  { category: "Product B", sales: 600 },
  { category: "Product C", sales: 800 },
];

export const InteractiveBarChart = () => {
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
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full h-64 p-4 rounded-lg shadow ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-bold mb-2">Product Sales</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis dataKey="category" stroke={isDarkMode ? "#f8f9fa" : "#333"} />
          <YAxis stroke={isDarkMode ? "#f8f9fa" : "#333"} />
          <Tooltip />
          <Bar dataKey="sales" fill={isDarkMode ? "#FF9800" : "#2ecc71"} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
