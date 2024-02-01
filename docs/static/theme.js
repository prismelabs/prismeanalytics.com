window.matchMedia("(prefers-color-scheme: dark)").addEventListener(
  "change",
  (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    document.querySelector("html").dataset.theme = newColorScheme;
  },
);

document.addEventListener("DOMContentLoaded", () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.querySelector("html").dataset.theme = "dark";
  }
});
