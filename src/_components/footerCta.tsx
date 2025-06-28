export default function ({ comp }: Lume.Data) {
  return (
    <section className="w-full h-72 relative z-20">
      <img
        alt="web analytics dashboard screenshot in dark mode"
        loading="lazy"
        src="/images/web-analytics-dashboard-dark.jpg"
        className="mx-auto w-full h-72 brightness-50 object-cover object-center absolute"
        transform-images="jpg png avif webp"
      />
      <h2 className="w-full text-3xl text-center font-bold text-white absolute top-20 z-10">
        Ready to switch to Prisme?
      </h2>
      <div className="w-full flex justify-center space-x-8 absolute bottom-20">
        <a href="https://app.prismeanalytics.com/authn/sign_up">
          <comp.Button variant="outline">
            Create free account
          </comp.Button>
        </a>
        <a href="https://app.prismeanalytics.com/grafana/d/eegq2vj9n7bb4c/web-analytics?orgId=5&kiosk=&from=now-7d&to=now&timezone=browser">
          <comp.Button variant="outline">
            Live demo
          </comp.Button>
        </a>
      </div>
    </section>
  );
}
