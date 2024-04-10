export const title = "Prisme Analytics";
export const layout = "layout.tsx";

export default ({ comp }: Lume.Data) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="pt-16 px-4 sm:px-8 md:px-16 lg:px-32 mb-16 space-y-16 md:space-y-32 lg:space-y-48">
        <section className="w-full">
          <div className="max-w-6xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center -mt-8">
            <img
              src="/images/logo.jpg"
              transform-images="jpg png avif webp"
              className="aspect-square w-full h-auto max-w-32 mx-auto my-4"
            />
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter">
              Customize your web analytics. Track metrics that matter.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Query, visualize and understand your web traffic. With Prisme
              Analytics you can track metrics valuable to your business and
              create beautiful, flexible and personalized dashboards.
            </p>
            <div className="space-y-4">
              <div className="mt-8 flex justify-center gap-4 md:gap-6 lg:gap-8">
                <a href="https://app.prismeanalytics.com/">
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
                Free trial with no credit card required
              </p>
            </div>
            <div className="mt-8 rounded-xl w-fit mx-auto bg-muted p-2 ring-1 ring-inset ring-input lg:rounded-2xl lg:p-4">
              <img
                src="/images/builtin-dashboard-light.jpg"
                className="mx-auto rounded-md dark:hidden"
                transform-images="jpg png avif webp"
              />
              <img
                src="/images/builtin-dashboard-dark.jpg"
                className="mx-auto rounded-md hidden dark:block"
                transform-images="jpg png avif webp"
              />
            </div>
          </div>
        </section>
        <section className="w-full max-w-6xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl xl:text-4xl px-8 font-bold mb-16">
            Why Prisme?
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 my-8 gap-x-8 gap-y-8 md:gap-y-12 lg:gap-y-16">
            <div className="space-y-4">
              <comp.DashboardIcon />
              <h3 className="text-2xl font-bold">
                Tailored metrics and dashboards
              </h3>
              <p className="text-muted-foreground">
                Our platform allows you to track custom events that truly matter
                for your business and design fully customizable dashboards to
                visualize your metrics in a way that suits your unique needs.
              </p>
              <p className="text-muted-foreground text-xs italic">
                Of course, you don't have to reinvent the wheel, a general
                dashboard with common metrics is built-in.
              </p>
            </div>
            <div className="space-y-4">
              <comp.PrivacyFriendlyIcon />
              <h3 className="text-2xl font-bold mt-2">
                Privacy-first
              </h3>
              <p className="text-muted-foreground">
                Prisme is privacy-first by design, we don't use cookies and
                don't store any Personal Identifiable Information (PII). We
                comply by design with all privacy policies. Including: GDPR,
                PECR, CCPA and more. Cookie banners not required.
              </p>
            </div>
            <div className="space-y-4">
              <comp.GaIcon />
              <h3 className="text-2xl font-bold mt-2">
                Google Analytics alternative
              </h3>
              <p className="text-muted-foreground">
                Prisme aims to be a real, privacy-friendly Google Analytics
                alternative. You shouldn't have to choose between respecting
                your users privacy and using less functional tools.
              </p>
            </div>
            <div className="space-y-4">
              <comp.OsiIcon />
              <h3 className="text-2xl font-bold mt-2">
                Simple, lightweight, flexible and Open Source
              </h3>
              <p className="text-muted-foreground">
                On top of everything, Prisme is simple to use, lightweight (&lt;
                1kB tracking script), flexible and Open Source (as per{" "}
                <a
                  target="_blank"
                  href="https://opensource.org/osd"
                  className="underline"
                >
                  Open Source definition
                </a>{" "}
                of the{" "}
                <a
                  target="_blank"
                  href="https://opensource.org/"
                  className="underline"
                >
                  Open Source Initiative (OSI)
                </a>).
              </p>
            </div>
          </div>
        </section>
        {/* TODO: customers quote section */}
        {/* TODO: success stories section */}
        <section className="w-full py-16">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-4">
            Powered by Open Source
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-16">
            Prisme Analytics is built on top of state of the art Open Source
            data visualization and storage, respectively{" "}
            <a
              href="https://grafana.com/grafana"
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
              href="https://grafana.com/grafana"
              target="_blank"
              className="place-self-center"
            >
              <img
                alt="Grafana logo"
                title="Grafana"
                src="/images/grafana-icon.jpg"
                transform-images="jpg png avif webp"
              />
            </a>
            <span className="text-6xl md:text-9xl place-self-center">+</span>
            <a
              href="https://clickhouse.com/"
              target="_blank"
              className="p-4 bg-[#faff69] place-self-center"
            >
              <img
                alt="Clickhouse logo"
                title="Clickhouse"
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
                alt="Prisme logo"
                src="/images/logo.jpg"
                transform-images="jpg png avif webp"
                className="md:block max-h-32 place-self-center"
              />
            </a>
          </div>
          <a
            href="https://github.com/prismelabs/analytics"
            target="_blank"
            className="mt-16 flex justify-center items-center gap-2 underline"
          >
            <comp.GithubIcon className="w-8 h-8" /> View source code
          </a>
        </section>
        {
          /*
        <section className="w-full">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-4 ">
            Still not convinced?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Checkout one of our comparison:
          </p>

          <div className="space-y-16 mt-8">
            <img
              src="/images/logo.jpg"
              transform-images="jpg png avif webp"
              className="aspect-square w-full h-auto max-w-32 mx-auto mb-8"
            />
            <p className="text-center font-bold text-6xl" aria-hidden="true">
              VS
            </p>
            <div className="flex flex-wrap gap-16 justify-center items-center">
              <a href="#todo">
                <img
                  transform-images="png avif webp"
                  src="/images/google_analytics.png"
                  className="h-24"
                />
                <span className="sr-only">
                  Prisme Analytics vs Google Analytics
                </span>
              </a>
              <a href="#todo">
                <img
                  transform-images="png avif webp"
                  src="/images/plausible_logo.png"
                  className="h-16"
                />
                <span className="sr-only">
                  Prisme Analytics vs Plausible Analytics
                </span>
              </a>
              <a href="#todo">
                <img
                  transform-images="png avif webp"
                  src="/images/simpleanalytics.png"
                  className="h-24"
                />
                <span className="sr-only">
                  Prisme Analytics vs Simple Analytics
                </span>
              </a>
            </div>
          </div>
        </section>
          */
        }{" "}
        <section className="w-full">
          <div class="mx-auto max-w-7xl relative">
            <h2 className="text-center text-2xl md:text-3xl xl:text-4xl px-8 font-bold mb-8">
              Frequently asked questions (and answers)
            </h2>
            <p class="text-lg text-center">
              If you can’t find what you’re looking for, email us at{" "}
              <a
                href="mailto:support@prismeanalytics.com"
                className="underline"
              >
                support@prismeanalytics.com
              </a>{" "}
              and we will get back to you.
            </p>
            <ul
              role="list"
              class="list-none mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-3"
            >
              <li>
                <ul role="list" class="list-none flex flex-col gap-y-8">
                  <li>
                    <h3 class="text-lg">
                      What does Prisme Analytics do with my data?
                    </h3>
                    <p class="mt-4 text-sm">
                      We make it easily accessible to you, and that’s it. We
                      don’t mine your data, sell it, use it for retargeting, or
                      have any interest in it other than keeping it available
                      for you. We sell our software, not data.
                    </p>
                  </li>
                  <li>
                    <h3 class="text-lg">
                      How long does Prisme Analytics keep my data?
                    </h3>
                    <p class="mt-4 text-sm">
                      Forever. Our data retention policy for all customers on
                      all plans is that we never delete your data. Unlike most
                      other analytics companies who keep your data for 30 days
                      to 5 years (i.e. not long at all), we retain your data to
                      view your dashboard forever. As long as you're a paying
                      customer, your data is available to you forever.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" class="list-none flex flex-col gap-y-8">
                  <li>
                    <h3 class="text-lg">
                      How long does Prisme Analytics keep my data?
                    </h3>
                    <p class="mt-4 text-sm">
                      Forever. Our data retention policy for all customers on
                      all plans is that we never delete your data. Unlike most
                      other analytics companies who keep your data for 30 days
                      to 5 years (i.e. not long at all), we retain your data to
                      view your dashboard forever. As long as you're a paying
                      customer, your data is available to you forever.
                    </p>
                  </li>
                  <li>
                    <h3 class="font-display text-lg leading-7 text-slate-900">
                      Do I need a cookie banner with Prisme Analytics?
                    </h3>
                    <p class="mt-4 text-sm">
                      No. At least, not because of Prisme.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" class="list-none flex flex-col gap-y-8">
                  <li>
                    <h3 class="font-display text-lg leading-7 text-slate-900">
                      Is Prisme Analytics free?
                    </h3>
                    <p class="mt-4 text-sm">
                      If you aren’t paying for the product, you are the product.
                      Google Analytics is free, so the data you collect for them
                      about your website visitors is the product. They’re an
                      advertising company and make billions by knowing as much
                      as possible about all of us. That’s why we charge a
                      reasonable price for our software (we don’t have to or
                      want to sell data).
                    </p>
                  </li>
                  <li>
                    <h3 class="text-lg">
                      Can I cancel anytime?
                    </h3>
                    <p class="mt-4 text-sm">
                      Yes. You can cancel your subscription at any moment. You
                      will still have access to your account and data until the
                      end of the period you paid for.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <section className="w-full h-72 relative mt-16">
        <img
          src="/images/builtin-dashboard-dark.jpg"
          className="mx-auto w-full h-72 brightness-50 object-cover object-center absolute"
          transform-images="jpg png avif webp"
        />
        <h2 className="w-full text-3xl text-center font-bold text-white absolute top-20 z-10">
          Ready to ditch Google Analytics?
        </h2>
        <div className="w-full flex justify-center space-x-8 absolute bottom-20">
          <a href="https://app.prismeanalytics.com/authn/sign_up">
            <comp.Button variant="outline">
              Create free account
            </comp.Button>
          </a>
          <a href="https://app.prismeanalytics.com/grafana">
            <comp.Button variant="outline">
              Live demo
            </comp.Button>
          </a>
        </div>
      </section>
    </div>
  );
};
