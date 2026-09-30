import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/auth";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-gray-500">
        Welcome back!
      </p>

      <div className="mt-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          User Session
        </h2>

        <pre className="mt-4 overflow-auto rounded-lg bg-gray-100 p-4 text-sm">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </main>
  );
}