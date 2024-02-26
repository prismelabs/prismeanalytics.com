import lume from "lume/mod.ts";
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
import feed from "lume/plugins/feed.ts";

const location = new URL("https://prismeanalytics.com");

const site = lume({
  src: "./src",
  location,
});

site.copy("static", "/");

site.use(date());
site.use(inline());
site.use(jsx_preact());
site.use(metas());
site.use(nav());
site.use(picture());
site.use(tailwindcss({
  options: {
    theme: {
      extend: {
        fontFamily: {
          sans: [
            "Inter var",
            "ui-sans-serif",
            "system-ui",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji",
          ],
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
  query: "type=post",
  info: {
    title: "=site.title",
    description: "=site.description",
  },
  items: {
    title: "=title",
    description: "=excerpt",
  },
}));

export default site;
