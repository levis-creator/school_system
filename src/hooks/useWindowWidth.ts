"use client";
// useWindowWidth.ts
import { useState, useEffect } from "react";

// Define a custom hook to track window width
function useWindowWidth(): number {
  // Get the initial window width on the server (if applicable) or client
  const initialWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  // Initialize state with the initial width
  const [windowWidth, setWindowWidth] = useState<number>(initialWidth);

  useEffect(() => {
    // Define the handler function to update the width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Empty dependency array means this effect runs once when the component mounts

  return windowWidth;
}

export default useWindowWidth;
