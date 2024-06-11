export default function (
  {
    title,
    children,
    comp,
    lang,
    alternates,
    navbar,
    url,
    tags,
    metas,
  }: Lume.Data,
  { md }: Lume.Helpers,
) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        <title
          dangerouslySetInnerHTML={{
            // Remove HTML tags.
            __html: md(title ?? "", true).replaceAll(/<\/?\w+>/gm, ""),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <comp.Favicon />
        <link rel="stylesheet" href="/styles/syntax-highlight.css" />
        <comp.Css />
        <link rel="stylesheet" href="/styles/blogpost.css" />
        <comp.Analytics />
      </head>
      <body class="bg-background text-foreground min-h-screen flex flex-col">
        <comp.Header
          lang={lang}
          alternates={alternates}
          navbar={navbar}
          url={url}
        />
        <main className="w-full px-4 pt-8 mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl overflow-x-hidden md:overflow-visible">
          <comp.Sections>
            <div>
              {metas?.image &&
                (
                  <img
                    src={metas.image}
                    transform-images="png jpg webp avif"
                  />
                )}
              <h1
                dangerouslySetInnerHTML={{ __html: md(title ?? "", true) }}
              >
              </h1>
              {tags && (
                <div className="flex pb-8">
                  {tags.map((tag) => (
                    <div className="rounded-md py-1 px-2 mr-2 bg-background-dark">
                      <span>#{tag}</span>
                    </div>
                  ))}
                </div>
              )}
              {children}
            </div>
          </comp.Sections>
        </main>
        <comp.Footer lang={lang} alternates={alternates} />
      </body>
    </html>
  );
}
