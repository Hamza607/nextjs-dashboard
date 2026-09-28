import { getProduct } from "../../../lib/api/products";
import Link from "next/link";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/products"
          className="text-sm text-gray-600 hover:text-black"
        >
          ← Back to Products
        </Link>

        <div className="mt-6 grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2">
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div>
            <p className="text-sm uppercase text-gray-500">
              {product.category}
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              {product.title}
            </h1>

            <p className="mt-4 text-2xl font-bold">
              ${product.price}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-100 p-4">
                <p className="text-sm text-gray-500">
                  Rating
                </p>

                <p className="mt-1 font-semibold">
                  ⭐ {product.rating}
                </p>
              </div>

              <div className="rounded-lg bg-gray-100 p-4">
                <p className="text-sm text-gray-500">
                  Stock
                </p>

                <p className="mt-1 font-semibold">
                  {product.stock}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}