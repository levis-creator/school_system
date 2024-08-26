"use client";
import { TypeAttributes } from "rsuite/esm/internals/types";

export default async function addData(
  endpoint: string,
  data: any,
  setloading: (param: boolean) => void,
  toast?: (type: TypeAttributes.Status, message: string) => void
) {
  setloading(true);
  console.log(data);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseText = await response.json(); // Await the text response
    console.log(responseText);

    if (response.ok) {
      setloading(false);
      toast?.("success", "Data updated successfully!");

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
