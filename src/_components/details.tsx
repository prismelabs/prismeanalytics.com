export interface AccordionData extends Lume.Data {
  summary: string;
}

export default function ({ summary, children }: AccordionData) {
  return (
    <details>
      <summary className="hover:underline hover:cursor-pointer select-none text-lg font-bold">
        {summary}
      </summary>
      <div className="mt-4">
        {children}
      </div>
    </details>
  );
}
