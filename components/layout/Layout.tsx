"use client";

import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import { SectionTabs } from "../sectionTabs/SectionTab";
import { usePathname } from "next/navigation";
import LoadingOverlay from "../loaders/LoadingOverlay";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      {loading && <LoadingOverlay />}
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } min-h-screen`}
      >
        <div className="max-w-[1200px] mx-auto px-5 py-5">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <SectionTabs />
          {children}
        </div>
      </div>
    </>
  );
};
