export default function (
  { title, comp, children, lang }: Lume.Data,
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
      <body>
        {children}
      </body>
    </html>
  );
}
