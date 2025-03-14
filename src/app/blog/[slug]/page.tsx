import BackButton from "@/components/BackButton";
import Comments from "@/components/Comments";

const blogPosts = {
  "nextjs-guide": {
    title: "Next.js Guide",
    content: `
      Next.js is a React framework that enables server-side rendering...
      It helps improve performance and SEO by rendering pages on the server.
      In this guide, we'll explore the basics of Next.js and why it's popular.`,
    image: "/images/next-js.png",
  },
  "react-performance": {
    title: "Optimizing React Performance",
    content: `
      React performance optimization is crucial for fast applications...
      Techniques like lazy loading, memoization, and reducing re-renders help a lot.`,
    image: "/images/react-logo.png",
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return <p className="p-6 text-red-500">Post not found!</p>;
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      <BackButton />

      <h1 className="text-4xl font-bold text-gray-900 mt-4">{post.title}</h1>
      
      <img src={post.image} alt={post.title} className="w-full h-64 object-cover mt-6 rounded-lg shadow-md" />

      <p className="mt-6 text-gray-700 whitespace-pre-line">{post.content}</p>

      <Comments />
    </article>
  );
}
