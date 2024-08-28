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
      <main className="pt-16 px-4 sm:px-8 md:px-16 lg:px-32 space-y-16">
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
      </main>
      <comp.Hr className="px-4 my-16 w-full max-w-xl mx-auto" />
      <section className="px-4 max-w-xl mx-auto w-full space-y-8 mb-16">
        <comp.Details summary="What is Click-Through Rate (CTR)?">
          <p>
            CTR stands for Click-Through Rate. It's a metric used in digital
            marketing to measure the percentage of people who click on a
            specific link or call to action out of the total number who view it.
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="How is CTR calculated?">
          <p>
            CTR is calculated by dividing the number of clicks by the number of
            impressions and then multiplying by 100 to get a percentage.
            Formula: CTR = (Number of Clicks / Number of Impressions) × 100
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="Why is CTR important?">
          <p>
            CTR is important because it helps measure the effectiveness of your
            marketing campaigns, ads, or content. A higher CTR generally
            indicates that your message is relevant and appealing to your target
            audience.
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="What's considered a good CTR?">
          <p>
            A "good" CTR varies depending on the platform, industry, and type of
            campaign. However, here are some general benchmarks:
            <br />
            <ul className="list-disc pl-6 pt-2">
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
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="How can I improve my CTR?">
          <p>
            To improve your CTR, you can:

            <ol className="list-decimal pl-6 pt-2">
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
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="Does a high CTR always mean success?">
          <p>
            Not necessarily. While a high CTR is generally good, it's important
            to consider other metrics like conversion rate and overall ROI. A
            high CTR with low conversions might indicate that your ad is
            attractive but your landing page or offer needs improvement.
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="How does CTR affect Quality Score in Google Ads?">
          <p>
            CTR is a significant factor in determining your Quality Score in
            Google Ads. A higher CTR can lead to a better Quality Score, which
            in turn can result in lower costs and better ad positioning.
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="Is CTR relevant for SEO?">
          <p>
            While CTR isn't a direct ranking factor, it can indirectly affect
            SEO. A higher CTR from search results can indicate to search engines
            that your content is relevant and valuable, potentially leading to
            improved rankings over time.
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="How often should I monitor my CTR?">
          <p>
            It's good practice to monitor your CTR regularly, especially when
            running active campaigns. For ongoing campaigns, weekly or monthly
            reviews are common, but the frequency may vary based on your
            specific needs and the volume of data.
          </p>
        </comp.Details>
        <comp.Hr />
        <comp.Details summary="Can CTR be too high?">
          <p>
            While a high CTR is generally positive, an unusually high CTR might
            indicate click fraud or poorly targeted ads that are attracting the
            wrong audience. Always analyze CTR in conjunction with other metrics
            to get a complete picture of your campaign's performance.
          </p>
        </comp.Details>
      </section>
      <comp.FooterCta />
    </>
  );
}
