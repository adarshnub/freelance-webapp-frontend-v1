"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";

export const FreelanceProjects = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDarkMode(document.body.classList.contains("dark"));

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Modern Minimalist Menu Design for Restaurant",
      description:
        "I need a professional graphic designer to create an attractive, modern, and minimalist printable menu card...",
      budget: "$10 - 30 USD",
      averageBid: "$23 USD",
      tags: ["Graphic Design", "Logo Design", "UI/UX"],
      rating: 4.8,
      reviews: 29,
      time: "2 minutes ago",
    },
    {
      id: 2,
      title: "Website Development",
      description: "Build a responsive website for a business client...",
      budget: "$500 - 1000 USD",
      averageBid: "$750 USD",
      tags: ["Web Development", "React", "Next.js"],
      rating: 4.2,
      reviews: 40,
      time: "10 minutes ago",
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center text-yellow-500">
        {[...Array(fullStars)].map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
        {hasHalfStar && <Star size={16} fill="none" />}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} size={16} fill="none" />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer ${
            isDarkMode
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white text-black border-gray-300"
          }`}
          onClick={() => router.push(`/freelance/${project.id}`)}
        >
          <div className="w-full flex justify-between">
            <h3 className="text-lg font-semibold text-blue-500">
              {project.title}
            </h3>
            <p
              className={`text-sm ${
                isDarkMode ? " text-green-400" : "text-gray-600"
              }`}
            >
              <strong>Budget:</strong> {project.budget}
            </p>
          </div>

          <p
            className={`text-sm mt-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2 text-sm text-blue-400">
            {project.tags.map((tag, index) => (
              <span key={index} className="hover:underline cursor-pointer">
                {tag}
              </span>
            ))}
          </div>

          <div
            className={`flex items-center gap-1 text-sm mt-3 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {renderStars(project.rating)}
            <span className="ml-2">({project.reviews} reviews)</span>
          </div>

          <p className="text-gray-400 text-xs mt-2">{project.time}</p>
        </motion.div>
      ))}
    </div>
  );
};
