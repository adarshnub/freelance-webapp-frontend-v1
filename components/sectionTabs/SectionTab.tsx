"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const SectionTabs = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: "Dashboard", path: "/" },
    { name: "Freelance Projects", path: "/freelance" },
    { name: "Job Listings", path: "/jobs" },
  ];

  return (
    <div className="flex space-x-4 mb-5 border-b">
      {tabs.map(({ name, path }) => (
        <button
          key={path}
          className={`p-2 relative ${
            pathname === path ||
            (path === "/freelance" && pathname.startsWith(path))
              ? "border-b-2 border-blue-500 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => router.push(path)}
        >
          {name}
          {(pathname === path ||
            (path === "/freelance" && pathname.startsWith(path))) && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
            />
          )}
        </button>
      ))}
    </div>
  );
};
