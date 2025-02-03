/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FreelanceDetailsSection({ listing }: { listing: any }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (
    values: any,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    console.log("Bid Submitted:", values);
    setSubmitting(false);
    setTimeout(() => setFormSubmitted(false), 3000);
    resetForm();
    setFormSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md"
    >
      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
        {listing.description}
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Skills Required:</h2>
        <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300">
          {listing.skills.map((skill: string, index: number) => (
            <li key={index} className="text-lg">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
        <p>
          <strong> Budget:</strong>{" "}
          <span className="font-semibold text-blue-500">{listing.budget}</span>
        </p>
        <p>
          <strong> Duration:</strong> {listing.duration}
        </p>
        <p>
          <strong> Location:</strong> {listing.location}
        </p>
      </div>


      <motion.div
        className="mt-6 p-6 border rounded bg-gray-100 dark:bg-gray-900 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg font-semibold mb-4">
          📩 Place a bid on this project
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          You will be able to edit your bid until the project is awarded to
          someone.
        </p>

        <Formik
          initialValues={{ bidAmount: 20, deliveryTime: 7, proposalText: "" }}
          validationSchema={Yup.object({
            bidAmount: Yup.number()
              .min(1, "Amount must be at least $1")
              .required("Bid amount is required"),
            deliveryTime: Yup.number()
              .min(1, "Delivery time must be at least 1 day")
              .required("Delivery time is required"),
            proposalText: Yup.string()
              .min(100, "Proposal must be at least 100 characters")
              .required("Proposal description is required"),
          })}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
          
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               
                <div className="flex flex-col">
                  <label className="text-gray-700 dark:text-gray-300 font-medium">
                    Bid Amount
                  </label>
                  <div className="flex items-center border rounded p-2 bg-white dark:bg-gray-700">
                    <span className="text-gray-600 dark:text-gray-400 px-2">
                      $
                    </span>
                    <Field
                      type="number"
                      name="bidAmount"
                      className="w-full bg-transparent outline-none rounded-lg"
                    />
                    <span className="text-gray-600 dark:text-gray-400 px-2">
                      USD
                    </span>
                  </div>
                  <ErrorMessage
                    name="bidAmount"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

             
                <div className="flex flex-col">
                  <label className="text-gray-700 dark:text-gray-300 font-medium">
                    This project will be delivered in
                  </label>
                  <div className="flex items-center border rounded p-2 bg-white dark:bg-gray-700">
                    <Field
                      type="number"
                      name="deliveryTime"
                      className="w-full bg-transparent outline-none rounded-lg"
                    />
                    <span className="text-gray-600 dark:text-gray-400 px-2">
                      Days
                    </span>
                  </div>
                  <ErrorMessage
                    name="deliveryTime"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 dark:text-gray-300 font-medium">
                  Describe your proposal (minimum 100 characters)
                </label>
                <Field
                  as="textarea"
                  name="proposalText"
                  rows={4}
                  className="border rounded-lg p-2 bg-white dark:bg-gray-700 w-full outline-none"
                  placeholder="What makes you the best candidate for this project?"
                />
                <ErrorMessage
                  name="proposalText"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

             
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center"
                  disabled={isSubmitting}
                >
                  📝 Write my bid
                </button>
              </div>
            </Form>
          )}
        </Formik>

        
        {formSubmitted && (
          <motion.div
            className="mt-4 flex justify-center items-center p-4 rounded-lg bg-green-100 text-green-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 11l3 3L22 4"
              />
            </motion.svg>
            <span>🎉 Your bid was successfully submitted!</span>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
