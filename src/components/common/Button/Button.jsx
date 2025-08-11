"use client";
export default function Button({ onClick, children }) {
  return (
      <button 
        className="
          bg-gray-500
          text-white
          px-6
          py-4
          rounded-lg
          hover:bg-blue-600
        "
        onClick={onClick}>{children}</button> 
  );
} 