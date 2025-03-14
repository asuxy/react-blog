import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: { slug: string; title: string; description: string; image: string }[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
