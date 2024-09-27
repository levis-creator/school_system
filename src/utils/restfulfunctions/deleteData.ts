"use client";
import { TypeAttributes } from "rsuite/esm/internals/types";

export default async function deleteData(
  endpoint: string,
  id: any,
  setloading: (param: boolean) => void,
  toast?: (type: TypeAttributes.Status, message: string) => void
) {
  setloading(true);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/api/${endpoint}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseText = await response.json(); // Await the text response

    if (response.status === 200) {
      setloading(false);
      toast?.("success", "Data Deleted successfully!");

      // Try to parse the response as JSON
      try {
        return responseText;
      } catch (e) {
        // Handle the case where the response is not valid JSON
        console.error("Failed to parse JSON:", e);
      }
    } else {
      toast?.("error", "Error adding data " + response.status);
      setloading(false);
    }
  } catch (error) {
    setloading(false);
    console.error("Fetch error:", error);
    throw error; // Rethrow the error after handling
  }
}
