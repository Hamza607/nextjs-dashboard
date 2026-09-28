import Link from "next/link";
import LogoutButton from "../components/LogoutButton";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 p-6 text-white">
        <h2 className="text-xl font-bold">
          Dashboard
        </h2>

        <nav className="mt-8 space-y-3">
          <Link
            href="/dashboard"
            className="block rounded-lg px-3 py-2 hover:bg-gray-800"
          >
            Overview
          </Link>

          <Link
            href="/dashboard/users"
            className="block rounded-lg px-3 py-2 hover:bg-gray-800"
          >
            Users
          </Link>

          <Link
            href="/dashboard/products"
            className="block rounded-lg px-3 py-2 hover:bg-gray-800"
          >
            Products
          </Link>
          <LogoutButton />
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}