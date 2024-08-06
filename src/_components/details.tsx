export interface DetailsData extends Lume.Data {
  summary: string;
}

export default function ({ summary, children }: DetailsData) {
  return (
    <details>
      <summary className="hover:cursor-pointer select-none">
        {summary}
      </summary>
      <div className="mt-4">
        {children}
      </div>
    </details>
  );
}
