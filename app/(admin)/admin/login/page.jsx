import { login } from "./actions";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default async function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 max-w-md w-full p-8 rounded-lg shadow-md">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <Link
          href="/home"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-5 mr-2" />
          Back to Home
        </Link>
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              formAction={login}
              className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
