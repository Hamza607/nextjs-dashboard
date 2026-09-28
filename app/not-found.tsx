import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-gray-900">
          404
        </h1>

        <p className="mt-4 text-gray-500">
          Page not found
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-white"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}