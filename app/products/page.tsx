import Link from "next/link";
import { getProducts, searchProducts } from "../../lib/api/products";
import ProductSearch from "../components/ProductSearch";

type ProductsPageProps = {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;

  const search = params.search || "";

  const page = Math.max(Number(params.page) || 1, 1);

  const limit = 12;

  const skip = (page - 1) * limit;

  const data = search
    ? await searchProducts(search, limit, skip)
    : await getProducts(limit, skip);

  const totalPages = Math.ceil(data.total / limit);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold">Products</h1>

            <p className="mt-1 text-gray-500">Browse our products</p>
          </div>

          <form action="/products" className="flex gap-2 items-center">
              <ProductSearch />
            
            {/* <input
              type="text"
              name="search"
              defaultValue={search}
              placeholder="Search products..."
              className="w-full rounded-lg border bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-black md:w-64"
            /> */}

            <button
              type="submit"
              className="rounded-lg h-12 bg-black px-5 py-2 text-white"
            >
              Search
            </button>
          </form>
        </div>

        {search && (
          <p className="mt-6 text-gray-600">
            Search results for:
            <span className="ml-1 font-semibold">"{search}"</span>
          </p>
        )}

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="font-semibold">{product.title}</h2>

                <p className="mt-2 text-gray-500">${product.price}</p>

                <Link
                  href={`/products/${product.id}`}
                  className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-sm text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {data.products.length === 0 && (
          <div className="mt-10 rounded-xl bg-white p-10 text-center">
            <h2 className="text-xl font-semibold">No products found</h2>

            <p className="mt-2 text-gray-500">Try another search term.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            {page > 1 && (
              <Link
                href={`/products?${new URLSearchParams({
                  ...(search && { search }),
                  page: String(page - 1),
                }).toString()}`}
                className="rounded-lg border bg-white px-4 py-2"
              >
                Previous
              </Link>
            )}

            <span className="rounded-lg bg-black px-4 py-2 text-white">
              Page {page} of {totalPages}
            </span>

            {page < totalPages && (
              <Link
                href={`/products?${new URLSearchParams({
                  ...(search && { search }),
                  page: String(page + 1),
                }).toString()}`}
                className="rounded-lg border bg-white px-4 py-2"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
