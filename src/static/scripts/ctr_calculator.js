document.addEventListener("DOMContentLoaded", () => {
  const ctrImpressions = document.querySelector("#impressions");
  const ctrClicks = document.querySelector("#clicks");
  const ctrResult = document.querySelector("#ctr-result");
  const ctrChannelResult = document.querySelector("#ctr-channel-result");
  const channels = [
    document.querySelector("#channel-display"),
    document.querySelector("#channel-paid-search"),
    document.querySelector("#channel-paid-social"),
    document.querySelector("#channel-organic-search"),
    document.querySelector("#channel-organic-social"),
  ];

  const avgChannelsCtr = {
    display: 0.27,
    "paid-search": 2.29,
    "paid-social": 0.87,
    "organic-search": 1.63,
    "organic-social": 1.43,
  };

  const onInput = () => {
    const impressions = ctrImpressions.value ?? 0;
    const clicks = ctrClicks.value ?? 0;

    const ctr = clicks / impressions * 100;
    if (!Number.isNaN(ctr)) {
      ctrResult.value = `${ctr.toFixed(2)}%`;
    } else {
      ctrResult.value = "";
    }

    const selectedChannel = channels.find((ch) => ch.checked);
    if (selectedChannel) {
      const avgCtr = avgChannelsCtr[selectedChannel.value];
      const diff = Math.abs(ctr - avgCtr);

      if (ctr > avgCtr) {
        ctrChannelResult.innerText =
          `This is above the average for the selected channel.` +
          ` The average CTR for this channel is ${
            avgCtr.toFixed(2)
          }%, a difference of ${diff.toFixed(2)}%.`;
      } else if (ctr < avgCtr) {
        ctrChannelResult.innerText =
          `This is below the average for the selected channel.` +
          ` The average CTR for this channel is ${
            avgCtr.toFixed(2)
          }%, a difference of ${diff.toFixed(2)}%.`;
      } else {
        ctrChannelResult.innerText =
          `This is the average for the selected channel. The average CTR for this channel is ${
            avgCtr.toFixed(2)
          }%`;
      }
    }
  };

  for (const el of [ctrImpressions, ctrClicks, ...channels]) {
    el.addEventListener("input", onInput);
  }
  onInput();

  const copyBtn = document.querySelector("#ctr-copy-btn");
  copyBtn.addEventListener("click", (event) => {
    navigator.clipboard.writeText(utmResult.value);
    event.target.innerText = "Copied!";
    setTimeout(() => {
      event.target.innerText = "Copy";
    }, 1000);
  });
});
