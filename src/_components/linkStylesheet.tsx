export default function ({ href }: { href: string }) {
  return (
    <>
      <link
        rel="preload"
        href={href}
        as="style"
        // @ts-ignore: static jsx doesn't support () => {}
        onload="this.onload=null;this.rel='stylesheet'"
      />
      <noscript>
        <link rel="stylesheet" href={href} />
      </noscript>
    </>
  );
}
