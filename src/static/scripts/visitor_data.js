document.addEventListener("DOMContentLoaded", async () => {
  const countryName = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius, Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the)",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands, Kingdom of the",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Macedonia",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Réunion",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Helena, Ascension Island, Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard, Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic (the)",
    "Taiwan (Province of China)",
    "Tajikistan",
    "Tanzania, the United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Türkiye",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Unknown",
  ];
  const countryCode = [
    "AF",
    "AX",
    "AL",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BY",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BT",
    "BO",
    "BQ",
    "BA",
    "BW",
    "BV",
    "BR",
    "IO",
    "BN",
    "BG",
    "BF",
    "BI",
    "CV",
    "KH",
    "CM",
    "CA",
    "KY",
    "CF",
    "TD",
    "CL",
    "CN",
    "CX",
    "CC",
    "CO",
    "KM",
    "CD",
    "CG",
    "CK",
    "CR",
    "CI",
    "HR",
    "CU",
    "CW",
    "CY",
    "CZ",
    "DK",
    "DJ",
    "DM",
    "DO",
    "EC",
    "EG",
    "SV",
    "GQ",
    "ER",
    "EE",
    "SZ",
    "ET",
    "FK",
    "FO",
    "FJ",
    "FI",
    "FR",
    "GF",
    "PF",
    "TF",
    "GA",
    "GM",
    "GE",
    "DE",
    "GH",
    "GI",
    "GR",
    "GL",
    "GD",
    "GP",
    "GU",
    "GT",
    "GG",
    "GN",
    "GW",
    "GY",
    "HT",
    "HM",
    "VA",
    "HN",
    "HK",
    "HU",
    "IS",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IM",
    "IL",
    "IT",
    "JM",
    "JP",
    "JE",
    "JO",
    "KZ",
    "KE",
    "KI",
    "KP",
    "KR",
    "KW",
    "KG",
    "LA",
    "LV",
    "LB",
    "LS",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MO",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MH",
    "MQ",
    "MR",
    "MU",
    "YT",
    "MX",
    "FM",
    "MD",
    "MC",
    "MN",
    "ME",
    "MS",
    "MA",
    "MZ",
    "MM",
    "NA",
    "NR",
    "NP",
    "NL",
    "NC",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NU",
    "NF",
    "MK",
    "MP",
    "NO",
    "OM",
    "PK",
    "PW",
    "PS",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PN",
    "PL",
    "PT",
    "PR",
    "QA",
    "RE",
    "RO",
    "RU",
    "RW",
    "BL",
    "SH",
    "KN",
    "LC",
    "MF",
    "PM",
    "VC",
    "WS",
    "SM",
    "ST",
    "SA",
    "SN",
    "RS",
    "SC",
    "SL",
    "SG",
    "SX",
    "SK",
    "SI",
    "SB",
    "SO",
    "ZA",
    "GS",
    "SS",
    "ES",
    "LK",
    "SD",
    "SR",
    "SJ",
    "SE",
    "CH",
    "SY",
    "TW",
    "TJ",
    "TZ",
    "TH",
    "TL",
    "TG",
    "TK",
    "TO",
    "TT",
    "TN",
    "TR",
    "TM",
    "TC",
    "TV",
    "UG",
    "UA",
    "AE",
    "GB",
    "UM",
    "US",
    "UY",
    "UZ",
    "VU",
    "VE",
    "VN",
    "VG",
    "VI",
    "WF",
    "EH",
    "YE",
    "ZM",
    "ZW",
    "XX",
  ];

  function countryCode2Name(code) {
    return countryName[countryCode.indexOf(code)];
  }

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

  const visitorData = document.querySelector("#visitor-data");
  const visitorDataP = document.querySelector("#visitor-data-p");
  const sessionsBreakdown = document.querySelector("#sessions-breakdown");

  const prismeUrl = "https://app.prismeanalytics.com";

  // const resp = await fetch(`${prismeUrl}/api/v1/visitors/@this`);
  // const visitor = await resp.json();
  const visitor = {
    "Sessions": [{
      "SessionUuid": "0191e68c-30a1-74b6-b6bb-c28da8e3f854",
      "Timestamp": "2024-09-12T14:03:52.865Z",
      "ReferrerDomain": "",
      "OperatingSystem": "Linux",
      "BrowserFamily": "Firefox",
      "Device": "Other",
      "CountryCode": "FR",
      "UtmParams": {
        "Source": "",
        "Medium": "",
        "Campaign": "",
        "Term": "",
        "Content": "",
      },
      "Pageviews": [{ "Timestamp": "2024-09-12T14:03:52Z", "Path": "/" }, {
        "Timestamp": "2024-09-12T14:04:44Z",
        "Path": "/tools/visitor_data/",
      }],
    }, {
      "SessionUuid": "0191e68c-30a1-74b6-b6bb-c28da8e3f854",
      "Timestamp": "2024-09-12T14:03:52.865Z",
      "ReferrerDomain": "facebook.com",
      "OperatingSystem": "Linux",
      "BrowserFamily": "Firefox",
      "Device": "Other",
      "CountryCode": "FR",
      "UtmParams": {
        "Source": "",
        "Medium": "",
        "Campaign": "",
        "Term": "",
        "Content": "",
      },
      "Pageviews": [
        { "Timestamp": "2024-09-12T14:03:52Z", "Path": "/" },
        {
          "Timestamp": "2024-09-12T14:04:44Z",
          "Path": "/tools/visitor_data/",
        },
        { "Timestamp": "2024-09-12T14:05:52Z", "Path": "/" },
      ],
    }],
  };

  const sessions = visitor.Sessions;
  sessions.forEach((session) => {
    session.Pageviews = session.Pageviews.sort((a, b) =>
      new Date(a.Timestamp) - new Date(b.Timestamp)
    );
  });
  console.log(sessions);

  if (sessions.length === 0) {
    visitorData.classList.add("hidden");
    return;
  }
  visitorData.classList.remove("hidden");

  // Nth visit.
  {
    const span = document.querySelector("#nth-visit");
    span.innerText = sessions.length.toString() +
      ordinalSuffix(sessions.length);
  }

  const currentSession = sessions[sessions.length - 1];

  // Browser
  {
    const container = document.querySelector("#device-browser");
    const span = document.querySelector("#browser");

    if (currentSession.BrowserFamily !== "Other") {
      span.innerText = currentSession.BrowserFamily;
      container.classList.remove("hidden");
    }
  }

  // OS
  {
    const container = document.querySelector("#device-os");
    const span = document.querySelector("#os");

    if (currentSession.OperatingSystem !== "Other") {
      span.innerText = currentSession.OperatingSystem;
      container.classList.remove("hidden");
    }
  }

  // Device name
  {
    const container = document.querySelector("#device-name");
    const span = document.querySelector("#device");

    if (currentSession.Device !== "Other") {
      span.innerText = currentSession.Device;
      container.classList.remove("hidden");
    }
  }

  // Location
  {
    const container = document.querySelector("#location");
    const span = document.querySelector("#country");

    if (currentSession.CountryCode !== "XX") {
      container.classList.remove("hidden");
      span.innerText = countryCode2Name(currentSession.CountryCode);
    }
  }

  // Arrived at.
  {
    const span = document.querySelector("#arrived-at");
    const date = new Date(currentSession.Pageviews[0].Timestamp);
    span.innerText = date.toLocaleTimeString();
  }

  // Source.
  {
    const container = document.querySelector("#from");
    const span = document.querySelector("#source");

    const utmSource = currentSession.UtmParams.Source;
    const referrer = currentSession.ReferrerDomain;
    const source = utmSource !== "" ? utmSource : referrer;
    const sourceKind = source === utmSource ? "UTM source" : "referrer";

    if (source !== "") {
      span.innerText = `${source} (${sourceKind})`;
      container.classList.remove("hidden");
    }
  }

  // time on page
  {
    const container = document.querySelector("#time-on-page");
    const avgSpan = document.querySelector("#avg-time-on-page");
    const mostSpan = document.querySelector("#most-time-on-page");

    const avgDateInterval = (dates) =>
      dates.length < 2
        ? 0
        : dates.slice(1).reduce((sum, date, i) => sum + (date - dates[i]), 0) /
          (dates.length - 1);

    const maxDateDiffIndex = (dates) =>
      dates.length < 2 ? 0 : dates.reduce((acc, date, i) => {
        const nextDate = dates[i + 1] ?? date;
        const diff = nextDate - date;
        if (diff > acc.diff) return { i, diff };
        return acc;
      }, { i: 0, diff: 0 }).i;

    const pageviewsDate = currentSession.Pageviews.map((pv) =>
      new Date(pv.Timestamp)
    );
    const avgTimeOnPage = avgDateInterval(pageviewsDate);

    if (currentSession.Pageviews.length > 1) {
      container.classList.remove("hidden");
      avgSpan.innerText = formatDuration(avgTimeOnPage / 1000);

      const i = maxDateDiffIndex(pageviewsDate);
      console.log(pageviewsDate, i);
      const path = currentSession.Pageviews[i].Path;
      mostSpan.innerText = path === globalThis.location.pathname
        ? "this page"
        : path;
    }
  }
});
