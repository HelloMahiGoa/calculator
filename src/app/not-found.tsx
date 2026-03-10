import Link from "next/link";

export default function NotFound() {
  return (
    <div className="calculator-page-bg flex min-h-[calc(100dvh-3.5rem-56px)] flex-col items-center justify-center px-4 py-10 safe-area-padding sm:min-h-[calc(100dvh-4rem)]">
      <h1 className="text-2xl font-bold text-stone-100">404 – Not found</h1>
      <p className="mt-2 text-sm text-stone-400">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-500"
      >
        Back to home
      </Link>
    </div>
  );
}

