import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome to dashboard
        </p>

        <Link
          href="/dashboard/users"
          className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-white"
        >
          View Users
        </Link>
      </div>
    </main>
  );
}