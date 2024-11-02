export default function (
  { title, comp, lang, alternates }: Lume.Data,
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
      </head>
      <body class="bg-background text-foreground min-h-screen flex flex-col">
        <comp.Header />
        <main className="min-h-96 my-32 flex justify-center items-center">
          <div className="text-center">
            <h1 className="font-bold text-foreground text-4xl tracking-normal text-center mb-4">
              🚧&nbsp;This page is under construction&nbsp;🚧
            </h1>
            <p className="text-lg">Come back later!</p>
          </div>
        </main>
        <comp.Footer lang={lang} alternates={alternates} />
      </body>
    </html>
  );
}
