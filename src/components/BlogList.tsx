import Image from "next/image";
import Link from "next/link";
import { decodeEntities, type Category, type Post } from "@/lib/content";

export default function BlogList({
  category,
  posts,
}: {
  category: Category;
  posts: Post[];
}) {
  return (
    <div className="bg-paper">
      <div className="bg-[#eee] py-10">
        <h1 className="site-container text-[36px] font-bold text-ink">{category.name}</h1>
      </div>
      <div className="site-container py-14 space-y-12">
        {posts.map((post) => (
          <article key={post.id} className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
            {post.featuredImage ? (
              <Link href={`${post.linkPath}/`}>
                <Image
                  src={post.featuredImage}
                  alt={decodeEntities(post.title)}
                  width={560}
                  height={320}
                  className="w-full h-[180px] object-cover"
                />
              </Link>
            ) : (
              <div />
            )}
            <div>
              <h2 className="text-[22px] font-bold text-ink">
                <Link href={`${post.linkPath}/`} className="hover:text-coral">
                  {decodeEntities(post.title)}
                </Link>
              </h2>
              <p className="mt-3">{post.excerpt}</p>
              <Link href={`${post.linkPath}/`} className="inline-block mt-3 text-coral font-semibold">
                Leer más
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
