"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ProposalsList } from "@/components/freelanceListing/ProposalList";
import FreelanceDetailsSection from "@/components/freelanceListing/FreelanceDetailsSection";

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
        "Looking for an experienced web developer to build an e-commerce website. The project will involve working with React, Node.js, and integrating a payment gateway.Looking for an experienced web developer to build an e-commerce website. The project will involve working with React, Node.js, and integrating a payment gatewayLooking for an experienced web developer to build an e-commerce website. The project will involve working with React, Node.js, and integrating a payment gatewayLooking for an experienced web developer to build an e-commerce website. The project will involve working with React, Node.js, and integrating a payment gateway",
      skills: ["React", "Node.js", "E-commerce", "Payment Gateway"],
      budget: "$1,000 - $2,000",
      duration: "3 months",
      location: "Remote",
      client: {
        name: "John Doe",
        country: "United States",
        rating: 4.8,
        reviews: 29,
        memberSince: "April 2, 2013",
        verification: [
          "Identity verified",
          "Payment verified",
          "Email verified",
        ],
      },
      proposals: [
        {
          id: 101,
          freelancer: "Technospike IT Solutions",
          username: "@giritech",
          rating: 4.8,
          reviews: 2464,
          price: "$20.00 USD",
          deliveryTime: "1 day",
          country: "India",
          description:
            "Excited to work on your project. I'll deliver a draft within 24 hours, with multiple revisions.",
        },
        {
          id: 102,
          freelancer: "Neelam J.",
          username: "@graphicmonster",
          rating: 4.9,
          reviews: 993,
          price: "$20.00 USD",
          deliveryTime: "1 day",
          country: "India",
          description:
            "I have 6 years of experience in this field. I'll ensure high-quality design with revisions.",
        },
      ],
    },
  ];

  const freelanceId = Number(id);
  const listing = freelanceData.find((listing) => listing.id === freelanceId);
  const [activeTab, setActiveTab] = useState("details");

  const detailsTabRef = useRef<HTMLButtonElement>(null);
  const proposalsTabRef = useRef<HTMLButtonElement>(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlinePosition, setUnderlinePosition] = useState(0);

  useEffect(() => {
    if (activeTab === "details" && detailsTabRef.current) {
      setUnderlineWidth(detailsTabRef.current.offsetWidth);
      setUnderlinePosition(detailsTabRef.current.offsetLeft);
    } else if (activeTab === "proposals" && proposalsTabRef.current) {
      setUnderlineWidth(proposalsTabRef.current.offsetWidth);
      setUnderlinePosition(proposalsTabRef.current.offsetLeft);
    }
  }, [activeTab]);

  if (!listing) {
    return <div className="text-center p-10">Freelance listing not found.</div>;
  }

  return (
    <motion.div
      className="w-full mx-auto p-6 border rounded-lg shadow-lg mt-10 bg-white dark:bg-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-2">{listing.title}</h1>

      {/* Tab Navigation */}
      <div className="flex border-b mb-4 relative">
        <button
          ref={detailsTabRef}
          className={`p-2 px-4 ${
            activeTab === "details"
              ? "font-bold text-black dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          ref={proposalsTabRef}
          className={`p-2 px-4 ${
            activeTab === "proposals"
              ? "font-bold text-black dark:text-white"
              : "text-gray-500 dark:text-gray-400"
          }`}
          onClick={() => setActiveTab("proposals")}
        >
          Proposals
        </button>

        {/* Animated Underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
          initial={{ width: 0, left: 0 }}
          animate={{ width: underlineWidth, left: underlinePosition }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {activeTab === "details" && <FreelanceDetailsSection listing={listing} />}

      {activeTab === "proposals" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ProposalsList proposals={listing.proposals} />
        </motion.div>
      )}

   
      <motion.div
        className="mt-6 p-4 border rounded bg-gray-100 dark:bg-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg font-semibold">About the Client</h2>
        <p>
          <strong>Name:</strong> {listing.client.name}
        </p>
        <p>
          <strong>Country:</strong> {listing.client.country}
        </p>
        <p>
          <strong>Rating:</strong> ⭐ {listing.client.rating} (
          {listing.client.reviews} reviews)
        </p>
        <p>
          <strong>Member Since:</strong> {listing.client.memberSince}
        </p>
        <p>
          <strong>Verification:</strong>{" "}
          {listing.client.verification.join(", ")}
        </p>
      </motion.div>
    </motion.div>
  );
}
