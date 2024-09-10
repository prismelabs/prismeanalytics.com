document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector("#alert-dialog-bg");
  const alertDialog = document.querySelector("#alert-dialog");

  window.alertDialog = function (elementSelector) {
    // Clear children.
    alertDialog.textContent = "";

    let el = document.querySelector(elementSelector);
    if (!el) return;
    el = el.cloneNode(true);

    alertDialog.appendChild(el);
    el.className = "block";

    alertDialog.dataset.state = "open";
    background.dataset.state = "open";
  };

  window.closeAlertDialog = function () {
    alertDialog.dataset.state = "closed";
    background.dataset.state = "closed";
  };
});
