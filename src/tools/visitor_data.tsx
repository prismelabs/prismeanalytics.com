export const title = "Your data | Prisme Analytics";
export const layout = "layout.tsx";
export const metas = {
  title: "Visitor data | Prisme Analytics",
  description: "See your visitor data to see how Prisme Analytics tracks you.",
  keywords: [
    "Prisme Cloud",
    "Analytics platform",
    "Data visualization",
    "Open-source analytics",
    "Prisme Analytics",
    "URL tracking",
    "Campaign monitoring",
    "Marketing analytics",
  ],
};

export default function () {
  return (
    <>
      <script src="/scripts/visitor_data.js" defer></script>
      <main className="pt-16 pb-8 px-4 sm:px-8 md:px-16 lg:px-32 space-y-16">
        <section className="w-full">
          <div className="max-w-4xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center -mt-8">
            <div className="flex items-center justify-center gap-4 md:gap-8 my-4">
              <img
                src="/logo.svg"
                alt="Prisme Analytics logo"
                className="aspect-square h-auto max-w-24 md:max-w-32"
              />
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              Visitor data
            </h1>
            <p
              id="visitor-data"
              className="text-xl text-muted-foreground max-w-xl mx-auto"
            >
              No data found for you, please try refreshing the page.
            </p>
            <h2 className="text-lg font-semibold">
              Here is the breakdown of your sessions:
            </h2>
            <ul
              id="sessions-breakdown"
              className="list-none max-w-2xl mx-auto w-full space-y-6 divide-y divide-muted"
            >
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
