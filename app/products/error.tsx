"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[500px] items-center justify-center bg-gray-50 p-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-2 text-gray-500">
          Failed to load products.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-black px-5 py-3 text-white"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}