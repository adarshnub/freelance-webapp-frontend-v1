"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const FreelanceProjects = () => {
  const router = useRouter();
  const projects = [
    {
      id: 1,
      title: "Website Development",
      description: "Build a responsive website",
    },
    {
      id: 2,
      title: "Mobile App Design",
      description: "Design UI/UX for an app",
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Improve search engine rankings",
    },
    {
      id: 4,
      title: "Website Development",
      description: "Build a responsive website",
    },
    {
      id: 5,
      title: "Mobile App Design",
      description: "Design UI/UX for an app",
    },
    {
      id: 6,
      title: "SEO Optimization",
      description: "Improve search engine rankings",
    },
    {
      id: 7,
      title: "Website Development",
      description: "Build a responsive website",
    },
    {
      id: 8,
      title: "Mobile App Design",
      description: "Design UI/UX for an app",
    },
    {
      id: 9,
      title: "SEO Optimization",
      description: "Improve search engine rankings",
    },
    {
      id: 10,
      title: "Website Development",
      description: "Build a responsive website",
    },
    {
      id: 11,
      title: "Mobile App Design",
      description: "Design UI/UX for an app",
    },
    {
      id: 12,
      title: "SEO Optimization",
      description: "Improve search engine rankings",
    },
    {
      id: 13,
      title: "Website Development",
      description: "Build a responsive website",
    },
    {
      id: 14,
      title: "Mobile App Design",
      description: "Design UI/UX for an app",
    },
    {
      id: 15,
      title: "SEO Optimization",
      description: "Improve search engine rankings",
    },
    {
      id: 16,
      title: "Website Development",
      description: "Build a responsive website",
    },
    {
      id: 17,
      title: "Mobile App Design",
      description: "Design UI/UX for an app",
    },
    {
      id: 18,
      title: "SEO Optimization",
      description: "Improve search engine rankings",
    },
  ];

  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-3">Freelance Projects</h2> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1  gap-4"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="border p-4 rounded-md cursor-pointer hover:shadow-lg"
            onClick={() => router.push(`/freelance/${project.id}`)}
          >
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
