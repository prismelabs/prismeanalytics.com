export default function ({ comp }: Lume.Data) {
  return (
    <footer className="flex justify-between gap-2 py-6 items-center px-4 md:px-6 border-t dark:border-zinc-700 absolute bottom-0 w-full">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © Prisme Analytics. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a
            target="_blank"
            href="https://x.com/prismeanalytics"
          >
            <comp.XIcon className="w-4 h-4" />
          </a>
          <a
            target="_blank"
            href="https://github.com/prismelabs/analytics"
          >
            <comp.GithubIcon className="w-5 h-5" />
          </a>
        </nav>
      </nav>
    </footer>
  );
}
