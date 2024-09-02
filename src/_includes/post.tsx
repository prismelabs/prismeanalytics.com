import { DOMParser } from "lume/deps/dom.ts";

export default function (
  {
    content,
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

  const isBlog = url.startsWith("/blog/");

  const toc = tableOfContent(content!.toString());

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
        <main className="w-full px-4 py-8 mx-auto max-w-xl md:max-w-4xl lg:max-w-7xl space-y-12">
          <div className="flex gap-12 xl:gap-24">
            <section className="order-last sticky top-24 hidden lg:block h-min w-1/3">
              <h2 className="font-bold mb-4">On this page</h2>
              <ul className="list-none w-max max-w-full space-y-2 text-sm">
                {toc.map((t) => (
                  <li className="list-none ml-0 pl-0 text-ellipsis">
                    <a
                      href={`#${t.anchor}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {t.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mx-auto mt-8 rounded-xl ring-1 ring-muted lg:mx-0 lg:max-w-none bg-muted p-8 space-y-4">
                <div className="space-y-6">
                  <img
                    className="w-10 h-10"
                    src="/logo.svg"
                    alt="Prisme Analytics logo"
                  />
                  <p className="text-2xl font-bold">Prisme Cloud (beta)</p>
                </div>

                <ul className="list-none text-sm space-y-2">
                  {[
                    "Unlimited websites",
                    "Unlimited pageviews / events",
                    "Unlimited dashboards",
                    "GDPR compliance",
                    "Intuitive, fast, built-in Web Analytics dashboard",
                    "... and more",
                  ].map((item) => (
                    <li className="flex items-center gap-x-2">
                      <comp.CheckIcon className="h-4 w-4 flex-none text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 flex flex-col justify-center items-center gap-2">
                  <a
                    href="https://app.prismeanalytics.com/authn/sign_up"
                    className="w-full"
                  >
                    <comp.Button className="w-full">
                      Create free account
                    </comp.Button>
                  </a>
                  <p className="text-xs leading-5 text-muted-foreground">
                    No credit card required.
                  </p>
                </div>
              </div>
            </section>
            <section className="space-y-6 w-full flex-1 md:w-2/3">
              {metas?.image && metas.image !== "/images/og.png" &&
                (
                  <img
                    src={metas.image.toString()}
                    className="rounded-sm"
                    transform-images="jpg png avif webp"
                  />
                )}
              <h1
                className="font-bold text-foreground text-4xl tracking-normal"
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
              {isBlog &&
                (
                  <>
                    <div className="flex justify-between">
                      <div
                        className="post-content"
                        dangerouslySetInnerHTML={{
                          __html: md(["By", author].join(" ")),
                        }}
                      />
                      <p>
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
                  </>
                )}
              <div className="post-content overflow-hidden md:text-lg md:leading-8">
                {children}
              </div>
            </section>
          </div>
          {isBlog && (nextPost ?? prevPost) !== undefined
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

interface Heading {
  title: string;
  anchor: string;
}

function tableOfContent(content: string): Heading[] {
  const document = new DOMParser().parseFromString(content, "text/html");
  const h2 = document?.querySelectorAll("h2");
  // deno-lint-ignore no-explicit-any
  const titles = [...(h2 as any)].map((el) => ({
    title: el.innerText,
    anchor: el.getAttribute("id"),
  }));

  return titles;
}
