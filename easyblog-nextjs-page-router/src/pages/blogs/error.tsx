'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-4">
          We couldn&apos;t find the blog post you&apos;re looking for.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try again
          </button>
          <Link
            href="/blogs"
            className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to blogs
          </Link>
        </div>
      </div>
    </div>
  );
}