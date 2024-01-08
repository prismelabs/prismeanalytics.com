export const title = "Waitlist joined! - Prisme Analytics";
export const layout = "layout.tsx";

export default function () {
  return (
    <main className="px-4 sm:px-8 md:px-16 lg:px-32 mb-8">
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center">
          <img
            src="/logo.jpg"
            className="aspect-square w-full h-auto max-w-32 mx-auto"
          />
          <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tighter my-16">
            You're on the waitlist!
          </h1>
          <div>
            <a
              href="/"
              className="inline-flex py-3 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Go back to home page
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
