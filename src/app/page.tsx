"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <nav className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </nav>

      <main className="text-center p-10">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">I`m a UI Developer specializing in Next.js, React, LWC, and more.</p>
        <Link href="/projects">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Projects</button>
        </Link>
      </main>
    </div>
  );
}
