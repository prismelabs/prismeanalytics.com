document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const subjects = [
    "enterprises",
    "startups",
    "web apps",
    "web agencies",
    "hobby projects",
    "websites",
    "indie devs",
    "web artisans",
  ];
  const span = document.querySelector("span#perfect-for");
  setInterval(() => {
    index = (index + 1) % subjects.length;
    span.textContent = subjects[index];
  }, 2000);
});
