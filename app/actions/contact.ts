"use server";

type ContactState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  previousState: ContactState,
  formData: FormData
): Promise<ContactState> {
  try {
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    // Your API / email logic here
    if (!name || !email) {
    return {
      success: false,
      message: "Name and email are required.",
    };
  }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}