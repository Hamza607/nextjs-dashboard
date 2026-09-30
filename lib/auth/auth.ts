import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined");
}
const secret = new TextEncoder().encode(JWT_SECRET);

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);

    return payload;
  } catch {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();

  const token = cookieStore.get("auth-token")?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
}

export async function requireAdmin() {
  const session = await getSession();

  if (!session) {
    return null;
  }

  if (session.role !== "admin") {
    return null;
  }

  return session;
}
