"use client";

import React from "react";

export default function FreelanceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const freelanceData = [
    {
      id: 1,
      title: "Web Developer for E-commerce Website",
      description:
        "Looking for an experienced web developer to build an e-commerce website. The project will involve working with React, Node.js, and integrating a payment gateway.",
      skills: ["React", "Node.js", "E-commerce", "Payment Gateway"],
      budget: "$1,000 - $2,000",
      duration: "3 months",
      location: "Remote",
    },
    {
      id: 2,
      title: "Mobile App Developer",
      description:
        "We need a mobile app developer to create an Android app for our health and fitness startup. Experience with Java and Kotlin is required.",
      skills: ["Android", "Java", "Kotlin", "Mobile App"],
      budget: "$3,000 - $5,000",
      duration: "6 months",
      location: "Remote",
    },
    {
      id: 3,
      title: "UI/UX Designer for SaaS Platform",
      description:
        "Seeking a talented UI/UX designer to work on the user interface of a SaaS platform. The designer should have experience in wireframing, prototyping, and UI design tools.",
      skills: ["UI/UX", "Wireframing", "Prototyping", "SaaS"],
      budget: "$2,500 - $4,000",
      duration: "2 months",
      location: "Remote",
    },
  ];

  const freelanceId = Number(id);
  const listing = freelanceData.find((listing) => listing.id === freelanceId);

  if (!listing) {
    return <div className="text-center p-10">Freelance listing not found.</div>;
  }

  return (
    <div className="w-full mx-auto p-6 border rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-2">{listing.title}</h1>
      <p className="text-gray-600 mb-4">{listing.description}</p>

      <div className="mb-4">
        <strong className="block">Skills Required:</strong>
        <ul className="list-disc pl-6">
          {listing.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <p className="mb-2">
        <strong>Budget:</strong> {listing.budget}
      </p>
      <p className="mb-2">
        <strong>Duration:</strong> {listing.duration}
      </p>
      <p className="mb-4">
        <strong>Location:</strong> {listing.location}
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
