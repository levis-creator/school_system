import React from "react";
import { Loader } from "rsuite";

const LoadUI = () => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-white flex items-center justify-center">
      <Loader content="loading..." vertical size="md" />
    </div>
  );
};

export default LoadUI;
