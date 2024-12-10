document.addEventListener("DOMContentLoaded", async () => {
  const origin = "https://app.prismeanalytics.com";
  // const origin = "http://localhost:8000";
  const formatNumber = (num) => {
    const units = [
      { value: 1e9, symbol: "B" },
      { value: 1e6, symbol: "M" },
      { value: 1e3, symbol: "K" },
    ];

    // Handle negative numbers
    const isNegative = num < 0;
    const absNum = Math.abs(num);

    // Find the appropriate unit
    const unit = units.find((unit) => absNum >= unit.value) ||
      { value: 1, symbol: "" };

    // Calculate the formatted value with 1 decimal place
    const formattedValue = (absNum / unit.value).toFixed(1);

    // Remove .0 if present
    const cleanValue = formattedValue.replace(/\.0$/, "");

    // Add negative sign if needed
    return `${isNegative ? "-" : ""}${cleanValue}${unit.symbol}`;
  };

  const statsSection = document.querySelector("#stats-section");

  const stats = await fetch(`${origin}/api/v1/stats`)
    .then((r) => r.json());
  console.log(stats);

  const pageviews = statsSection.querySelector("#stats-last-24h-pageviews");
  pageviews.textContent = formatNumber(stats.last24Hour.pageviews);

  const visitors = statsSection.querySelector("#stats-total-visitors");
  visitors.textContent = formatNumber(stats.allTime.visitors);

  const sessions = statsSection.querySelector("#stats-total-sessions");
  sessions.textContent = formatNumber(stats.allTime.sessions);

  statsSection.classList.remove("hidden");
});
