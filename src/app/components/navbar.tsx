"use client";

import { useState } from "react";

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function Navbar({ searchTerm, setSearchTerm }: NavbarProps) {
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold">Content List</div>

      <div className="hidden md:flex md:justify-end w-1/2">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-2/3 border p-2 rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={() => setIsMobileSearchVisible(!isMobileSearchVisible)}
        className="md:hidden p-2 border rounded bg-gray-200"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {isMobileSearchVisible && (
        <div className="absolute top-16 left-0 w-full p-4 bg-white shadow-md md:hidden">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </nav>
  );
}
