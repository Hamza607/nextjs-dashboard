import Image from "next/image";
import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  return (
     <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Next.js Dashboard
        </h1>

        <p className="mt-3 text-gray-500">
          My Next.js learning project
        </p>
         <div className="mt-6 flex gap-4">
        <Link
          href="/about"
          className="rounded-lg bg-black px-5 py-3 text-white"
        >
          About
        </Link>

        <Link
          href="/products"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Products
        </Link>
      </div>
      <div className="my-4">

        <Counter />
      </div>
      </div>
    </main>
  );
}
