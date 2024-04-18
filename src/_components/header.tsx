export default function ({ comp }: Lume.Data) {
  return (
    <>
      <header className="px-4 lg:px-6 py-4 sticky top-0 z-50 bg-background">
        <nav className="flex justify-between items-center">
          <a className="flex gap-2 items-center justify-center" href="/">
            <img
              className="w-10 h-10"
              src="/images/logo.jpg"
              transform-images="jpg png avif webp"
            />
            <span className="ml-2 text-xl font-bold tracking-tighter text-gray-800 dark:text-gray-200">
              Prisme Analytics
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <a href="/docs">Docs</a>
            <a href="/blog">Blog</a>
            <a href="#todo">Use cases</a>
            <a href="#todo">Pricing</a>
            <a href="https://prisme.features.vote/board" target="_blank">
              Roadmap
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <a
              target="_blank"
              href="https://github.com/prismelabs/analytics"
            >
              <comp.GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://app.prismeanalytics.com/authn/sign_in">
              <comp.Button variant="ghost">
                Sign in
              </comp.Button>
            </a>
            <a href="https://app.prismeanalytics.com/authn/sign_up">
              <comp.Button>
                Try Prisme
              </comp.Button>
            </a>
          </div>
          <details className="popover block lg:hidden">
            <summary className="p-2 cursor-pointer">
              <comp.HamburgerIcon />
            </summary>
            <ul className="text-md p-2 select-none mt-2 shadow rounded-md bg-background absolute right-0 w-screen z-10">
              <a href="/docs">
                <li className="rounded-sm py-1 px-2 hover:bg-accent cursor-pointer">
                  Docs
                </li>
              </a>
              <a href="/blog">
                <li className="rounded-sm py-1 px-2 hover:bg-accent cursor-pointer">
                  Blog
                </li>
              </a>
              <a href="#todo">
                <li className="rounded-sm py-1 px-2 hover:bg-accent cursor-pointer">
                  Use cases
                </li>
              </a>
              <a href="#todo">
                <li className="rounded-sm py-1 px-2 hover:bg-accent cursor-pointer">
                  Pricing
                </li>
              </a>
              <a href="https://prisme.features.vote/board" target="_blank">
                <li className="rounded-sm py-1 px-2 hover:bg-accent cursor-pointer">
                  Roadmap
                </li>
              </a>
              <li className="flex items-center gap-2 mt-2">
                <a href="https://app.prismeanalytics.com/" className="w-full">
                  <comp.Button variant="ghost" className="w-full">
                    Sign in
                  </comp.Button>
                </a>
                <a href="https://app.prismeanalytics.com/" className="w-full">
                  <comp.Button className="w-full">
                    Try Prisme
                  </comp.Button>
                </a>
              </li>
            </ul>
          </details>
        </nav>
      </header>
    </>
  );
}
