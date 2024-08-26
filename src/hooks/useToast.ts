import { ReactElement } from "react"; // Ensure React is imported if using JSX
import { useToaster } from "rsuite"; // Make sure this path is correct

// Define the type for the hook's input parameters
interface UseToastProps {
  // Ensure this is a valid type in your rsuite version
  message: ReactElement;
}

// Create the custom hook
const useToast = () => {
  const toaster = useToaster(); // Get access to the toaster

  // Function to show toast messages
  const showToast = ({ message }: UseToastProps) => {
    toaster.push(message, { placement: "topCenter", duration: 5000 });
    setTimeout(() => {
      toaster.clear();
    }, 5000);
  };

  return showToast; // Return the function to be used in components
};

export default useToast;
