document.addEventListener("DOMContentLoaded", () => {
  if (!globalThis.prisme) return;

  (() => {
    const measureScrollDepth = () => {
      const scrollEl = document.scrollingElement;
      const scrollTopMax = scrollEl.scrollHeight - scrollEl.clientHeight;
      return Math.round((scrollEl.scrollTop / scrollTopMax) * 100);
    };

    // Keep track of max scroll depth.
    let maxDepthY = 0;

    // Update variable each time user stop scrolling (or change scroll direction).
    globalThis.addEventListener("scrollend", () => {
      maxDepthY = Math.max(maxDepthY, measureScrollDepth());
    });

    // Send event when page is unloaded (e.g. user navigate to another page).
    const sendScrollDepthEvent = () => {
      // Another event already sent the event.
      if (maxDepthY === -1) return;

      globalThis.prisme.trigger(
        "scroll-depth",
        { depthY: maxDepthY },
      );

      // Prevent other handler to send the event.
      maxDepthY = -1;
    };

    // User navigate to other page.
    globalThis.addEventListener(
      "pagehide",
      sendScrollDepthEvent,
      { capture: true },
    );
    globalThis.addEventListener("beforeunload", sendScrollDepthEvent);

    // Single Page Applications use history API.
    if (globalThis.history) {
      // There is no pushstate event so we replace pushState with our function
      // forwards its call to original function.
      const pushState = globalThis.history.pushState;
      window.history.pushState = function () {
        pushState.apply(globalThis.history, arguments);
        sendScrollDepthEvent();
      };
    }
  })();
});
