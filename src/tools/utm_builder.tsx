export const title =
  "Free UTM Builders - Easily generate UTM codes for your marketing campaigns in just a few clicks - Prisme Analytics";
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
      <main className="pt-16 px-4 sm:px-8 md:px-16 lg:px-32 mb-16 space-y-16">
        <section className="w-full">
          <div className="max-w-6xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center -mt-8">
            <img
              src="/logo.svg"
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
      </main>
      <comp.FooterCta />
    </div>
  );
}
