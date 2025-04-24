'use client'
import Link from 'next/link';

export default function Error() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-red-600 sm:text-5xl">
            Something went wrong
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We encountered an unexpected error. Please try again later or go back to the homepage.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Go back to Products Page
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
