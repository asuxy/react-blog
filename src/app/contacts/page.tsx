export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700">Have a question? Reach out to us!</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Email</h2>
        <p className="text-gray-700">contact@myblog.com</p>

        <h2 className="text-xl font-semibold mt-4">Follow Us</h2>
        <p className="text-gray-700">
          <a href="https://twitter.com/yourusername" className="text-blue-500 hover:underline">Twitter</a> |  
          <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:underline"> LinkedIn</a>
        </p>
      </div>
    </div>
  );
}
