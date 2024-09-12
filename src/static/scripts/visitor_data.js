document.addEventListener("DOMContentLoaded", async () => {
  const visitorDataP = document.querySelector("#visitor-data");
  const sessionsBreakdown = document.querySelector("#sessions-breakdown");

  const prismeUrl = "https://app.prismeanalytics.com";

  const resp = await fetch(`${prismeUrl}/api/v1/visitors/@this`);
  const visitor = await resp.json();

  const sessions = visitor.Sessions;

  function ordinalSuffix(n) {
    switch (n % 10) {
      case 1:
        if (n !== 11) {
          return "st";
        }
        /* fall through */
      case 2:
        if (n !== 21) {
          return "nd";
        }
        /* fall through */
      case 3:
        if (n !== 13) {
          return "rd";
        }
        /* fall through */
      default:
        return "th";
    }
  }

  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const parts = [];

    if (hours > 0) {
      parts.push(`${hours}h`);
    }
    if (minutes > 0) {
      parts.push(`${minutes}m`);
    }
    if (remainingSeconds > 0 || parts.length === 0) {
      parts.push(`${remainingSeconds}s`);
    }

    return parts.join("");
  }

  if (sessions.length === 0) return;

  // Sub title.
  {
    const {
      OperatingSystem: operatingSystem,
      BrowserFamily: browser,
      Device: device,
    } = sessions[0];

    const b = browser !== "Other" ? browser : "an unknown browser";
    const os = operatingSystem !== "Other"
      ? operatingSystem
      : "an unknown operating system";
    const d = device !== "Other" ? `your ${device}` : "an unknown device";
    const nth = { 1: "first", 2: "second", 3: "third" }[sessions.length] ??
      `${sessions.length}${ordinalSuffix(sessions.length)}`;

    visitorDataP.textContent =
      `Your visiting this website for the ${nth} time today using ${b} on ${os}, with ${d}.`;
  }

  // Breakdown sessions.
  for (let i = 0; i < sessions.length; i++) {
    const nth = { 1: "First", 2: "Second", 3: "Third" }[i + 1] ??
      `${i + 1}${ordinalSuffix(i + 1)}`;

    const session = sessions[i];

    const li = document.createElement("li");
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const ul = document.createElement("ul");
    li.className = "pt-6";
    ul.className = "list-none";
    summary.className = "hover:cursor-pointer select-none";
    details.style.width = "100%";
    details.style.textAlign = "left";
    details.appendChild(summary);
    details.appendChild(ul);
    li.appendChild(details);

    const date = new Date(session.Timestamp);
    const source = session.UtmParams.Source !== ""
      ? session.UtmParams.Source
      : session.ReferrerDomain !== ""
      ? session.ReferrerDomain
      : "an unknown source";

    summary.innerText =
      `${nth} session started at ${date.toLocaleTimeString()} via ${source}`;

    for (let i = 0; i < session.Pageviews.length; i++) {
      const pv = session.Pageviews[i];
      const next = session.Pageviews[i + 1];
      const date = new Date(pv.Timestamp);
      const timeOnPage = (new Date(next?.Timestamp) - date) / 1000;
      const timeOnPageStr = !Number.isNaN(timeOnPage)
        ? `(${formatDuration(timeOnPage)})`
        : "";

      const innerLi = document.createElement("li");
      const a = document.createElement("a");
      a.href = pv.Path;
      a.innerText = `${pv.Path} ${date.toLocaleTimeString()} ${timeOnPageStr}`;
      innerLi.appendChild(a);
      innerLi.className = "mt-4";
      ul.appendChild(innerLi);
    }

    sessionsBreakdown.appendChild(li);
  }
});
