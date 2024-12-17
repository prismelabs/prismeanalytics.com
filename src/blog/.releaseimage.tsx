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
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8 h-full flex flex-col items-center py-32 gap-16">
              <h1 className="text-5xl font-bold">Release</h1>
              <div className="flex items-center gap-16">
                <img src="/logo.svg" className="size-64" />
                <p className="text-[12rem] font-bold">0.17 & 0.18</p>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
};
