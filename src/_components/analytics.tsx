export default function ({ status = 200 }) {
  return (
    <>
      <script
        src="https://app.prismeanalytics.com/static/wa.js"
        data-prisme-verification-id="ffa804e3-4923-4789-b560-8f3215118c86"
        data-status={status}
        defer
      >
      </script>
      <script
        src="/docs/scroll-depth.js"
        defer
      >
      </script>
    </>
  );
}
