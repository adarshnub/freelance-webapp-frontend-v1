"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Online", value: 500 },
  { name: "Offline", value: 300 },
  { name: "Direct", value: 200 },
];

const LIGHT_COLORS = ["#e74c3c", "#f1c40f", "#3498db"];
const DARK_COLORS = ["#FF5722", "#FFC107", "#03A9F4"];

export const InteractivePieChart = () => {
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
      <h2 className="text-lg font-bold mb-2">Traffic Sources</h2>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80} label>
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={isDarkMode ? DARK_COLORS[index % DARK_COLORS.length] : LIGHT_COLORS[index % LIGHT_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
