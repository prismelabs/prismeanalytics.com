document.addEventListener("click", (event) => {
  const popovers = document.querySelectorAll(".popover");
  for (const p of popovers) {
    if (!p.contains(event.target)) {
      p.open = false;
    }
  }
});
