"use client"; // This uses a hook, so it must be a Client Component

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/blog")}
      className="text-blue-500 hover:underline flex items-center gap-2"
    >
      ← Back to Blog
    </button>
  );
}
