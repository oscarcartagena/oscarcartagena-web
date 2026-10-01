import fs from "node:fs";
import path from "node:path";

const BASE = "https://oscarcartagena.com";
const root = path.resolve(import.meta.dirname, "..");
const contentDir = path.join(root, "content");
const imgDir = path.join(root, "public", "images");

fs.mkdirSync(contentDir, { recursive: true });
fs.mkdirSync(imgDir, { recursive: true });

async function fetchAll(endpoint) {
  const items = [];
  let page = 1;
  while (true) {
    const url = `${BASE}/wp-json/wp/v2/${endpoint}?per_page=100&page=${page}`;
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 400) break;
      throw new Error(`${url} ${res.status}`);
    }
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;
    items.push(...data);
    const total = Number(res.headers.get("X-WP-TotalPages") || 1);
    if (page >= total) break;
    page += 1;
  }
  return items;
}

async function download(url, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return dest;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn("skip", url, res.status);
      return null;
    }
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    return dest;
  } catch (err) {
    console.warn("fail", url, err.message);
    return null;
  }
}

function localizeWpUrl(url) {
  try {
    const u = new URL(url);
    if (!u.hostname.includes("oscarcartagena.com")) return url;
    const rel = u.pathname.replace(/^\/wp-content\/uploads\//, "");
    return `/images/${rel}`;
  } catch {
    return url;
  }
}

function rewriteHtml(html) {
  if (!html) return "";
  return html
    .replaceAll("https://oscarcartagena.com/wp-content/uploads/", "/images/")
    .replaceAll("http://oscarcartagena.com/wp-content/uploads/", "/images/")
    .replaceAll("https://oscarcartagena.com", "")
    .replaceAll("http://oscarcartagena.com", "");
}

function slimPost(p) {
  const link = new URL(p.link);
  return {
    id: p.id,
    slug: p.slug,
    date: p.date,
    linkPath: link.pathname.replace(/\/$/, "") || "/",
    title: p.title?.rendered || "",
    excerpt: (p.excerpt?.rendered || "").replace(/<[^>]+>/g, "").trim(),
    content: rewriteHtml(p.content?.rendered || ""),
    featuredMedia: p.featured_media,
    categories: p.categories || [],
    featuredImage: null,
  };
}

function slimPage(p) {
  const link = new URL(p.link);
  return {
    id: p.id,
    slug: p.slug,
    linkPath: link.pathname.replace(/\/$/, "") || "/",
    title: p.title?.rendered || "",
    content: rewriteHtml(p.content?.rendered || ""),
    featuredMedia: p.featured_media,
  };
}

const extraImages = [
  "/wp-content/uploads/2021/03/cropped-logo-oc-1.png",
  "/wp-content/uploads/2024/09/oscarsign.png",
  "/wp-content/uploads/2019/08/oscarsignw.png",
  "/wp-content/uploads/2024/03/congreso-futuro-charla-oscar.png",
  "/wp-content/uploads/2023/09/xrsi-logo.png",
  "/wp-content/uploads/2023/09/wotf.png",
  "/wp-content/uploads/2023/10/lianm-logo.png",
  "/wp-content/uploads/2023/10/crtic-logo.png",
  "/wp-content/uploads/2023/10/sup.png",
  "/wp-content/uploads/2023/10/devday.png",
  "/wp-content/uploads/2023/10/adwords-cert.png",
  "/wp-content/uploads/2023/10/etapacero.png",
  "/wp-content/uploads/2023/09/achex.png",
  "/wp-content/uploads/2021/04/augexp.png",
  "/wp-content/uploads/2021/04/posterity.png",
  "/wp-content/uploads/2021/04/nvivo.png",
  "/wp-content/uploads/2023/09/multiversica.png",
  "/wp-content/uploads/2021/04/achap-premio.jpg",
  "/wp-content/uploads/2021/04/promax.jpg",
  "/wp-content/uploads/2021/04/ortobackground.jpg",
  "/wp-content/uploads/2021/04/OrtoKore-logo.png",
  "/wp-content/uploads/2024/07/2024-07-10-19.08.18.jpg",
  "/wp-content/uploads/2021/04/puerto-zero-bg.jpg",
  "/wp-content/uploads/2024/12/oscars-tech-dump-yearinreview.jpg",
  "/wp-content/uploads/2023/09/1666996587698.png",
  "/wp-content/uploads/2024/02/subjetividad-metaverso-portada.png",
  "/wp-content/uploads/2024/09/1720141936972.png",
];

const [postsRaw, pagesRaw, catsRaw, mediaRaw] = await Promise.all([
  fetchAll("posts"),
  fetchAll("pages"),
  fetchAll("categories"),
  fetchAll("media"),
]);

const mediaById = Object.fromEntries(
  mediaRaw.map((m) => [
    m.id,
    {
      id: m.id,
      source: m.source_url,
      alt: m.alt_text || "",
      width: m.media_details?.width,
      height: m.media_details?.height,
    },
  ]),
);

const posts = postsRaw.map((p) => {
  const slim = slimPost(p);
  const media = mediaById[p.featured_media];
  if (media?.source) slim.featuredImage = localizeWpUrl(media.source);
  return slim;
});

const pages = pagesRaw.map(slimPage);
const categories = catsRaw.map((c) => ({
  id: c.id,
  slug: c.slug,
  name: c.name,
  count: c.count,
  linkPath: new URL(c.link).pathname.replace(/\/$/, "") || "/",
}));

fs.writeFileSync(path.join(contentDir, "posts.json"), JSON.stringify(posts, null, 2));
fs.writeFileSync(path.join(contentDir, "pages.json"), JSON.stringify(pages, null, 2));
fs.writeFileSync(
  path.join(contentDir, "categories.json"),
  JSON.stringify(categories, null, 2),
);

const urls = new Set(extraImages.map((p) => BASE + p));
for (const m of mediaRaw) if (m.source_url) urls.add(m.source_url);

const htmlBlob = posts.map((p) => p.content).join("\n") + pages.map((p) => p.content).join("\n");
for (const match of htmlBlob.matchAll(/\/images\/[^"'()\s]+/g)) {
  urls.add(BASE + "/wp-content/uploads/" + match[0].replace("/images/", ""));
}

console.log("Downloading", urls.size, "images…");
let ok = 0;
for (const url of urls) {
  try {
    const u = new URL(url);
    if (!u.pathname.includes("/wp-content/uploads/")) continue;
    const dest = path.join(imgDir, u.pathname.replace("/wp-content/uploads/", ""));
    const saved = await download(url, dest);
    if (saved) ok += 1;
  } catch {
    /* ignore invalid */
  }
}

console.log("Saved", ok, "images,", posts.length, "posts,", pages.length, "pages");
