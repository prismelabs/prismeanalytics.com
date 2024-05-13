export const title = "Feedback - Prisme Analytics";
export const layout = "layout.tsx";

export default ({ comp }: Lume.Data) => {
  return (
    <main className="max-w-2xl w-full mx-auto px-4 sm:px-6 md:px-10 space-y-8 py-16">
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center">
        Feedback
      </h1>
      <p className="text-center">
        Thanks for taking the time to sending us a feedback! This really helps
        improving our product. Please adds as many details as needed so that we
        can understand your problems! 🌈△
      </p>
      <form class="mx-auto px-4 md:px-8" method="POST" data-netlify="true">
        <comp.Input
          type="textarea"
          label="Message"
          id="message"
          name="message"
          rows={12}
        >
        </comp.Input>
        <div className="mt-8">
          <comp.Button type="reset" class="mr-2" variant="outline">
            Cancel
          </comp.Button>
          <comp.Button type="submit" className="ml-4" primary={true}>
            Submit
          </comp.Button>
        </div>
      </form>
    </main>
  );
};
