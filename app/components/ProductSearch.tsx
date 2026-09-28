"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearch =
    searchParams.get("search") || "";

  const [search, setSearch] =
    useState(initialSearch);

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(
        searchParams.toString()
      );

      if (search.trim()) {
        params.set("search", search.trim());
      } else {
        params.delete("search");
      }

      params.delete("page");

      router.push(`/products?${params.toString()}`);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search, router, searchParams]);

  return (
    <input
      type="text"
      value={search}
      onChange={(event) =>
        setSearch(event.target.value)
      }
      placeholder="Search products..."
      className="w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-black"
    />
  );
}