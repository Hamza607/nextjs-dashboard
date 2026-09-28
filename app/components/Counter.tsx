"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Counter
      </h2>

      <p className="mt-4 text-3xl font-bold">
        {count}
      </p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-lg bg-gray-200 px-4 py-2"
        >
          -
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}