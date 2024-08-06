export default function () {
  return (
    <div class="inline-block peer h-4 w-4 shrink-0 rounded-sm border border-grafana-blue ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-grafana-blue text-primary-foreground">
      <span
        class="flex items-center justify-center text-current"
        style="pointer-events: none;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-check h-4 w-4"
        >
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      </span>
    </div>
  );
}
