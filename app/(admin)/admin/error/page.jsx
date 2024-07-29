import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"; // Importa Link para gestionar la navegación en Next.js

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-2">
      <Link
        href="/admin/login"
        className="mb-4 flex items-center mt-4 text-blue-500 hover:text-blue-600 focus:outline-none"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Back to Home
      </Link>
      <img
        src="/assets/images/error-404.jpg"
        alt="Error 404"
        className="w-64 h-64 mb-8"
      />
      <p className="text-xl font-semibold text-gray-800 mb-4">
        Oops! Page not found
      </p>
      <p className="text-lg text-gray-600 text-center">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default ErrorPage;
