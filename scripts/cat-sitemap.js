#!/usr/bin/env -S deno run --allow-read

import * as XML from "https://deno.land/x/xml@2.1.3/mod.ts";

const siteMaps = await Promise.all(
  Deno.args.map((arg) =>
    Deno.readTextFile(arg)
      .then((sitemap) => XML.parse(sitemap))
      .then((sitemap) => {
        if (sitemap.xml && typeof sitemap.xml["@version"] === "number") {
          sitemap.xml["@version"] = sitemap.xml["@version"].toFixed(1);
        }
        return sitemap;
      })
  ),
);

// No sitemap to merge.
if (siteMaps.length === 0) {
  console.error("no sitemap provided");
  Deno.exit(1);
} else if (siteMaps.length === 1) {
  console.log(XML.stringify(siteMaps[0]));
  Deno.exit(0);
}

const result = siteMaps[0];

for (const sitemap of siteMaps.slice(1)) {
  result.urlset.url.push(...sitemap.urlset.url);
}

console.log(XML.stringify(result));
