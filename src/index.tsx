export const title =
  "Customizable, privacy-friendly Google Analytics alternative";
export const layout = "layout.tsx";

export const metas = {
  title,
  description:
    "Prisme is an Open-Source, privacy-friendly and progressive web analytics service. Your website data is 100% yours and the privacy of your visitors is respected.",
  keywords: [
    "Prisme Cloud",
    "Analytics platform",
    "Data visualization",
    "Open-source analytics",
    "Prisme Analytics",
    "Grafana integration",
    "ClickHouseDB storage",
    "Custom dashboards",
    "Progressive analytics",
    "Collaborative data insights",
    "Data-driven decisions",
    "User-friendly analytics",
    "Real-time analytics",
    "Business intelligence",
    "Data exploration",
    "Insightful reporting",
    "Dashboard customization",
    "State-of-the-art technology",
    "Seamless analytics",
  ],
};

export default ({ comp }: Lume.Data) => {
  return (
    <>
      <div className="flex flex-col">
        <main className="">
          <section className="relative overflow-hidden w-full pb-8 md:pb-16 lg:pb-24">
            <comp.gridBg />
            <div className="relative z-10 pt-16">
              <div className="max-w-6xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 text-center -mt-8">
                <img
                  src="/logo.svg"
                  alt="Prisme logo"
                  className="aspect-square w-full h-auto max-w-32 mx-auto mt-4 mb-16"
                />
                <h1
                  id="top"
                  className="relative text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8"
                  style="word-spacing: 0.025em"
                >
                  <span className="relative m-auto text-navy bg-gradient-to-b to-indigo-800 dark:to-indigo-300 via-foreground from-foreground text-gradient">
                    Customer insights that matter.
                  </span>
                </h1>
                <p className="leading-relaxed tracking-prose mx-auto max-w-3xl md:text-lg text-muted-foreground mb-10">
                  Experience ease of use, forever data retention, and complete,
                  worry-free GDPR compliance - all while protecting your time
                  and your visitors' digital privacy. <br />
                  Made and hosted in the EU 🇪🇺
                </p>
                <div className="space-y-4">
                  <div className="mt-8 flex justify-center gap-4 md:gap-6 lg:gap-8">
                    <a href="https://app.prismeanalytics.com/authn/sign_up">
                      <comp.Button className="!p-6">
                        Try Prisme in 5 minutes
                      </comp.Button>
                    </a>
                    <a
                      className=""
                      target="_blank"
                      href="https://app.prismeanalytics.com/grafana"
                    >
                      <comp.Button variant="outline" className="!p-6">
                        Live demo
                      </comp.Button>
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Prisme is free during beta!
                  </p>
                </div>
                <div className="mt-8 rounded-xl w-fit mx-auto bg-muted p-2 ring-1 ring-inset ring-input lg:rounded-2xl lg:p-4">
                  <img
                    src="/images/web-analytics-dashboard-light.png"
                    alt="Screenshot of web analytics dashboard"
                    className="mx-auto rounded-md dark:hidden"
                    transform-images="jpg png avif webp"
                  />
                  <img
                    src="/images/web-analytics-dashboard-dark.png"
                    alt="Screenshot of web analytics dashboard in dark mode"
                    className="mx-auto rounded-md hidden dark:block"
                    transform-images="jpg png avif webp"
                  />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="pt-8 sm:pt-16 pb-24 sm:pb-32">
              <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Easy setup
                </h2>
                <p className="mt-6 text-md sm:text-lg leading-8 text-muted-foreground px-8">
                  Gain valuable insights into your website or web application in
                  just a few steps.
                </p>
              </div>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <div>
                    <span className="flex items-center text-sm font-semibold leading-6 text-grafana-blue">
                      •&nbsp;&nbsp; Step 1
                      <div
                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-grafana-blue/30 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                        aria-hidden="true"
                      >
                      </div>
                    </span>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight">
                      Create an account
                    </p>
                    <p className="mt-1 text-base leading-7 text-muted-foreground">
                      Sign up and select a plan.
                    </p>
                    <p className="mt-6">
                      <a
                        href="https://app.prismeanalytics.com/authn/sign_up"
                        className="text-sm font-semibold leading-6"
                      >
                        Sign up <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center text-sm font-semibold leading-6 text-grafana-blue">
                      •&nbsp;&nbsp; Step 2
                      <div
                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-grafana-blue/30 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                        aria-hidden="true"
                      >
                      </div>
                    </span>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight">
                      Add tracking script to your site
                    </p>
                    <p className="mt-1 text-base leading-7 text-muted-foreground">
                      Copy and paste a snippet on all of your website pages.
                      <p className="mt-6">
                        <a
                          href="/docs/guides/setup-tracking-script/"
                          className="text-sm font-semibold leading-6"
                        >
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </p>
                  </div>
                  <div>
                    <span className="flex items-center text-sm font-semibold leading-6 text-grafana-blue">
                      •&nbsp;&nbsp; Step 3
                      <div
                        className="absolute -ml-2 h-px w-screen -translate-x-full bg-grafana-blue/30 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                        aria-hidden="true"
                      >
                      </div>
                    </span>
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight">
                      Access your dashboard
                    </p>
                    <p className="mt-1 text-base leading-7 text-muted-foreground">
                      Access a simple dashboard that anyone can use.
                    </p>
                    <p className="mt-6">
                      <a
                        href="https://app.prismeanalytics.com/grafana"
                        className="text-sm font-semibold leading-6"
                      >
                        View demo <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden w-full mx-auto pb-8 md:pb-16 lg:pb-24">
            <div className="absolute bg-gradient-to-r saturate-[2] from-grafana-blue/20 to-grafana-purple/20 linear-gradient-mask h-full w-full pointer-events-none" />
            <div className="absolute h-12 rotate-3 z-10 -top-6 -inset-x-12 saturate-200 bg-gradient-to-r from-grafana-purple/10 to-grafana-purple/30 blur-3xl" />
            <div className="h-16 md:h-24 z-10 inset-0 bg-gradient-to-b from-grafana-blue/10 to-transparent" />
            <div className="">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-base font-semibold leading-7 text-grafana-purple">
                    Progressive Analytics
                  </h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    Start with Simple Analytics
                  </p>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Prisme offers a comprehensive suite of features, including
                    everything you would typically expect from a robust
                    analytics service.
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {[{
                      title: "Privacy-friendly",
                      icon: <comp.EuropeanStarsIcon className="size-7" />,
                      desc: (
                        <>
                          Build from the ground up, Prisme is GDPR, PPCA, PECR
                          and Shrems II compliant. A direct yes from your legal
                          team and no cookie banner is required.
                        </>
                      ),
                    }, {
                      title: "Humans only",
                      icon: <comp.UsersGroupIcon className="size-6" />,
                      desc: (
                        <>
                          Our real-time analytics blocks bots, scrapers and spam
                          traffic—showing you only real, human visits.
                        </>
                      ),
                    }, {
                      title: "Handle any spike traffic",
                      icon: <comp.ArrowTrendingUpIcon className="size-6" />,
                      desc: (
                        <>
                          If an A-list influencer shares your site on social
                          media or your blog post goes viral, your analytics
                          {"won't"} slow down or get shut off.
                        </>
                      ),
                    }, {
                      title: "Campaigns & newsletters",
                      icon: <comp.AtSymbolIcon className="size-6" />,
                      desc: (
                        <>
                          Use{" "}
                          <a
                            href="/blog/understanding-utm-parameters/"
                            className="underline"
                          >
                            UTMs
                          </a>{" "}
                          to collect data on how much traffic your campaigns
                          generate and see how well they convert into revenue.
                        </>
                      ),
                    }, {
                      title: "Keep data forever",
                      icon: <comp.ClockIcon className="size-6" />,
                      desc: (
                        <>
                          That means 20 years from now, customers can still see
                          their data from the day they first started using our
                          software.
                        </>
                      ),
                    }, {
                      title: "Great for your SEO",
                      icon: <comp.BoltIcon className="size-6" />,
                      desc: (
                        <>
                          Our script is lightweight and fast-loading, meaning
                          switching from Google Analytics to Prisme {"won't "}
                          hurt your SEO rankings in any way.
                        </>
                      ),
                    }].map((item) => (
                      <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7">
                          <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-grafana-blue text-background dark:text-foreground shadow-lg shadow-grafana-blue/50">
                            {item.icon}
                          </div>
                          {item.title}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-muted-foreground">
                          {item.desc}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden">
            <div className="mt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                  <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-navy">
                    Scale up to{" "}
                    <span
                      className="bg-gradient-to-b to-indigo-500 dark:to-indigo-300 via-foreground from-foreground text-gradient drop-shadow-md"
                      style="filter: drop-shadow(0 4px 3px rgb(99 102 241 / 0.1)) drop-shadow(0 2px 2px rgb(99 102 241 / 0.1));"
                    >
                      Powerful Analytics
                    </span>
                  </p>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Explore your data through limitless prisms.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden py-24 sm:py-32">
              <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                  <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-7 text-grafana-blue">
                        Custom events & dashboards
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Analytics that matter
                      </p>
                      <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Prisme's custom event tracking and dashboards give you
                        the flexibility to measure what matters most, providing
                        personalized insights to inform your business decisions.
                        Gain a competitive edge by identifying trends others may
                        miss, and drive growth with actionable information.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-foreground">
                            <span className="absolute left-1 top-0 size-5 text-grafana-blue">
                              {"{ }"}
                            </span>
                            Custom Events.
                          </dt>
                          <dd className="inline pl-2">
                            Create events with arbitrary data to track specific
                            actions or behavior that are important to your
                            business, allowing for more targeted analysis and
                            insights.
                          </dd>
                        </div>
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-foreground">
                            <comp.ChartPieSolidIcon
                              className="absolute left-1 top-1 size-5 text-grafana-blue"
                              strokeWidth={2}
                            />
                            Panels.
                          </dt>
                          <dd className="inline pl-2">
                            From funnels to histograms. Graphs to geomaps.
                            Prisme has fast and flexible visualizations that
                            allows you to visualize your data, highlighting the
                            metrics and KPIs that matter most to your
                            organization.
                          </dd>
                        </div>
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-foreground">
                            <comp.UsersGroupSolidIcon className="absolute left-1 top-1 size-5 text-grafana-blue" />
                            Enhanced Customer Understanding.
                          </dt>
                          <dd className="inline pl-2">
                            By leveraging custom analytics and dashboards, you
                            can gain a competitive edge by identifying trends
                            and opportunities that your competitors may not have
                            noticed.
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="px-6 md:px-0">
                    <img
                      src="/images/funnel-light.png"
                      alt="Funnel panel screenshot"
                      loading="lazy"
                      className="max-w-full md:max-w-none rounded-xl shadow-xl ring-1 ring-muted dark:hidden"
                      transform-images="jpg png avif webp"
                    />
                    <img
                      src="/images/funnel-dark.png"
                      alt="Dark funnel panel screenshot"
                      loading="lazy"
                      className="max-w-full md:max-w-none rounded-xl shadow-xl ring-1 ring-muted hidden dark:block"
                      transform-images="jpg png avif webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden">
            <div className="absolute rotate-180 -z-10 bg-gradient-to-r saturate-[2] from-grafana-blue/20 to-grafana-purple/20 linear-gradient-mask h-full w-full pointer-events-none" />
            <div className="absolute h-12 rotate-3 z-10 -bottom-6 -inset-x-12 saturate-200 bg-gradient-to-r from-grafana-purple/10 to-grafana-purple/30 blur-3xl" />
            <div className="h-16 md:h-24 z-10 absolute bottom-0 bg-gradient-to-b from-grafana-blue/10 to-transparent" />
            <div className="overflow-hidden py-24 sm:py-32">
              <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                  <div className="px-6 lg:px-0 lg:pr-4">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-base font-semibold leading-7 text-grafana-blue">
                        Explore your data
                      </h2>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Dive into the details
                      </p>
                      <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Get direct access to your data through an API that
                        supports SQL queries, giving you total control over how
                        you analyze and explore your information. With no
                        intermediaries getting in the way, dive deep into your
                        data and uncover meaningful insights without delay or
                        limitation.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-foreground">
                            <comp.FunnelSolidIcon className="absolute left-1 top-1 h-5 w-5 text-grafana-blue" />
                            Filters.
                          </dt>
                          <dd className="inline pl-2">
                            With a wide range of data points, you get a detailed
                            understanding of your target audience and can filter
                            up to single data point.
                          </dd>
                        </div>
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-foreground">
                            <comp.PuzzlePieceSolidIcon className="absolute left-1 top-1 h-5 w-5 text-grafana-blue" />
                            Integration with Existing Tools.
                          </dt>
                          <dd className="inline pl-2">
                            Easily integrate with tools and platform your
                            already using (numpy, pandas, Grafana).
                          </dd>
                        </div>
                        <div className="relative pl-9">
                          <dt className="inline font-semibold text-foreground">
                            <comp.Cog6ToothSolidIcon className="absolute left-1 top-1 h-5 w-5 text-grafana-blue" />
                            Automation.
                          </dt>
                          <dd className="inline pl-2">
                            Prisme doesn't support automated report (yet) but
                            you can easily build it yourself.
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="px-6 md:px-0">
                    <img
                      src="/images/explore-light.png"
                      alt="Explore page screenshot"
                      loading="lazy"
                      className="max-w-full md:max-w-none rounded-xl shadow-xl ring-1 ring-muted dark:hidden"
                      transform-images="jpg png avif webp"
                    />
                    <img
                      src="/images/explore-dark.png"
                      alt="Explore page screenshot"
                      loading="lazy"
                      className="max-w-full md:max-w-none rounded-xl shadow-xl ring-1 ring-muted hidden dark:block"
                      transform-images="jpg png avif webp"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="py-16 sm:py-24 ring-1">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                  <h2
                    id="pricing"
                    className="text-3xl font-bold tracking-tight sm:text-4xl"
                  >
                    Simple no-tricks pricing
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Prisme is 100% free during beta!
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-muted sm:mt-20 lg:mx-0 lg:flex lg:max-w-none bg-muted/50">
                  <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Beta tester plan
                    </h3>
                    <p className="mt-6 text-base leading-7 text-muted-foreground">
                      In exchange of honest review and feedback, enjoy Prisme
                      Cloud for free.
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                      <h4 className="flex-none text-sm font-semibold leading-6 text-grafana-purple">
                        What’s included
                      </h4>
                      <div className="h-px flex-auto bg-muted"></div>
                    </div>
                    <ul
                      role="list"
                      className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2 sm:gap-6"
                    >
                      <li className="flex gap-x-3">
                        <comp.CheckIcon className="h-6 w-5 flex-none text-primary" />
                        Unlimited websites
                      </li>
                      <li className="flex gap-x-3">
                        <comp.CheckIcon className="h-6 w-5 flex-none text-primary" />
                        Unlimited pageviews / events
                      </li>
                      <li className="flex gap-x-3">
                        <comp.CheckIcon className="h-6 w-5 flex-none text-primary" />
                        Unlimited dashboards
                      </li>
                      <li className="flex gap-x-3">
                        <comp.CheckIcon className="h-6 w-5 flex-none text-primary" />
                        GDPR compliance
                      </li>
                      <li className="flex gap-x-3">
                        <comp.CheckIcon className="h-6 w-5 flex-none text-primary" />
                        Intuitive, fast, built-in Web Analytics dashboard
                      </li>
                      <li className="flex gap-x-3 font-bold">
                        <comp.CheckIcon className="h-6 w-5 flex-none text-primary" />
                        Yes, its that simple
                      </li>
                    </ul>
                  </div>
                  <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="h-full rounded-2xl bg-muted/80 py-10 text-center ring-1 ring-inset ring-muted lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-muted-foreground">
                          Limited time only
                        </p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-5xl font-bold tracking-tight">
                            0€
                          </span>
                        </p>
                        <a
                          href="https://app.prismeanalytics.com/authn/sign_up"
                          className="w-full"
                        >
                          <comp.Button className="w-full mt-6">
                            Get access
                          </comp.Button>
                        </a>
                        <p className="mt-6 text-xs leading-5 text-muted-foreground">
                          No credit card required.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden">
            <div className="absolute bg-gradient-to-r saturate-[2] from-grafana-blue/20 to-grafana-purple/20 linear-gradient-mask h-full w-full pointer-events-none" />
            <div className="absolute h-12 rotate-3 z-10 -top-6 -inset-x-12 saturate-200 bg-gradient-to-r from-grafana-purple/10 to-grafana-purple/30 blur-3xl" />
            <div className="h-16 md:h-24 z-10 inset-0 bg-gradient-to-b from-grafana-blue/10 to-transparent" />
            <div className="pb-24 sm:pb-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Still not convinced ?
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Here are a few extra reasons to choose Prisme.
                  </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {[
                      {
                        title: "Works without Javascript",
                        Icon: comp.CodeBracketIcon,
                        desc: (
                          <>
                            Prisme supports Javascript less tracking via{" "}
                            <code>&lt;img&gt;</code>{" "}
                            tags that returns an ultra-light (35 bytes)
                            transparent single pixel GIF image.
                          </>
                        ),
                        ctaHref:
                          "https://www.prismeanalytics.com/docs/references/http/#noscript-events-api",
                      },
                      {
                        title: "Real-time",
                        Icon: comp.ClockIcon,
                        desc: (
                          <>
                            We process data instantly, so you can see it
                            reflected in your stats immediately. For reference,
                            Google Analytics can take 24-48 hours to process and
                            display your data.
                          </>
                        ),
                      },
                      {
                        title: "No vendor lock-in",
                        Icon: comp.LockOpenIcon,
                        desc: (
                          <>
                            All features available in Prisme Cloud are available
                            in Open Source distribution. Furthermore, Prisme is
                            designed to be easily self-hosted so your never
                            locked in.
                          </>
                        ),
                      },
                      {
                        title: "Many sites per account",
                        Icon: comp.GlobeAltIcon,
                        desc: (
                          <>
                            Add unlimited websites at no extra charge.
                          </>
                        ),
                      },
                      {
                        title: "Instant filters",
                        Icon: comp.FunnelIcon,
                        desc: (
                          <>
                            Do you want to know how many people from Twitter
                            signed up for your newsletter? Or see how your ad
                            campaigns are converting? Add a filter to any piece
                            of data and drill down.
                          </>
                        ),
                      },
                      {
                        title: "Product Analytics (soon)",
                        Icon: comp.UsersGroupIcon,
                        desc: (
                          <>
                            We{"'"}re working hard on adding product analytics
                            features such as user segmentation, retention and
                            user paths to Prisme.
                          </>
                        ),
                      },
                    ].map(({ title, Icon, desc, ctaHref }) => (
                      <div className="flex flex-col">
                        <dt className="text-base font-semibold leading-7 text-foreground">
                          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-grafana-purple shadow-lg shadow-grafana-purple/50">
                            <Icon class="size-6 text-white" />
                          </div>
                          {title}
                        </dt>
                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                          <p className="flex-auto">
                            {desc}
                          </p>
                          <p className="mt-6">
                            {ctaHref &&
                              (
                                <a
                                  href={ctaHref}
                                  className="text-sm font-semibold leading-6 text-foreground"
                                >
                                  Learn more <span aria-hidden="true">→</span>
                                </a>
                              )}
                          </p>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8 lg:py-40">
              <div class="mx-auto max-w-4xl divide-y divide-muted">
                <div className="pb-4">
                  <h2 class="text-2xl font-bold leading-10 tracking-tight text-foreground">
                    Frequently asked questions
                  </h2>
                  <p className="text-muted-foreground">
                    If you can’t find what you’re looking for, email us at{" "}
                    <a
                      href="mailto:support@prismeanalytics.com"
                      className="underline"
                    >
                      support@prismeanalytics.com
                    </a>{" "}
                    and we will get back to you.
                  </p>
                </div>
                {[
                  {
                    question: <>What does Prisme Analytics do with my data?</>,
                    answer: (
                      <>
                        We make it easily accessible to you, and that’s it. We
                        don’t mine your data, sell it, use it for retargeting,
                        or have any interest in it other than keeping it
                        available for you. We sell our software, not data.
                      </>
                    ),
                  },
                  {
                    question: <>How long does Prisme Analytics keep my data?</>,
                    answer: (
                      <>
                        Forever. Our data retention policy for all customers on
                        all plans is that we never delete your data. Unlike most
                        other dashboard forever. As long as you{"'"}re a paying
                        customer, your data is available to you forever.
                      </>
                    ),
                  },
                  {
                    question: <>Is Prisme Analytics free?</>,
                    answer: (
                      <>
                        If you aren’t paying for the product, you are the
                        product. Google Analytics is free, so the data you
                        collect for them about your website visitors is the
                        product. They’re an advertising company and make
                        billions by knowing as much as possible about all of us.
                        That’s why we charge a reasonable price for our software
                        (we don’t have to or want to sell data).
                      </>
                    ),
                  },
                  {
                    question: <>Can I cancel anytime?</>,
                    answer: (
                      <>
                        Yes. You can cancel your subscription at any moment. You
                        will still have access to your account and data until
                        the end of the period you paid for.
                      </>
                    ),
                  },
                  {
                    question: (
                      <>Do I need a cookie banner with Prisme Analytics?</>
                    ),
                    answer: (
                      <>
                        No, Prisme is GDPR, PECR and CCPA compliant.
                      </>
                    ),
                  },
                ].map(({ question, answer }) => (
                  <dl class="mt-6 space-y-6 divide-y divide-muted">
                    <div class="pt-6">
                      <dt>
                        <comp.Details
                          class="flex w-full items-start justify-between text-left text-gray-900"
                          aria-controls="faq-0"
                          aria-expanded="false"
                          summary={
                            <h3 className="inline text-base">
                              {question}
                            </h3>
                          }
                        >
                          <dd class="mt-2 pr-12" id="faq-0">
                            <p class="leading-7 text-muted-foreground">
                              {answer}
                            </p>
                          </dd>
                        </comp.Details>
                      </dt>
                    </div>
                  </dl>
                ))}
              </div>
            </div>
          </section>
          <section className="relative overflow-hidden w-full py-16 text-white">
            <div className="absolute top-0 saturate-[1.25] bg-gradient-to-br from-grafana-purple -z-10 to-grafana-blue h-full w-full pointer-events-none" />
            <div
              style="content:&quot;&quot;;background-image:url(/grid.svg)"
              className="invert absolute top-0 opacity-70 -z-10 w-full h-full inverted-radial-gradient-mask"
            />
            <h2
              id="open-source"
              className="text-2xl md:text-3xl xl:text-4xl font-bold text-center text-white mb-4"
            >
              Proudly Open Source
            </h2>
            <p className="text-center mb-16">
              Prisme Analytics is built on top of state of the art Open Source
              data visualization and storage, respectively{" "}
              <a
                href="https://grafana.com/grafana/"
                target="_blank"
                className="underline"
              >
                Grafana
              </a>{" "}
              and{" "}
              <a
                href="https://clickhouse.com/"
                target="_blank"
                className="underline"
              >
                ClickHouse
              </a>.
            </p>
            <div className="grid grid-cols-5 gap-4 px-4 text-center max-w-3xl mx-auto">
              <a
                href="https://grafana.com/grafana/"
                target="_blank"
                className="place-self-center"
              >
                <img
                  alt="Grafana logo"
                  title="Grafana"
                  src="/images/grafana-icon.jpg"
                  loading="lazy"
                  transform-images="jpg png avif webp"
                />
              </a>
              <span className="text-6xl md:text-9xl place-self-center">+</span>
              <a
                href="https://clickhouse.com/"
                target="_blank"
                className="p-6 bg-[#faff69] place-self-center"
              >
                <img
                  alt="Clickhouse logo"
                  title="Clickhouse"
                  loading="lazy"
                  src="/clickhouse-icon.svg"
                />
              </a>
              <span className="text-6xl md:text-9xl place-self-center">=</span>
              <a
                href="https://github.com/prismelabs/analytics"
                target="_blank"
                className="underline"
              >
                <img
                  alt="Prisme Analytics Logo"
                  src="/logo.svg"
                  loading="lazy"
                  className="md:block max-h-32 place-self-center"
                />
              </a>
            </div>
            <div className="mt-16 flex flex-col justify-center items-center gap-6">
              <p className="px-8 text-center">
                Our source code is available on GitHub - feel free to read,
                review, or contribute to it however you want!
              </p>
              <a
                href="https://github.com/prismelabs/analytics"
                target="_blank"
                className="underline flex gap-2 items-center"
              >
                <comp.GithubIcon className="w-8 h-8" />
                View source code
              </a>
            </div>
          </section>
          {/* TODO: customers quote section */}
          {/* TODO: success stories section */}
        </main>
        <comp.FooterCta />
      </div>
    </>
  );
};
