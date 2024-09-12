export const title = "A Free, Easy-to-use URL Shortener";
export const layout = "layout.tsx";
export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is CuteLink really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CuteLink is completely free to use.",
        },
      },
      {
        "@type": "Question",
        "name": "Are there any limits on how many links I can shorten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you can shorten as many links as you like.",
        },
      },
      {
        "@type": "Question",
        "name": "Do the shortened links expire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, once created, your short links will work indefinitely.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I customize the shortened URLs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Not at the moment. CuteLink generates random short codes for each URL.",
        },
      },
      {
        "@type": "Question",
        "name": "Is there any way to track clicks on my shortened links?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, adds UTM parameters to your long URL and they will appear on your web analytics dashboard.",
        },
      },
      {
        "@type": "Question",
        "name": "Are the shortened links secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "CuteLink uses HTTPS for all shortened links to ensure basic security.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I edit or delete a link after I've created it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No, once a link is created, it can't be edited or deleted. Please double-check your long URL before shortening.",
        },
      },
      {
        "@type": "Question",
        "name": "Do I need to create an account to use CuteLink?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes an account is needed to prevent abusive usage. Just paste your long URL and get your short link instantly.",
        },
      },
    ],
  },
];

export const metas = {
  title:
    "Free URL shortener – Easily generate short URL for your marketing campaigns",
  description:
    "CuteLink turns long web addresses into short, easy-to-share links. Paste in a long URL, get a compact link that's simple to remember and share.",
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
    <>
      <script src="/scripts/alert_dialog.js" defer></script>
      {/* Background */}
      <div
        id="alert-dialog-bg"
        data-state="closed"
        class="fixed inset-0 z-50 bg-black/80 data-[state=closed]:hidden data-[state=closed]:block"
        style="pointer-events: auto;"
        data-aria-hidden="true"
        aria-hidden="true"
      >
      </div>

      {/* Alert dialog element */}
      <div
        id="alert-dialog"
        data-state="closed"
        class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg data-[state=closed]:hidden data-[state=closed]:block sm:rounded-lg"
        tabindex={-1}
        style="pointer-events: auto;"
      >
      </div>
      <div id="demoDialog" class="hidden">
        <div class="flex flex-col space-y-2 text-center sm:text-left">
          <h2 class="text-lg font-semibold">Demo</h2>
          <p class="text-sm text-muted-foreground">
            This page is a limited demo, create a free Prisme account (no
            subscription needed) to generate custom short links.
          </p>
        </div>
        <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4">
          <comp.Button variant="ghost" onClick="closeAlertDialog()">
            Cancel
          </comp.Button>
          <comp.Button>
            <a href="https://app.prismeanalytics.com/authn/sign_up?utm_source=prisme&utm_medium=tools&utm_campaign=cutelink&utm_content=dialog">
              Sign Up
            </a>
          </comp.Button>
        </div>
      </div>

      <main className="pt-16 pb-8 px-4 sm:px-8 md:px-16 lg:px-32 space-y-16">
        <section className="w-full">
          <div className="max-w-4xl mx-auto gap-4 md:gap-8 px-4 sm:px-6 md:px-10 flex flex-col justify-center text-center -mt-8">
            <div className="flex items-center justify-center gap-4 md:gap-8 my-4">
              <img
                src="/logo.svg"
                alt="Prisme Analytics logo"
                className="aspect-square h-auto max-w-24 md:max-w-32"
              />
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              Free URL shortener
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Prisme integrates{" "}
              <a
                target="_blank"
                href="https://github.com/negrel/cutelink"
                className="underline text-foreground"
              >
                CuteLink 😊
              </a>, an homemade powerful URL shortener, to turn long web
              addresses into short, easy-to-share links. Paste in a long URL,
              get a compact link that's simple to remember and share.
              <br />
              Powered by{" "}
              <a href="/" className="underline text-foreground">
                Prisme Analytics
              </a>.
            </p>
          </div>
        </section>
        <section className="space-y-8 mb-8 max-w-2xl mx-auto">
          <h2 className="font-bold text-2xl text-center">
            Turn long URLs into short URLs
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="flex-grow">
              <comp.Input
                id="long-url"
                label="Long URL"
                value="https://www.prismeanalytics.com/?ref=cutelink"
              />
            </div>
            <div>
              <p>&nbsp;</p>
              <p>→</p>
            </div>
            <div className="flex-grow">
              <comp.Input
                id="short-url"
                readonly={true}
                label="😊 Short URL"
                value=""
              />
            </div>
          </div>
          <comp.Button id="shorten-btn" className="w-full">
            🪄 Shorten URL 🪄
          </comp.Button>
        </section>
        <div>
          <comp.Hr className="px-4 mt-16 w-full max-w-2xl mx-auto" />
          <section className="max-w-2xl mx-auto w-full space-y-6 divide-y divide-muted">
            {[{
              "question": "Is CuteLink really free?",
              "answer": "Yes, CuteLink is completely free to use.",
            }, {
              "question":
                "Are there any limits on how many links I can shorten?",
              "answer": "No, you can shorten as many links as you like.",
            }, {
              "question": "Do the shortened links expire?",
              "answer":
                "No, once created, your short links will work indefinitely.",
            }, {
              "question": "Can I customize the shortened URLs?",
              "answer":
                "Not at the moment. CuteLink generates random short codes for each URL.",
            }, {
              "question":
                "Is there any way to track clicks on my shortened links?",
              "answer": (
                <>
                  Yes, adds{" "}
                  <a
                    href="/tools/utm_builder"
                    className="underline font-medium"
                  >
                    UTM parameters
                  </a>{" "}
                  to your long URL and they will appear on your web analytics
                  dashboard.
                </>
              ),
            }, {
              "question": "Are the shortened links secure?",
              "answer":
                "CuteLink uses HTTPS for all shortened links to ensure basic security.",
            }, {
              "question": "Can I edit or delete a link after I've created it?",
              "answer":
                "No, once a link is created, it can't be edited or deleted. Please double-check your long URL before shortening.",
            }, {
              "question": "Do I need to create an account to use CuteLink?",
              "answer":
                "Yes an account is needed to prevent abusive usage. Just paste your long URL and get your short link instantly.",
            }].map(({ question, answer }) => (
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
      <script src="/scripts/confetti.min.js"></script>
      <script src="/scripts/url_shortener.js"></script>
    </>
  );
}
