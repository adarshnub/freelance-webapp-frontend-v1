"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PostProjectPage() {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () =>
      setIsDarkMode(document.body.classList.contains("dark"));

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`mt-[17vh] flex flex-col items-center justify-center px-6 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Image
        src="/assets/logos/logo.png"
        alt="Freelance hub"
        width={188}
        height={40}
        className="mb-4"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Tell us what you need <span className="text-pink-500">done.</span>
      </h1>
      <p className="text-lg text-center mt-2 text-gray-600 dark:text-gray-300">
        We&apos;ll guide you to create the perfect brief. The more detail, the
        better.
      </p>

      <textarea
        className={`w-full max-w-2xl mt-6 p-4 border-2 rounded-lg text-lg transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-800 text-white border-gray-600 focus:ring-blue-400"
            : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500"
        }`}
        rows={5}
        placeholder="Enter a few bullet points or a full description."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-lg"
        onClick={() => router.push("/freelance/post-project-details")}
      >
        Next
      </button>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Press <strong>CTRL + ENTER</strong>
      </p>
    </div>
  );
}
