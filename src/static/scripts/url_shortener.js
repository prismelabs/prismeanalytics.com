document.addEventListener("DOMContentLoaded", () => {
  const shortUrl = document.querySelector("#short-url");
  const shortenBtn = document.querySelector("#shorten-btn");

  const confetti = new Confetti("shorten-btn");
  confetti.setCount(75);
  confetti.setSize(1);
  confetti.setPower(25);
  confetti.setFade(false);
  confetti.destroyTarget(false);

  shortenBtn.addEventListener("click", () => {
    shortUrl.value = "https://qtl.ink/4EmZBxe";
  });
});
