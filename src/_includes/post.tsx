export default function (
  {
    search,
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
        <main className="w-full px-4 pt-8 mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl overflow-x-hidden md:overflow-visible space-y-8">
          <section>
            <div>
              {metas?.image && typeof metas?.image === "string" &&
                (
                  <img
                    src={metas.image}
                    transform-images="png jpg webp avif"
                  />
                )}
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
        <comp.Footer lang={lang} alternates={alternates} />
      </body>
    </html>
  );
}
