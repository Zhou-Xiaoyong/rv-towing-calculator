import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6 text-6xl font-bold text-brand-600">404</div>
      <h1 className="mb-3 text-2xl font-bold text-gray-900">
        Page Not Found
      </h1>
      <p className="mb-8 text-gray-600">
        The page you are looking for doesn&apos;t exist or has been moved.
        Try one of our calculators or guides below.
      </p>

      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/towing-capacity-calculator"
          className="rounded-xl bg-brand-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Towing Capacity Calculator
        </Link>
        <Link
          href="/payload-calculator"
          className="rounded-xl bg-brand-600 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Payload Calculator
        </Link>
        <Link
          href="/gvwr-calculator"
          className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-600"
        >
          GVWR Calculator
        </Link>
        <Link
          href="/gcwr-calculator"
          className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-600"
        >
          GCWR Calculator
        </Link>
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
