export default function ({ comp }: Lume.Data) {
  return (
    <>
      <header className="px-4 lg:px-6 py-4 flex items-center">
        <a className="flex gap-2 items-center justify-center" href="/">
          <img
            className="w-10 h-10"
            src="/logo.svg"
          />
          <span className="ml-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
            Prisme Analytics
          </span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a
            target="_blank"
            href="https://x.com/prismelabs"
          >
            <comp.XIcon className="w-6 h-6" />
          </a>
          <a
            target="_blank"
            href="https://github.com/prismelabs/analytics"
          >
            <comp.GithubIcon className="w-8 h-8" />
          </a>
        </nav>
      </header>
      <comp.Hr />
    </>
  );
}
