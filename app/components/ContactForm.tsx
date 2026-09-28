"use client";

import { useActionState } from "react";
import { submitContact } from "../actions/contact";

const initialState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] =
    useActionState(
      submitContact,
      initialState
    );

  return (
    <form
      action={formAction}
      className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm"
    >
      <h1 className="text-2xl font-bold">
        Contact Us
      </h1>

      <div className="mt-6">
        <label className="text-sm font-medium">
          Name
        </label>

        <input
          type="text"
          name="name"
          className="mt-2 w-full rounded-lg border px-4 py-3"
          placeholder="Enter your name"
        />
      </div>

      <div className="mt-4">
        <label className="text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          className="mt-2 w-full rounded-lg border px-4 py-3"
          placeholder="Enter your email"
        />
      </div>

      {state.message && (
        <p className="mt-4 text-sm">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 w-full rounded-lg bg-black px-4 py-3 text-white disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}