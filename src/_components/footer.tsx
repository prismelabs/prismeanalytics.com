const links = {
  "Why Prisme Analytics?": {
    "Simple metrics": "#todo",
    "Lightweight script": "#todo",
    "Privacy focused": "#todo",
    "Progressive": "#todo",
    "Open source": "#todo",
    "For creators": "#todo",
    "For agencies": "#todo",
    "For ecommerce": "#todo",
  },
  "Comparison": {
    "vs Google Analytics": "#todo",
    "vs Matomo": "#todo",
    "vs Cloudflare": "#todo",
    "vs Plausible": "#todo",
  },
  "Company": {
    "Privacy": "/privacy",
    "Data policy": "#todo",
    "Terms": "/terms",
    "Blog": "/blog",
    "DPA": "#todo",
  },
  "Support": {
    "Pricing": "#todo",
    "Documentation": "/docs",
    "Contact us": "/contact",
    "Feedback": "/feedback",
  },
  "Tools": {
    "UTM Builder": "/tools/utm_builder",
    "CTR Calculator": "/tools/ctr_calculator",
  },
};

export default function ({ comp }: Lume.Data) {
  return (
    <>
      <footer className="bg-slate-900 z-50">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-6">
          <a href="/" className="inline">
            <img
              className="h-16 my-8"
              src="/logo.svg"
              alt="Prisme Analytics logo"
            />
          </a>
          <div>
            <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-y-16">
              {Object.entries(links).map(([section, sectionLinks]) => (
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    {section}
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {Object.entries(sectionLinks).map(([text, href]) => (
                      <li>
                        <a
                          href={href}
                          className="text-sm leading-6 text-zinc-300 hover:text-white"
                        >
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 py-4 flex justify-between px-4 md:px-8">
          <p className="text-xs leading-5 text-zinc-400">
            &copy; 2024 Prisme Analytics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              target="_blank"
              href="https://x.com/prismeanalytics"
              className="text-zinc-300 hover:text-white"
            >
              <span className="sr-only">X</span>
              <comp.XIcon className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="https://github.com/prismelabs/analytics"
              className="text-zinc-300 hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <comp.GithubIcon className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/prisme-analytics/"
              className="text-zinc-300 hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <comp.LinkedInIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
