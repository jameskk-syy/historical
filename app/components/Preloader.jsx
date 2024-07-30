import React from 'react';

const Preloader = () => {
  return (
    <div className="flex items-center bg-white justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Preloader;