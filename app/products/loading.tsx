export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="h-9 w-40 animate-pulse rounded bg-gray-200" />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <div className="h-52 animate-pulse bg-gray-200" />

              <div className="space-y-3 p-5">
                <div className="h-5 animate-pulse rounded bg-gray-200" />

                <div className="h-4 animate-pulse rounded bg-gray-200" />

                <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}