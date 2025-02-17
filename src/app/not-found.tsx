import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 text-center">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        href="/"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
