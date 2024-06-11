import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import { Options as MarkdownOptions } from "lume/plugins/markdown.ts";
import date from "lume/plugins/date.ts";
import inline from "lume/plugins/inline.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sass from "lume/plugins/sass.ts";
import sitemap from "lume/plugins/sitemap.ts";
import postcss from "lume/plugins/postcss.ts";
import transform_images from "lume/plugins/transform_images.ts";
import feed from "@/plugins/feed.ts";
import { full as markdownItEmoji } from "markdown-it-emoji";

const location = new URL("https://www.prismeanalytics.com");

// deno-lint-ignore no-explicit-any
const renderMd: (...args: any[]) => any = (tokens, idx, options, _env, self) =>
  self.renderToken(tokens, idx, options);

const markdown: Partial<MarkdownOptions> = {
  rules: {
    // Add a div container around table to enable overflow scrolling.
    table_open: (tokens, idx, options, env, self) => {
      return `<div class="table-container">${
        renderMd(
          tokens,
          idx,
          options,
          env,
          self,
        )
      }`;
    },
    table_close: (tokens, idx, options, env, self) => {
      return `${renderMd(tokens, idx, options, env, self)}</div>`;
    },
    // Add target="_blank" to external links:
    link_open: (tokens, idx, options, env, self) => {
      const hrefIndex = tokens[idx].attrIndex("href");
      const src: string = tokens[idx].attrs[hrefIndex][1] || "";

      const targetIndex = tokens[idx].attrIndex("target");

      if (src.startsWith("http") && !src.includes(location.toString())) {
        if (targetIndex < 0) {
          tokens[idx].attrPush(["target", "_blank"]); // add new attribute
        } else {
          tokens[idx].attrs[targetIndex][1] = "_blank"; // replace value of existing attr
        }
      }

      // pass token to default renderer.
      return renderMd(tokens, idx, options, env, self);
    },
    image: (tokens, idx, options, env, self) => {
      tokens[idx].attrPush(["transform-images", "png jpg webp avif 1600@2"]);

      return renderMd(tokens, idx, options, env, self);
    },
  },
  plugins: [markdownItEmoji],
};

const site = lume({
  src: "./src",
  location,
}, { markdown });

site.copy("static", "/");

site.use(date());
site.use(inline());
site.use(jsx_preact());
site.use(metas());
site.use(nav());
site.use(picture());
site.use(tailwindcss({
  extensions: [".html", ".svg"],
  options: {
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        fontFamily: {
          sans:
            'Inter var, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        },
      },
    },
  },
}));
site.use(sass());
site.use(sitemap());
site.use(postcss());
site.use(transform_images());

site.use(feed({
  query: "type=blogpost",
  info: {
    title: "=metas.site",
    description: "=metas.description",
  },
  items: {
    title: "=title",
    description: "=excerpt",
    published: "=date",
    lang: "=lang",
    image: "=metas.image",
  },
}));

site.use(multilanguage({ languages: ["en"], defaultLanguage: "en" }));

export default site;
