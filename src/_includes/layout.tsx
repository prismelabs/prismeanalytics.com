export default function (
  {
    title,
    comp,
    lang,
    alternates,
    children,
    structuredData = [],
  }: Lume.Data,
) {
  return (
    <html lang={lang}>
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <comp.Favicon />
        <comp.Css />
        <comp.Js />
        <comp.Analytics />
        {
          // deno-lint-ignore no-explicit-any
          structuredData?.map((data: any) => (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            >
            </script>
          ))
        }
      </head>
      <body class="bg-background text-foreground min-h-screen">
        <comp.Header />
        {children}
        <comp.Footer lang={lang} alternates={alternates} />
      </body>
    </html>
  );
}
