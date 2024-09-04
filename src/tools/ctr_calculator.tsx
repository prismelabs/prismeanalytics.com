export const title = "CTR Calculator (Click-Through Rate)";
export const layout = "layout.tsx";

export const metas = {
  title,
  description:
    "Calculate your click-through rates for ad campaigns and compare them to industry averages of different channels with our free CTR calculator.",
  keywords: [
    "CTR",
    "Click-Through Rate",
    "Calculator",
    "Digital Marketing",
    "Advertising",
    "PPC (Pay-Per-Click)",
    "SEO (Search Engine Optimization)",
    "Clicks",
    "Impressions",
    "Conversion Rate",
    "Analytics",
    "Performance Metrics",
    "Online Advertising",
    "Ad Effectiveness",
    "Campaign Analysis",
    "Prisme Cloud",
    "Analytics platform",
    "Data visualization",
    "Open-source analytics",
    "Prisme Analytics",
  ],
};

export default function ({ comp }: Lume.Data) {
  return (
    <>
      <script src="/scripts/ctr_calculator.js" defer />
      <main className="pt-16 pb-8 px-4 sm:px-8 md:px-16 lg:px-32 space-y-16">
        <section className="w-full">
          <div className="max-w-4xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center -mt-8">
            <img
              src="/logo.svg"
              alt="Prisme Analytics logo"
              className="aspect-square w-full h-auto max-w-32 mx-auto my-4"
            />
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              CTR (Click-Through Rate) Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Calculate your click-through rates for ad campaigns and compare
              them to industry averages of different channels with our free CTR
              Calculator.
              <br />
              Powered by{" "}
              <a href="/" className="underline text-foreground">
                Prisme Analytics
              </a>.
            </p>
          </div>
        </section>
        <section>
          <div className="max-w-xl mx-auto space-y-4">
            <comp.Input
              id="impressions"
              type="number"
              label="Impressions*"
              placeholder="0"
              required={true}
            />
            <comp.Input
              type="number"
              id="clicks"
              label="Clicks*"
              placeholder="0"
              required={true}
            />
            <div className="space-y-4 py-2">
              <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Channel
              </p>
              <div className="pl-2 space-y-4">
                <comp.Radio
                  name="channel"
                  label="Display"
                  value="display"
                  id="channel-display"
                />
                <comp.Radio
                  name="channel"
                  label="Paid Search"
                  value="paid-search"
                  id="channel-paid-search"
                />
                <comp.Radio
                  name="channel"
                  label="Paid Social"
                  value="paid-social"
                  id="channel-paid-social"
                />
                <comp.Radio
                  name="channel"
                  label="Organic Search"
                  value="organic-search"
                  id="channel-organic-search"
                />
                <comp.Radio
                  name="channel"
                  label="Organic Social"
                  value="organic-social"
                  id="channel-organic-social"
                />
              </div>
            </div>
          </div>
          <comp.Hr className="my-4 max-w-xl mx-auto" />
          <div className="max-w-xl mx-auto space-y-4">
            <comp.Input
              id="ctr-result"
              label="Your CTR"
              readonly={true}
            />
            <p
              className="text-center text-xs text-muted-foreground"
              id="ctr-channel-result"
            />
            <comp.Button id="ctr-copy-btn" className="w-full">Copy</comp.Button>
          </div>
        </section>
        <div>
          <comp.Hr className="px-4 mt-16 w-full max-w-xl mx-auto" />
          <section className="max-w-xl mx-auto w-full space-y-6 divide-y divide-muted">
            {[
              {
                question: <>What is Click-Through Rate (CTR)?</>,
                answer: (
                  <>
                    CTR stands for Click-Through Rate. It{"'"}s a metric used in
                    digital marketing to measure the percentage of people who
                    click on a specific link or call to action out of the total
                    number who view it.
                  </>
                ),
              },
              {
                question: <>How is CTR calculated?</>,
                answer: (
                  <>
                    CTR is calculated by dividing the number of clicks by the
                    number of impressions and then multiplying by 100 to get a
                    percentage. Formula: CTR = (Number of Clicks / Number of
                    Impressions) × 100
                  </>
                ),
              },
              {
                question: (
                  <>
                    Why is CTR important?
                  </>
                ),
                answer: (
                  <>
                    CTR is important because it helps measure the effectiveness
                    of your marketing campaigns, ads, or content. A higher CTR
                    generally indicates that your message is relevant and
                    appealing to your target audience.
                  </>
                ),
              },
              {
                question: <>What{"'"}s considered a good CTR?</>,
                answer: (
                  <>
                    A "good" CTR varies depending on the platform, industry, and
                    type of campaign. However, here are some general benchmarks:
                    <br />
                    <ul className="list-disc pl-6 pt-2 text-muted-foreground">
                      <li>
                        <b className="font-medium">Search ads</b>: 1-2%
                      </li>
                      <li>
                        <b className="font-medium">Display ads</b>: 0.1-1%
                      </li>
                      <li>
                        <b className="font-medium">Email marketing</b>: 2-5%
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                question: <>How can I improve my CTR?</>,
                answer: (
                  <>
                    To improve your CTR, you can:

                    <ol className="list-decimal pl-6 pt-2 text-muted-foreground">
                      <li>
                        Write compelling headlines and ad copy
                      </li>
                      <li>
                        Use relevant keywords
                      </li>
                      <li>
                        Create eye-catching visuals
                      </li>
                      <li>
                        Improve your targeting
                      </li>
                      <li>
                        Test different versions (A/B testing)
                      </li>
                    </ol>
                  </>
                ),
              },
              {
                question: <>Does a high CTR always mean success?</>,
                answer: (
                  <>
                    Not necessarily. While a high CTR is generally good,
                    it{"'"}s important to consider other metrics like conversion
                    rate and overall ROI. A high CTR with low conversions might
                    indicate that your ad is attractive but your landing page or
                    offer needs improvement.
                  </>
                ),
              },
              {
                question: <>How does CTR affect Quality Score in Google Ads?</>,
                answer: (
                  <>
                    CTR is a significant factor in determining your Quality
                    Score in Google Ads. A higher CTR can lead to a better
                    Quality Score, which in turn can result in lower costs and
                    better ad positioning.
                  </>
                ),
              },
              {
                question: <>Is CTR relevant for SEO?</>,
                answer: (
                  <>
                    While CTR isn{"'"}t a direct ranking factor, it can
                    indirectly affect SEO. A higher CTR from search results can
                    indicate to search engines that your content is relevant and
                    valuable, potentially leading to improved rankings over
                    time.
                  </>
                ),
              },
              {
                question: <>How often should I monitor my CTR?</>,
                answer: (
                  <>
                    It{"'"}s good practice to monitor your CTR regularly,
                    especially when running active campaigns. For ongoing
                    campaigns, weekly or monthly reviews are common, but the
                    frequency may vary based on your specific needs and the
                    volume of data.
                  </>
                ),
              },
              {
                question: <>Can CTR be too high?</>,
                answer: (
                  <>
                    While a high CTR is generally positive, an unusually high
                    CTR might indicate click fraud or poorly targeted ads that
                    are attracting the wrong audience. Always analyze CTR in
                    conjunction with other metrics to get a complete picture of
                    your campaign{"'"}s performance.
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
    </>
  );
}
