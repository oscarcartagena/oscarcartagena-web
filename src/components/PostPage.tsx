import { decodeEntities, getCategories, localeFromPath, type Post } from "@/lib/content";
import Link from "next/link";

export default function PostPage({ post }: { post: Post }) {
  const locale = localeFromPath(post.linkPath);
  const category = getCategories().find((c) => post.categories.includes(c.id));
  const backHref = category
    ? `${category.linkPath}/`
    : locale === "es"
      ? "/es/category/blog-es/"
      : "/category/blog-en/";
  const backLabel = locale === "es" ? "← Volver" : "← Back";

  return (
    <article className="bg-paper">
      <div className="bg-[#eee] py-10">
        <div className="site-container">
          <Link href={backHref} className="inline-flex items-center text-[14px] font-semibold text-ink hover:text-coral">
            {backLabel}
          </Link>
          <h1 className="mt-4 text-[32px] md:text-[36px] font-bold text-ink leading-tight">
            {decodeEntities(post.title)}
          </h1>
        </div>
      </div>
      <div className="site-container py-12 max-w-[860px]">
        <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link
          href={backHref}
          className="btn-coral inline-flex mt-12 px-5 py-2.5 text-[14px] font-semibold"
        >
          {backLabel}
        </Link>
      </div>
    </article>
  );
}
