document.addEventListener("DOMContentLoaded", () => {
  const longUrl = document.querySelector("#long-url");
  const shortUrl = document.querySelector("#short-url");
  const shortenBtn = document.querySelector("#shorten-btn");

  shortenBtn.addEventListener("click", (ev) => {
    if (longUrl.value !== "https://www.prismeanalytics.com/?ref=cutelink") {
      globalThis.alertDialog("#demoDialog");
      shortUrl.value = "";
      ev.stopImmediatePropagation(); // No confetti.
      return;
    }

    shortUrl.value = "https://qtl.ink/4EmZBxe";
  });

  const confetti = new Confetti("shorten-btn");
  confetti.setCount(75);
  confetti.setSize(1);
  confetti.setPower(25);
  confetti.setFade(false);
  confetti.destroyTarget(false);
});
