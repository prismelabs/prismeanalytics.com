document.addEventListener("DOMContentLoaded", () => {
  const destinationUrl = document.querySelector("#destination-url");
  const utmSource = document.querySelector("#utm-source");
  const utmMedium = document.querySelector("#utm-medium");
  const utmCampaign = document.querySelector("#utm-campaign");
  const utmTerm = document.querySelector("#utm-term");
  const utmContent = document.querySelector("#utm-content");

  const utmResult = document.querySelector("#utm-result");

  const onInput = () => {
    console.log(destinationUrl.value);

    let url;
    try {
      url = new URL(destinationUrl.value);
    } catch {
      utmResult.value = "Invalid destination URL.";
      return;
    }

    if (utmSource.value !== "") {
      url.searchParams.append("utm_source", utmSource.value);
    }
    if (utmMedium.value !== "") {
      url.searchParams.append("utm_medium", utmMedium.value);
    }
    if (utmCampaign.value !== "") {
      url.searchParams.append("utm_campaign", utmCampaign.value);
    }
    if (utmTerm.value !== "") {
      url.searchParams.append("utm_term", utmTerm.value);
    }
    if (utmContent.value !== "") {
      url.searchParams.append("utm_content", utmContent.value);
    }

    utmResult.value = url.toString();
  };

  for (
    const el of [
      destinationUrl,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
    ]
  ) {
    el.addEventListener("input", onInput);
  }

  const copyBtn = document.querySelector("#utm-copy-btn");
  copyBtn.addEventListener("click", (event) => {
    navigator.clipboard.writeText(utmResult.value);
    event.target.innerText = "Copied!";
    setTimeout(() => {
      event.target.innerText = "Copy";
    }, 1000);
  });
});

