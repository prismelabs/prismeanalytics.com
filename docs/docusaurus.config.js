// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Prisme Analytics",
  favicon: "img/logo.jpg",

  // Set the production url of your site here
  url: "https://www.prismeanalytics.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",
  trailingSlash: true,

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
      src: "https://app.prismeanalytics.com/static/wa.js",
      defer: true,
    },
    "/docs/scroll-depth.js",
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: "0.20",
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
          src: "img/logo.jpg",
          srcDark: "img/logo.jpg",
          href: "https://www.prismeanalytics.com/",
          target: "_self",
        },
        items: [
          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
          },
          // { to: "/docs/", label: "Docs", position: "left" },
          // { to: "/docs/cloud", label: "Cloud", position: "left" },
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
              {
                label: "Guides",
                to: "/docs/guides/overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "X / Twitter",
                href: "https://x.com/prismeanalytics",
              },
              {
                label: "GitHub",
                href: "https://github.com/prismelabs/analytics",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/prisme-analytics/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Prisme Analytics`,
      },
      prism: {
        additionalLanguages: ["nix", "bash"],
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

  plugins: [],
};

export default config;
