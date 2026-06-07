import React from "react";

interface GridSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function GridSearch({
  searchTerm,
  setSearchTerm,
}: GridSearchProps) {
  return (
    <div className="flex w-full items-center gap-3 md:w-auto text-gray-600">
      <div className="relative w-full md:w-80">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search grids and workbooks..."
          className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
