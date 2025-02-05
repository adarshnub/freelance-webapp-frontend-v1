"use client";

// import { useEffect, useState } from "react";

// import LoadingOverlay from "@/components/loaders/LoadingOverlay";
import { InteractiveBarChart } from "@/components/charts/InteractiveBarChart";
import { InteractivePieChart } from "@/components/charts/InteractivePieChart";
import { InteractiveLineChart } from "@/components/charts/InteractiveLineChart";

const Home = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <div className="text-center p-10">Please log in to view listings.</div>
    );
  }

  return (
    <>
      <div className=" space-y-6">
        <InteractiveLineChart />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 w-full">
          <InteractiveBarChart />
          <InteractivePieChart />
        </div>
      </div>
    </>
  );
};

export default Home;
