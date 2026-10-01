import fs from "node:fs";
import path from "node:path";

export type Locale = "en" | "es";

export type Post = {
  id: number;
  slug: string;
  date: string;
  linkPath: string;
  title: string;
  excerpt: string;
  content: string;
  featuredMedia: number;
  categories: number[];
  featuredImage: string | null;
};

export type WpPage = {
  id: number;
  slug: string;
  linkPath: string;
  title: string;
  content: string;
  featuredMedia: number;
};

export type Category = {
  id: number;
  slug: string;
  name: string;
  count: number;
  linkPath: string;
};

function readJson<T>(file: string): T {
  const full = path.join(process.cwd(), "content", file);
  return JSON.parse(fs.readFileSync(full, "utf8")) as T;
}

export function getPosts(): Post[] {
  return readJson<Post[]>("posts.json");
}

export function getPages(): WpPage[] {
  return readJson<WpPage[]>("pages.json");
}

export function getCategories(): Category[] {
  return readJson<Category[]>("categories.json");
}

export function normalizePath(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function getPostByPath(pathname: string) {
  const target = normalizePath(pathname);
  return getPosts().find((p) => p.linkPath === target);
}

export function getPageByPath(pathname: string) {
  const target = normalizePath(pathname);
  return getPages().find((p) => p.linkPath === target);
}

export function getCategoryByPath(pathname: string) {
  const target = normalizePath(pathname);
  return getCategories().find((c) => c.linkPath === target);
}

export function getPostsByCategory(categoryId: number) {
  return getPosts()
    .filter((p) => p.categories.includes(categoryId))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function decodeEntities(value: string) {
  return value
    .replaceAll("&#038;", "&")
    .replaceAll("&amp;", "&")
    .replaceAll("&#8211;", "–")
    .replaceAll("&#8217;", "’")
    .replaceAll("&#039;", "'")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&#8220;", "“")
    .replaceAll("&#8221;", "”");
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}
