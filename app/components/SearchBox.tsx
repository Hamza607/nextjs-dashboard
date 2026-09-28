"use client";

import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
        className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-black"
      />

      <p className="mt-3 text-sm text-gray-500">
        Searching for: {search || "nothing"}
      </p>
    </div>
  );
}