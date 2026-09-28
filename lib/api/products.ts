export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  category: string;
  rating: number;
  stock: number;
};

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const API_URL = "https://dummyjson.com";

export async function getProducts(
  limit = 12,
  skip = 0
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products?limit=${limit}&skip=${skip}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProduct(
  id: string
): Promise<Product> {
  const response = await fetch(
    `${API_URL}/products/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}

export async function searchProducts(
  query: string,
  limit = 12,
  skip = 0
): Promise<ProductsResponse> {
  const response = await fetch(
    `${API_URL}/products/search?q=${encodeURIComponent(
      query
    )}&limit=${limit}&skip=${skip}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to search products");
  }

  return response.json();
}