import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Left Section - Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-gray-400">Email: contact@myblog.com</p>
        </div>

        {/* Middle Section - Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/yourusername" target="_blank">
            <FaGithub className="text-white text-2xl hover:text-gray-400 transition" />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank">
            <FaTwitter className="text-white text-2xl hover:text-gray-400 transition" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank">
            <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition" />
          </Link>
        </div>

        {/* Right Section - Copyright */}
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
