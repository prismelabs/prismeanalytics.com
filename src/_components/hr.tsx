export default function ({ class: className }: { class: string }) {
  return <hr className={`dark:border-zinc-600 ${className}`} />;
}
