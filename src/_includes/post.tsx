export default function (
  {
    search,
    date,
    title,
    children,
    comp,
    lang,
    alternates,
    navbar,
    url,
    tags,
    metas,
    basename,
    author,
  }: Lume.Data,
  { md }: Lume.Helpers,
) {
  const posts = search.pages("type=blogpost draft!=true", "date=asc");
  const postIndex = posts.findIndex((p) => p.basename === basename);
  const prevPost = posts[postIndex - 1];
  const nextPost = posts[postIndex + 1];

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
        <main className="w-full px-4 pt-8 mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl overflow-x-hidden md:overflow-visible space-y-12">
          <section className="space-y-6">
            <img
              src={metas!.image?.toString()}
              className="rounded-sm"
              transform-images="jpg png avif webp 1600@2"
            />
            <h1
              dangerouslySetInnerHTML={{
                __html: md(
                  (typeof metas?.title === "string")
                    ? metas.title
                    : title ?? "",
                  true,
                ),
              }}
            >
            </h1>
            <div className="flex justify-between">
              <div
                className="-mb-4"
                dangerouslySetInnerHTML={{
                  __html: md(["By", author].join(" ")),
                }}
              />
              <p className="-mb-4">
                Published on {date.toLocaleDateString()}
              </p>
            </div>
            {tags && (
              <div className="flex">
                {tags.map((tag) => (
                  <div className="rounded-md px-2 mr-2 bg-background-dark">
                    <span>#{tag}</span>
                  </div>
                ))}
              </div>
            )}
            {children}
          </section>
          {nextPost ?? prevPost !== undefined
            ? (
              <>
                <comp.Hr />
                <section>
                  <div className="flex gap-4 flex-wrap space-between items-center">
                    {prevPost?.url
                      ? (
                        <a
                          href={prevPost.url}
                          className="flex-1 min-w-64 flex overflow-hidden"
                          title={prevPost.metas.title}
                        >
                          &lt;&nbsp;&nbsp;
                          <span className="text-ellipsis overflow-hidden text-nowrap">
                            {prevPost.metas.title}
                          </span>
                        </a>
                      )
                      : <span className="flex-1" />}
                    {nextPost?.url
                      ? (
                        <a
                          href={nextPost.url}
                          className="flex-1 min-w-64 flex overflow-hidden justify-end"
                          title={nextPost.metas.title}
                        >
                          <span className="text-ellipsis overflow-hidden text-nowrap">
                            {nextPost.metas.title}
                          </span>
                          &nbsp;&nbsp;&gt;
                        </a>
                      )
                      : <span />}
                  </div>
                </section>
                <div />
              </>
            )
            : undefined}
        </main>
        <comp.FooterCta />
        <comp.Footer lang={lang} alternates={alternates} />
      </body>
    </html>
  );
}
