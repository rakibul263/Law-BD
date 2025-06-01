import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4">
      <h1 className="text-7xl font-bold text-error mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Oops! Page Not Found 😕</p>
      <p className="text-base text-gray-500 mb-6">
        The page you are looking for might have been removed or does not exist.
      </p>
      <Link to="/">
        <button className="btn btn-primary rounded-full px-6 py-2 text-white font-bold">
          ⬅ Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
