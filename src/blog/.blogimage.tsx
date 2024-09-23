export const title = "";
export const layout = "none.tsx";

export default ({ comp }: Lume.Data) => {
  return (
    <html style="font-size: 14px;">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <comp.Favicon />
        <comp.Css />
      </head>
      <body
        class="bg-background text-foreground h-screen flex flex-col"
        style="font-size: 4px;"
      >
        <section className="relative overflow-hidden h-full">
          <div className="absolute rotate-180 -z-10 bg-gradient-to-r saturate-[2] from-grafana-blue/20 to-grafana-purple/20 linear-gradient-mask h-full w-full pointer-events-none" />
          <div className="absolute h-12 rotate-3 z-10 -bottom-6 -inset-x-12 saturate-200 bg-gradient-to-r from-grafana-purple/10 to-grafana-purple/30 blur-3xl" />
          <div className="h-16 md:h-24 z-10 absolute bottom-0 bg-gradient-to-b from-grafana-blue/10 to-transparent" />
          <div className="overflow-hidden flex flex-col justify-center h-full">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8 h-full">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 items-center h-full">
                <div className="px-6 lg:px-0 lg:pr-4">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                    <div className="flex items-center gap-6">
                      <img src="/logo.svg" className="size-16" />
                      <p className="mt-2 text-5xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Measuring Click-Through Rates on LinkedIn
                      </p>
                    </div>
                    <p className="mt-6 text-2xl text-muted-foreground">
                      Learn how to effectively track link clicks in your
                      LinkedIn posts.
                    </p>
                  </div>
                </div>
                <div className="px-6 md:px-0">
                  <img
                    src="/images/foo.png"
                    alt="Explore page screenshot"
                    className="rounded-xl shadow-xl ring-1 ring-muted"
                    style="max-width: 630px;"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};
