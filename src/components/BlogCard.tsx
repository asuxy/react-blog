import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }: { post: { slug: string; title: string; description: string; image: string } }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="relative w-full h-48">
        <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.description.substring(0, 100)}...</p>
        <p className="text-blue-500 mt-2 font-medium">Read more →</p>
      </div>
    </Link>
  );
}
