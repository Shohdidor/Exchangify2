import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex mt-[-175px] flex-col items-center justify-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
      <p className="text-lg mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or was moved. Let's get you back on track.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-[#F39C12] text-[#0A1128] font-bold text-lg rounded-md hover:bg-[#d48909] hover:scale-105 transition-all duration-300 ease-in-out">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
