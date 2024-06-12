export const title = "Contact Us - Prisme Analytics";
export const layout = "layout.tsx";

export const metas = {
  title,
  description:
    "Contact Prisme Analytics team for support, privacy-related questions and more.",
  keywords: [
    "Contact form",
    "Prisme Cloud",
    "Analytics platform",
    "Data visualization",
    "Open-source analytics",
    "Prisme Analytics",
  ],
};

export default ({ comp }: Lume.Data) => {
  return (
    <main className="max-w-2xl w-full mx-auto px-4 sm:px-6 md:px-10 space-y-8 py-16">
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center">
        Contact us
      </h1>
      <p>
        Hi! We're happy to see you and want to ensure your experience using
        Prisme is excellent!
        <br />
        <br />
        Our <a href="/docs" className="underline">documentation</a>{" "}
        is the best place to find most answers right away. We put a lot of
        effort into making our docs detailed and up to date so you can quickly
        find answers to any question you might have.
      </p>
      <section>
        <p>
          If your questions remains unanswered, you can contact us at one of the
          following email address:
        </p>
        <ul className="pl-8 pt-2">
          <li>
            <a href="mailto:support@prismeanalytics.com" className="underline">
              support@prismeanalytics.com
            </a>{" "}
            for questions, troubleshoot about our cloud service
          </li>
          <li>
            <a href="mailto:privacy@prismeanalytics.com" className="underline">
              privacy@prismeanalytics.com
            </a>{" "}
            for privacy related questions
          </li>
          <li>
            <a href="mailto:hello@prismeanalytics.com" className="underline">
              hello@prismeanalytics.com
            </a>{" "}
            for anything else
          </li>
        </ul>
      </section>
      <comp.Hr />
      <details className="cursor-pointer text-sm select-none">
        <summary>Company details</summary>
        <ul className="mt-2 space-y-4 list-none">
          <li>
            <comp.Input
              label="VAT ID"
              readonly={true}
              value="FR698515581500019"
            />
          </li>
          <li>
            <comp.Input
              label="Company ID / SIREN"
              readonly={true}
              value="851 535 815"
            />
          </li>
          <li>
            <comp.Input
              label="Address"
              readonly={true}
              value="12 A AV DE LA GROGNARDE, 13011 MARSEILLE, FRANCE"
            />
          </li>
          <li>
            <a
              href="https://www.sirene.fr/sirene/public/accueil"
              className="underline"
              target="_blank"
            >
              sirene.fr listing
            </a>
          </li>
        </ul>
      </details>
    </main>
  );
};
