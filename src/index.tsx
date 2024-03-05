export const title = "Prisme Analytics";
export const layout = "layout.tsx";

export default ({ comp }: Lume.Data) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="px-4 sm:px-8 md:px-16 lg:px-32 mb-8">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center -mt-8">
            <img
              src="/logo.jpg"
              className="aspect-square w-full h-auto max-w-32 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tighter">
              <span
                className="text-transparent px-2 bg-black bg-gradient"
                style={{
                  backgroundClip: "text",
                }}
              >
                Tailored
              </span>{" "}
              Web Analytics for Your Online Success
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Make impactful decisions and boost your online growth based on
              comprehensive insights from Prisme Analytics.
            </p>
            <div className="space-y-4">
              <div className="mt-8 flex justify-center gap-4 md:gap-6 lg:gap-8">
                <a href="https://app.prismeanalytics.com/">
                  <comp.Button className="!p-6">
                    Start free trial (beta)
                  </comp.Button>
                </a>
                <a
                  className=""
                  target="_blank"
                  href="https://app.prismeanalytics.com/grafana"
                >
                  <comp.Button variant="outline" className="!p-6">
                    Live demo
                  </comp.Button>
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                No credit card required
              </p>
            </div>
          </div>
        </section>
        <comp.Hr />
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-4">
                Advanced Querying And Transformation Capabilities
              </h2>
              <p className="text-center lg:mb-16">
                Translate and transform any of your data into flexible and
                versatile dashboards. Unlike other tools, Prisme Analytics
                allows you to build dashboards specifically for you and your
                team.
              </p>
              <div className="flex max-w-full mt-8 mb-16">
                <img
                  src="/images/grafana-clickhouse-query-builder.png"
                  className="shadow-lg min-w-0 object-cover rounded-sm"
                  transform-images="jpg png avif webp"
                />
                <img
                  src="/images/pageviews-graph.png"
                  className="shadow-lg min-w-0 -ml-4 mt-4 rounded-md"
                  transform-images="jpg png avif webp"
                />
              </div>
            </div>
            <div>
              <img
                src="/images/script-snippet.png"
                className="mx-auto hidden lg:block lg:max-w-full"
                transform-images="jpg png avif webp"
              />
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-4">
                Quick Setup, Deep Insights
              </h2>
              <img
                src="/images/script-snippet.png"
                className="mx-auto max-w-full lg:hidden"
                transform-images="jpg png avif webp"
              />
              <p className="text-center">
                Copy paste an HTML tag and you're ready to go!
                <br />
                Prisme Analytics also comes with built-ins dashboard for common
                use cases.
              </p>
            </div>
          </div>
        </section>
        <comp.Hr />
        <section className="w-full py-8 md:py-16 lg:py-24">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-4">
            Deeply Open Source
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-16">
            Prisme Analytics is built on top of state of the art Open Source
            data visualization and storage.
          </p>
          <div className="grid grid-cols-5 gap-4 px-4 text-center max-w-3xl mx-auto">
            <a
              href="https://grafana.com/grafana"
              target="_blank"
              className="place-self-center"
            >
              <img
                src="/images/grafana-icon.jpg"
                transform-images="jpg png avif webp"
              />
            </a>
            <span className="text-6xl md:text-9xl place-self-center">+</span>
            <a
              href="https://clickhouse.com/"
              target="_blank"
              className="p-4 bg-[#faff69] place-self-center"
            >
              <img src="/clickhouse-icon.svg" />
            </a>
            <span className="text-6xl md:text-9xl place-self-center">=</span>
            <a
              href="https://github.com/prismelabs/analytics"
              target="_blank"
              className="underline"
            >
              <img
                src="/logo.svg"
                className="md:block max-h-32 place-self-center"
              />
            </a>
          </div>
          <p className="text-sm pt-8 md:pt-16 lg:pt-24 text-center">
            Source code is, and will remains open and available&nbsp;
            <a
              href="https://github.com/prismelabs/analytics"
              target="_blank"
              className="underline"
            >
              here
            </a>
            .
            <br />
            ❤️
          </p>
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
      </main>
    </div>
  );
};
