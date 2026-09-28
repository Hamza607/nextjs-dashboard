"use server";

import { cookies } from "next/headers";

const API_URL = process.env.API_URL;

type LoginResponse = {
  success: boolean;
  message: string;
  token?: string;
  data?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

export async function loginAction(email: string, password: string) {
  try {
    if (!API_URL) {
      return {
        success: false,
        message: "API URL is not configured.",
      };
    }

    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      cache: "no-store",
    });

    const result: LoginResponse = await response.json();

    if (!response.ok || !result.token) {
      return {
        success: false,
        message: result.message || "Invalid email or password.",
      };
    }
    const cookieStore = await cookies();
    cookieStore.set("auth-token", result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return {
      success: true,
      message: result.message || "Login successful.",
      user: result.data,
    };
  } catch (error) {
    console.error("Login error:", error);

    return {
      success: false,
      message: "Unable to connect to the server.",
    };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete("auth-token");

  return {
    success: true,
  };
}
