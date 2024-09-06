import Anthropic from "npm:@anthropic-ai/sdk";
import { parseArgs } from "jsr:@std/cli/parse-args";
import { extract } from "jsr:@std/front-matter/any";
import { test } from "jsr:@std/front-matter/test";
import { extname } from "jsr:@std/path";

const extractFrontMatter = extract;
const hasFrontMatter = test;

const client = new Anthropic({
  apiKey: Deno.env.get("ANTHROPIC_API_KEY"),
});

const flags = parseArgs(Deno.args, {
  string: ["format", "author", "website"],
  default: {
    format: "json",
    author: "Alexandre Negrel https://www.negrel.dev",
    website: "https://www.prismeanalytics.com/",
    org: "Prisme Analytics",
  },
});

if (flags._.length !== 1) {
  throw new Error("no file specified");
}
const fpath = flags._[0];
const url = new URL(fpath.slice("/src".length), flags.website).href
  .slice(0, -(extname(fpath).length));
const fileContent = Deno.readTextFileSync(fpath);
const body = hasFrontMatter(fileContent)
  ? extractFrontMatter(fileContent).body
  : fileContent;

const wordsCount =
  [...new Intl.Segmenter(undefined, { granularity: "word" }).segment(
    body,
  )].length;
const sentencesCount =
  [...new Intl.Segmenter(undefined, { granularity: "sentence" }).segment(
    body,
  )]
    .length;

const message = await client.messages.create({
  max_tokens: 1024,
  system: `
Your task is to take website page source code or blog post content as input
and generate appropriate application/ld+json object in ${flags.format} format.
Blog posts author is always ${flags.author}, org is ${flags.org} and website is
${flags.website}. Today's date is ${new Date().toISOString()}. File has
${wordsCount} words and ${sentencesCount} sentences and will have ${url} as URL.
Generate only the object and omit surrounding script tag.`
    .replaceAll("\n", " "),
  messages: [
    { role: "user", content: fileContent },
  ],
  model: "claude-3-5-sonnet-20240620",
});

const encoder = new TextEncoder();
Deno.stdout.writeSync(encoder.encode(message.content[0].text));
