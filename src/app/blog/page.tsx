import BlogList from "@/components/BlogList";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function BlogPage() {
  const blogPosts = await prisma.post.findMany({
    where: { published: true }, // Only fetch published posts
    select: {
      id: true,
      slug: true,
      title: true,
      content: true,
      published: true,
    },
    orderBy: { createdAt: "desc" }, // Show latest posts first
    take: 3, // Show only 3 latest posts
  });

  // Format data for the BlogList component
  const formattedPosts = blogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.content?.substring(0, 100) + "...", // Show first 100 chars
    image: "/images/default-blog.jpg", // Placeholder image (replace later)
  }));

  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest Blog Posts</h1>
      <BlogList posts={formattedPosts} />
    </section>
  );
}
