"use client";

import React from "react";

export default function JobDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const jobData = [
    {
      id: 1,
      title: "Software Engineer",
      description: "Full-time job at a tech company",
      location: "Remote",
      salary: "$80,000 - $100,000",
    },
    {
      id: 2,
      title: "Marketing Manager",
      description: "Lead marketing campaigns",
      location: "New York, USA",
      salary: "$70,000 - $90,000",
    },
    {
      id: 3,
      title: "Data Analyst",
      description: "Analyze business data and trends",
      location: "San Francisco, USA",
      salary: "$75,000 - $95,000",
    },
  ];

  const jobId = Number(id);
  const job = jobData.find((j) => j.id === jobId);

  if (!job) {
    return <div className="text-center p-10">Job not found.</div>;
  }

  return (
    <div className="w-full mx-auto p-6 border rounded-lg  mt-10">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <p className="mb-2">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="mb-4">
        <strong>Salary:</strong> {job.salary}
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => alert("Applied successfully!")}
      >
        Apply Now
      </button>
    </div>
  );
}
