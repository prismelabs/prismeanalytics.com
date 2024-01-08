export default function (
  { title, comp, lang, alternates, navbar, url, children }: Lume.Data,
) {
  return (
    <html class="scroll-smooth min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <comp.Favicon />
        <comp.Css />
      </head>
      <body class="min-h-screen bg-background text-foreground relative mix-blend-normal pb-24">
        <comp.Header
          lang={lang}
          alternates={alternates}
          navbar={navbar}
          url={url}
        />
        {children}
        <comp.Footer lang={lang} alternates={alternates} />
      </body>
    </html>
  );
}
