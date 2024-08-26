"use client";
import { TypeAttributes } from "rsuite/esm/internals/types";

export default async function editData(
  endpoint: string,
  data: any,
  id: any,
  toast: (type: TypeAttributes.Status, message: string) => void,
  setloading: (param: boolean) => void
) {
  setloading(true);
  console.log(data);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/api/${endpoint}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseText = await response.json(); // Await the text response
    if (response.ok) {
      console.log(responseText);
      setloading(false);
      toast("success", "Data updated successfully!");

      // Try to parse the response as JSON
      try {
        return responseText;
      } catch (e) {
        // Handle the case where the response is not valid JSON
        console.error("Failed to parse JSON:", e);
      }
    } else {
      toast("error", "Error updating data " + response.status);
      setloading(false);
    }
  } catch (error) {
    setloading(false);
    console.error("Fetch error:", error);
    throw error; // Rethrow the error after handling
  }
}
