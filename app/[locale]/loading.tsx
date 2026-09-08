/** Content-only placeholder — do not blank the whole viewport over the header. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6" aria-busy="true" aria-live="polite">
      <div className="mx-auto h-8 w-52 animate-pulse rounded bg-gray-200 dark:bg-slate-700" />
      <div className="mx-auto mt-5 h-4 max-w-xl animate-pulse rounded bg-gray-100 dark:bg-slate-800" />
      <div className="mx-auto mt-3 h-4 max-w-lg animate-pulse rounded bg-gray-100 dark:bg-slate-800" />
    </div>
  );
}
