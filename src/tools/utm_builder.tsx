export const title = "Easily generate UTM codes for your marketing campaigns";
export const layout = "layout.tsx";

export const metas = {
  title:
    "Free UTM Builder – Easily generate UTM codes for your marketing campaigns",
  description:
    "Try our 100% free UTM builder tool to easily generate UTM codes for your marketing campaigns, powered by Prisme Analytics – Privacy friendly and progressive web analytics service.",
  keywords: [
    "Prisme Cloud",
    "Analytics platform",
    "Data visualization",
    "Open-source analytics",
    "Prisme Analytics",
    "URL tracking",
    "Campaign monitoring",
    "Marketing analytics",
    "UTM parameters",
    "Google Analytics",
    "Tracking codes",
    "Conversion optimization",
  ],
};

export default function ({ comp }: Lume.Data) {
  return (
    <div className="flex flex-col min-h-screen">
      <script src="/scripts/utm_builder.js" defer></script>
      <main className="pt-16 pb-8 px-4 sm:px-8 md:px-16 lg:px-32 space-y-16">
        <section className="w-full">
          <div className="max-w-6xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center -mt-8">
            <img
              src="/logo.svg"
              alt="Prisme Analytics logo"
              className="aspect-square w-full h-auto max-w-32 mx-auto my-4"
            />
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              Free UTM Builder
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Easily generate UTM codes for your marketing campaigns in just a
              few clicks.
              <br />
              Powered by{" "}
              <a href="/" className="underline text-foreground">
                Prisme Analytics
              </a>.
            </p>
          </div>
        </section>
        <section>
          <div className="max-w-2xl mx-auto space-y-4">
            <comp.Input
              id="destination-url"
              label="Destination URL*"
              value="https://www.prismeanalytics.com"
              required={true}
            />
            <comp.Input
              id="utm-source"
              label="Source*"
              placeholder="google"
              required={true}
            />
            <comp.Input
              id="utm-medium"
              label="Medium*"
              placeholder="cpc"
              required={true}
            />
            <comp.Input
              id="utm-campaign"
              label="Campaign*"
              placeholder="summer_sale"
              required={true}
            />
            <comp.Input
              id="utm-term"
              label="Term"
              placeholder="running shoes"
            />
            <comp.Input
              id="utm-content"
              label="Content"
              placeholder="logolink"
            />
          </div>
          <comp.Hr className="my-4 max-w-2xl mx-auto" />
          <div className="max-w-2xl mx-auto space-y-4">
            <comp.Input
              id="utm-result"
              label="Your Campaign URL"
              readonly={true}
            />
            <comp.Button id="utm-copy-btn" className="w-full">Copy</comp.Button>
          </div>
        </section>
        <div>
          <comp.Hr className="px-4 mt-16 w-full max-w-2xl mx-auto" />
          <section className="max-w-2xl mx-auto w-full space-y-6 divide-y divide-muted">
            {[
              {
                question: "What are UTM parameters?",
                answer: (
                  <>
                    Urchin Tracking Module (UTM) parameters were first
                    introduced by Google Analytics{"'"}{" "}
                    predecessor Urchin and are a widely accepted tool to track
                    the effectiveness of online marketing campaigns. With Prisme
                    Analytics, you can use UTM parameters to break down how many
                    people visited your website and compare the results of your
                    campaigns.
                  </>
                ),
              },
              {
                question: "How does a UTM campaign work?",
                answer: (
                  <>
                    A UTM campaign works by appending specific tags to your
                    URLs, which can then be tracked by analytics platforms like
                    Prisme Analytics. These tags help you understand where your
                    website traffic is coming from and which marketing campaigns
                    are driving the most engagement and conversions.
                  </>
                ),
              },
              {
                question: "Why should I use UTM parameters?",
                answer: (
                  <>
                    UTM parameters allow you to take a closer look at the origin
                    of your website visitors. Prisme Analytics shows where a
                    visitor comes from by the referrer, but this information is
                    not always passed on by the browser. In addition, only the
                    origin website is listed, but not, for example, on which
                    link on a page was clicked. With the help of UTM parameters,
                    you get precise information about which links were clicked
                    on which page and at the same time improve the reliability
                    of your statistics.
                  </>
                ),
              },
              {
                question: "What are the UTM parameters and how do I use them?",
                answer: (
                  <>
                    There are five UTM parameters in total. Namely{" "}
                    <code>utm_source</code>, <code>utm_medium</code>,{" "}
                    <code>utm_campaign</code>, <code>utm_content</code> and{" "}
                    <code>utm_term</code>. Typically, the first three parameters
                    are set, and optionally <code>utm_content</code> and{" "}
                    <code>utm_term</code>.
                    <br />
                    <br />
                    <code>utm_source</code>{" "}
                    specifies the source, such as a website or newsletter.
                    <br />
                    <br />
                    <code>utm_medium</code>{" "}
                    contains the medium used for the campaign, such as social
                    media.
                    <br />
                    <br />
                    <code>utm_campaign</code>, as the name suggests, identifies
                    the campaign. Each campaign is usually given a name, such as
                    Summer Sale.
                    <br />
                    <br />
                    <code>utm_content</code> and <code>utm_term</code>{" "}
                    are used less frequently, but can be very useful for finding
                    out what link a visitor followed and what keywords were
                    used. <code>utm_content</code>{" "}
                    indicates what part of a page or email was viewed. This can
                    be e.g. the header or footer to identify the area where the
                    link is placed.
                    <code>utm_term</code>{" "}
                    is used for search terms. For example, if links are
                    displayed as the result of a search, the search terms can be
                    sent with the campaign.
                    <br />
                    <br />
                    In general, the values for the parameters can be freely
                    chosen. However, they are case sensitive and no spaces can
                    be used. Alternatively, plus signs can be used, which are
                    automatically converted into spaces by Prisme Analytics. UTM
                    parameters should be used only for inbound links, not for
                    links that link to pages on the same website.
                  </>
                ),
              },
              {
                question: "Can I manually create UTM tags?",
                answer: (
                  <>
                    Yes, you can manually create UTM tags by adding parameters
                    to your URLs. However, this process can be time-consuming
                    and prone to errors. Using a UTM campaign generator tool can
                    streamline this process and ensure consistency in your
                    tagging.
                  </>
                ),
              },
              {
                question: "Are UTM tags case sensitive?",
                answer: (
                  <>
                    No, UTM tags are not case sensitive. However, it{"'"}s a
                    good practice to maintain consistency in your tagging to
                    avoid any discrepancies in your analytics data.
                  </>
                ),
              },
            ].map(({ question, answer }) => (
              <dl class="pt-6">
                <div>
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
          </section>
        </div>
      </main>
      <comp.FooterCta />
    </div>
  );
}
