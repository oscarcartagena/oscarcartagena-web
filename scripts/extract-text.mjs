import fs from "node:fs";

const pages = JSON.parse(fs.readFileSync("content/pages.json", "utf8"));
const conf = pages.find((p) => p.slug === "conferences");
const text = conf.content
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&#8217;/g, "'")
  .replace(/&#8220;/g, '"')
  .replace(/&#8221;/g, '"')
  .replace(/\s+/g, " ")
  .trim();
fs.writeFileSync("content/conferences-text.txt", text);

const contact = pages.find((p) => p.slug === "contact-me");
fs.writeFileSync("content/contact-html.txt", contact.content);

const home = pages.find((p) => p.slug === "home-english");
fs.writeFileSync(
  "content/home-text.txt",
  home.content
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim(),
);

console.log("conferences chars", text.length);
console.log("wrote txt files");
