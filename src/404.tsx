export const title = "Page Not Found - Prisme Analytics";
export const layout = "none.tsx";

export default (
  { comp, lang, alternates }: Lume.Data,
) => {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <comp.Favicon />
        <comp.Css />
        <comp.Js />
        <comp.Analytics status={404} />
      </head>
      <body class="bg-background text-foreground min-h-screen">
        <noscript>
          <img
            src="https://app.prismeanalytics.com/api/v1/noscript/events/pageviews?status=404"
            style="position:absolute;top:-100px"
          />
        </noscript>
        <comp.Header />
        <main className="max-w-2xl w-full mx-auto px-4 sm:px-6 md:px-10 space-y-8 py-16 min-h-96">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center">
            Page not found
          </h1>
          <p className="text-center">
            Oops! There is nothing here.
          </p>
          <a href="/" className="block text-center">
            <comp.Button>
              Go back to Home page.
            </comp.Button>
          </a>
        </main>
        <comp.Footer lang={lang} alternates={alternates} />
      </body>
    </html>
  );
};
