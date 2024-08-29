export default function ({ class: className }: { class: string }) {
  return <hr className={`border-muted ${className}`} />;
}
