import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
      <p className="text-xs font-medium text-gray-400 mt-4">Loading technologies...</p>
    </div>
  );
};

export default Loader;