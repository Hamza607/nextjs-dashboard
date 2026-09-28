"use client";

import { useRouter } from "next/navigation";
import { logoutAction } from "../actions/auth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();

    router.replace("/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
    >
      Logout
    </button>
  );
}
