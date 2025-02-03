"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const JobListings = () => {
  const router = useRouter();
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Full-time job at a tech company",
    },
    {
      id: 2,
      title: "Marketing Manager",
      description: "Lead marketing campaigns",
    },
    {
      id: 3,
      title: "Data Analyst",
      description: "Analyze business data and trends",
    },
    {
      id: 4,
      title: "Software Engineer",
      description: "Full-time job at a tech company",
    },
    {
      id: 5,
      title: "Marketing Manager",
      description: "Lead marketing campaigns",
    },
    {
      id: 6,
      title: "Data Analyst",
      description: "Analyze business data and trends",
    },
    {
      id: 7,
      title: "Software Engineer",
      description: "Full-time job at a tech company",
    },
    {
      id: 8,
      title: "Marketing Manager",
      description: "Lead marketing campaigns",
    },
    {
      id: 9,
      title: "Data Analyst",
      description: "Analyze business data and trends",
    },
  ];

  return (
    <div>
      {/* <h2 className="text-xl font-semibold mb-3">Job Listings</h2> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border p-4 rounded-md cursor-pointer hover:shadow-lg"
            onClick={() => router.push(`/jobs/${job.id}`)}
          >
            <h3 className="font-bold">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
