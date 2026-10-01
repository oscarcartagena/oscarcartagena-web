import { decodeEntities, type Post } from "@/lib/content";

export default function PostPage({ post }: { post: Post }) {
  return (
    <article className="bg-paper">
      <div className="bg-[#eee] py-10">
        <h1 className="site-container text-[32px] md:text-[36px] font-bold text-ink leading-tight">
          {decodeEntities(post.title)}
        </h1>
      </div>
      <div className="site-container py-12 max-w-[860px]">
        <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
}
