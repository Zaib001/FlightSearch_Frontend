import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-24 h-24 border-8 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
