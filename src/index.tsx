export const title = "Prisme Analytics";
export const layout = "layout.tsx";

export default ({ comp }: Lume.Data) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="px-4 sm:px-8 md:px-16 lg:px-32 mb-8">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center">
            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tighter">
              <span
                className="text-transparent px-2 bg-black bg-gradient"
                style={{
                  backgroundClip: "text",
                }}
              >
                Prisme Analytics
              </span>
              : Illuminate your data
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              An Open Source, privacy-focused and progressive analytics service.
            </p>
            <div className="mt-8 flex justify-center gap-4 md:gap-6 lg:gap-8">
              <a
                className="animated-gradient-shadow bg-slate-50 text-gray-800 rounded-md px-4 flex items-center"
                href="#join-waitlist"
              >
                Join Waitlist
              </a>
              <a
                className="inline-flex py-3 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                target="_blank"
                href="https://github.com/prismelabs/analytics"
              >
                <comp.GithubIcon className="w-5 h-5 mr-2" />
                Star on GitHub
              </a>
            </div>
          </div>
        </section>
        <comp.Hr />
        <section className="w-full py-8 md:py-16 lg:py-24">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-8 md:mb-16 lg:mb-24">
            Philosophy
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-8 sm:gap-y-32 md:gap-16 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-4">Approchable</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Builds on top of state of the art open source software and world
                class documentation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Versatile</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A rich incrementally adoptable ecosystem that scales between
                simple analytics to a complete suite.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Secure and Reliable</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We prioritize the security of your data. Our reliable
                infrastructure ensures your data is always accessible.
              </p>
            </div>
          </div>
        </section>
        <comp.Hr />
        <section className="w-full py-8 md:py-16 lg:py-24">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-8 md:mb-16 lg:mb-24">
            Gallery
          </h2>
          <div className="grid xl:grid-cols-2 gap-8 sm:gap-16 md:gap-32 my-8">
            <img
              src="/images/home-dashboard.png"
              className="shadow-lg"
              transform-images="jpg png avif webp 1600@2"
            />
            <img
              src="/images/builtin-dashboard.png"
              className="shadow-lg"
              transform-images="jpg png avif webp 1600@2"
            />
          </div>
        </section>
        <comp.Hr />
        <section className="w-full py-8 md:py-16 lg:py-24">
          <h2
            className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-4"
            id="join-waitlist"
          >
            Join Waitlist
          </h2>
          <p className="text-center mb-8">
            Sign up to receive development updates and early access.
          </p>
          <form
            class="mx-auto flex flex-col gap-8 items-center px-4 md:px-8"
            method="POST"
            action="/join-waitlist"
            data-netlify="true"
          >
            <div className="w-full max-w-2xl">
              <label for="email" className="block my-2 font-bold">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required={true}
                className="bg-white w-full text-gray-800 rounded-md px-4 py-2 border-2"
                placeholder="john@example.com"
              />
            </div>
            <button
              type="submit"
              className="animated-gradient-shadow bg-slate-50 text-gray-800 rounded-md px-4 py-2 flex items-center"
            >
              Join Waitlist
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};
