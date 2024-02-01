// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prisme Analytics",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://prismeanalytics.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "prismelabs", // Usually your GitHub org/user name.
  projectName: "prismeanalytics.com", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  scripts: [
    "/docs/theme.js",
    {
      src: "https://prisme.negrel.dev/static/m.js",
      "data-prisme-domain": "prisme.negrel.dev",
      async: true,
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/og.png",
      navbar: {
        title: "Prisme Analytics",
        logo: {
          alt: "Prisme Analytics Logo",
          src: "img/logo.svg",
          srcDark: "img/logo.svg",
          href: "https://prismeanalytics.com/",
        },
        items: [
          {
            href: "https://github.com/prismelabs/analytics",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/docs/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/prismeanalytics",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/prismelabs/analytics",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Prisme Analytics`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    [
      "client-redirects",
      {
        fromExtensions: ["html"],
        createRedirects(routePath) {
          // Redirect to /docs from /docs/introduction (now docs root doc)
          if (routePath === "/docs" || routePath === "/docs/") {
            return [`${routePath}/introduction`];
          }
          return [];
        },
      },
    ],
  ],
};

export default config;
