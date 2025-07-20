import Link from "next/link";

export const metadata = {
  title: "Under Construction",
};

export default function UnderConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-orange-600">Oops! 🚧</h1>
      <p className="text-lg mb-6 text-gray-700">
        This page is still under construction. Please check back soon!
      </p>
      <img
        src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
        alt="Under construction"
        className="w-full max-w-md rounded shadow-lg"
      />
      <Link
        href="/"
        className="mt-6 inline-block text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
