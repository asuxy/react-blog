import BlogList from "@/components/BlogList";

const blogPosts = [
  {
    slug: "nextjs-guide",
    title: "Next.js Guide",
    description: "A complete guide to learning Next.js from scratch...",
    image: "/images/next-js.png",
  },
  {
    slug: "react-performance",
    title: "Optimizing React Performance",
    description: "Here are some techniques to make your React app faster...",
    image: "/images/react-logo.png",
  },
  {
    slug: "tailwind-css",
    title: "Why Tailwind CSS is Amazing",
    description: "Let's explore why Tailwind CSS is taking over frontend development...",
    image: "/images/tailwind-css.png",
  },
];

export default function BlogPage() {
  return (
    <section className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest Blog Posts</h1>
      <BlogList posts={blogPosts} />
    </section>
  );
}
