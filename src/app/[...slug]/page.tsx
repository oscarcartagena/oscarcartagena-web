import BlogList from "@/components/BlogList";
import PostPage from "@/components/PostPage";
import SiteShell from "@/components/SiteShell";
import {
  decodeEntities,
  getCategories,
  getCategoryByPath,
  getPageByPath,
  getPages,
  getPostByPath,
  getPosts,
  getPostsByCategory,
  localeFromPath,
  normalizePath,
} from "@/lib/content";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function pathFromSlug(slug: string[]) {
  return normalizePath(`/${slug.join("/")}`);
}

export function generateStaticParams() {
  const reserved = new Set([
    "/",
    "/conferences",
    "/contact-me",
    "/es/home",
    "/es/conferencias",
    "/es/contacto",
  ]);

  const paths = [
    ...getPosts().map((p) => p.linkPath),
    ...getPages().map((p) => p.linkPath),
    ...getCategories().map((c) => c.linkPath),
    "/es/blog",
  ];

  return [...new Set(paths)]
    .map(normalizePath)
    .filter((p) => p !== "/" && !reserved.has(p))
    .map((p) => ({ slug: p.replace(/^\//, "").split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pathname = pathFromSlug(slug);
  const post = getPostByPath(pathname);
  if (post) return { title: decodeEntities(post.title) };
  const page = getPageByPath(pathname);
  if (page) return { title: decodeEntities(page.title) };
  const category = getCategoryByPath(pathname);
  if (category) return { title: category.name };
  return { title: "Oscar Cartagena" };
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pathname = pathFromSlug(slug);
  const locale = localeFromPath(pathname);

  const post = getPostByPath(pathname);
  if (post) {
    return (
      <SiteShell locale={locale}>
        <PostPage post={post} />
      </SiteShell>
    );
  }

  const category =
    getCategoryByPath(pathname) ||
    (pathname === "/es/blog" ? getCategories().find((c) => c.slug === "blog-es") : undefined);
  if (category) {
    const posts = getPostsByCategory(category.id);
    return (
      <SiteShell locale={locale}>
        <BlogList category={category} posts={posts} />
      </SiteShell>
    );
  }

  const page = getPageByPath(pathname);
  if (page) {
    return (
      <SiteShell locale={locale}>
        <article className="bg-paper">
          <div className="bg-[#eee] py-10">
            <h1 className="site-container text-[36px] font-bold text-ink">
              {decodeEntities(page.title)}
            </h1>
          </div>
          <div className="site-container py-12 wp-content">
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
          </div>
        </article>
      </SiteShell>
    );
  }

  notFound();
}
